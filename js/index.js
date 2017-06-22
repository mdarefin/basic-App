var data = {
    labels: ["9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40, -30]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90, -82]
        }
    ]
};

var options = {
    scaleBeginAtZero: false,
    responsive: true,
    scaleStartValue : -50 
};

var ctx = document.getElementById("myChart").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data, options);