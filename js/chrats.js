/* ============================================= */
/*     Traffic                            */
/* ============================================= */

const trafficLabelData = {//weekly, monthly, daily, Hourly, monthly
    hourly: {
        label: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
        datasets: [3, 12, 40, 25, 10, 7, 35, 18, 30, 18, 10],
    },
    daily: {
        label: ['wed', 'thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed', 'wed', 'thu', 'fri', 'sat' ],
        datasets: [100, 200, 300, 400, 500, 80, 150, 50, 120, 200, 180,90]
    },
    weekly: {
        label: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [500, 2000, 800, 1500, 2300, 100, 1200, 600, 200, 400, 900]
    },
    monthly: {
        label: ['January', 'February', 'March', 'April',  'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [300, 1000, 800, 1500, 1400, 100, 600, 1100, 500, 200, 150]
    }
}

// myLineChart Data
const trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [500, 2000, 800, 1500, 2300, 100, 1200, 600, 200, 400, 900],
        backgroundColor: 'rgba(115, 119, 191, 0.3)',
        borderWidth: 1,
        borderColor: 'rgba(115, 119, 191, 1)',
        pointBorderWidth: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointRadius: 6,
        pointHoverRadius: 6,
        lineTension: 0,
        // spanGaps:false,
        
    }], 
}
// myLineChart Options
const trafficOptions = {
    aspectRatio: 2.5,
    
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    
}
// Display Traffic chart
const trafficElement = document.getElementById('trafficChart');
const myLineChart = new Chart(trafficElement, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

//Function to update traffic chart Data
function updateData(dataSets, labelSets){
    myLineChart.data.datasets[0].data = dataSets;
    myLineChart.data.labels = labelSets;
    myLineChart.update();
}
// add eventListener to traffic navigation 
const trafficNav = document.querySelector('.traffic-nav');
const trafficNavChild = trafficNav.children; 

trafficNav.addEventListener('click', e => {
    const navSelected = e.target;
    //add active class to currently displayed navigation
    if(navSelected.tagName === 'LI'){
        for (let index = 0; index < trafficNavChild.length; index++) {
            const element = trafficNavChild[index];
            element.classList.remove('active');
        }
        navSelected.classList += 'active' 
    }
    //update Traffic Chart if match to the currently active navigation
    if(navSelected.innerText === 'hourly'){
        updateData(trafficLabelData.hourly.datasets, trafficLabelData.hourly.label);
    }
    if(navSelected.innerText === 'daily'){
        updateData(trafficLabelData.daily.datasets, trafficLabelData.daily.label);
    }
    if(navSelected.innerText === 'weekly'){
        updateData(trafficLabelData.weekly.datasets, trafficLabelData.weekly.label);
    }
    if(navSelected.innerText === 'monthly'){
        updateData(trafficLabelData.monthly.datasets, trafficLabelData.monthly.label);
    }     
})


/* ============================================= */
/*     Daily Graphyc                             */
/* ============================================= */

const dailyData = {
    labels: ['S', 'M', 'T', 'W',  'F'],
    datasets: [{
        data: [50, 200, 100, 150, 230],
        backgroundColor: 'rgba(115, 119, 191, 1)',
        borderWidth: 1
    }]
};
const dailyOptions =  {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            gridLines: {
            display: true,
            color: "rgb(209, 209, 209)"
            },
            ticks: {
                max: 250,
                min: 0,
                
            }
        }],
       
    }
    
};
//display Daily Chart
var dailyElement = document.getElementById('dailyChart');
var dailyChart = new Chart(dailyElement, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


/* ============================================= */
/*      Mobile Users Graphyc                     */
/* ============================================= */

const mobileUserData = {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
        data: [50, 200, 100],
        backgroundColor: ['#7377bf', '#80ca8e', '#74b1bf'],
    }]
};
const mobileUserOptions =  {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontSize:18
        }
    },
};
var mobileUserElement = document.getElementById('mobileUserChart');
var mobileUserChart = new Chart(mobileUserElement, {
    type: 'doughnut',
    data: mobileUserData,
    options: mobileUserOptions
});
