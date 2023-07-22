import { getAllCategoriesOfPost } from "./ApiRequest/PostApiRequest";

function App() {
  const handleClick = async () => {
    const a = await getAllCategoriesOfPost();
    console.log(a);
  };
  return (
    <>
      <button onClick={handleClick}>Get Categories</button>
    </>
  );
}

export default App;
