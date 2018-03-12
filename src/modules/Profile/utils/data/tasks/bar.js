const labels = [
  'Histórias',
  'Épicos',
  'Bugs',
  'Iniciativas',
  'Taferas',
  'Melhorias',
  'Sub Tarefas',
];
const month = [10, 14, 13, 7, 4, 2, 4];
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
  labels,
  datasets: [
    {
      data: month,
      backgroundColor: colors,
      hoverBackgroundColor: colors,
    },
  ],
};
