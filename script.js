const btn = document.querySelector('#sendBtn');
const input = document.querySelector('#messageIn');
const message = document.querySelector('#messageOut');

btn.addEventListener('click' , submitMessage);

function submitMessage() {
  let content = input.value;

  if(content==="") {
    alert('please fill in the box');
  } else {
    message.innerHTML = content;
    input.value = "";
  };

  
};