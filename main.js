let myChoice = document.querySelector("#choice");
let btns = document.querySelector("div").childNodes
let playerChoice = "";
btns.forEach((btn) => {
    btn.addEventListener("click", function(e){
        myChoice.innerText = "your Choice: " + this.innerText
        playerChoice=this.innerText
    })
});
let getBot = () => {
    let Choices = ["Rock", "Paper", "Scissors"]
    let randomNum = Math.floor(Math.random()*3)
    return Choices[randomNum]
}

let bPoints = 0;
let pPoints = 0;
let playBtn = document.getElementById("play")
let score = document.getElementById("score")
playBtn.addEventListener("click", () => {
    let bot = getBot()
    let player = playerChoice
    let result = bot=="Rock" && player=="Scissors"||bot=="Paper" && player=="Rock"||bot=="Scissors" && player=="Paper" ? 1 : bot==player ? 2 : 3
    switch(result){
        case 1: bPoints++;
        break;
        case 3: pPoints++
        break;
        default: return
    }
    score.innerHTML = `You ${pPoints}:${bPoints} Bot`
    if(bPoints>4){
        score.innerText = "You loose!"
    }
    if(pPoints>4) score.innerText = "You win!!!"
})
