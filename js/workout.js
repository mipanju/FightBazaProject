let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let cal_container = document.querySelector('.cal_container');

function sidebar_toggle() {
  sidebar.classList.toggle('active');
  cal_container.classList.toggle('active');
}

function sidebar_active() {
  sidebar.classList.add('active');
  cal_container.classList.add('active');
}

function sidebar_pasive() {
  sidebar.classList.remove('active');
  cal_container.classList.remove('active')
}
btn.onclick = sidebar_toggle;
