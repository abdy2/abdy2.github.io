const header = document.getElementById('header');
const content = document.getElementById('content');
const chat = document.getElementById('area');
const code = document.getElementById('code');
const message = document.getElementById('messages');
const input = document.getElementById('input-message')
const send = document.getElementById('send-text')
var paral = document.getElementById("header");
var para2 = document.getElementById('animaa')

chat.style.display = 'none';
code.style.display = 'none';


function removeThings(){

  header.style.display = 'none';
  content.style.display = 'none';
  chat.style.display = 'flex';

code.style.display = 'flex';
}
console.log('nav loaded');






var today = new Date();
var month = today.toLocaleString('default', { month: 'long' });
var date = today.getDate();

const time = document.getElementById('time');
time.innerText = month +'  '+ date;

window.addEventListener("scroll", function () {
  var offset = window.pageYOffset;
  paral.style.transform = "translateY(" + (offset * 0.1) + "px)";
  para2.style.transform = "translateY(" + (offset * 0.25) + "px)";
})