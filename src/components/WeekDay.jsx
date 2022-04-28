import { useDrop } from 'react-dnd'
import WorkoutItem from './Workout';

const WeekDay = (props) => {
  const { weekDay, workoutsInThisDay, updateListWorkouts } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'workout',
    drop: () => ({ dayId: weekDay.id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver;

  const listWorkoutsRender = workoutsInThisDay.map((item) => <WorkoutItem key={item.id} workout={item} updateListWorkouts={updateListWorkouts} />);

  return (
    <div className={isActive ? "day-wrapper day-active" : "day-wrapper"}>
      <div className="day-header">{weekDay.title}</div>
      <div ref={drop} className="day-body">
        <p className={weekDay.isToday ? 'day-number day-number-active' : 'day-number'}>
          {weekDay.number.toString().padStart(2, '0')}
        </p>
        <div>{listWorkoutsRender}</div>
      </div>
    </div>
  )
};

export default WeekDay;
