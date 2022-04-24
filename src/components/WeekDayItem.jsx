import WorkoutsList from './WorkoutsList';

const WeekDayItem = ({ weekDay }) => (
  <div className="day-wrapper">
    <div className="day-header">{weekDay.title}</div>
    <div className="day-body">
      <p className={weekDay.isToday ? 'day-number day-number-active' : 'day-number'}>
        {weekDay.number.toString().padStart(2, '0')}
      </p>
      <WorkoutsList workouts={weekDay.workouts} />
    </div>
  </div>
);

export default WeekDayItem;
