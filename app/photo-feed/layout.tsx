export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div>{props.modal}</div>
      <div>{props.children}</div>;
    </>
  );
}
