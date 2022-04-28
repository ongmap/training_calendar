export const WEEKDAYS = [
  {
    id: 0,
    number: 5,
    title: 'Mon'
  },
  {
    id: 1,
    number: 6,
    title: 'Tue',
  },
  {
    id: 2,
    number: 7,
    title: 'Wed'
  },
  {
    id: 3,
    number: 8,
    title: 'Thus'
  },
  {
    id: 4,
    number: 9,
    title: 'Fri',
    isToday: true
  },
  {
    id: 5,
    number: 10,
    title: 'Sat'
  },
  {
    id: 6,
    number: 11,
    title: 'Sun'
  }
];

export const WORKOUTS = [
  {
    id: 1,
    name: 'Workout 1',
    dayId: 1,
    exercises: [
      {
        id: 1,
        name: 'Exercise A',
        info: '50 lb x 5, 60 lb x 5, 70 l...',
        intensity: '3x'
      },
      {
        id: 2,
        name: 'Exercise B',
        info: '50 lb x 5',
        intensity: '1x'
      }
    ]
  },
  {
    id: 2,
    name: 'Workout 2',
    dayId: 2,
    exercises: [
      {
        id: 1,
        name: 'Exercise C',
        info: '50 lb',
        intensity: '1x'
      },
      {
        id: 2,
        name: 'Exercise D',
        info: '50 lb x 5, 60 lb x 5',
        intensity: '2x'
      }
    ]
  },
  {
    id: 3,
    name: 'Workout 3',
    dayId: 2,
    exercises: [
      {
        id: 1,
        name: 'Exercise E',
        info: '30 lb',
        intensity: '3x'
      },
      {
        id: 2,
        name: 'Exercise F',
        info: '30 lb x 5, 60 lb x 5',
        intensity: '3x'
      }
    ]
  }
]
