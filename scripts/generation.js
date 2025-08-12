const config = new Config();
const { width, height, numGalaxies, imageFiles } = config.map;

function generateGalaxyData() {
  const data = [];
  for (let i = 0; i < numGalaxies; i++) {
    data.push({
      id: crypto.randomUUID(),
      name: Config.generateName(),
      view: false,
      x: Math.random() * width,
      y: Math.random() * height,
      scale: 0.05 + Math.random() * 0.08,
      rotation: Math.random() * 360,
      image: imageFiles[Math.floor(Math.random() * imageFiles.length)],
      background: 'transparent'
    });
  }
  return data;
}