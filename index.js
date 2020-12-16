// document.addEventListener('click', () => {
//   event.preventDefault()
// })

// document.querySelector('h1').style.color = 'green'

// const app = document.querySelector('')

// const awd = document.querySelector('#awd')

const getUser = async () => {
  try {
    const res = await fetch('https://vk.com')
    const data = await res.json()
  } catch (e) {
    console.log(e)
  }
}

getUser()