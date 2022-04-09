

let givenVal = 7
let vals421, timeOutIds = []

let fillVals421 = val_ => {
  vals421 = []
  while (vals421[vals421.length - 1] !== 1) {
    if (!vals421[vals421.length - 1]) {
      vals421.push(givenVal)
    }
    let getNextNo = vals421[vals421.length - 1]
    getNextNo = getNextNo % 2 === 0 ? getNextNo / 2 : (getNextNo * 3) + 1;
    vals421.push(getNextNo)
  }
}
fillVals421();


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
      },
      plugins: {
        title: {
          display: true,
          text: `${givenVal} - ${vals421.length} numbers to get back to 1`
        },
        legend: {
          display: false
        }
      }
    }
  });
  return myChart
}

let chartInstance = createLineChart()

$("#mesmerizeM").on("click", e => {
  givenVal = parseInt($("#inputVal").val())

  if (typeof(givenVal) === "number" && givenVal > 0) {


  let oldVals = _.cloneDeep(vals421);
  fillVals421();

  let timeTaken = 5;
  if (vals421.length > 30) {
    timeTaken = parseInt(vals421.length/50)
  }
  chartInstance.options.plugins.title.text = `${givenVal} - ${vals421.length} numbers to get back to 1`
  
  timeOutIds.forEach(iD => clearTimeout(iD))
  timeOutIds = []

  vals421.forEach((val_, index) => {
    timeOutIds.push(
      setTimeout(
        () => {
          if (index < oldVals.length) chartInstance.data.datasets[0].data.shift();
          chartInstance.data.datasets[0].data.push(val_);
          chartInstance.update()
        }, index * timeTaken * 100
      )
    )
  }
  )
  } else {
    alert(`${givenVal} is not a positive number`)
  }
})

