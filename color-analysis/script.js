let currentStep = 1;

function nextStep() {
  document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
  currentStep++;
  document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
}

function showResult() {
  const hair = document.getElementById('hair').value;
  const eyes = document.getElementById('eyes').value;
  const skin = document.getElementById('skin').value;

  let palette = 'Neutral tones';

  if (hair === 'blonde' && eyes === 'blue' && skin === 'fair') {
    palette = 'Cool Summer: Soft blues, lavenders, and rose pinks';
  } else if (hair === 'black' && skin === 'olive') {
    palette = 'Deep Winter: Jewel tones like emerald, ruby, and sapphire';
  } else if (hair === 'red' && skin === 'fair') {
    palette = 'Warm Autumn: Earthy tones like rust, mustard, and olive green';
  }

  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('palette').textContent = palette;
}