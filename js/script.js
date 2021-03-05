const email = document.getElementById('email-input');
const button = document.getElementById('notify-btn');
const form = document.querySelector('.input-and-button');
const errorMsg = document.querySelector('.error');

form.addEventListener('submit', e => {
  

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email.value.match(regex)) {
    email.classList.add('border-success');
    email.classList.remove('border-error');
    errorMsg.style.display = 'none';
    alert('Email successfully sent!');
  } else {
    e.preventDefault();
    email.classList.add('border-error');
    errorMsg.style.display = 'block';
  }
})
