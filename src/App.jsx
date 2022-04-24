import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import WeekDaysList from './components/WeekDaysList';
import './App.css';

export const weekDays = [
  {
    id: 0,
    number: 5,
    title: 'Mon'
  },
  {
    id: 1,
    number: 6,
    title: 'Tue',
    workouts: [
      {
        id: 1,
        name: 'Workout 1',
        exercises: [
          {
            id: 1,
            name: 'Exercise A',
            info: '50 lb x 5, 60 lb x 5, 70 l...',
            intensity: '3x'
          },
          {
            id: 2,
            name: 'Exercise B',
            info: '50 lb x 5',
            intensity: '1x'
          }
        ]
      },
      {
        id: 2,
        name: 'Workout 2',
        exercises: [
          {
            id: 1,
            name: 'Exercise C',
            info: '50 lb',
            intensity: '1x'
          },
          {
            id: 2,
            name: 'Exercise D',
            info: '50 lb x 5, 60 lb x 5',
            intensity: '2x'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    number: 7,
    title: 'Wed'
  },
  {
    id: 3,
    number: 8,
    title: 'Thus'
  },
  {
    id: 4,
    number: 9,
    title: 'Fri',
    isToday: true
  },
  {
    id: 5,
    number: 10,
    title: 'Sat'
  },
  {
    id: 6,
    number: 11,
    title: 'Sun'
  }
];

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weekDays: weekDays
    }
  }

  render() {
    const { weekDays } = this.state;

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <WeekDaysList weekDays={weekDays} />
        </div>
      </DndProvider>
    );
  }
}

export default App;
