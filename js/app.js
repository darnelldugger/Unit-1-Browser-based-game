/*-------------------------------- Constants --------------------------------*/
const qbList = {
  image: "../images/brett-favre.jpg",
  choices: ["Tom Brady", "Jim Kelly", "Greg Flaukler", "Brett Farve"],
  correctAnswer: "Brett Favre"
}
console.log(qbList)
/*-------------------------------- Variables --------------------------------*/
let winner, timeOut


/*------------------------ Cached Element References ------------------------*/
const imageQuest = document.getElementById('image-area')
const scoreCount = document.getElementById('score-board')
const nextBtn = document.getElementById('next')
const countDown = document.getElementById('time-clock')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')

/*----------------------------- Event Listeners -----------------------------*/
nextBtn.addEventListener('click', (evt) =>{
  evt.preventDefault()
  render()
})

/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
}
render()

function render(){
  // imageQuest.src = qbList.image
  const img =document.createElement("img")
  img.src = qbList.image 
  imageQuest.appendChild(img)
}

