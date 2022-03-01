/**
 * Developed by @_louisreed for @Nebraltd
 **/

// Google GeoChart 
// https://developers.google.com/chart/interactive/docs/gallery/geochart

google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

// Query Google Sheets data and select columns
function drawRegionsMap() {
    var queryString = encodeURIComponent('SELECT D, G');
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1YfyT89RCuJyqW88Oiglk2vloXr8wxUWB2TiE3nm8AFY/edit?usp=sharing&headers=1&tq=' +
        queryString);
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
        datalessRegionColor: 'white',
        defaultColor: '#03a9f4',

        tooltip: {
            textStyle: {
                color: '#424242',
                fontSize: '20'
            },
            showColorCode: true
        }
    };

    // Parse data
    var data = response.getDataTable();

    // Apply data to HTML element
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    // Test - Visual value change on click
    // google.visualization.events.addListener(chart, 'select', function () {
    //     for (var i = 0; i < data.getNumberOfRows(); i++) {
    //         if (i === chart.getSelection()[0].row) {
    //             data.setValue(i, 1, 100);
    //             console.log(i + 2);
    //         } else {
    //             data.setValue(i, 1, 0);
    //         }
    //     }
    //     chart.draw(data, options);
    // });

    // Render
    chart.draw(data, options);
}