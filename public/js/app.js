document.querySelector('.menuBtn').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
  document.querySelector('.hamburger').classList.toggle('hidden')
  document.querySelector('.x').classList.toggle('hidden')
})
