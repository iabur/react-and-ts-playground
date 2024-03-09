import Like from "./components/Like";

function App() {
  const handleLikeChange = (like: boolean) => {
    console.log(like);
  };

  return (
    <div>
      <Like like={false} onLikeChange={handleLikeChange} />
    </div>
  );
}

export default App;
