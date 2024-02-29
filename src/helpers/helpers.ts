export function cutText(text: string): string {
  if (text.length > 50) {
    return `${text.slice(0, 49)}...`;
  }
  return text;
}
