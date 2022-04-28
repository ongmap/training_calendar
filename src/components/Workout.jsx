import ExerciseItem from './Exercise';
import { useDrag } from 'react-dnd';

const WorkoutItem = (props) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'workout',
    item: props.workout,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        props.updateListWorkouts(item, dropResult.dayId);
      }
    },
  }));

  const listExercises = props.workout.exercises && props.workout.exercises.map((item) => <ExerciseItem key={item.id} exercise={item} />);

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected}>
      <div className="workout-wrapper">
        <div className="workout-header">{props.workout.name}</div>
        <div className="workout-body">
          {listExercises}
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
