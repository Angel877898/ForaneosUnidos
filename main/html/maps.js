function mapa1(){
    var coord={lat:20.5992579 ,lng: -100.3713674};
    var map =new google.maps.Map(document.getElementById('map'),{
        zoom: 18,
        center: coord
    })
    var marker=new google.maps.Marker({
        position:coord,
        map:map
    })
}
function mapa2(){
    var coord={lat:20.5348042 ,lng: -100.4394959};
    var map =new google.maps.Map(document.getElementById('map2'),{
        zoom: 18,
        center: coord
    })
    var marker=new google.maps.Marker({
        position:coord,
        map:map
    })
}
function mapa3(){
    var coord={lat:20.5697017 ,lng: -100.4149527};
    var map =new google.maps.Map(document.getElementById('map3'),{
        zoom: 18,
        center: coord
    })
    var marker=new google.maps.Marker({
        position:coord,
        map:map
    })
}
function mapa4(){
    var coord={lat:20.5899636 ,lng: -100.4050622};
    var map =new google.maps.Map(document.getElementById('map4'),{
        zoom: 18,
        center: coord
    })
    var marker=new google.maps.Marker({
        position:coord,
        map:map
    })
}