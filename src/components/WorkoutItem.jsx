import ExercisesList from './ExercisesList';

const WorkoutItem = (props) => (
  <div className="workout-wrapper">
    <div className="workout-header">{props.workout.name}</div>
    <div className="workout-body">
      <ExercisesList exercises={props.workout.exercises} />
    </div>
  </div>
);

export default WorkoutItem;
