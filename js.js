/* random page */
let links = [
	"main.html",
  "main2.html",
  "main3.html",
  "main4.html",
  "main5.html",
  "main6.html"
]

function redirect(){
window.open(
	links[
  Math.floor(
     Math.random() * links.length)])}
     

// sign.html
// check validity of the form
const firstname = document.getElementById("firstname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const color = document.getElementById("color");

// if something is wrong, display an error message
function check () {
  var valid = true, error = "", field = "";
field = document.getElementById("firstname");
error = document.getElementById("error_firstname");

if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter your first name.";
  firstname.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  firstname.style.borderColor = "var(--black)";
};

field = document.getElementById("username");
error = document.getElementById("error_username");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid username.";
  username.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  username.style.borderColor = "var(--black)";
};

field = document.getElementById("email");
error = document.getElementById("error_email");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter your e-mail.";
  email.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  email.style.borderColor = "var(--grey)";
};

field = document.getElementById("password");
error = document.getElementById("error_password");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Your password should have atleast 6 characters.";
  password.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  passowrd.style.borderColor = "var(--black)";
};

field = document.getElementById("color");
error = document.getElementById("error_color");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Choose the color of your avatar.";
  color.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  color.style.borderColor = "var(--black)";
};

return valid;
};


// map.html
// map
mapboxgl.accessToken = 'pk.eyJ1IjoienVyYW51IiwiYSI6ImNsOWdxNzhzMTA0YWUzbnI3N2Y1cmh2ZjUifQ.IuhHjcZZ3JZQrZE7HZ0-Fg';
// center of a map
const middle = [10.2032, 56.1565];
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/zuranu/clbjt23ph000y14mz5lxbq9pb',
center: middle,
zoom: 15,
});

// dontlookbackinanger
const anger = [10.206886, 56.159497];

const angerpopup = new mapboxgl.Popup({ offset: 60 }).setText('DONTLOOKBACKINANGER Klosterport 4, 8000 Aarhus');

const a = document.createElement('div');
a.classList = 'marker_anger';

new mapboxgl.Marker(a)
.setLngLat(anger)
.setPopup(angerpopup)
.addTo(map);

// volunteering backyard
const volunteer = [10.21237585526045, 56.16011596059823];

const volunteerpopup = new mapboxgl.Popup({ offset: 60 }).setText('VOLUNTEERING BACKYARD Mejlgade 53, 8000 Aarhus');

const b = document.createElement('div');
b.classList = 'marker_volunteer';

new mapboxgl.Marker(b)
.setLngLat(volunteer)
.setPopup(volunteerpopup)
.addTo(map);

// casa v58
const casa = [10.200898146615845, 56.15778786585845];

const casapopup = new mapboxgl.Popup({ offset: 60 }).setText('CASA V58 Vestergade 58, 8000 Aarhus');

const c = document.createElement('div');
c.classList = 'marker_casa';

new mapboxgl.Marker(c)
.setLngLat(casa)
.setPopup(casapopup)
.addTo(map);

// aarhus art academy
const academy = [10.202709520922474, 56.157256272605174];

const academypopup = new mapboxgl.Popup({ offset: 60 }).setText('AARHUS ART ACADEMY Vestergade 29, 8000 Aarhus');

const d = document.createElement('div');
d.classList = 'marker_academy';

new mapboxgl.Marker(d)
.setLngLat(academy)
.setPopup(academypopup)
.addTo(map);

// teatergaarden
const teater = [10.202051211969401, 56.157772594890986];

const teaterpopup = new mapboxgl.Popup({ offset: 60 }).setText('TEATERGAARDEN Vestergade 48, 8000 Aarhus ');

const e = document.createElement('div');
e.classList = 'marker_teater';

new mapboxgl.Marker(e)
.setLngLat(teater)
.setPopup(teaterpopup)
.addTo(map);

// godsbanen's rooftop
const rooftop = [10.194023063194779, 56.15347964656159];

const rooftoppopup = new mapboxgl.Popup({ offset: 60 }).setText("GODSBANEN'S ROOFTOP Skovgaardsgade 3, 8000 Aarhus");

const f = document.createElement('div');
f.classList = 'marker_rooftop';

new mapboxgl.Marker(f)
.setLngLat(rooftop)
.setPopup(rooftoppopup)
.addTo(map);

