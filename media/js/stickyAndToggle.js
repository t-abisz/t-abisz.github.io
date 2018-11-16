//cache for buttons
const cacheClass = {
  openMenu: document.querySelector('.nav__icon'),
  headerSticky: document.querySelector('.header')
}
//sticky on scroll
const headerScroll = cacheClass.headerSticky.offsetTop
window.onscroll = () => sticky();
function sticky() {
  if(window.pageYOffset > headerScroll) {
    cacheClass.headerSticky.classList.add('sticky')
    } else {
      cacheClass.headerSticky.classList.remove('sticky')
      }
}
//open/close menu
const bodyToggle = document.querySelector('body')
const iconToggle = document.querySelector('.navOpen')
cacheClass.openMenu.addEventListener('click', () => {
  cacheClass.openMenu.classList.toggle('open')
  bodyToggle.classList.toggle('overflow')
  iconToggle.classList.toggle('height')
})
