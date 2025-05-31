let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // pehle wale interval ko roke

  const input = document.getElementById('birthday').value;
  if (!input) {
    alert("Please enter your birthday!");
    return;
  }

  const now = new Date();
  let birthday = new Date(input);

  // Agla birthday calculate karo
  birthday.setFullYear(now.getFullYear());

  if (birthday < now) {
    birthday.setFullYear(now.getFullYear() + 1);
  }

  countdownInterval = setInterval(function () {
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = "🎉 Happy Birthday! 🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);
}
