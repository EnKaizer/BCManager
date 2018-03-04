const labels = [
  'Histórias',
  'Épicos',
  'Bugs',
  'Iniciativas',
  'Taferas',
  'Melhorias',
  'Sub Tarefas',
];
const month = [77, 14, 13, 7, 4, 2, 4];
const week = [21, 4, 13, 2, 2, 0, 0];
const colors = [
  '#C5EBC3',
  '#FFCE56',
  '#E83F6F',
  '#348A9C',
  '#2274A5',
  '#32936F',
  '#875C74',
];

export default {
  0: {
    labels,
    datasets: [
      {
        data: month,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  },
  1: {
    labels,
    datasets: [
      {
        data: week,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  },
};
