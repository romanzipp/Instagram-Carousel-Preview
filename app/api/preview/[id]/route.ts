import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const metadataPath = join(process.cwd(), 'public', 'uploads', `${id}.json`);

    const data = await readFile(metadataPath, 'utf-8');
    const metadata = JSON.parse(data);

    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Preview fetch error:', error);
    return NextResponse.json({ error: 'Preview not found' }, { status: 404 });
  }
}
