export interface ProcessedImage {
  imageUrl: string;
  slideCount: number;
}

export async function splitImageIntoSlides(
  file: File,
  slideCount: number
): Promise<ProcessedImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      resolve({
        imageUrl,
        slideCount,
      });
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(file);
  });
}
