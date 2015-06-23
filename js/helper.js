var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="contact-mode">' +
  '%contact%</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span>mobile</span><span class=' +
  '"contact-mode">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span>email</span><a href="#" ' +
  'target="_blank" class="contact-mode">%data%</a></li>';
var HTMLtwitter = '<li class="flex-item"><span>twitter</span><a href="#" ' +
  'target="_blank" class="contact-mode">%data%</a></li>';
var HTMLgithub = '<li class="flex-item"><span>github</span><a href="#" ' +
  'target="_blank" class="contact-mode">%data%</a></li>';
var HTMLlocation = '<li class="flex-item"><span>location</span><a href="#" ' +
  'target="_blank" class="contact-mode">%data%</a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span>%data%</span>';

var HTMLskillsStart = '<h3 id="h3-skills">Skills at a Glance:</h3><ul ' +
  'id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span><br><span ' +
  'class="fontawesome %icon%"></span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div id="employer">%data%';
var HTMLworkTitle = ' - %data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<div"><img src="%data%" class="projectpic"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank" class="inline-links">%data%' +
  '</a>';
var HTMLschoolDegree = '<p class="inline-p"> - %data%</p>';
var HTMLschoolDates = '<div class="date-text">%data%</div><br>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p>Major: %data%</p>';

var HTMLonlineStart = '<div class="online-entry"></div>'
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<div><a href="#" target="_blank" class="inline-links">' +
  '%data%</a>';
var HTMLonlineSchool = '<p class="inline-p"> - %data%</p></div>';
var HTMLonlineDate = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<a href="#">%data%</a>';

var HTMLfooterStart = '<div class="footer-entry"></div>';
var HTMLfooterMobile = '<li class="flex-item"><span class="fontawesome ' +
  'footer-icon %icon%"></span><span class="footer-contact">%data%</span></li>';
var HTMLfooterEmail = '<li class="flex-item"><a href="#" target="_blank" ' +
  'class="fontawesome footer-icon %icon%"></a><span class="footer-contact">' +
  '%data%</span></li>';
var HTMLfooterTwitter = '<li class="flex-item"><a href="#" target="_blank" ' +
  'class="fontawesome footer-icon %icon%"></a><span class="footer-contact">' +
  '%data%</span></li>';
var HTMLfooterGithub = '<li class="flex-item"><a href="#" target="_blank" ' +
  'class="fontawesome footer-icon %icon%"></a><span class="footer-contact">' +
  '%data%</span></li>';
var HTMLfooterLocation = '<li class="flex-item"><a href="#" target="_blank" ' +
  'class="fontawesome footer-icon %icon%"></a><span class="footer-contact">' +
  '%data%</span></li>';

var internationalizeButton = '<div class="internationalize-button"><button>' +
  'Internationalize</button></div>';
var googleMap = '<div id="map"></div>';
$('#mapDiv').append(googleMap);

$(document).ready(function() {
  $('button').click(function() {
    var names = $('#name').html();
    var namesArray = names.split(' ');
    for (var i = 0; i < namesArray.length; i++) {
      if (i === namesArray.length - 1) {
        namesArray[i] = namesArray[i].toUpperCase();
      } else {
        namesArray[i] = namesArray[i].substring(0, 1).toUpperCase() +
          namesArray[i].substring(1).toLowerCase();
      }
    }
    $('#name').html(namesArray.join(' '));
  })
});


clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

var map;

function initializeMap() {
  var locations;
  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    return locations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;
    var description = {
      Panama: 'The fastest growing economy and largest per capita consumer in' +
        ' Central America, Panama is home to one of the Seven Wonders of the ' +
        'Modern World that is the Panama Canal, and jungles filled with ' +
        'tropical plants and animals to be found nowhere else on the planet.',
      Chicago: 'The third most populous city in the United States, Chicago is' +
        ' an international hub for finance, commerce, industry, technology, ' +
        'telecommunications and transportation, with O\'Hare International ' +
        'Airport being the busiest airport in the world.',
      Nevada: 'Nevada is perhaps most famous for one of its cities: Las ' +
        'Vegas, billed as The Entertainment Capital of the World and famous ' +
        'for its mega casino-hotels and associated entertainment.',
      Rochester: 'New York\'s third most populous city after New York City ' +
        'and Buffalo, Rochester is now an international center of higher ' +
        'education, as well as medical and technological development.',
      'New York': 'One of the most populous urban agglomerations in the ' +
        'planet, New York City has been described as the cultural and ' +
        'financial capital of the world, with as many as 800 languages spoken' +
        ' in it, making it the most linguistically diverse city in the world.,',
      Ealing: 'A major suburban district of west London, Ealing is one of the' +
        ' major metropolitan centres identified in the London Plan and it ' +
        'could claim to be the home of rock music because of the catalyst ' +
        'effect of the Ealing Club of British musicians.'
    };
    for (city in description) {
        if (name.indexOf(city) != -1) {
          var descriptionString = description[city];
        }
    }

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      infoWindow: new google.maps.InfoWindow({
        content: name + '<br>' + descriptionString
      })
    });

    google.maps.event.addListener(marker, 'click', function() {
      this.infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);
    for (var place in locations) {
      var request = {
        query: locations[place]
      };
      service.textSearch(request, callback);
    }
  }
  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);

}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
