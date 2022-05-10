/**
 * Developed by @_louisreed for @Nebraltd
 **/

// Populate region data on DOM load
$(function () {
    loadData();
    $('#frequency-results').hide();
    $('#region-1-value').hide();
    $('#region-2-value').hide();
    $('#region-3-value').hide();
    $('#purchase').hide();
    $('#region-notes').hide()

    // Set default country
    $('select option[value="GB"]').attr("selected", true);

    // Initialise tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

// Google Sheets URL
var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRk6K2cxRqwpoc7IXepVEQYn1LAsKbbhb0If91FNCHxNI9fcDnqdCJZbYeMd42ChBlhb39hRO9xwnps/pub?output=csv';

// Load data from Google Sheets
function loadData() {

    $.ajax({
        url: url,
        async: false,
        success: function (csvd) {
            var items = $.csv.toObjects(csvd);
            var jsonobject = JSON.stringify(items);
            var dataObject = JSON.parse(jsonobject);
            var countryItemString = $('#country-item').html();

            // Pass Helium Region data js modules
            countrySearch(dataObject, countryItemString);
        },
        dataType: "text",
        complete: function () {},
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
};

// Render the country selection list from the CSV data
function countrySearch(dataObject, countryItemString) {
    // Loop through each country item and build template variables
    dataObject.forEach(buildNewList);

    function buildNewList(item) {

        // Set Country Dropdown name + Code
        var countryItem = $('<option>' + countryItemString + '</option>');

        // Set dropdown country names and values
        countryItem.html(item.Country).val(item.Code);

        // Render dropdown list
        $('#country-list').append(countryItem);
    }
};

function frequencyFinder() {

    // Render the country selection list from the CSV data
    $.ajax({
        url: url,
        async: false,
        success: function (csvd) {
            var items = $.csv.toObjects(csvd);
            var jsonobject = JSON.stringify(items);
            var dataObject = JSON.parse(jsonobject);
            var v = document.getElementById("country-list");
            var region1;
            var region2;
            var region3;
            var countryName;

            for (let i = 0; i < 258; i++) {
                if (dataObject[i].Code == v.options[v.selectedIndex].value) {
                    region1 = dataObject[i]['Main Frequency'];
                    region2 = dataObject[i]['Second Frequency'];
                    region3 = dataObject[i]['Third Frequency'];
                    regionNotes = dataObject[i]['Notes'];

                    countryName = dataObject[i].Country;
                    break;
                }
            }

            // Region error message
            if (!region1 || !region2 || !region3) {
                var regionString = document.getElementById("region-string");
                var regionStringHelper = document.getElementById("region-string-helper");

                // Show error message
                $('#frequency-results').show();
                $('#region-string').show();
                regionString.innerHTML = countryName + " isn't supported yet <i class='fa-solid fa-face-frown'></i> Think it should be? Let us know <a href='mailto:support@nebra.com?subject=Helium Region Tool Suggestion'>support@nebra.com</a>";

                // Clear results if previously displayed
                document.getElementById("region-1-value").innerHTML = "";
                document.getElementById("region-2-value").innerHTML = "";
                document.getElementById("region-3-value").innerHTML = "";

                // Hide results
                $('#region-1-value').hide();
                $('#region-2-value').hide();
                $('#region-3-value').hide();
            }

            // Region 1
            if (region1.length === 0) {} else {

                // Show buy button
                $('#purchase').show();

                // Hide error message 
                $('#region-string').hide();

                // Show results 
                $('#region-1-value').show();
                $('#frequency-results').show();
                $('#frequency-results .card ul').removeClass('d-none');

                // Construct text
                document.getElementById("region-1-value").innerHTML = "<i class='fa-solid fa-location-dot'></i> Main Frequency: <strong>" + region1 + "MHz</strong>";
            }

            // Region 2
            if (region2.length === 0) {

            } else {

                // Hide error message 
                $('#region-string').hide();

                // Show results 
                $('#region-2-value').show();
                $('#frequency-results').show();
                $('#frequency-results .card ul').removeClass('d-none');

                // Construct text
                document.getElementById("region-2-value").innerHTML = "<small><i class='fa-solid fa-location-dot'></i> Second Frequency: <strong>" + region2 + "MHz</strong></small>";
            }

            // Region 3
            if (region3.length === 0) {

            } else {

                // Hide error message 
                $('#region-string').hide();

                // Show results 
                $('#region-3-value').show();
                $('#frequency-results').show();
                $('#frequency-results .card ul').removeClass('d-none');

                // Construct text
                document.getElementById("region-3-value").innerHTML = "<small><i class='fa-solid fa-location-dot'></i> Third Frequency: <strong>" + region3 + "MHz</strong></small>";
            }

            // Update buy button with region specific URL
            if (region1 == 864 || region1 == 868) {
                $('#purchase').attr("href", "https://www.nebra.com/products/nebra-hnt-indoor-hotspot-miner-rock-pi-version?variant=39695017869398")
            } else if (region1 == 915 || region1 == 920 || region1 == 923) {
                $('#purchase').attr("href", "https://www.nebra.com/products/nebra-hnt-indoor-hotspot-miner-rock-pi-version?variant=39695017902166")
            } else if (region1 == 433) {
                $('#purchase').attr("href", "https://www.nebra.com/products/nebra-hnt-indoor-hotspot-miner-rock-pi-version?variant=39695017934934")
            } else if (region1 == 470) {
                $('#purchase').attr("href", "hhttps://www.nebra.com/products/nebra-hnt-indoor-hotspot-miner-rock-pi-version?variant=39695017967702")
            }

            // Add Region Notes
            if (regionNotes) {
                $('#region-notes').show().html('<p><strong>Notes:</strong> ' + regionNotes + '</p>');
            } else $('#region-notes').hide();
        },
        dataType: "text",
        complete: function () {},
        error: function (thrownError) {
            console.log(thrownError);
        }
    });

};

window.frequencyFinder = frequencyFinder;