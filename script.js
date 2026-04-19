const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const ranges = document.querySelectorAll('input[type="range"]');

// Play / Pause
function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

// Update button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Progress bar update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + '%';
}

// Scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Skip
function skip(amount) {
  video.currentTime += amount;
}

// Range controls
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Events
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

rewind.addEventListener('click', () => skip(-10));
forward.addEventListener('click', () => skip(25));

ranges.forEach(r => r.addEventListener('change', handleRangeUpdate));

progress.addEventListener('click', scrub);