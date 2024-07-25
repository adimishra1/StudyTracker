// Load the taxonomy into the dashboard
document.addEventListener("DOMContentLoaded", function() {
    fetch("taxonomy.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("taxonomy").innerHTML = data;
        });

    // Sample chart data and configuration
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Domain', 'Range', 'Visualization', 'Polynomial Functions', 'Rational Functions'],
            datasets: [{
                label: 'Progress',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
});
