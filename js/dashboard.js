var ctx = document.getElementById('graph1').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {        
        labels: ['10/05', '17/06', '22/06'],
        datasets: [{
            label: 'Peso',
            data: [{
                x: new Date('2020-05-10'),
                y: 55
            }, {
                x: new Date('2020-06-17'),
                y: 54
            },
            {
                x: new Date('2020-06-22'),
                y: 53
            }],
            borderWidth: 1
        }]
    },
    options: {
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    displayFormats: {
                        day: 'dd/MM/YYYY'
                    }
                }]
            }
        }
    }
});


var ctx2 = document.getElementById('graph2').getContext('2d');

var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {        
        labels: ['10/05', '11/06', '12/06','13/06','14/06'],
        datasets: [{
            label: 'Calorias',
            data: [{
                x: new Date('2020-05-10'),
                y: 1200
            }, {
                x: new Date('2020-06-11'),
                y: 1250
            },
            {
                x: new Date('2020-06-12'),
                y: 1300
            },
            {
                x: new Date('2020-06-13'),
                y: 1210
            },            
            {
                x: new Date('2020-06-14'),
                y: 1215
            }
            ],
            borderWidth: 1
        }]
    },
    options: {
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    displayFormats: {
                        day: 'dd/MM/YYYY'
                    }
                }]
            }
        }
    }
});