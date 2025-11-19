// const popup = document.querySelector('.popup');


function closePopup() {
  const popup = document.querySelector('.popup');
  const viewport = document.getElementById("viewport");
  popup.style.display = 'none';
  viewport.style.display = 'block';
}
function showPopup() {
  const popup = document.querySelector('.popup');
  const viewport = document.getElementById("viewport");
viewport.style.display = 'none';
  popup.style.display = 'block';
}