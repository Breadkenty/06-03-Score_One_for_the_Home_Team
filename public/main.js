let team1Score = 0
let team2Score = 0

function updateTeam1Value(event) {
  const team1 = document.querySelector('.team1 h2')
  team1.textContent = event.target.value
}

function updateTeam2Value(event) {
  const team2 = document.querySelector('.team2 h2')
  team2.textContent = event.target.value
}

function team1AddPointToScore(event) {
  if (team1Score === 21) {
    team1Score = 21
    console.log('team1 wins')
  } else {
    team1Score += 1
    document.querySelector('.team1 h3').textContent = team1Score
  }
}

function team2AddPointToScore(event) {
  if (team2Score === 21) {
    team2Score = 21
    console.log('team2 wins')
  } else {
    team2Score += 1
    document.querySelector('.team2 h3').textContent = team2Score
  }
}

function team1SubtractPointToScore(event) {
  if (team1Score === 0) {
    team1Score = 0
  } else {
    team1Score -= 1
    document.querySelector('.team1 h3').textContent = team1Score
  }
}

function team2SubtractPointToScore(event) {
  if (team2Score === 0) {
    team2Score = 0
  } else {
    team2Score -= 1
    document.querySelector('.team2 h3').textContent = team2Score
  }
}

function resetPoints(event) {
  team1Score = 0
  team2Score = 0
  document.querySelector('.team1 h3').textContent = team1Score
  document.querySelector('.team2 h3').textContent = team2Score
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
}

document.addEventListener('DOMContentLoaded', main)
