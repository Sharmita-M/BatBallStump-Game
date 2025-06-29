 let score;
        let scoreStr = localStorage.getItem('Score')

        resetScore(scoreStr);
        function resetScore(scoreStr) {
            score = scoreStr ? JSON.parse(scoreStr) : {
                win: 0,
                lose: 0,
                tie: 0,
            }
            score.displayScore = function () {
                return `👑 : ${score.win}. 💔: ${score.lose}. 🪢: ${score.tie}.`
            };

            showResult();
        }

        function generateComputerChoice() {
            let randomNumber = Math.random() * 3;
            if (randomNumber > 0 && randomNumber <= 1) {
                return 'Bat';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                return 'Ball';
            } else {
                return 'Stump';
            }
        }

        function getResult(userMove, computerMove) {
            if (userMove === 'Bat') {
                if (computerMove === 'Ball') {
                    score.win++;
                    return 'You win 🥳️!!!';
                } else if (computerMove === 'Stump') {
                    score.lose++;
                    return 'computer win 😔.';
                } else {
                    score.tie++;
                    return 'Its tie, Play again 💁‍♂️.';
                }
            } else if (userMove === 'Ball') {
                if (computerMove === 'Ball') {
                    score.tie++;
                    return 'Its tie, Play again 💁‍♂️.';
                } else if (computerMove === 'Bat') {
                    score.lose++;
                    return 'computer win 😔.';
                } else {
                    score.win++;
                    return 'You win 🥳️!!!';
                }
            } else {
                if (computerMove === 'Stump') {
                    score.tie++;
                    return 'Its tie, Play again 💁‍♂️.';
                } else if (computerMove === 'Bat') {
                    score.lose++;
                    return 'computer win 😔.';
                } else {
                    score.win++;
                    return 'You win 🥳️!!!';
                }
            }
        }



        function showResult(userMove, computerMove, result) {

            localStorage.setItem('Score', JSON.stringify(score));

            document.querySelector('#user_move').innerHTML = userMove ?  `You have chosen: ${userMove}.` : '';
            document.querySelector('#computer_move').innerHTML =computerMove ? `Computer chosen: ${computerMove}.` : '';
            document.querySelector('#result').innerHTML = result || '';
            document.querySelector('#score').innerHTML = score.displayScore();
        }