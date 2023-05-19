var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "yes",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.50,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii"
    },
    AK: {
      name: "Alaska"
    },
    FL: {
      name: "Florida"
    },
    NH: {
      name: "New Hampshire"
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island"
    },
    NY: {
      name: "New York"
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey"
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland"
    },
    VA: {
      name: "Virginia"
    },
    WV: {
      name: "West Virginia"
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois"
    },
    CT: {
      name: "Connecticut"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina"
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee"
    },
    AR: {
      name: "Arkansas"
    },
    MO: {
      name: "Missouri"
    },
    GA: {
      name: "Georgia"
    },
    SC: {
      name: "South Carolina"
    },
    KY: {
      name: "Kentucky"
    },
    AL: {
      name: "Alabama"
    },
    LA: {
      name: "Louisiana"
    },
    MS: {
      name: "Mississippi"
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota"
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas"
    },
    NM: {
      name: "New Mexico"
    },
    KS: {
      name: "Kansas"
    },
    NE: {
      name: "Nebraska"
    },
    SD: {
      name: "South Dakota"
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming"
    },
    MT: {
      name: "Montana"
    },
    CO: {
      name: "Colorado"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada"
    },
    OR: {
      name: "Oregon"
    },
    WA: {
      name: "Washington"
    },
    CA: {
      name: "California"
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      lat: 30.268,
      lng: -97.743,
      name: "Austin Tx"
    },
    "1": {
      lat: 32.778,
      lng: -96.795,
      name: "Dallas TX"
    },
    "2": {
      lat: 29.526,
      lng: -95.746,
      name: "Fort Bend Tx"
    },
    "3": {
      lat: 29.788,
      lng: -95.823,
      name: "Katy Tx"
    },
    "4": {
      lat: 29.414,
      lng: -94.931,
      name: "Northside Tx"
    },
    "5": {
      lat: 26.378,
      lng: -98.815,
      name: "Rio Grade Tx"
    }
  },
  labels: {
    "0": {
      x: "932",
      y: "183",
      parent_id: "NH",
      pill: "yes",
      display: "all"
    },
    "1": {
      x: "883",
      y: "243",
      parent_id: "VT",
      pill: "yes",
      display: "all"
    },
    "2": {
      x: "932",
      y: "273",
      parent_id: "RI",
      pill: "yes",
      display: "all"
    },
    "3": {
      x: "883",
      y: "273",
      parent_id: "NJ",
      pill: "yes",
      display: "all"
    },
    "4": {
      x: "883",
      y: "303",
      parent_id: "DE",
      pill: "yes",
      display: "all"
    },
    "5": {
      x: "932",
      y: "303",
      parent_id: "MD",
      pill: "yes",
      display: "all"
    },
    "6": {
      x: "884",
      y: "332",
      parent_id: "DC",
      pill: "yes",
      display: "all"
    },
    "7": {
      x: "932",
      y: "213",
      parent_id: "MA",
      pill: "yes",
      display: "all"
    },
    "8": {
      x: "932",
      y: "243",
      parent_id: "CT",
      pill: "yes",
      display: "all"
    },
    "9": {
      x: 305,
      y: 565,
      parent_id: "HI",
      pill: "yes"
    },
    "10": {
      x: "113",
      y: "495",
      parent_id: "AK"
    },
    "11": {
      x: "773",
      y: "510",
      parent_id: "FL"
    },
    "12": {
      x: "893",
      y: "85",
      parent_id: "ME"
    },
    "13": {
      x: "815",
      y: "158",
      parent_id: "NY"
    },
    "14": {
      x: "786",
      y: "210",
      parent_id: "PA"
    },
    "15": {
      x: "790",
      y: "282",
      parent_id: "VA"
    },
    "16": {
      x: "744",
      y: "270",
      parent_id: "WV"
    },
    "17": {
      x: "700",
      y: "240",
      parent_id: "OH"
    },
    "18": {
      x: "650",
      y: "250",
      parent_id: "IN"
    },
    "19": {
      x: "600",
      y: "250",
      parent_id: "IL"
    },
    "20": {
      x: "575",
      y: "155",
      parent_id: "WI"
    },
    "21": {
      x: "784",
      y: "326",
      parent_id: "NC"
    },
    "22": {
      x: "655",
      y: "340",
      parent_id: "TN"
    },
    "23": {
      x: "548",
      y: "368",
      parent_id: "AR"
    },
    "24": {
      x: "548",
      y: "293",
      parent_id: "MO"
    },
    "25": {
      x: "718",
      y: "405",
      parent_id: "GA"
    },
    "26": {
      x: "760",
      y: "371",
      parent_id: "SC"
    },
    "27": {
      x: "680",
      y: "300",
      parent_id: "KY"
    },
    "28": {
      x: "655",
      y: "405",
      parent_id: "AL"
    },
    "29": {
      x: "550",
      y: "435",
      parent_id: "LA"
    },
    "30": {
      x: "600",
      y: "405",
      parent_id: "MS"
    },
    "31": {
      x: "525",
      y: "210",
      parent_id: "IA"
    },
    "32": {
      x: "506",
      y: "124",
      parent_id: "MN"
    },
    "33": {
      x: "460",
      y: "360",
      parent_id: "OK"
    },
    "34": {
      x: "425",
      y: "435",
      parent_id: "TX"
    },
    "35": {
      x: "305",
      y: "365",
      parent_id: "NM"
    },
    "36": {
      x: "445",
      y: "290",
      parent_id: "KS"
    },
    "37": {
      x: "420",
      y: "225",
      parent_id: "NE"
    },
    "38": {
      x: "413",
      y: "160",
      parent_id: "SD"
    },
    "39": {
      x: "416",
      y: "96",
      parent_id: "ND"
    },
    "40": {
      x: "300",
      y: "180",
      parent_id: "WY"
    },
    "41": {
      x: "280",
      y: "95",
      parent_id: "MT"
    },
    "42": {
      x: "320",
      y: "275",
      parent_id: "CO"
    },
    "43": {
      x: "223",
      y: "260",
      parent_id: "UT"
    },
    "44": {
      x: "205",
      y: "360",
      parent_id: "AZ"
    },
    "45": {
      x: "140",
      y: "235",
      parent_id: "NV"
    },
    "46": {
      x: "100",
      y: "120",
      parent_id: "OR"
    },
    "47": {
      x: "130",
      y: "55",
      parent_id: "WA"
    },
    "48": {
      x: "200",
      y: "150",
      parent_id: "ID"
    },
    "49": {
      x: "79",
      y: "285",
      parent_id: "CA"
    },
    "50": {
      x: "663",
      y: "185",
      parent_id: "MI"
    },
    "51": {
      x: "620",
      y: "545",
      parent_id: "PR"
    },
    "52": {
      x: "550",
      y: "540",
      parent_id: "GU"
    },
    "53": {
      x: "680",
      y: "519",
      parent_id: "VI"
    },
    "54": {
      x: "570",
      y: "575",
      parent_id: "MP"
    },
    "55": {
      x: "665",
      y: "580",
      parent_id: "AS"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};