import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
}

export default App;
