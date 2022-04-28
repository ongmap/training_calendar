import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import WeekDay from './components/WeekDay';
import './App.css';
import { WEEKDAYS, WORKOUTS } from './Data';

const App = () => {
  const [listWorkouts, setListWorkouts] = useState(WORKOUTS);
  const updateListWorkouts = (workout, dayId) => {
    console.log('workout, dayId ', workout, dayId);
    const workoutUpdate = {
      ...workout,
      dayId: dayId
    }
    let listWorkoutsUpdate = listWorkouts;
    const indexWorkoutUpdate = listWorkoutsUpdate.findIndex(item => item.id = workoutUpdate.id);
    listWorkoutsUpdate[indexWorkoutUpdate].dayId = dayId;
    console.log('listWorkoutsUpdate ', listWorkoutsUpdate);
    setListWorkouts(listWorkoutsUpdate);
  }


  const listDaysRender = WEEKDAYS.map((item) => <WeekDay key={item.id} weekDay={item} workoutsInThisDay={listWorkouts.filter(workout => workout.dayId === item.id)} updateListWorkouts={updateListWorkouts} />);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="week-days-wrapper">{listDaysRender}</div>
      </div>
    </DndProvider>
  );
}


export default App;
