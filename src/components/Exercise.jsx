const ExerciseItem = ({ exercise }) => (
  <div className="exercise-wrapper">
    <div className="exercise-title">{exercise.name}</div>
    <div className="exercise-info">{exercise.info}</div>
  </div>
);

export default ExerciseItem;
