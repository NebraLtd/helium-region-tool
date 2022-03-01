//hard coded json bc it was just easier for me to do that for this project
const regionData = [{
    "countryCode": "AF",
    "lat": 33.93911,
    "long": 67.709953,
    "countryName": "Afghanistan",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "AL",
    "lat": 41.153332,
    "long": 20.168331,
    "countryName": "Albania",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "DZ",
    "lat": 28.033886,
    "long": 1.659626,
    "countryName": "Algeria",
    "frequency": "AS923_3",
    "zone": "zone1"
  },
  {
    "countryCode": "AS",
    "lat": -14.270972,
    "long": -170.132217,
    "countryName": "American Samoa",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "AD",
    "lat": 42.546245,
    "long": 1.601554,
    "countryName": "Andorra",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "AO",
    "lat": -11.202692,
    "long": 17.873887,
    "countryName": "Angola",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "AI",
    "lat": 18.220554,
    "long": -63.068615,
    "countryName": "Anguilla",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "AQ",
    "lat": -75.250973,
    "long": -0.071389,
    "countryName": "Antarctica",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "AG",
    "lat": 17.060816,
    "long": -61.796428,
    "countryName": "Antigua and Barbuda",
    "frequency": "",
    "zone": "zone2"
  },
  {
    "countryCode": "AR",
    "lat": -38.416097,
    "long": -63.616672,
    "countryName": "Argentina",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "AM",
    "lat": 40.069099,
    "long": 45.038189,
    "countryName": "Armenia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "AW",
    "lat": 12.52111,
    "long": -69.968338,
    "countryName": "Aruba",
    "frequency": "",
    "zone": "zone2"
  },
  {
    "countryCode": "AU",
    "lat": -25.274398,
    "long": 133.775136,
    "countryName": "Australia",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "AT",
    "lat": 47.516231,
    "long": 14.550072,
    "countryName": "Austria",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "AZ",
    "lat": 40.143105,
    "long": 47.576927,
    "countryName": "Azerbaijan",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "BS",
    "lat": 25.03428,
    "long": -77.39628,
    "countryName": "Bahamas",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "BH",
    "lat": 25.930414,
    "long": 50.637772,
    "countryName": "Bahrain",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BD",
    "lat": 23.684994,
    "long": 90.356331,
    "countryName": "Bangladesh",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "BB",
    "lat": 13.193887,
    "long": -59.543198,
    "countryName": "Barbados",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "BY",
    "lat": 53.709807,
    "long": 27.953389,
    "countryName": "Belarus",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BE",
    "lat": 50.503887,
    "long": 4.469936,
    "countryName": "Belgium",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BZ",
    "lat": 17.189877,
    "long": -88.49765,
    "countryName": "Belize",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "BJ",
    "lat": 9.30769,
    "long": 2.315834,
    "countryName": "Benin",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BM",
    "lat": 32.321384,
    "long": -64.75737,
    "countryName": "Bermuda",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "BT",
    "lat": 27.514162,
    "long": 90.433601,
    "countryName": "Bhutan",
    "frequency": "EU868",
    "zone": "zone3"
  },
  {
    "countryCode": "BO",
    "lat": -16.290154,
    "long": -63.588653,
    "countryName": "Bolivia",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "BA",
    "lat": 43.915886,
    "long": 17.679076,
    "countryName": "Bosnia and Herzegovina",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BW",
    "lat": -22.328474,
    "long": 24.684866,
    "countryName": "Botswana",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BV",
    "lat": -54.423199,
    "long": 3.413194,
    "countryName": "Bouvet Island",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BR",
    "lat": -14.235004,
    "long": -51.92528,
    "countryName": "Brazil",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "IO",
    "lat": -6.343194,
    "long": 71.876519,
    "countryName": "British Indian Ocean Territory",
    "frequency": "",
    "zone": "zone2"
  },
  {
    "countryCode": "VG",
    "lat": 18.420695,
    "long": -64.639968,
    "countryName": "British Virgin Islands",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "BN",
    "lat": 4.535277,
    "long": 114.727669,
    "countryName": "Brunei",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "BG",
    "lat": 42.733883,
    "long": 25.48583,
    "countryName": "Bulgaria",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "BF",
    "lat": 12.238333,
    "long": -1.561593,
    "countryName": "Burkina Faso",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "BI",
    "lat": -3.373056,
    "long": 29.918886,
    "countryName": "Burundi",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "KH",
    "lat": 12.565679,
    "long": 104.990963,
    "countryName": "Cambodia",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "CM",
    "lat": 7.369722,
    "long": 12.354722,
    "countryName": "Cameroon",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "CA",
    "lat": 56.130366,
    "long": -106.346771,
    "countryName": "Canada",
    "frequency": "US915",
    "zone": "zone1"
  },
  {
    "countryCode": "CV",
    "lat": 16.002082,
    "long": -24.013197,
    "countryName": "Cape Verde",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "KY",
    "lat": 19.513469,
    "long": -80.566956,
    "countryName": "Cayman Islands",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "CF",
    "lat": 6.611111,
    "long": 20.939444,
    "countryName": "Central African Republic",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "TD",
    "lat": 15.454166,
    "long": 18.732207,
    "countryName": "Chad",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "CL",
    "lat": -35.675147,
    "long": -71.542969,
    "countryName": "Chile",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "CN",
    "lat": 35.86166,
    "long": 104.195397,
    "countryName": "China",
    "frequency": "CN470",
    "zone": "zone3"
  },
  {
    "countryCode": "CX",
    "lat": -10.447525,
    "long": 105.690449,
    "countryName": "Christmas Island",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "CC",
    "lat": -12.164165,
    "long": 96.870956,
    "countryName": "Cocos [Keeling] Islands",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "CO",
    "lat": 4.570868,
    "long": -74.297333,
    "countryName": "Colombia",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "KM",
    "lat": -11.875001,
    "long": 43.872219,
    "countryName": "Comoros",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "CD",
    "lat": -4.038333,
    "long": 21.758664,
    "countryName": "Congo [DRC]",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "CG",
    "lat": -0.228021,
    "long": 15.827659,
    "countryName": "Congo [Republic]",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "CK",
    "lat": -21.236736,
    "long": -159.777671,
    "countryName": "Cook Islands",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "CR",
    "lat": 9.748917,
    "long": -83.753428,
    "countryName": "Costa Rica",
    "frequency": "AS923_1",
    "zone": "zone2"
  },
  {
    "countryCode": "CI",
    "lat": 7.539989,
    "long": -5.54708,
    "countryName": "Côte d'Ivoire",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "HR",
    "lat": 45.1,
    "long": 15.2,
    "countryName": "Croatia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "CU",
    "lat": 21.521757,
    "long": -77.781167,
    "countryName": "Cuba",
    "frequency": "AS923_3",
    "zone": "zone2"
  },
  {
    "countryCode": "CY",
    "lat": 35.126413,
    "long": 33.429859,
    "countryName": "Cyprus",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "CZ",
    "lat": 49.817492,
    "long": 15.472962,
    "countryName": "Czech Republic",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "DK",
    "lat": 56.26392,
    "long": 9.501785,
    "countryName": "Denmark",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "DJ",
    "lat": 11.825138,
    "long": 42.590275,
    "countryName": "Djibouti",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "DM",
    "lat": 15.414999,
    "long": -61.370976,
    "countryName": "Dominica",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "DO",
    "lat": 18.735693,
    "long": -70.162651,
    "countryName": "Dominican Republic",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "EC",
    "lat": -1.831239,
    "long": -78.183406,
    "countryName": "Ecuador",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "EG",
    "lat": 26.820553,
    "long": 30.802498,
    "countryName": "Egypt",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SV",
    "lat": 13.794185,
    "long": -88.89653,
    "countryName": "El Salvador",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "GQ",
    "lat": 1.650801,
    "long": 10.267895,
    "countryName": "Equatorial Guinea",
    "frequency": "EU868",
    "zone": "zone3"
  },
  {
    "countryCode": "ER",
    "lat": 15.179384,
    "long": 39.782334,
    "countryName": "Eritrea",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "EE",
    "lat": 58.595272,
    "long": 25.013607,
    "countryName": "Estonia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SZ",
    "lat": -26.522503,
    "long": 31.465866,
    "countryName": "Eswatini [Swaziland]",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "ET",
    "lat": 9.145,
    "long": 40.489673,
    "countryName": "Ethiopia",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "FK",
    "lat": -51.796253,
    "long": -59.523613,
    "countryName": "Falkland Islands [Islas Malvinas]",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "FO",
    "lat": 61.892635,
    "long": -6.911806,
    "countryName": "Faroe Islands",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "FJ",
    "lat": -16.578193,
    "long": 179.414413,
    "countryName": "Fiji",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "FI",
    "lat": 61.92411,
    "long": 25.748151,
    "countryName": "Finland",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "FR",
    "lat": 46.227638,
    "long": 2.213749,
    "countryName": "France",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GF",
    "lat": 3.933889,
    "long": -53.125782,
    "countryName": "French Guiana",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "PF",
    "lat": -17.679742,
    "long": -149.406843,
    "countryName": "French Polynesia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "TF",
    "lat": -49.280366,
    "long": 69.348557,
    "countryName": "French Southern Territories",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GA",
    "lat": -0.803689,
    "long": 11.609444,
    "countryName": "Gabon",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "GM",
    "lat": 13.443182,
    "long": -15.310139,
    "countryName": "Gambia",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "GZ",
    "lat": 31.354676,
    "long": 34.308825,
    "countryName": "Gaza Strip",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "GE",
    "lat": 42.315407,
    "long": 43.356892,
    "countryName": "Georgia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "DE",
    "lat": 51.165691,
    "long": 10.451526,
    "countryName": "Germany",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GH",
    "lat": 7.946527,
    "long": -1.023194,
    "countryName": "Ghana",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "GI",
    "lat": 36.137741,
    "long": -5.345374,
    "countryName": "Gibraltar",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GR",
    "lat": 39.074208,
    "long": 21.824312,
    "countryName": "Greece",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GL",
    "lat": 71.706936,
    "long": -42.604303,
    "countryName": "Greenland",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "GD",
    "lat": 12.262776,
    "long": -61.604171,
    "countryName": "Grenada",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "GP",
    "lat": 16.995971,
    "long": -62.067641,
    "countryName": "Guadeloupe",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "GU",
    "lat": 13.444304,
    "long": 144.793731,
    "countryName": "Guam",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "GT",
    "lat": 15.783471,
    "long": -90.230759,
    "countryName": "Guatemala",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "GG",
    "lat": 49.465691,
    "long": -2.585278,
    "countryName": "Guernsey",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GN",
    "lat": 9.945587,
    "long": -9.696645,
    "countryName": "Guinea",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "GW",
    "lat": 11.803749,
    "long": -15.180413,
    "countryName": "Guinea-Bissau",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "GY",
    "lat": 4.860416,
    "long": -58.93018,
    "countryName": "Guyana",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "HT",
    "lat": 18.971187,
    "long": -72.285215,
    "countryName": "Haiti",
    "frequency": "",
    "zone": "zone2"
  },
  {
    "countryCode": "HM",
    "lat": -53.08181,
    "long": 73.504158,
    "countryName": "Heard Island and McDonald Islands",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "HN",
    "lat": 15.199999,
    "long": -86.241905,
    "countryName": "Honduras",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "HK",
    "lat": 22.396428,
    "long": 114.109497,
    "countryName": "Hong Kong",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "HU",
    "lat": 47.162494,
    "long": 19.503304,
    "countryName": "Hungary",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "IS",
    "lat": 64.963051,
    "long": -19.020835,
    "countryName": "Iceland",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "IN",
    "lat": 20.593684,
    "long": 78.96288,
    "countryName": "India",
    "frequency": "IN865",
    "zone": "zone3"
  },
  {
    "countryCode": "ID",
    "lat": -0.789275,
    "long": 113.921327,
    "countryName": "Indonesia",
    "frequency": "AS923_2",
    "zone": "zone3"
  },
  {
    "countryCode": "IR",
    "lat": 32.427908,
    "long": 53.688046,
    "countryName": "Iran",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "IQ",
    "lat": 33.223191,
    "long": 43.679291,
    "countryName": "Iraq",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "IE",
    "lat": 53.41291,
    "long": -8.24389,
    "countryName": "Ireland",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "IM",
    "lat": 54.236107,
    "long": -4.548056,
    "countryName": "Isle of Man",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "IL",
    "lat": 31.046051,
    "long": 34.851612,
    "countryName": "Israel",
    "frequency": "AS923_4",
    "zone": "zone1"
  },
  {
    "countryCode": "IT",
    "lat": 41.87194,
    "long": 12.56738,
    "countryName": "Italy",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "JM",
    "lat": 18.109581,
    "long": -77.297508,
    "countryName": "Jamaica",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "JP",
    "lat": 36.204824,
    "long": 138.252924,
    "countryName": "Japan",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "JE",
    "lat": 49.214439,
    "long": -2.13125,
    "countryName": "Jersey",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "JO",
    "lat": 30.585164,
    "long": 36.238414,
    "countryName": "Jordan",
    "frequency": "IN865",
    "zone": "zone1"
  },
  {
    "countryCode": "KZ",
    "lat": 48.019573,
    "long": 66.923684,
    "countryName": "Kazakhstan",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "KE",
    "lat": -0.023559,
    "long": 37.906193,
    "countryName": "Kenya",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "KI",
    "lat": -3.370417,
    "long": -168.734039,
    "countryName": "Kiribati",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "XK",
    "lat": 42.602636,
    "long": 20.902977,
    "countryName": "Kosovo",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "KW",
    "lat": 29.31166,
    "long": 47.481766,
    "countryName": "Kuwait",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "KG",
    "lat": 41.20438,
    "long": 74.766098,
    "countryName": "Kyrgyzstan",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "LA",
    "lat": 19.85627,
    "long": 102.495496,
    "countryName": "Laos",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "LV",
    "lat": 56.879635,
    "long": 24.603189,
    "countryName": "Latvia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "LB",
    "lat": 33.854721,
    "long": 35.862285,
    "countryName": "Lebanon",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "LS",
    "lat": -29.609988,
    "long": 28.233608,
    "countryName": "Lesotho",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "LR",
    "lat": 6.428055,
    "long": -9.429499,
    "countryName": "Liberia",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "LY",
    "lat": 26.3351,
    "long": 17.228331,
    "countryName": "Libya",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "LI",
    "lat": 47.166,
    "long": 9.555373,
    "countryName": "Liechtenstein",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "LT",
    "lat": 55.169438,
    "long": 23.881275,
    "countryName": "Lithuania",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "LU",
    "lat": 49.815273,
    "long": 6.129583,
    "countryName": "Luxembourg",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MO",
    "lat": 22.198745,
    "long": 113.543873,
    "countryName": "Macau",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "MK",
    "lat": 41.608635,
    "long": 21.745275,
    "countryName": "North Macedonia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MG",
    "lat": -18.766947,
    "long": 46.869107,
    "countryName": "Madagascar",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MW",
    "lat": -13.254308,
    "long": 34.301525,
    "countryName": "Malawi",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "MY",
    "lat": 4.210484,
    "long": 101.975766,
    "countryName": "Malaysia",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "MV",
    "lat": 3.202778,
    "long": 73.22068,
    "countryName": "Maldives",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "ML",
    "lat": 17.570692,
    "long": -3.996166,
    "countryName": "Mali",
    "frequency": "EU433",
    "zone": "zone3"
  },
  {
    "countryCode": "MT",
    "lat": 35.937496,
    "long": 14.375416,
    "countryName": "Malta",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MH",
    "lat": 7.131474,
    "long": 171.184478,
    "countryName": "Marshall Islands",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "MQ",
    "lat": 14.641528,
    "long": -61.024174,
    "countryName": "Martinique",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "MR",
    "lat": 21.00789,
    "long": -10.940835,
    "countryName": "Mauritania",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MU",
    "lat": -20.348404,
    "long": 57.552152,
    "countryName": "Mauritius",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "YT",
    "lat": -12.8275,
    "long": 45.166244,
    "countryName": "Mayotte",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MX",
    "lat": 23.634501,
    "long": -102.552784,
    "countryName": "Mexico",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "FM",
    "lat": 7.425554,
    "long": 150.550812,
    "countryName": "Micronesia",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "MD",
    "lat": 47.411631,
    "long": 28.369885,
    "countryName": "Moldova",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MC",
    "lat": 43.750298,
    "long": 7.412841,
    "countryName": "Monaco",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MN",
    "lat": 46.862496,
    "long": 103.846656,
    "countryName": "Mongolia",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "ME",
    "lat": 42.708678,
    "long": 19.37439,
    "countryName": "Montenegro",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "MS",
    "lat": 16.742498,
    "long": -62.187366,
    "countryName": "Montserrat",
    "frequency": "AU915",
    "zone": "zone1"
  },
  {
    "countryCode": "MA",
    "lat": 31.791702,
    "long": -7.09262,
    "countryName": "Morocco",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "MZ",
    "lat": -18.665695,
    "long": 35.529562,
    "countryName": "Mozambique",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "MM",
    "lat": 21.913965,
    "long": 95.956223,
    "countryName": "Myanmar [Burma]",
    "frequency": "AS923_1",
    "zone": "zone1"
  },
  {
    "countryCode": "NA",
    "lat": -22.95764,
    "long": 18.49041,
    "countryName": "Namibia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "NR",
    "lat": -0.522778,
    "long": 166.931503,
    "countryName": "Nauru",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "NP",
    "lat": 28.394857,
    "long": 84.124008,
    "countryName": "Nepal",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "NL",
    "lat": 52.132633,
    "long": 5.291266,
    "countryName": "Netherlands",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "AN",
    "lat": 12.226079,
    "long": -69.060087,
    "countryName": "Netherlands Antilles",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "NC",
    "lat": -20.904305,
    "long": 165.618042,
    "countryName": "New Caledonia",
    "frequency": "EU868",
    "zone": "zone3"
  },
  {
    "countryCode": "NZ",
    "lat": -40.900557,
    "long": 174.885971,
    "countryName": "New Zealand",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "NI",
    "lat": 12.865416,
    "long": -85.207229,
    "countryName": "Nicaragua",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "NE",
    "lat": 17.607789,
    "long": 8.081666,
    "countryName": "Niger",
    "frequency": "IN865",
    "zone": "zone1"
  },
  {
    "countryCode": "NG",
    "lat": 9.081999,
    "long": 8.675277,
    "countryName": "Nigeria",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "NU",
    "lat": -19.054445,
    "long": -169.867233,
    "countryName": "Niue",
    "frequency": "AU915",
    "zone": "zone1"
  },
  {
    "countryCode": "NF",
    "lat": -29.040835,
    "long": 167.954712,
    "countryName": "Norfolk Island",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "KP",
    "lat": 40.339852,
    "long": 127.510093,
    "countryName": "North Korea",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "MP",
    "lat": 17.33083,
    "long": 145.38469,
    "countryName": "Northern Mariana Islands",
    "frequency": "US915",
    "zone": "zone3"
  },
  {
    "countryCode": "NO",
    "lat": 60.472024,
    "long": 8.468946,
    "countryName": "Norway",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "OM",
    "lat": 21.512583,
    "long": 55.923255,
    "countryName": "Oman",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "PK",
    "lat": 30.375321,
    "long": 69.345116,
    "countryName": "Pakistan",
    "frequency": "IN865",
    "zone": "zone3"
  },
  {
    "countryCode": "PW",
    "lat": 7.51498,
    "long": 134.58252,
    "countryName": "Palau",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "PS",
    "lat": 31.952162,
    "long": 35.233154,
    "countryName": "Palestinian Territories",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "PA",
    "lat": 8.537981,
    "long": -80.782127,
    "countryName": "Panama",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "PG",
    "lat": -6.314993,
    "long": 143.95555,
    "countryName": "Papua New Guinea",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "PY",
    "lat": -23.442503,
    "long": -58.443832,
    "countryName": "Paraguay",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "PE",
    "lat": -9.189967,
    "long": -75.015152,
    "countryName": "Peru",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "PH",
    "lat": 12.879721,
    "long": 121.774017,
    "countryName": "Philippines",
    "frequency": "AS923_3",
    "zone": "zone1"
  },
  {
    "countryCode": "PN",
    "lat": -24.703615,
    "long": -127.439308,
    "countryName": "Pitcairn Islands",
    "frequency": "",
    "zone": "zone2"
  },
  {
    "countryCode": "PL",
    "lat": 51.919438,
    "long": 19.145136,
    "countryName": "Poland",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "PT",
    "lat": 39.399872,
    "long": -8.224454,
    "countryName": "Portugal",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "PR",
    "lat": 18.220833,
    "long": -66.590149,
    "countryName": "Puerto Rico",
    "frequency": "US915",
    "zone": "zone1"
  },
  {
    "countryCode": "QA",
    "lat": 25.354826,
    "long": 51.183884,
    "countryName": "Qatar",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "RE",
    "lat": -21.115141,
    "long": 55.536384,
    "countryName": "Réunion",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "RO",
    "lat": 45.943161,
    "long": 24.96676,
    "countryName": "Romania",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "RU",
    "lat": 61.52401,
    "long": 105.318756,
    "countryName": "Russia",
    "frequency": "RU864",
    "zone": "zone1"
  },
  {
    "countryCode": "RW",
    "lat": -1.940278,
    "long": 29.873888,
    "countryName": "Rwanda",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SH",
    "lat": -24.143474,
    "long": -10.030696,
    "countryName": "Saint Helena",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "KN",
    "lat": 17.357822,
    "long": -62.782998,
    "countryName": "Saint Kitts and Nevis",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "LC",
    "lat": 13.909444,
    "long": -60.978893,
    "countryName": "Saint Lucia",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "PM",
    "lat": 46.941936,
    "long": -56.27111,
    "countryName": "Saint Pierre and Miquelon",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "VC",
    "lat": 12.984305,
    "long": -61.287228,
    "countryName": "Saint Vincent and the Grenadines",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "WS",
    "lat": -13.759029,
    "long": -172.104629,
    "countryName": "Samoa",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "SM",
    "lat": 43.94236,
    "long": 12.457777,
    "countryName": "San Marino",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "ST",
    "lat": 0.18636,
    "long": 6.613081,
    "countryName": "São Tomé and Príncipe",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "SA",
    "lat": 23.885942,
    "long": 45.079162,
    "countryName": "Saudi Arabia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SN",
    "lat": 14.497401,
    "long": -14.452362,
    "countryName": "Senegal",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "RS",
    "lat": 44.016521,
    "long": 21.005859,
    "countryName": "Serbia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SC",
    "lat": -4.679574,
    "long": 55.491977,
    "countryName": "Seychelles",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "SL",
    "lat": 8.460555,
    "long": -11.779889,
    "countryName": "Sierra Leone",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "SG",
    "lat": 1.352083,
    "long": 103.819836,
    "countryName": "Singapore",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "SK",
    "lat": 48.669026,
    "long": 19.699024,
    "countryName": "Slovakia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SI",
    "lat": 46.151241,
    "long": 14.995463,
    "countryName": "Slovenia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SB",
    "lat": -9.64571,
    "long": 160.156194,
    "countryName": "Solomon Islands",
    "frequency": "AS923_1",
    "zone": "zone1"
  },
  {
    "countryCode": "SO",
    "lat": 5.152149,
    "long": 46.199616,
    "countryName": "Somalia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "ZA",
    "lat": -30.559482,
    "long": 22.937506,
    "countryName": "South Africa",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GS",
    "lat": -54.429579,
    "long": -36.587909,
    "countryName": "South Georgia and the South Sandwich Islands",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "KR",
    "lat": 35.907757,
    "long": 127.766922,
    "countryName": "South Korea",
    "frequency": "KR920",
    "zone": "zone3"
  },
  {
    "countryCode": "ES",
    "lat": 40.463667,
    "long": -3.74922,
    "countryName": "Spain",
    "frequency": "EU868",
    "zone": "zone3"
  },
  {
    "countryCode": "LK",
    "lat": 7.873054,
    "long": 80.771797,
    "countryName": "Sri Lanka",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "SD",
    "lat": 12.862807,
    "long": 30.217636,
    "countryName": "Sudan",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "SR",
    "lat": 3.919305,
    "long": -56.027783,
    "countryName": "Suriname",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "SJ",
    "lat": 77.553604,
    "long": 23.670272,
    "countryName": "Svalbard and Jan Mayen",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SE",
    "lat": 60.128161,
    "long": 18.643501,
    "countryName": "Sweden",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "CH",
    "lat": 46.818188,
    "long": 8.227512,
    "countryName": "Switzerland",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "SY",
    "lat": 34.802075,
    "long": 38.996815,
    "countryName": "Syria",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "TW",
    "lat": 23.69781,
    "long": 120.960515,
    "countryName": "Taiwan",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "TJ",
    "lat": 38.861034,
    "long": 71.276093,
    "countryName": "Tajikistan",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "TZ",
    "lat": -6.369028,
    "long": 34.888822,
    "countryName": "Tanzania",
    "frequency": "AS923_1",
    "zone": "zone1"
  },
  {
    "countryCode": "TH",
    "lat": 15.870032,
    "long": 100.992541,
    "countryName": "Thailand",
    "frequency": "AS923_1",
    "zone": "zone3"
  },
  {
    "countryCode": "TL",
    "lat": -8.874217,
    "long": 125.727539,
    "countryName": "Timor-Leste",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "TG",
    "lat": 8.619543,
    "long": 0.824782,
    "countryName": "Togo",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "TK",
    "lat": -8.967363,
    "long": -171.855881,
    "countryName": "Tokelau",
    "frequency": "AU915",
    "zone": "zone3"
  },
  {
    "countryCode": "TO",
    "lat": -21.178986,
    "long": -175.198242,
    "countryName": "Tonga",
    "frequency": "AU915",
    "zone": "zone1"
  },
  {
    "countryCode": "TT",
    "lat": 10.691803,
    "long": -61.222503,
    "countryName": "Trinidad and Tobago",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "TN",
    "lat": 33.886917,
    "long": 9.537499,
    "countryName": "Tunisia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "TR",
    "lat": 38.963745,
    "long": 35.243322,
    "countryName": "Turkey",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "TM",
    "lat": 38.969719,
    "long": 59.556278,
    "countryName": "Turkmenistan",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "TC",
    "lat": 21.694025,
    "long": -71.797928,
    "countryName": "Turks and Caicos Islands",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "TV",
    "lat": -7.109535,
    "long": 177.64933,
    "countryName": "Tuvalu",
    "frequency": "",
    "zone": "zone3"
  },
  {
    "countryCode": "UM",
    "lat": "",
    "long": "",
    "countryName": "U.S. Minor Outlying Islands",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "VI",
    "lat": 18.335765,
    "long": -64.896335,
    "countryName": "U.S. Virgin Islands",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "UG",
    "lat": 1.373333,
    "long": 32.290275,
    "countryName": "Uganda",
    "frequency": "IN865",
    "zone": "zone1"
  },
  {
    "countryCode": "UA",
    "lat": 48.379433,
    "long": 31.16558,
    "countryName": "Ukraine",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "AE",
    "lat": 23.424076,
    "long": 53.847818,
    "countryName": "United Arab Emirates",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "GB",
    "lat": 55.378051,
    "long": -3.435973,
    "countryName": "United Kingdom",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "US",
    "lat": 37.09024,
    "long": -95.712891,
    "countryName": "United States",
    "frequency": "US915",
    "zone": "zone2"
  },
  {
    "countryCode": "UY",
    "lat": -32.522779,
    "long": -55.765835,
    "countryName": "Uruguay",
    "frequency": "AU915",
    "zone": "zone2"
  },
  {
    "countryCode": "UZ",
    "lat": 41.377491,
    "long": 64.585262,
    "countryName": "Uzbekistan",
    "frequency": "EU433",
    "zone": "zone1"
  },
  {
    "countryCode": "VU",
    "lat": -15.376706,
    "long": 166.959158,
    "countryName": "Vanuatu",
    "frequency": "AS923_3",
    "zone": "zone3"
  },
  {
    "countryCode": "VA",
    "lat": 41.902916,
    "long": 12.453389,
    "countryName": "Vatican City",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "VE",
    "lat": 6.42375,
    "long": -66.58973,
    "countryName": "Venezuela",
    "frequency": "AS923_1",
    "zone": "zone2"
  },
  {
    "countryCode": "VN",
    "lat": 14.058324,
    "long": 108.277199,
    "countryName": "Vietnam",
    "frequency": "AS923_2",
    "zone": "zone3"
  },
  {
    "countryCode": "WF",
    "lat": -13.768752,
    "long": -177.156097,
    "countryName": "Wallis and Futuna",
    "frequency": "EU868",
    "zone": "zone2"
  },
  {
    "countryCode": "EH",
    "lat": 24.215527,
    "long": -12.885834,
    "countryName": "Western Sahara",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "YE",
    "lat": 15.552727,
    "long": 48.516388,
    "countryName": "Yemen",
    "frequency": "",
    "zone": "zone1"
  },
  {
    "countryCode": "ZM",
    "lat": -13.133897,
    "long": 27.849332,
    "countryName": "Zambia",
    "frequency": "EU868",
    "zone": "zone1"
  },
  {
    "countryCode": "ZW",
    "lat": -19.015438,
    "long": 29.154857,
    "countryName": "Zimbabwe",
    "frequency": "EU433",
    "zone": "zone1"
  }
];

window.regionData = regionData;