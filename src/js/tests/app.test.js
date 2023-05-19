import Sort from '../app.js';

test('Сортировка по количеству НР по убыванию', () => {
  const items1 = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const itemsresult = JSON.stringify([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);

  const result = JSON.stringify(Sort(items1));

  expect(result).toBe(itemsresult);
});
