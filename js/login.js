
document.getElementById('btn-login').addEventListener('click', function(event){
  event.preventDefault();
  console.log('js file is added');

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber);

  if( phoneNumber === '11' && pinNumber === '1234'){
    console.log('you are login now');
    window.location.href='/home.html';
  }
  else{
    console.log('worng number or pin nuber')
  }
})