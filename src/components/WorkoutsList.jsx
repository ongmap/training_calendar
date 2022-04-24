import WorkoutItem from './WorkoutItem';

const WorkoutsList = ({ workouts }) => {
  const listWorkouts =
    workouts && workouts.map((item) => <WorkoutItem key={item.id} workout={item} />);

  return <div>{listWorkouts}</div>;
};

export default WorkoutsList;
