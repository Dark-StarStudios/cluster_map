// Pan + Zoom
let scale = 1;
let originX = -100;
let originY = -100;
let startX, startY;
let isPanning = false;

const viewport = document.getElementById("viewport");
const map = document.getElementById("map");

map.style.transform = `translate(${originX}px, ${originX}px) scale(${scale})`;

viewport.addEventListener("mousedown", (e) => {
  if (!e.shiftKey) {
    isPanning = true;
    startX = e.clientX - originX;
    startY = e.clientY - originY;
    viewport.style.cursor = "grabbing";
  }
});

viewport.addEventListener("mousemove", (e) => {
  if (!isPanning) return;
  originX = e.clientX - startX;
  originY = e.clientY - startY;
  map.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
});

viewport.addEventListener("mouseup", () => {
  isPanning = false;
  viewport.style.cursor = "grab";
});

viewport.addEventListener("mouseleave", () => {
  isPanning = false;
  viewport.style.cursor = "grab";
});

viewport.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const rect = map.getBoundingClientRect();
  const offsetX = mouseX - rect.left;
  const offsetY = mouseY - rect.top;
  originX -= offsetX * (zoomFactor - 1);
  originY -= offsetY * (zoomFactor - 1);
  scale *= zoomFactor;
  map.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;

  map.style.setProperty('--zoom', scale);
});



//Для мобильных устройств
// Панорамирование (один палец)
viewport.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    isPanning = true;
    startX = e.touches[0].clientX - originX;
    startY = e.touches[0].clientY - originY;
  }
  // Два пальца → подготовка к зуму
  else if (e.touches.length === 2) {
    isPanning = false;
    lastDistance = getDistance(e.touches[0], e.touches[1]);
  }
});

viewport.addEventListener("touchmove", (e) => {
  e.preventDefault(); // блокируем скролл страницы

  // Панорамирование одним пальцем
  if (isPanning && e.touches.length === 1) {
    originX = e.touches[0].clientX - startX;
    originY = e.touches[0].clientY - startY;
    map.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
  }

  // Масштабирование двумя пальцами (pinch zoom)
  if (e.touches.length === 2) {
    const newDistance = getDistance(e.touches[0], e.touches[1]);
    const zoomFactor = newDistance / lastDistance;
    scale *= zoomFactor;

    // Центр зума — середина между пальцами
    const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    const rect = map.getBoundingClientRect();
    const offsetX = midX - rect.left;
    const offsetY = midY - rect.top;

    originX -= offsetX * (zoomFactor - 1);
    originY -= offsetY * (zoomFactor - 1);

    map.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
    map.style.setProperty('--zoom', scale);

    lastDistance = newDistance;
  }
});

viewport.addEventListener("touchend", () => {
  isPanning = false;
});

function getDistance(touch1, touch2) {
  const dx = touch1.clientX - touch2.clientX;
  const dy = touch1.clientY - touch2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}