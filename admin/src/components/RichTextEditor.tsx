'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ImagePlus,
  Italic,
  Link,
  List,
  ListOrdered,
  Redo2,
  RemoveFormatting,
  Underline,
  Undo2,
  Video,
} from 'lucide-react';
import { uploadImage } from '@/lib/uploadImage';

function getUploadError(error: unknown) {
  const uploadError = error as { response?: { data?: { error?: string } } };
  return uploadError.response?.data?.error || 'Image upload failed.';
}

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
}

interface ToolbarButtonProps {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
}

function ToolbarButton({ label, children, onClick }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      className="rich-editor-button"
    >
      {children}
    </button>
  );
}

const looksLikeHtml = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

const plainTextToHtml = (value: string) =>
  value
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
    .join('');

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing...',
  minHeight = 280,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const savedRangeRef = useRef<Range | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    const nextHtml = value && !looksLikeHtml(value) ? plainTextToHtml(value) : value;
    if (editor.innerHTML !== nextHtml) {
      editor.innerHTML = nextHtml;
    }
  }, [value]);

  const emitChange = () => {
    onChange(editorRef.current?.innerHTML || '');
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    const editor = editorRef.current;
    if (!selection || !editor || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (editor.contains(range.commonAncestorContainer)) {
      savedRangeRef.current = range.cloneRange();
    }
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    if (!selection || !savedRangeRef.current) return;
    selection.removeAllRanges();
    selection.addRange(savedRangeRef.current);
  };

  const runCommand = (command: string, commandValue?: string) => {
    editorRef.current?.focus();
    restoreSelection();
    document.execCommand(command, false, commandValue);
    saveSelection();
    emitChange();
  };

  const applyWeight = (weight: '300' | '400') => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontWeight = weight;
    span.appendChild(range.extractContents());
    range.insertNode(span);
    selection.removeAllRanges();
    emitChange();
  };

  const addLink = () => {
    saveSelection();
    const url = window.prompt('Enter the link URL');
    if (!url) return;

    const normalizedUrl = /^https?:\/\//i.test(url) || /^mailto:/i.test(url)
      ? url
      : `https://${url}`;
    runCommand('createLink', normalizedUrl);
  };

  const insertHtml = (html: string) => {
    editorRef.current?.focus();
    restoreSelection();
    document.execCommand('insertHTML', false, html);
    saveSelection();
    emitChange();
  };

  const handleInlineImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    const altText = window.prompt('Write alt text for this image', file.name);
    if (!altText?.trim()) {
      window.alert('Alt text is required before inserting an image.');
      return;
    }
    setUploadingImage(true);
    try {
      const imageUrl = await uploadImage(file);
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = altText;
      image.loading = 'lazy';
      insertHtml(`<figure>${image.outerHTML}</figure><p><br></p>`);
    } catch (error: unknown) {
      window.alert(getUploadError(error));
    } finally {
      setUploadingImage(false);
    }
  };

  const addYouTubeVideo = () => {
    saveSelection();
    const url = window.prompt('Paste a YouTube video URL');
    if (!url) return;

    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    if (!match) {
      window.alert('Please enter a valid YouTube URL.');
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${match[1]}`;
    iframe.title = 'YouTube video player';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    insertHtml(`<div class="rich-video">${iframe.outerHTML}</div><p><br></p>`);
  };

  return (
    <div className="rich-editor">
      <div className="rich-editor-toolbar">
        <select
          aria-label="Text style"
          defaultValue="p"
          onMouseDown={(event) => event.stopPropagation()}
          onChange={(event) => runCommand('formatBlock', event.target.value)}
          className="rich-editor-select"
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
        </select>

        <select
          aria-label="Font family"
          defaultValue="Arial"
          onChange={(event) => runCommand('fontName', event.target.value)}
          className="rich-editor-select"
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier</option>
          <option value="Times New Roman">Times</option>
        </select>

        <div className="rich-editor-separator" />
        <ToolbarButton label="Bold" onClick={() => runCommand('bold')}><Bold size={16} /></ToolbarButton>
        <ToolbarButton label="Light weight" onClick={() => applyWeight('300')}><span className="text-xs font-light">Light</span></ToolbarButton>
        <ToolbarButton label="Normal weight" onClick={() => applyWeight('400')}><span className="text-xs">Normal</span></ToolbarButton>
        <ToolbarButton label="Italic" onClick={() => runCommand('italic')}><Italic size={16} /></ToolbarButton>
        <ToolbarButton label="Underline" onClick={() => runCommand('underline')}><Underline size={16} /></ToolbarButton>

        <div className="rich-editor-separator" />
        <ToolbarButton label="Bullet list" onClick={() => runCommand('insertUnorderedList')}><List size={17} /></ToolbarButton>
        <ToolbarButton label="Numbered list" onClick={() => runCommand('insertOrderedList')}><ListOrdered size={17} /></ToolbarButton>
        <ToolbarButton label="Align left" onClick={() => runCommand('justifyLeft')}><AlignLeft size={17} /></ToolbarButton>
        <ToolbarButton label="Align center" onClick={() => runCommand('justifyCenter')}><AlignCenter size={17} /></ToolbarButton>
        <ToolbarButton label="Align right" onClick={() => runCommand('justifyRight')}><AlignRight size={17} /></ToolbarButton>
        <ToolbarButton label="Add link" onClick={addLink}><Link size={16} /></ToolbarButton>
        <ToolbarButton
          label="Insert uploaded image"
          onClick={() => {
            saveSelection();
            imageInputRef.current?.click();
          }}
        >
          <ImagePlus size={17} className={uploadingImage ? 'animate-pulse' : ''} />
        </ToolbarButton>
        <ToolbarButton label="Insert YouTube video" onClick={addYouTubeVideo}><Video size={18} /></ToolbarButton>

        <div className="rich-editor-separator" />
        <ToolbarButton label="Undo" onClick={() => runCommand('undo')}><Undo2 size={16} /></ToolbarButton>
        <ToolbarButton label="Redo" onClick={() => runCommand('redo')}><Redo2 size={16} /></ToolbarButton>
        <ToolbarButton label="Clear formatting" onClick={() => runCommand('removeFormat')}><RemoveFormatting size={16} /></ToolbarButton>
      </div>

      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        onChange={handleInlineImage}
        className="hidden"
      />

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        data-placeholder={placeholder}
        onInput={emitChange}
        onBlur={emitChange}
        onKeyUp={saveSelection}
        onMouseUp={saveSelection}
        onPaste={(event) => {
          event.preventDefault();
          runCommand('insertText', event.clipboardData.getData('text/plain'));
        }}
        className="rich-editor-content"
        style={{ minHeight }}
      />
    </div>
  );
}
