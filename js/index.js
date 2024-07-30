document.addEventListener("DOMContentLoaded", () => {
  let burgerButton = document.getElementById('burger-button')
  let sideNavigation = document.getElementById('side-navigation')

  burgerButton.addEventListener('click', function() {
    let burgerLines = document.querySelector('.burger-1')
    burgerButton.classList.toggle('burger-active')
    burgerLines.classList.toggle('is-closed')
    sideNavigation.classList.toggle('side-is-visible')
  })
});