/*-------------------------------- Constants --------------------------------*/
const qbList = [
{ name: "Brett Favre", image: "brett-favre.jpg"},
{ name: "Cam Newton",photo_url: "images/cam-newton.jpg" },

]
console.log(qbList[0].photo_url)
/*-------------------------------- Variables --------------------------------*/
let winner, timeOut


/*------------------------ Cached Element References ------------------------*/
const img = document.getElementById('image-area')
const scoreCount = document.getElementById('score-board')
const countDown = document.getElementById('time-clock')
const nextBtn = document.getElementById('next')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')

/*----------------------------- Event Listeners -----------------------------*/
nextBtn.addEventListener('click', (evt) =>{
  evt.preventDefault()
  render()
})

/*-------------------------------- Functions --------------------------------*/
init ()

function init () {

}

function render() {
  img.innerHTML = qbList[0].image
}


