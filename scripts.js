const chartConfigs = [
  { id: 'chart1', label: 'A', data: [10, 20, 30] },
  { id: 'chart2', label: 'B', data: [15, 25, 35] },
  { id: 'chart3', label: 'C', data: [5, 10, 15] },
  { id: 'chart4', label: 'D', data: [12, 22, 32] },
  { id: 'chart5', label: 'E', data: [8, 18, 28] },
  { id: 'chart6', label: 'F', data: [14, 24, 34] },
  { id: 'chart7', label: 'G', data: [6, 16, 26] },
  { id: 'chart8', label: 'H', data: [11, 21, 31] },
  { id: 'chart9', label: 'I', data: [9, 19, 29] },
  { id: 'chart10', label: 'J', data: [13, 23, 33] },
  { id: 'chart11', label: 'K', data: [7, 17, 27] },
  { id: 'chart12', label: 'L', data: [10, 15, 20] },
  { id: 'chart13', label: 'M', data: [20, 25, 30] },
  { id: 'chart14', label: 'N', data: [30, 35, 40] },
  { id: 'chart15', label: 'O', data: [40, 45, 50] },
  { id: 'chart16', label: 'P', data: [50, 55, 60] },
];

chartConfigs.forEach(cfg => {
  new Chart(document.getElementById(cfg.id), {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3'],
      datasets: [{
        label: cfg.label,
        data: cfg.data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: `Biểu đồ ${cfg.label}` }
      }
    }
  });
});
