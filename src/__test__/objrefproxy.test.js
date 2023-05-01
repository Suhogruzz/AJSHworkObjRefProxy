import orderByProps from '../objrefproxy';

test.each([
  {
    obj: {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    },
    expected: [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  },
])('order with given start props', ({ obj, expected }) => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual(expected);
});

test.each([
  {
    obj: {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    },
    expected: [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  },
])('order w/o given start props', ({ obj, expected }) => {
  expect(orderByProps(obj, [])).toEqual(expected);
});
