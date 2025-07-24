// Data for the charts
const data = {
    AOI: {
        labels: ["6W3", "6W4", "7W1", "7W2"],
        values: [311, 153, 207, 210]
    },
    FlipChip: {
        labels: ["6W3", "6W4", "7W1", "7W2"],
        values: [41, 87, 232, 232]
    },
    IRCF: {
        labels: ["6W3", "6W4", "7W1", "7W2"],
        values: [67, 110, 127, 126]
    },
    Underfill: {
        labels: ["6W3", "6W4", "7W1", "7W2"],
        values: [53, 70, 186, 143]
    }
};

// Create charts
function createChart(canvasId, labels, dataValues, chartTitle) {
    const ctx = document.getElementById(canvasId).getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: chartTitle,
                    data: dataValues,
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: chartTitle
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: "line",
                            yMin: 120,
                            yMax: 120,
                            borderColor: "rgba(255, 99, 132, 0.8)",
                            borderWidth: 2,
                            label: {
                                enabled: true,
                                content: "120",
                                backgroundColor: "rgba(255, 99, 132, 0.8)",
                                position: "end"
                            }
                        },
                        line2: {
                            type: "line",
                            yMin: 60,
                            yMax: 60,
                            borderColor: "rgba(54, 162, 235, 0.8)",
                            borderWidth: 2,
                            label: {
                                enabled: true,
                                content: "60",
                                backgroundColor: "rgba(54, 162, 235, 0.8)",
                                position: "end"
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize charts
createChart("chartAOI", data.AOI.labels, data.AOI.values, "AOI");
createChart("chartFlipChip", data.FlipChip.labels, data.FlipChip.values, "Flip Chip");
createChart("chartIRCF", data.IRCF.labels, data.IRCF.values, "IRCF");
createChart("chartUnderfill", data.Underfill.labels, data.Underfill.values, "Underfill");
