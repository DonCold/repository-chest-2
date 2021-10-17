import Devit from "components/Devit";

const DevitPage = (props) => {
  if (props.type) return <h1>Error</h1>;

  return (
    <>
      <Devit {...props} />
    </>
  );
};

DevitPage.getInitialProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`http://localhost:3000/api/devits/${id}`);
  if (!res.ok) return { type: "error" };
  return await res.json();
};

export default DevitPage;
