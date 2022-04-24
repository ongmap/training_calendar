import WorkoutItem from './WorkoutItem';
import { useDrop } from 'react-dnd';

const WorkoutsList = ({ workouts }) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: 'workout',
    drop: () => {
      // console.log('handle update list Workouts here');
    }
  }));

  const listWorkouts =
    workouts && workouts.map((item) => <WorkoutItem key={item.id} workout={item} />);

  return <div ref={drop}>{listWorkouts}</div>;
};

export default WorkoutsList;
