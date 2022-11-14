const Head = async ({
  params,
}: {
  params: {
    note: string | string[];
  };
}) => {
  const title = 'TEFKAH | Thomas F. K. Jorna';
  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${
          process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?title=${encodeURIComponent(TEFKAH)}`}
      />
    </>
  );
};
export default Head;
