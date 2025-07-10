let startTime = null;
let score = 0;

document.getElementById('romanInput').addEventListener('focus', () => {
  startTime = performance.now();
});

document.getElementById('submitBtn').addEventListener('click', async () => {
  const username = document.getElementById('usernameInput').value.trim();
  const roman = document.getElementById('romanInput').value.trim();

  if (!username || !roman) {
    alert("Please enter both name and Roman numeral");
    return;
  }

  const endTime = performance.now();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  try {
    const res = await fetch('/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roman })
    });

    const data = await res.json();

    if (!data.result) {
      alert("Conversion failed");
      return;
    }

    document.getElementById('resultText').textContent = `Result: ${data.result}`;
    document.getElementById('timer').textContent = timeTaken;

    score++;
    document.getElementById('scoreDisplay').textContent = score;

    await fetch('/solutions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        roman,
        result: data.result,
        time: timeTaken
      })
    });

    loadLeaderboard();
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
});

document.getElementById('resetBtn').addEventListener('click', async () => {
  score = 0;
  document.getElementById('scoreDisplay').textContent = 0;

  await fetch('/solutions/reset', { method: 'POST' });
  loadLeaderboard();
});

async function loadLeaderboard() {
  const res = await fetch('/solutions');
  const data = await res.json();

  const list = document.getElementById('leaderboardList');
  list.innerHTML = '';

  data.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = `${entry.username}: ${entry.roman} → ${entry.result} (${entry.time}s)`;
    list.appendChild(li);
  });
}

loadLeaderboard();
