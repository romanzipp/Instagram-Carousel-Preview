import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const slideCount = parseInt(formData.get('slideCount') as string);

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const id = uuidv4();
    const filename = `${id}.jpg`;
    const filepath = join(process.cwd(), 'public', 'uploads', filename);

    await writeFile(filepath, buffer);

    // Save metadata
    const metadata = {
      imageUrl: `/uploads/${filename}`,
      slideCount,
    };
    const metadataPath = join(process.cwd(), 'public', 'uploads', `${id}.json`);
    await writeFile(metadataPath, JSON.stringify(metadata));

    return NextResponse.json({
      id,
      imageUrl: `/uploads/${filename}`,
      slideCount,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
