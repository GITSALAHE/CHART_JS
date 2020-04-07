var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janvier', 'fevrier', 'Mars', 'Avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'],
        datasets: [{
            label: 'Average high °C',
            data: [18.2, 19, 20.6, 21.3, 24.6, 24.6, 28.8, 29.2, 27.6, 25.2, 21.6, 18.8],
            backgroundColor: [
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
                '#FF5700',
            ],

            borderWidth: 1
        }, {
            label: 'Daily mean °C',
            data: [13, 13.8, 14.9, 16, 18.3, 20.3, 23.7, 24.1, 22.6, 20, 16.6, 13.7],
            backgroundColor: [
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
                '#FFBE7E',
            ],
            borderWidth: 1
        }, {
            label: 'Average low °C',
            data: [7.7, 8.5, 9.2, 10.8, 13.3, 16, 18.5, 18.9, 17.5, 14.8, 11.6, 8.5],
            backgroundColor: [
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
                '#88FF88',
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function beforePrintHandler() {
    for (var id in Chart.instances) {
        Chart.instances[id].resize();
    }
}