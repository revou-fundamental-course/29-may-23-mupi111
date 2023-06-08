var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

var contactForm = document.getElementById('contactForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var messageInput = document.getElementById('message');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var phoneError = document.getElementById('phoneError');
var messageError = document.getElementById('messageError');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Nama harus diisi';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email harus diisi';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (phoneInput.value.trim() === '') {
    phoneError.textContent = 'Nomor Telepon harus diisi';
    isValid = false;
  } else {
    phoneError.textContent = '';
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Pesan harus diisi';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  if (isValid) {
    // Kirim formulir ke server atau lakukan tindakan lainnya
    contactForm.submit();
  }
});
