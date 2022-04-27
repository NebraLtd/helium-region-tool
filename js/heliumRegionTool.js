/**
 * Developed by @_louisreed for @Nebraltd
 **/

// Populate region data on DOM load
$(function () {
    loadData();
    $('#frequencyResults').hide();
    $('#region1Value').hide();
    $('#region2Value').hide();
    $('#region3Value').hide();
    $('#purchase').hide();

    // Set default country
    $('select option[value="GB"]').attr("selected",true);

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

    // Render the country selection list from the CSV data
    $.ajax({
        url: url,
        async: false,
        success: function (csvd) {
            var items = $.csv.toObjects(csvd);
            var jsonobject = JSON.stringify(items);
            var dataObject = JSON.parse(jsonobject);
            var countryItemString = $('#countryItem').html();

            console.log("Country Data Loaded from Google Sheets CSV");

            // Pass Helium Region data js modules
            countrySearch(dataObject, countryItemString);
            // countrySearch(dataObject, countryItemString);
        },
        dataType: "text",
        complete: function () {},
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
};

function countrySearch(dataObject, countryItemString) {
    // Loop through each country item and build template variables
    dataObject.forEach(buildNewList);

    function buildNewList(item) {

        // Set Country Dropdown name + Code
        var countryItem = $('<option>' + countryItemString + '</option>');

        // Set dropdown country names and values
        countryItem.html(item.Country).val(item.Code);

        // Render dropdown list
        $('#countryList').append(countryItem);
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

            // console.log("Array from frequencyFinder:", dataObject);

            var v = document.getElementById("countryList");
            var region1;
            var region2;
            var region3;
            var countryName;

            for (let i = 0; i < 258; i++) {
                if (dataObject[i].Code == v.options[v.selectedIndex].value) {
                    region1 = dataObject[i]['Region 1 Frequency'];
                    region2 = dataObject[i]['Region 2 Frequency'];
                    region3 = dataObject[i]['Region 3 Frequency'];

                    countryName = dataObject[i].Country;
                    break;
                }
            }

            // Region error message
            if (!region1 || !region2 || !region3) {
                // console.log('NO RESULTS!!!!');
                var regionString = document.getElementById("regionString");
                var regionStringHelper = document.getElementById("regionStringHelper");
                // Show error message
                $('#frequencyResults').show();
                $('#regionString').show();
                regionString.innerHTML = countryName + " isn't supported yet <i class='fa-solid fa-face-frown'></i> Think it should be? Let us know <a href='mailto:support@nebra.com?subject=Helium Region Tool Suggestion'>support@nebra.com</a>";

                // Clear results if previously displayed
                document.getElementById("region1Value").innerHTML = "";
                document.getElementById("region2Value").innerHTML = "";
                document.getElementById("region3Value").innerHTML = "";

                // Hide results
                $('#region1Value').hide();
                $('#region2Value').hide();
                $('#region3Value').hide();
            }


            // Region 1
            if (region1.length === 0) {

            } else {

                // Hide error message 
                $('#regionString').hide();

                // Show results 
                $('#region1Value').show();
                $('#frequencyResults').show();
                $('#frequencyResults .card ul').removeClass('d-none');

                // Construct text
                document.getElementById("region1Value").innerHTML = "<i class='fa-solid fa-location-dot'></i> Region 1 Frequency: <strong>" + region1 + "MHz</strong>";
            }

            // Region 2
            if (region2.length === 0) {

            } else {

                // Hide error message 
                $('#regionString').hide();

                // Show results 
                $('#region2Value').show();
                $('#frequencyResults').show();
                $('#frequencyResults .card ul').removeClass('d-none');

                // Construct text
                document.getElementById("region2Value").innerHTML = "<i class='fa-solid fa-location-dot'></i> Region 2 Frequency: <strong>" + region2 + "MHz</strong>";
            }

            // Region 3
            if (region3.length === 0) {

            } else {

                // Hide error message 
                $('#regionString').hide();

                // Show results 
                $('#region3Value').show();
                $('#frequencyResults').show();
                $('#frequencyResults .card ul').removeClass('d-none');

                // Construct text
                document.getElementById("region3Value").innerHTML = "<i class='fa-solid fa-location-dot'></i> Region 3 Frequency: <strong>" + region3 + "MHz</strong>";
            }
        },
        dataType: "text",
        complete: function () {},
        error: function (thrownError) {
            console.log(thrownError);
        }
    });


};

window.frequencyFinder = frequencyFinder;