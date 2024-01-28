let scoreStr=localStorage.getItem('Score')
let score;
resetScore();
function resetScore(scoreStr){
  score=scoreStr?JSON.parse(scoreStr):{
    win:0,
    lost:0,
    tie:0,
    
  }
  score.showScore= function(){
    return `score: win:${this.win} lost:${this.lost} tie:${this.tie}`
   
  }
  showAlert()
  
}
 

let computerChoice='';
   
   function GenerateComputerChoice(){
    let randomNumber=Math.random()*3;
    let computerChoice='';
    let result='';
    if(randomNumber>0 && randomNumber<=1)
    {  computerChoice='Bat';
    }
    else if(randomNumber>1&& randomNumber<=2){
      computerChoice='Ball'
    }else{
      computerChoice='Stump'
    }
    return computerChoice;
   }
   
function GetResult(userMove,computerMove){
  if(userMove==='Bat'){
    if(computerMove==='Bat'){
      score.tie++;
      return 'tie'
     }else if(computerMove==='Ball'){
      score.win++;
      return 'You won!'
     }else if(computerMove==='Stump'){
      score.lost++;
      return 'Computer Won!'
     } 
    
  }else if(userMove==='Ball'){
    if(computerMove==='Bat'){
      score.lost++;
      return'Computer Won!'
     }else if(computerMove==='Ball'){
      score.tie++;
      return`it's tie`
     }else if(computerMove==='Stump'){
      score.win++;
      return 'You Won!'
     }  

  }else{
    if(computerMove==='Bat'){
      score.win++;
      return'You Won!'
     }else if(computerMove==='Ball'){
      score.lost++;
      return `Computer Won!`
     }else if(computerMove==='Stump'){
      score.tie++;
      return `it's tie`
     }  
  }
}

function showAlert(userMove,computerChoice,resultmsg){
  localStorage.setItem('Score',JSON.stringify(score))
  document.querySelector('#won').innerHTML=userMove!==undefined?`you have choosen ${userMove}`:``;
  document.querySelector('#lost').innerHTML=computerChoice!==undefined?`Computer choose ${computerChoice}.`:``;
  document.querySelector('#score').innerHTML=score.showScore();
  document.querySelector('#result').innerHTML=resultmsg!==undefined?resultmsg:``;
   
}