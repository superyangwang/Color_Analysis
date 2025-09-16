const palettes = ['spring', 'summer', 'autumn', 'winter'];

palettes.forEach(palette => {
  const container = document.querySelector(`.swatches.${palette}`);
  for (let i = 0; i < 8; i++) {
    const swatch = document.createElement('div');
    container.appendChild(swatch);
  }
});