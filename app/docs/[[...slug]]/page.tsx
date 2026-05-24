export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        Doc Page: {slug[0]} - {slug[1]}
      </div>
    );
  }
  if (slug?.length === 1) {
    return <div>Doc Page: {slug[0]} </div>;
  }
  return <div>Doc Page: No slug provided</div>;
}
