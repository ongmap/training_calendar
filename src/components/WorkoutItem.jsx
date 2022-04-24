import ExercisesList from './ExercisesList';
import { useDrag } from 'react-dnd';

const WorkoutItem = (props) => {

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'workout',
    item: { id: props.workout.id}
  }))

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected}>
      <div className="workout-wrapper">
        <div className="workout-header">{props.workout.name}</div>
        <div className="workout-body">
          <ExercisesList exercises={props.workout.exercises} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
