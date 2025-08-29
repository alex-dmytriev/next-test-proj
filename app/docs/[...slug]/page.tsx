type Props = {
  params: Promise<{ slug: string[] }>;
};

const DocsPage = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Docs Page</h1>
      <p>Current path: {slug?.join(" / ") || "home"}</p>
    </div>
  );
};

export default DocsPage;
