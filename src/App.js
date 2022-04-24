import './App.css';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import WeekDaysList from './components/WeekDaysList';

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
            info: '50 lb x 5, 60 lb x 5, 70 l...'
          },
          {
            id: 2,
            name: 'Exercise B',
            info: '50 lb x 5'
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

function App() {
  console.log('weekDays ', weekDays);
  return (
    <div className="App">
      <WeekDaysList weekDays={weekDays} />
    </div>
  );
}

export default App;
