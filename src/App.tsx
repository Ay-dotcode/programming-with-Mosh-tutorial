import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  return <ListGroup items={items} heading="Cities" />;
}

export default App;
