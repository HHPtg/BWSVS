const name1 = document.getElementById('name')
const select1 = document.getElementById('vote1')
const select2 = document.getElementById('vote2')

select1.addEventListener('click', () => {
  document.getElementById('vote1').classList.toggle('active')
})

select2.addEventListener('click', () => {
  document.getElementById('vote2').classList.toggle('active')
})

name1.addEventListener('input', e => {
  console.log(e.target.value)
})
