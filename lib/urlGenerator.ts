import { v4 as uuidv4 } from 'uuid';

export interface PreviewData {
  imageUrl: string;
  slideCount: number;
}

export function generateUniqueId(): string {
  return uuidv4();
}

export function savePreviewData(id: string, data: PreviewData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`preview_${id}`, JSON.stringify(data));
  }
}

export function getPreviewData(id: string): PreviewData | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(`preview_${id}`);
    return data ? JSON.parse(data) : null;
  }
  return null;
}
