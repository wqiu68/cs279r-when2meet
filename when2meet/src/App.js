import './App.css';
import { Button, Card } from 'react-bootstrap';
import ScheduleSelector from 'react-schedule-selector/dist/lib/ScheduleSelector';
import React, { useState } from 'react';

function App() {
  // state for selector
  const [userSelection, setUserSelection] = useState();
  console.log(userSelection)

  const darkGreen = '#21a344';
  const lightGreen = '#afe3bd'

  return (
    <>
      <section class = "greeting">
          <h1 class = "title">
              When2Meet Implementation
          </h1>
      </section>

      {/* Selector uses the ScheduleSelector npm package */}
      <Card body>
        <Card.Title>Please select all of your availabilities</Card.Title>
        <Card.Text>
        <ScheduleSelector
          selection={userSelection}
          /* change the selection state */
          onChange={setUserSelection}
          startDate={new Date('October 1, 2022')}
          numDays = {5}
          minTime = {9}
          maxTime = {18}
          unselectedColor={'#F1F2EC'}
          hoveredColor={lightGreen}
          selectedColor={darkGreen}
        />
        </Card.Text>
        {/* Submit button */}
         <Button onClick={() => {
            /* Show alert and reset the page */
            alert('Submitted!');
            document.location.reload()
            }}>
              Submit
            </Button>
      </Card>
    </>
  );
}

export default App;
