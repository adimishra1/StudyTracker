document.getElementById('logout-button').addEventListener('click', function() {
    window.location.href = "index.html"; // Redirect to the login page
});

// Pie Chart
const ctxPie = document.getElementById('pie-chart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Completed', 'In Progress', 'Not Started'],
        datasets: [{
            label: 'Progress of Calculus',
            data: [50, 30, 20],
            backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Bar Chart
const ctxBar = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Domain', 'Range', 'Functions', 'Limits', 'Continuity'],
        datasets: [{
            label: 'Progress of Calculus',
            data: [60, 50, 70, 40, 80],
            backgroundColor: '#4CAF50',
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});
