import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  new URL('../../assets/fonts/Humane-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const handler = async (req: NextRequest) => {
  const fontData = await font;
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'tefkah.com';

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: 'Humane',
            fontWeight: 900,
            background: '#ff002f',
            color: '#09001a',
          }}
          tw="flex text-[80vh] font-bold flex-col items-center justify-center w-full h-full"
        >
          {decodeURIComponent(title)?.toLocaleUpperCase()}
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Humane',
            data: fontData,
            // style: 'normal',
          },
        ],
        emoji: 'blobmoji',
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};
export default handler;
