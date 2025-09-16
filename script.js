const palettes = {
  spring: ['#FFB6B9', '#FAE3D9', '#BBDED6', '#8AC6D1', '#FFD3B6'],
  summer: ['#A2D5F2', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7'],
  autumn: ['#FFAB91', '#FFCC80', '#FFE082', '#D7CCC8', '#8D6E63'],
  winter: ['#B39DDB', '#9575CD', '#7986CB', '#64B5F6', '#4DD0E1']
};

Object.entries(palettes).forEach(([season, colors]) => {
  const container = document.querySelector(`#${season} .swatches`);
  colors.forEach(color => {
    const swatch = document.createElement('div');
    swatch.style.backgroundColor = color;
    container.appendChild(swatch);
  });
});