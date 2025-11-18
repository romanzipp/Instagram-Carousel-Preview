export interface ProcessedImage {
  slides: string[];
  slideCount: number;
}

export async function splitImageIntoSlides(
  file: File,
  slideCount: number
): Promise<ProcessedImage> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }

      const slideHeight = img.height / slideCount;
      const slideWidth = img.width;

      canvas.width = slideWidth;
      canvas.height = slideHeight;

      const slides: string[] = [];

      for (let i = 0; i < slideCount; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
          img,
          0,
          i * slideHeight,
          slideWidth,
          slideHeight,
          0,
          0,
          slideWidth,
          slideHeight
        );

        slides.push(canvas.toDataURL('image/jpeg', 0.9));
      }

      resolve({
        slides,
        slideCount,
      });
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(file);
  });
}
