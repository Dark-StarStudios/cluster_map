// Init
window.addEventListener("DOMContentLoaded", () => {
  galaxyData = generateGalaxyData();
  renderGalaxies(galaxyData);
  fetch('3187.json')
  .then(response => response.json())
  .then(data => {
    const galaxyData = data;
    renderGalaxies(galaxyData);
  })
  .catch(error => console.error('Ошибка загрузки JSON:', error));

});
