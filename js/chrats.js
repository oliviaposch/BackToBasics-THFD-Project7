/* ============================================= */
/*     Traffic                            */
/* ============================================= */
const trafficLabelData = {//weekly, monthly, daily, Hourly, monthly
    hourly: {
        label: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
        data: [3, 12, 40, 25, 10],
    },
    daily: {
        label: ['wed', 'thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed', 'wed', 'thu', 'fri', 'sat' ],
        datasets: [100, 200, 300, 400, 500, 80, 150, 50, 120, 200, 180,90]
    },
    weekly: {
        label: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [500, 2000, 800, 1500, 2300, 100]
    },
    monthly: {
        label: ['January', 'February', 'March', 'April',  'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [300, 1000, 800, 1500, 1400, 100]
    }
}

// myLineChart Data
const trafficData = {
    labels: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    datasets: [{
        data: [3, 12, 40, 25, 10],
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
//output - Traffic chart
const trafficElement = document.getElementById('trafficChart');
const myLineChart = new Chart(trafficElement, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// add eventListener to traffic navigation 
function getNavTraffic(){
    const trafficNav = document.querySelector('.traffic-nav');
    const trafficNavChild = trafficNav.children;
    //console.log(trafficNav.children.length);
    
        const navChild = trafficNavChild[i];
        navChild.addEventListener('click', e => {
            let childNav = e.target.textContent;
            // compare trafficLabelData
            // if (childNav === )
            // console.log(childNav);
        })
        
    
}
//getNavTraffic();

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
        display: true,
        responsive: true,
        position: 'right'
    },
};
var mobileUserElement = document.getElementById('mobileUserChart');
var mobileUserChart = new Chart(mobileUserElement, {
    type: 'doughnut',
    data: mobileUserData,
    options: mobileUserOptions
});
