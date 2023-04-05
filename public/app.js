const text = "Hello, World!";
let index = 0;

function type() {
  const element = document.getElementById("text");
  element.innerHTML = text.slice(0, index++);
  if (index > text.length) index = 0;
}

setInterval(type, 250); // adjust the interval time to change typing speed

window.onscroll = function() {
    var navigation = document.getElementById("navigation");
    var main = document.getElementById("main");

    if (window.pageYOffset >= navigation.offsetTop) {
        navigation.classList.add("sticky");
        navigation.classList.add("opaque");
        main.classList.add("content-sticky");
    } else {
        navigation.classList.remove("sticky");
        navigation.classList.remove("opaque");
        main.classList.remove("content-sticky");
    }
};

//Contact form
const contactForm = document.querySelector('.contact-form');

let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formInput = {
        fullName: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText === 'success'){
            alert('Email sent');
            fullName.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formInput));
});