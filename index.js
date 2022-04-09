

let givenVal = 7
let vals421 = []

while (vals421[vals421.length - 1] !== 1) {
  if (!vals421[vals421.length - 1]) {
    vals421.push(givenVal)
  }
  let getNextNo = vals421[vals421.length - 1]
  getNextNo = getNextNo % 2 === 0 ? getNextNo / 2 : (getNextNo * 3) + 1;
  vals421.push(getNextNo)
}


// specify the x and y axies
let createLineChart = () => {
  const ctx = document.getElementById('421Chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: vals421,
      datasets: [{
        label: '55',
        data: vals421,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return myChart
}

createLineChart()