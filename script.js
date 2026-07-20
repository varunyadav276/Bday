document.getElementById('btn-start').addEventListener('click', startSequence);

function startSequence() {
  const screenPlay = document.getElementById('screen-play');
  const screenCandle = document.getElementById('screen-candle');
  
  // 1. Hide Play Screen & Show Candle Screen
  screenPlay.classList.add('opacity-0');
  setTimeout(() => {
    screenPlay.classList.add('hidden');
    screenCandle.classList.remove('hidden');
    runCountdown();
  }, 500);
}

function runCountdown() {
  const countdownText = document.getElementById('countdown-text');
  const candleBox = document.getElementById('candle-box');
  const screenCandle = document.getElementById('screen-candle');
  const screenCake = document.getElementById('screen-cake');
  const instruction = document.getElementById('cake-instruction');
  
  let count = 3;
  
  // Interval timer for 3, 2, 1
  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countdownText.innerText = `BLOW IN ${count}...`;
    } else if (count === 0) {
      countdownText.innerText = "BLOW! 🌬️";
      clearInterval(timer);
      
      // Execute zoom out animation after "BLOW!" text updates
      setTimeout(() => {
        candleBox.classList.add('zoom-out-active');
        screenCandle.classList.add('opacity-0');
        
        // Transition seamlessly to the stickman cake screen
        setTimeout(() => {
          screenCandle.classList.add('hidden');
          screenCake.classList.remove('hidden');
          
          // Let the animation play briefly, then fade in the instruction text
          setTimeout(() => {
            instruction.classList.remove('opacity-0');
          }, 1200);
          
        }, 1000);
      }, 1000);
    }
  }, 1000);
}

// 4. Cake Click Event -> Triggers Confetti & redirects
document.getElementById('cake-clickable').addEventListener('click', () => {
  // Fire birthday confetti explosion
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  // Brief delay so she sees the confetti before changing pages
  setTimeout(() => {
    // Replace dashboard.html with the actual file name of your dashboard/menu page later
    window.location.href = 'dashboard.html'; 
  }, 2000);
});
