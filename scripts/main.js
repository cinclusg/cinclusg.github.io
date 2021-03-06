// switch image on click
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/robin-icon.JPG');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

// allow enter, display and localstorage of user name
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mike is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mike is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}



