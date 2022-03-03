/* Global HTMLElement */
const price = {
  basic: document.getElementById("basic"),
  professional: document.getElementById("professional"),
  master: document.getElementById("master")
}
const toggle__btn = document.querySelector(".toggle__btn")
const toggle__mover = document.querySelector(".toggle__mover")

/* EventListener */
toggle__btn.addEventListener('click', event => {
  event.preventDefault()

  toggle__mover.classList.remove("toggle__mover--"+curState)
  if (curState === "monthly") {
    curState = "annually"
  }else {
    curState = "monthly"
  }
  toggle__mover.classList.add("toggle__mover--"+curState)

  changeState()
})

/* Utils Function */
async function fetchData(){
  const response = await fetch("public/data.json")
  return response.json()
}

function changeState() {
  for (const key of Object.keys(price)){
    price[key].innerText = data[curState][key]
  }
}

/* Initial */
let curState = "monthly"
let data = {}

fetchData().then(responseData => {
  data = responseData
  toggle__mover.classList.add("toggle__mover--"+curState)
  changeState()
})
