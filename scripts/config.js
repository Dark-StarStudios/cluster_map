class  Config {
    constructor() {
        this.map = {
            width: 1920,
            height: 1920,
            numGalaxies: 1000,
            imageFiles: [
                'galaxies/blue.svg',
                'galaxies/red.svg',
                'galaxies/white.svg',
                'galaxies/yellow.svg'
            ]
        }
        this.galaxyData = [];
        this.currentEmpireColor = "#000000";
        this.currentAlpha = 0.5;
        this.develop = true;
    }

    static getRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    static generateName() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const first = letters[Math.floor(Math.random() * letters.length)];
      const second = Math.random() < 0.5 ? letters[Math.floor(Math.random() * letters.length)] : '';
      const number = Math.floor(Math.random() * 1000);
      return `${first}${second}${number}`;
    }
}

// const width = 1920;
// const height = 1080;
// const numGalaxies = 1000;
// const imageFiles = ['galaxies/blue.svg', 'galaxies/red.svg', 'galaxies/white.svg', 'galaxies/yellow.svg'];
// let galaxyData = [];
// let currentEmpireColor = "#000000";
// let currentAlpha = 0.5;

// function getRgba(hex, alpha) {
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }

// function generateName() {
//   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const first = letters[Math.floor(Math.random() * letters.length)];
//   const second = Math.random() < 0.5 ? letters[Math.floor(Math.random() * letters.length)] : '';
//   const number = Math.floor(Math.random() * 1000);
//   return `${first}${second}${number}`;
// }