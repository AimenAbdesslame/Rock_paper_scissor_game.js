
      
        /// buttons : 
        const container = document.querySelector('.container') ;
        const buttons = document.querySelector('.buttons') ;

        // playerChoice (to write the choice of the player )
        const allResults = document.getElementById('allResults'); 
        const playerChoice = document.getElementById('playerChoice');


       
      
        
        // Rock 
        const Rock = document.getElementById ('rock') ;
        Rock.addEventListener('click' , () => { 
            playRound ("rock" , getComputerChoice()) ;
            playerChoice.textContent = "Rock" ; 
        } 
        );
        
       
        // paper 
        const Paper = document.getElementById ('paper') ;
        Paper.addEventListener('click' , () => { 
            playRound ("paper" , getComputerChoice());
            playerChoice.textContent = "Paper" ; 
        } );

        // scissor 
        const Scissor = document.getElementById('scissor');
        Scissor.addEventListener ('click' , () => { 
            playRound("scissor" , getComputerChoice());
            playerChoice.textContent = "Scissor" ; 
        }) ;


       // counter : 
    
       let playerCounter = document.getElementById('playerCounter') ;
       let num1 = 0 ; 
       let computerCounter= document.getElementById('computerCounter');
       let num2 = 0 ; 



        function getComputerChoice(){
            let Choice = Math.floor(Math.random() * 3) + 1 ; // give a random number between 1 and 3
            const computerChoice = document.getElementById('computerChoice') ;
            if (Choice === 1) {
                computerChoice.textContent = "Rock";
                return "Rock" ;
            }else if (Choice === 2 ){
                computerChoice.textContent = "Paper";
                return "Paper" ; 
            }else {
                computerChoice.textContent = "Scissor";
                return "Scissor" ; 
            }
        }




        // function play one single round :
        function playRound (playerSelection , computerSelection){
            let NewplayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()  ; 
            // container : 
            
            // results
            const results = document.getElementById('results');

            if ((NewplayerSelection === "Rock" && computerSelection === "Scissor") || (NewplayerSelection === "Paper" && computerSelection === "Rock") || (NewplayerSelection === "Scissor" && computerSelection === "Paper")) {
                num1++;
                playerCounter.textContent=num1; 
               results.textContent = "You win " + NewplayerSelection + " beats " + computerSelection  ;
            } else if (NewplayerSelection === computerSelection ) {
                results.textContent = "Tie " + NewplayerSelection + " = " +computerSelection ;
            } else  {
                num2 ++  ;
                computerCounter.textContent = num2 ; 
                results.textContent = "You lose " + computerSelection + " beats " + NewplayerSelection  ;   
                
            }
        }





        

        const playagain = document.getElementById('playagain');
        playagain.addEventListener('click' ,() => {
            num1 = 0 ; 
            num2 = 0 ; 
            computerCounter.textContent = num1  ; 
            playerCounter.textContent = num2 ; 
        } 
         ) ;



        /*
        // function game repeat 5 times : 
        function game() {
                 
                const computerSelection = getComputerChoice() ; 
                let result_of_this_round = playRound(playerSelection , computerSelection ) ;
                console.log("Choice of computer : "+ computerSelection) ;
                console.log("Your Choice        : "+ playerSelection  ) ;
                console.log (result_of_this_round) ;
                let playRounde = playRound(playerSelection , computerSelection); 
               
            }

        




        
       
        game(); */


  


