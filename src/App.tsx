import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

const App = () => {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>

      <ListGroup
        heading="Cities"
        items={cities}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
};

export default App;
