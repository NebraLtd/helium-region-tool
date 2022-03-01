/**
 * Developed by @_louisreed for @Nebraltd
 **/

// Populate country list dropdown

// $(function () {
//     // Google Sheets URL
//     url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRk6K2cxRqwpoc7IXepVEQYn1LAsKbbhb0If91FNCHxNI9fcDnqdCJZbYeMd42ChBlhb39hRO9xwnps/pub?output=csv';

//     // Render the country selection list from CSV file
//     $.ajax({
//         url: url,
//         async: false,
//         success: function (csvd) {
//             var items = $.csv.toObjects(csvd);
//             var jsonobject = JSON.stringify(items);
//             var dataObject = JSON.parse(jsonobject);
//             var countryItemString = $('#countryListOption').html();

//             console.log(jsonobject);
//             console.log("Country generation complete");

//             // Build template variables
//             dataObject.forEach(buildNewList);

//             function buildNewList(item, index) {
//                 var countryItem = $(countryItemString);
//             }
//         },
//         dataType: "text",
//         complete: function () {},
//         error: function (thrownError) {
//             console.log(thrownError);
//         }
//     });
// });


// Region Search 
function regionSearch() {

    // Variables
    var v = document.getElementById("countryList");
    var fq;
    var countryName;

    // Match country list with selected option
    for (let i = 0; i < 245; i++) {
        if (regionData[i].countryCode.toLowerCase() == v.options[v.selectedIndex].value) {
            fq = regionData[i].frequency;
            countryName = regionData[i].countryName;
            break;
        }
    }
    // Display frequency and region code or if frequency field is empty show error message instead
    if (!fq || fq.length === 0) {
        document.getElementById("frequencyString").innerHTML = countryName + " is not supported";
        document.getElementById("regionString").innerHTML = '';
    } else {
        document.getElementById("frequencyString").innerHTML = fq.substr(2, fq.length) + ' MHz';
        document.getElementById("regionString").innerHTML = 'Region code: ' + fq;
    }

    console.log(countryName, fq);
}

window.regionSearch = regionSearch;