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
  X,
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
  isActive?: boolean;
}

function ToolbarButton({ label, children, onClick, isActive }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      className={`rich-editor-button ${isActive ? 'rich-editor-button-active' : ''}`}
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

  // Synchronization states for toolbar options
  const [blockType, setBlockType] = useState('p');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isBulletList, setIsBulletList] = useState(false);
  const [isOrderedList, setIsOrderedList] = useState(false);

  // Link modal states
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [linkRel, setLinkRel] = useState<'dofollow' | 'nofollow'>('dofollow');

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

      try {
        // formatBlock
        let block = document.queryCommandValue('formatBlock') || 'p';
        if (block) {
          block = block.toLowerCase().replace(/<|>/g, '');
        }
        if (['p', 'h1', 'h2', 'h3', 'h4', 'h5'].includes(block)) {
          setBlockType(block);
        } else {
          setBlockType('p');
        }

        // fontName
        let font = document.queryCommandValue('fontName') || 'Arial';
        if (font) {
          font = font.replace(/['"]/g, '');
        }
        const supportedFonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman'];
        const matchedFont = supportedFonts.find(f => f.toLowerCase() === font.toLowerCase()) || 'Arial';
        setFontFamily(matchedFont);

        // Styling state
        setIsBold(document.queryCommandState('bold'));
        setIsItalic(document.queryCommandState('italic'));
        setIsUnderline(document.queryCommandState('underline'));
        setIsBulletList(document.queryCommandState('insertUnorderedList'));
        setIsOrderedList(document.queryCommandState('insertOrderedList'));
      } catch (e) {
        // Silently catch command status issues
      }
    }
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      const editor = editorRef.current;
      if (!selection || !editor || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      if (editor.contains(range.commonAncestorContainer)) {
        saveSelection();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

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

  const formatBlocks = (newTag: string) => {
    editorRef.current?.focus();
    restoreSelection();

    const selection = window.getSelection();
    const editor = editorRef.current;
    if (!selection || !editor || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) return;

    // Find all potential block elements inside the editor
    const allBlocks = Array.from(editor.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div, blockquote'));

    let selectedBlocks: HTMLElement[] = [];
    if (range.collapsed) {
      // If range is collapsed, find the single block containing the cursor
      let parent: Node | null = range.startContainer;
      while (parent && parent !== editor) {
        if (
          parent.nodeType === Node.ELEMENT_NODE &&
          ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DIV', 'BLOCKQUOTE'].includes((parent as Element).tagName)
        ) {
          selectedBlocks.push(parent as HTMLElement);
          break;
        }
        parent = parent.parentNode;
      }
      if (selectedBlocks.length === 0) {
        document.execCommand('formatBlock', false, newTag);
        saveSelection();
        emitChange();
        return;
      }
    } else {
      // Filter to only those intersecting the range
      selectedBlocks = allBlocks.filter((block) => range.intersectsNode(block)) as HTMLElement[];
      // Filter out blocks that contain other selected blocks (so we only target leaf blocks)
      selectedBlocks = selectedBlocks.filter(
        (block) => !selectedBlocks.some((otherBlock) => otherBlock !== block && block.contains(otherBlock))
      );
    }

    if (selectedBlocks.length === 0) {
      document.execCommand('formatBlock', false, newTag);
      saveSelection();
      emitChange();
      return;
    }

    let rangeStartContainer = range.startContainer;
    const rangeStartOffset = range.startOffset;
    let rangeEndContainer = range.endContainer;
    const rangeEndOffset = range.endOffset;

    const replacements = new Map<HTMLElement, HTMLElement>();

    selectedBlocks.forEach((block) => {
      if (block.tagName.toLowerCase() === newTag.toLowerCase()) {
        replacements.set(block, block);
        return;
      }

      const newBlock = document.createElement(newTag);
      // Copy attributes
      for (let i = 0; i < block.attributes.length; i++) {
        const attr = block.attributes[i];
        newBlock.setAttribute(attr.name, attr.value);
      }
      // Move children
      while (block.firstChild) {
        newBlock.appendChild(block.firstChild);
      }
      block.parentNode?.replaceChild(newBlock, block);
      replacements.set(block, newBlock);
    });

    // Map container references if they were replaced
    if (replacements.has(rangeStartContainer as HTMLElement)) {
      rangeStartContainer = replacements.get(rangeStartContainer as HTMLElement)!;
    }
    if (replacements.has(rangeEndContainer as HTMLElement)) {
      rangeEndContainer = replacements.get(rangeEndContainer as HTMLElement)!;
    }

    try {
      const newRange = document.createRange();
      newRange.setStart(rangeStartContainer, rangeStartOffset);
      newRange.setEnd(rangeEndContainer, rangeEndOffset);
      selection.removeAllRanges();
      selection.addRange(newRange);
      savedRangeRef.current = newRange.cloneRange();
    } catch (e) {
      console.error('Failed to restore range after block formatting:', e);
      editorRef.current?.focus();
    }

    setBlockType(newTag);
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

    let selectedText = '';
    let urlPrefill = '';
    let relPrefill: 'dofollow' | 'nofollow' = 'dofollow';

    const selection = window.getSelection();
    const editor = editorRef.current;
    if (selection && selection.rangeCount > 0 && editor) {
      const range = selection.getRangeAt(0);
      if (editor.contains(range.commonAncestorContainer)) {
        selectedText = selection.toString();

        let parent: HTMLElement | null = range.commonAncestorContainer as HTMLElement;
        if (parent.nodeType === Node.TEXT_NODE) {
          parent = parent.parentElement;
        }

        const anchor = parent?.closest('a');
        if (anchor) {
          urlPrefill = anchor.getAttribute('href') || '';
          const rel = anchor.getAttribute('rel');
          if (rel === 'nofollow') {
            relPrefill = 'nofollow';
          }
          if (!selectedText) {
            selectedText = anchor.textContent || '';
          }

          // Expand selection to include the whole anchor tag for editing
          const newRange = document.createRange();
          newRange.selectNode(anchor);
          selection.removeAllRanges();
          selection.addRange(newRange);
          savedRangeRef.current = newRange.cloneRange();
        }
      }
    }

    setLinkText(selectedText);
    setLinkUrl(urlPrefill);
    setLinkRel(relPrefill);
    setIsLinkModalOpen(true);
  };

  const handleInsertLink = () => {
    if (!linkUrl) {
      setIsLinkModalOpen(false);
      return;
    }

    const normalizedUrl = /^https?:\/\//i.test(linkUrl) || /^mailto:/i.test(linkUrl)
      ? linkUrl
      : `https://${linkUrl}`;

    const relAttr = linkRel === 'nofollow' ? 'nofollow' : 'dofollow';

    // Construct HTML for the anchor
    const linkHtml = `<a href="${normalizedUrl}" rel="${relAttr}" target="_blank">${linkText || normalizedUrl}</a>`;

    setIsLinkModalOpen(false);

    editorRef.current?.focus();
    restoreSelection();
    insertHtml(linkHtml);
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
          value={blockType}
          onMouseDown={(event) => event.stopPropagation()}
          onChange={(event) => {
            const val = event.target.value;
            formatBlocks(val);
          }}
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
          value={fontFamily}
          onMouseDown={(event) => event.stopPropagation()}
          onChange={(event) => {
            const val = event.target.value;
            setFontFamily(val);
            runCommand('fontName', val);
          }}
          className="rich-editor-select"
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier</option>
          <option value="Times New Roman">Times</option>
        </select>

        <div className="rich-editor-separator" />
        <ToolbarButton label="Bold" onClick={() => runCommand('bold')} isActive={isBold}><Bold size={16} /></ToolbarButton>
        <ToolbarButton label="Light weight" onClick={() => applyWeight('300')}><span className="text-xs font-light">Light</span></ToolbarButton>
        <ToolbarButton label="Normal weight" onClick={() => applyWeight('400')}><span className="text-xs">Normal</span></ToolbarButton>
        <ToolbarButton label="Italic" onClick={() => runCommand('italic')} isActive={isItalic}><Italic size={16} /></ToolbarButton>
        <ToolbarButton label="Underline" onClick={() => runCommand('underline')} isActive={isUnderline}><Underline size={16} /></ToolbarButton>

        <div className="rich-editor-separator" />
        <ToolbarButton label="Bullet list" onClick={() => runCommand('insertUnorderedList')} isActive={isBulletList}><List size={17} /></ToolbarButton>
        <ToolbarButton label="Numbered list" onClick={() => runCommand('insertOrderedList')} isActive={isOrderedList}><ListOrdered size={17} /></ToolbarButton>
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

      {/* Modern custom SEO Link Insertion Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="glass-panel w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-fade-in relative">
            <button
              type="button"
              onClick={() => setIsLinkModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-white">Insert/Edit Link</h3>
                <p className="text-xs text-zinc-400 mt-1">Add links with search engine relations (dofollow or nofollow).</p>
              </div>

              <div className="space-y-1">
                <label htmlFor="link-url-input" className="text-xs text-zinc-300 block font-medium">Link URL</label>
                <input
                  id="link-url-input"
                  type="text"
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg text-sm glass-input text-white font-sans outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  autoFocus
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="link-text-input" className="text-xs text-zinc-300 block font-medium">Link Text</label>
                <input
                  id="link-text-input"
                  type="text"
                  placeholder="Text to display"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg text-sm glass-input text-white font-sans outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs text-zinc-300 block font-medium">Search Engine Relation (SEO)</span>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-zinc-300 hover:text-white select-none">
                    <input
                      type="radio"
                      name="link-rel"
                      value="dofollow"
                      checked={linkRel === 'dofollow'}
                      onChange={() => setLinkRel('dofollow')}
                      className="accent-violet-500 w-4 h-4 cursor-pointer"
                    />
                    Do-follow
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-zinc-300 hover:text-white select-none">
                    <input
                      type="radio"
                      name="link-rel"
                      value="nofollow"
                      checked={linkRel === 'nofollow'}
                      onChange={() => setLinkRel('nofollow')}
                      className="accent-violet-500 w-4 h-4 cursor-pointer"
                    />
                    No-follow
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsLinkModalOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg hover:bg-white/5 transition text-zinc-400 hover:text-white font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleInsertLink}
                  className="px-5 py-2 text-sm rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition shadow-lg shadow-violet-500/20"
                >
                  Insert Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
