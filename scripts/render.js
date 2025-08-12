function renderGalaxies(data) {
  const container = document.getElementById("galaxy-container");
  container.innerHTML = '';
  data.forEach((g) => {
    const wrapper = document.createElement("div");
    wrapper.className = "galaxy-wrapper";
    wrapper.style.left = `${g.x}px`;
    wrapper.style.top = `${g.y}px`;
    wrapper.style.transform = `scale(${g.scale})`;
    wrapper.style.background = g.background;

    const img = document.createElement("img");
    img.src = g.image;
    img.className = "galaxy";
    img.style.transform = `rotate(${g.rotation}deg)`;

    const label = document.createElement("div");
    label.className = "galaxy-name";
    label.textContent = g.name;
    if (g.view) label.classList.add("always-visible");

    if(config.develop){
      wrapper.addEventListener("click", (e) => {
        if (!e.shiftKey) {
          try {
            g.background = Config.getRgba(currentEmpireColor, currentAlpha);
            renderGalaxies(galaxyData);
          } catch (error) {
            console.warn("You must select a color first.");
          }
        }
      });
    }

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
}

function ChangeMap(name) {
  fetch(name)
    .then(response => response.json())
    .then(data => {
      galaxyData = data;
      renderGalaxies(galaxyData);
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error));
}