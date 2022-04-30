/**
 * Developed by @_louisreed for @Nebraltd
 **/

// Google GeoChart 
// https://developers.google.com/chart/interactive/docs/gallery/geochart

google.charts.load('current', {
    'packages': ['geochart'],
});

// Google Sheets Data
google.charts.setOnLoadCallback(regionSwap);

function regionSwap() {
    var region = 'Q';
    drawRegionsMap(region);
}

// Query sheets data and select columns
function drawRegionsMap(region) {
    var countryColumn = 'D';
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1YfyT89RCuJyqW88Oiglk2vloXr8wxUWB2TiE3nm8AFY/edit?usp=sharing&tq=SELECT' + ' ' + countryColumn + ',' + region); // Google Sheet
    query.send(handleQueryResponse);
}

// Handle query response and set options, data
function handleQueryResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    // Customise options
    var options = {

        colorAxis: {
            colors: ['#015175', '#012536', '#02A8F5']
        },
        backgroundColor: 'transparent',
        datalessRegionColor: '#eee',
        defaultColor: '#03a9f4',

        tooltip: {
            textStyle: {
                color: '#424242',
                fontSize: '20'
            },
            showColorCode: true
        },
    };

    // Parse data
    var data = response.getDataTable();

    // Apply data to HTML element
    var chart = new google.visualization.GeoChart(document.getElementById('regions-div'));

    // Render
    chart.draw(data, options);

}
