let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.9386300, lng: 30.3141300 },
    zoom: 16,
  });

  const marker = new google.maps.Marker({
    position: { lat: 59.9386300, lng: 30.3141300 },
    map: map,
  });

}



