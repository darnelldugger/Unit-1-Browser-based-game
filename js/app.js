/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let winner, timeOut


/*------------------------ Cached Element References ------------------------*/
const imageUpload = document.getElementById('image-area')
const scoreCount = document.getElementById('score-board')
const countDown = document.getElementById('time-clock')
const skipBtn = document.getElementById('next')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
let brettfavre = new Image(200,200)
brettfavre.src = 'images/brett-favre.jpg'
document.body.appendChild(brettfavre)
