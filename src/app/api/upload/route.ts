
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { fileName, fileSize } = await req.json();

  if (!fileName || !fileSize) {
    return new NextResponse('Missing fileName or fileSize', { status: 400 });
  }

  const file = await prisma.file.create({
    data: {
      fileName,
      fileSize,
      userId: session.user.id,
    },
  });

  return NextResponse.json(file);
}
