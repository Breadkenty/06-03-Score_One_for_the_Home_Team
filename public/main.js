let team1Score = 0
let team2Score = 0
const startTime = 10
let timeLeft = startTime * 60

function updateTeam1Value(event) {
  const team1 = document.querySelector('.team1 h2')
  team1.textContent = event.target.value
}

function updateTeam2Value(event) {
  const team2 = document.querySelector('.team2 h2')
  team2.textContent = event.target.value
}

function team1AddPointToScore() {
  if (team1Score === 21) {
    team1Score = 21
    console.log('team1 wins')
  } else {
    team1Score += 1
    document.querySelector('.team1 h3').textContent = team1Score
  }
}

function team2AddPointToScore() {
  if (team2Score === 21) {
    team2Score = 21
    console.log('team2 wins')
  } else {
    team2Score += 1
    document.querySelector('.team2 h3').textContent = team2Score
  }
}

function team1SubtractPointToScore() {
  if (team1Score === 0) {
    team1Score = 0
  } else {
    team1Score -= 1
    document.querySelector('.team1 h3').textContent = team1Score
  }
}

function team2SubtractPointToScore() {
  if (team2Score === 0) {
    team2Score = 0
  } else {
    team2Score -= 1
    document.querySelector('.team2 h3').textContent = team2Score
  }
}

function resetPoints() {
  team1Score = 0
  team2Score = 0
  document.querySelector('.team1 h3').textContent = team1Score
  document.querySelector('.team2 h3').textContent = team2Score
}

function nextQuarter() {
  switch (document.querySelector('.quarter span').textContent) {
    case '1st':
      document.querySelector('.quarter span').textContent = '2nd'
      break
    case '2nd':
      document.querySelector('.quarter span').textContent = '3rd'
      break
    case '3rd':
      document.querySelector('.quarter span').textContent = '4th'
      break
  }
}

const startTimer = () => {
  setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval((document.querySelector('.timer p').textContent = '0:00'))
      timeLeft = 600
      nextQuarter()
    } else {
      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      document.querySelector('.timer p').textContent = `${minutes}:${seconds}`
      timeLeft--
    }
  }, 1000)
}

const main = () => {
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Value)

  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Value)

  document
    .querySelector('.team1 .add')
    .addEventListener('click', team1AddPointToScore)

  document
    .querySelector('.team2 .add')
    .addEventListener('click', team2AddPointToScore)

  document
    .querySelector('.team1 .subtract')
    .addEventListener('click', team1SubtractPointToScore)

  document
    .querySelector('.team2 .subtract')
    .addEventListener('click', team2SubtractPointToScore)

  document.querySelector('.reset input').addEventListener('click', resetPoints)

  document
    .querySelector('.quarter input')
    .addEventListener('click', nextQuarter)

  document
    .querySelector('.sub-menu input')
    .addEventListener('click', startTimer)
  // document.querySelector('.stop').addEventListener('click', startTimer(true))
}

document.addEventListener('DOMContentLoaded', main)
