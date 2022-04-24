import WorkoutsList from './WorkoutsList';

const WeekDayItem = (props) => (
  <div className="day-wrapper">
    <div className="day-header">{props.weekDay.title}</div>
    <div className="day-body">
      <p className="day-number">{props.weekDay.number}</p>
      <WorkoutsList workouts={props.weekDay.workouts} />
    </div>
  </div>
);

export default WeekDayItem;
