import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input/input";
import Typography from "./components/Typography/Typography";
import Heading from "./components/Heading/Heading";
import Tooltip from "./components/Tooltip/Tooltip";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (newValue) => {
    setValue(newValue);
  };

  const handleClick = (message) => {
    alert(message);
  };

  return (
    <>
      <div>
        <Button
          type="button"
          size="lg"
          variant="primary"
          onClick={() => handleClick("Click")}
        >
          Confirm
        </Button>
        <Button
          type="button"
          size="md"
          variant="primary"
          onClick={() => handleClick("Click")}
        >
          Confirm
        </Button>
        <Button
          type="button"
          size="sm"
          variant="primary"
          onClick={() => handleClick("Click")}
        >
          Confirm
        </Button>
        <br />
        <Button
          type="button"
          size="lg"
          variant="bordered"
          onClick={() => handleClick("Click")}
        >
          Cancel
        </Button>
        <Button
          type="button"
          size="md"
          variant="bordered"
          onClick={() => handleClick("Click")}
        >
          Cancel
        </Button>
        <Button type="button" size="sm" variant="bordered" disabled>
          Cancel
        </Button>
      </div>

      <div className="App">
        <Input
          label="Name"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter your name"
          danger={false}
        />

        <Input
          label="Name"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter your name"
          danger={false}
        />

        <Input
          label="Name"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter your name"
          danger={true}
        />
      </div>
      <div style={{ padding: "20px" }}>
        <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>

        <Typography textSize="md">
          MD. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>

        <Typography textSize="lg">
          LG. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
      </div>

      <div style={{ padding: "20px", maxWidth: "600px" }}>
        <Heading level={1}>H1. Heading</Heading>
        <Heading level={2}>H2. Heading</Heading>
        <Heading level={3}>H3. Heading</Heading>
        <Heading level={4}>H4. Heading</Heading>
        <Heading level={5}>H5. Heading</Heading>
        <Heading level={6}>H6. Heading</Heading>
      </div>

      <div className="tooltip-container">
        <Tooltip text="I am a tooltip" position="top">
          Tooltip Top
        </Tooltip>

        <Tooltip text="I am a tooltip" position="left">
          Tooltip Left
        </Tooltip>

        <Tooltip text="I am a tooltip" position="right">
          Tooltip Right
        </Tooltip>

        <Tooltip text="I am a tooltip" position="bottom">
          Tooltip Bottom
        </Tooltip>
      </div>

      <div style={{ padding: "20px", maxWidth: "600px" }}>
        <Accordion title="Accordion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>

        <Accordion title="Accordion Expanded" defaultOpen>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
      </div>
    </>
  );
}

export default App;
