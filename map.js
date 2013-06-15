 function initialize() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: new google.maps.LatLng(48.826588,2.346418),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
      
        var infoWindow = new google.maps.InfoWindow({
          position: map.getCenter()
        });
        infoWindow.open(map);
      }
      

 google.maps.event.addDomListener(window, 'load', initialize);