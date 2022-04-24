import ExerciseItem from './ExerciseItem';

const ExercisesList = ({ exercises }) => {
  const listExercises = exercises.map((item) => <ExerciseItem key={item.id} exercise={item} />);

  return <div>{listExercises}</div>;
};

export default ExercisesList;
