import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      <Button onClick={() => console.log("Button clicked")}>My button</Button>
      <br />
      <br />
      <ListGroup
        heading="Cities"
        items={cities}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
};

export default App;
