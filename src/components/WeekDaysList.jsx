import WeekDayItem from './WeekDayItem';

const WeekDaysList = ({ weekDays }) => {
  const listDays = weekDays.map((item) => <WeekDayItem key={item.id} weekDay={item} />);

  return <div className="week-days-wrapper">{listDays}</div>;
};

export default WeekDaysList;
