function initMap() {
                    var myLatLng = {lat: -31.6012588, lng: 115.8285153};

                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 8,
                        center: myLatLng,
                        streetViewControl: false,
                        disableDefaultUI: true,
                        mapTypeControl: false
                    });

                    var myLatLng5 = {lat: -31.6171563, lng: 115.6805868};var marker5 = new google.maps.Marker({
                        position: myLatLng5,
                        map: map,
                        title: '6038, Western Australia, Australia'
                    });
                    var string5 = '<div id="google-popup">'+
                        '<p>Joondalup (6012) <b></b> <br/></p>'+
                        '</div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: string5
                        });
                    marker5.addListener('click', function() {
                            infowindow.open(map, marker5);
                        });

                    var string6 = '<div id="google-popup">'+
                        '<p>Joondalup (6012) <b>(61 percent)</b> <br/></p>'+
                        '</div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: string6
                        });
                    marker6.addListener('click', function() {
                            infowindow.open(map, marker6);
                        });


                    }
