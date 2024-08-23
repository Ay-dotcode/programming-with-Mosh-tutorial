import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onCLose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My button</Button>
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
