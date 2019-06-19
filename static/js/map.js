// Initialize and add the map
function initMap() {
  // The location of Uluru
  var winebar = {lat: 53.1901, lng: -2.8934};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), 
      {
          zoom: 14, 
          center: winebar,
          styles: [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff4400"
            },
            {
                "saturation": -68
            },
            {
                "lightness": -4
            },
            {
                "gamma": 0.72
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#be0c0c"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#1f00ff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0077ff"
            },
            {
                "gamma": 3.1
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d5e6f9"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#0d57aa"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "color": "#4aa738"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#44ff00"
            },
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f2f4f6"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffcb04"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "6.28"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffcb04"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffcb04"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -64
            },
            {
                "hue": "#ff9100"
            },
            {
                "lightness": 16
            },
            {
                "gamma": 0.47
            },
            {
                "weight": 2.7
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": -48
            },
            {
                "hue": "#ff5e00"
            },
            {
                "gamma": 1.2
            },
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00ccff"
            },
            {
                "gamma": 0.44
            },
            {
                "saturation": -33
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#007fff"
            },
            {
                "gamma": 0.77
            },
            {
                "saturation": 65
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "gamma": 0.11
            },
            {
                "weight": 5.6
            },
            {
                "saturation": 99
            },
            {
                "hue": "#0091ff"
            },
            {
                "lightness": -86
            }
        ]
    }
]

    
      });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: winebar, map: map});
}