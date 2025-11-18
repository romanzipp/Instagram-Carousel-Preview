import { v4 as uuidv4 } from 'uuid';

export function generateUniqueId(): string {
  return uuidv4();
}

export function savePreviewData(id: string, slides: string[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`preview_${id}`, JSON.stringify(slides));
  }
}

export function getPreviewData(id: string): string[] | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(`preview_${id}`);
    return data ? JSON.parse(data) : null;
  }
  return null;
}
