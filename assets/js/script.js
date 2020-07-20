
function initMap() {
  // The location of minnetonka
  var minnetonka = {lat: 44.92761074, lng: -93.59409689 };
  // The map, centered at minnetonka
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: minnetonka});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: minnetonka, map: map});
}
