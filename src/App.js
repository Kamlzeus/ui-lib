import React, { useState } from 'react';
import Button from "./components/Button";
import Input from './components/Input/input';
import Typography from './components/Typography/Typography';
import Heading from './components/Heading/Heading';
import Tooltip from './components/Tooltip/Tooltip';
function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Button size="lg">Confirm</Button>
        <Button size="md">Confirm</Button>
        <Button size="sm">Confirm</Button>
        <br />
        <Button size="lg" variant="bordered">
          Cancel
        </Button>
        <Button size="md" variant="bordered">
          Cancel
        </Button>
        <Button size="sm" variant="bordered">
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
      <div>
      <Typography textSize="sm">
        SM. Our mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>

      <Typography textSize="md" className="typography-custom">
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
      
      <div>
      <Heading level={1}>H1. Heading</Heading>
      <Heading level={2}>H2. Heading</Heading>
      <Heading level={3}>H3. Heading</Heading>
      <Heading level={4}>H4. Heading</Heading>
      <Heading level={5}>H5. Heading</Heading>
      <Heading level={6}>H6. Heading</Heading>
      </div>
      
      <div className="tooltip-column">
        <Tooltip text="Tooltip text" position="top">
          <div>Top Tooltip</div>
        </Tooltip>

        <Tooltip text="Tooltip text" position="bottom">
          <div>Bottom Tooltip</div>
        </Tooltip>

        <Tooltip text="Tooltip text" position="left">
          <div>Left Tooltip</div>
        </Tooltip>

        <Tooltip text="Tooltip text" position="right">
          <div>Right Tooltip</div>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
