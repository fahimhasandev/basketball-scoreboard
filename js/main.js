// get the text of one
homeText = document.querySelector(".home-text")
guestText = document.querySelector(".guest-text")
homeBtnReset = document.querySelector(".home-btn-reset")
guestBtnReset = document.querySelector(".guest-btn-reset")

function homeAddOne() {
  let getHomeText = +homeText.textContent
  homeText.textContent = getHomeText + 1
}
function homeAddTwo() {
  let getHomeText = +homeText.textContent
  homeText.textContent = getHomeText + 2
}
function homeAddThree() {
  let getHomeText = +homeText.textContent
  homeText.textContent = getHomeText + 3
}

function guestAddOne() {
  let guestHomeText = +guestText.textContent
  guestText.textContent = guestHomeText + 1
}
function guestAddTwo() {
  let guestHomeText = +guestText.textContent
  guestText.textContent = guestHomeText + 2
}

function guestAddThree() {
  let guestHomeText = +guestText.textContent
  guestText.textContent = guestHomeText + 3
}
//reset home
function resetForHome() {
  homeText.textContent = 0
}
//reset Guest
function resetForGuest() {
  guestText.textContent = 0
}
