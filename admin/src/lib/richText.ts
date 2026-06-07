export function richTextToPlainText(value = '') {
  if (typeof window !== 'undefined') {
    const element = document.createElement('div');
    element.innerHTML = value;
    return (element.textContent || '').replace(/\s+/g, ' ').trim();
  }

  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function hasRichTextContent(value = '') {
  return richTextToPlainText(value).length > 0;
}
