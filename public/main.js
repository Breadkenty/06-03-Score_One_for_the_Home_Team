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
  team1Score += 1
  document.querySelector('.team1 h3').textContent = team1Score
}

function team2AddPointToScore(event) {
  team2Score += 1
  document.querySelector('.team2 h3').textContent = team2Score
}

function team1SubtractPointToScore(event) {
  team1Score -= 1
  document.querySelector('.team1 h3').textContent = team1Score
}

function team2SubtractPointToScore(event) {
  team2Score -= 1
  document.querySelector('.team2 h3').textContent = team2Score
}

const main = () => {
  const team1Input = document.querySelector('.team1 input')
  team1Input.addEventListener('input', updateTeam1Value)

  const team2Input = document.querySelector('.team2 input')
  team2Input.addEventListener('input', updateTeam2Value)

  const team1AddPoint = document.querySelector('.team1 .add')
  team1AddPoint.addEventListener('click', team1AddPointToScore)

  const team2AddPoint = document.querySelector('.team2 .add')
  team2AddPoint.addEventListener('click', team2AddPointToScore)

  const team1SubtractPoint = document.querySelector('.team1 .subtract')
  team1SubtractPoint.addEventListener('click', team1SubtractPointToScore)

  const team2SubtractPoint = document.querySelector('.team2 .subtract')
  team2SubtractPoint.addEventListener('click', team2SubtractPointToScore)
}

document.addEventListener('DOMContentLoaded', main)
