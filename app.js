function api1FetchFunction(){
  fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40')
    .then(response1 => response1.json())
    .then(api1Function)
}
  
function populateQuotes() {
  document.getElementsByClassName('vote')[0].style.opacity='100'
  document.getElementsByClassName('vote')[1].style.opacity='100'
  document.getElementsByTagName('i')[0].classList.remove('fa-thumbs-down')
  document.getElementsByTagName('i')[1].classList.remove('fa-thumbs-down')
  api1FetchFunction()
  fetch('https://favqs.com/api/qotd')
    .then(response2 => response2.json())
    .then(api2Function)
}
  
document.querySelector('#submit').addEventListener('click', populateQuotes)
  
function api1Function(response1) {
  var randomizer = Math.floor((Math.random() * 39))
  if (randomizer == 34 || randomizer == 17 || randomizer == 31) {
    randomizer += 1
  }
  document.querySelector('#api1').innerHTML =  response1[randomizer].content + "<p class='author'>-"+ response1[randomizer].title + '</p>'
}
  
function api2Function(response2) {
  document.querySelector('#api2').innerHTML = '<p>' + response2.quote.body + '</p>' + "<p class='author'>-" + response2.quote.author + '</p>'
}
  
function myFunction(x) {
  x.classList.toggle('fa-thumbs-down')
}
  
function navToggle(event) {
  if (event.target.textContent === 'Brochure') {
    document.querySelector('#apiContainer').style.display='none',
    document.querySelector('#submit').style.visibility='hidden'
    document.querySelector('#brochureContainer').style.display='flex'
  } else {
    document.querySelector('#apiContainer').style.display='flex'
    document.querySelector('#submit').style.visibility='initial'
    document.querySelector('#brochureContainer').style.display='none'
  } document.getElementById('toggle').classList.remove('on')
  document.querySelector('#api1').innerHTML = ''
  document.querySelector('#api2').innerHTML = ''
  document.getElementsByClassName('vote')[0].style.opacity='0'
  document.getElementsByClassName('vote')[1].style.opacity='0'
}
  
  
  
// Menu Stuff from CodePen
  
var theToggle = document.getElementById('toggle')
  
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/
  
// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' '
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ')
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' '
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace( ' ' + className + ' ' , ' ' )
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  } else {
    elem.className += ' ' + className
  }
}
  
theToggle.onclick = function() {
  toggleClass(this, 'on')
  return false
}