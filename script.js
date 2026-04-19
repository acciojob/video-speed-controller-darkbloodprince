const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('.skip');
const ranges = player.querySelectorAll('.controls input');

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button icon
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + '%';
}

// Scrub video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Skip buttons
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Range inputs (volume, playback speed)
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

progress.addEventListener('click', scrub);