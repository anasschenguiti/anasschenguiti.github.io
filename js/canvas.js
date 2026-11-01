// Architectural & Software Engineering Grid Canvas — Blueprint Navy
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    drawGuidelines();
  }

  window.addEventListener('resize', resize);

  function drawGuidelines() {
    ctx.clearRect(0, 0, width, height);

    // 1. Subtle Vertical Drafting Guide Lines (aligned to blueprint grid)
    const guideX = Math.round(width * 0.10);
    const guideX2 = Math.round(width * 0.90);
    ctx.strokeStyle = 'rgba(30, 43, 71, 0.45)';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.moveTo(guideX, 0);
    ctx.lineTo(guideX, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(guideX2, 0);
    ctx.lineTo(guideX2, height);
    ctx.stroke();

    // 2. Subtle edge tick marks every 120px (major grid alignment)
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.09)';
    ctx.lineWidth = 1;
    const tickStep = 120;

    for (let x = 0; x < width; x += tickStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 4);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += tickStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(4, y);
      ctx.stroke();
    }
  }

  resize();
})();
