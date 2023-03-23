
const text = "Hello, World!";
let index = 0;

function type() {
  const element = document.getElementById("text");
  element.innerHTML = text.slice(0, index++);
  if (index > text.length) index = 0;
}

setInterval(type, 150); // adjust the interval time to change typing speed



window.onscroll = function() {
    var navigation = document.getElementById("navigation");
    var main = document.getElementById("main");

    if (window.pageYOffset >= navigation.offsetTop) {
        navigation.classList.add("sticky");
        navigation.classList.add("opaque"); // add class to make nav bar opaque
        main.classList.add("content-sticky");
    } else {
        navigation.classList.remove("sticky");
        navigation.classList.remove("opaque"); // remove class to make nav bar transparent again
        main.classList.remove("content-sticky");
    }
};
