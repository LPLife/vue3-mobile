// main.js
const baseSize = window.innerWidth > 750 ? 12 : 16;
const scale = window.innerWidth / 375;
document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
export {};
