function init() {
    const cells = document.querySelectorAll('.grid div')
    console.log(cells);
    console.log(cells[94]);
    const startButton = document.querySelector('.start')
    const resetButton = document.querySelector('.reset')
    const scoreText = document.querySelector('#score-span')
    const livesText = document.querySelector('#lives-span')
    const scoretDisplay = document.querySelector('.score')


    const invadersMove = document.querySelectorAll('.invader')
    let invadersIndexBlock = 0

    console.log(invadersIndexBlock)
    console.log(invadersMove)

    //todo invader moveRight -->removeInvader else addInvader by one cell only at an interval of 2sec
    //todo invader moveLeft  -->removeInvader else addInvader by one cell only at an interval of 2 sec
    //todo Invader movedown  -->removeinvader else addInvader by oneCellOnly at an interval of 4.5sec


    let direction = 1
    let goingRight = true
    let invadersRemoved = []
    let invadersStop
    let lives = 3
    let score = 0




    // remove/add invaders

    function removeInvader(invadersMove) {


        cells[invadersIndexBlock].classList.remove('invader')

    }


    removeInvader()
    console.log(removeInvader)

    function addInvader() {
        cells[invadersIndexBlock].classList.add('invader')
        console.log(addInvader);
    }

    addInvader();

    let currentSpaceshipIndex = 94


    // todo move spaceship left/right

    function moveSpaceShip(e) {

        cells[currentSpaceshipIndex].classList.remove('spaceShip')

        console.log(e.key)
        console.log(currentSpaceshipIndex % 10);
        switch (e.key) {
            case 'ArrowLeft':
                if (currentSpaceshipIndex % 10 != 0) currentSpaceshipIndex -= 1

                break

            case 'ArrowRight':
                if (currentSpaceshipIndex % 10 != 9) currentSpaceshipIndex += 1
                break


        }
        cells[currentSpaceshipIndex].classList.add('spaceShip')

    }

    document.addEventListener('keydown', moveSpaceShip)

    //todo Move invaders



    // setInterval(function() {
    // function moveInvaders() {

    //     const leftEdge = invadersMove[0] % 10 === 0
    //     const rightEdge = invadersMove[invadersMove.length - 1] % 9 === -1
    //     removeInvader()

    //     //clearInterval(invadersMove)

    //     if (invadersIndexBlock += 0 + 2) {
    //         direction = -1
    //         goingRight = false
    //             //addInvader(invadersIndexBlock)

    //         if (invadersIndexBlock -= 2 - 1) {

    //             direction = 1
    //             goingRight = true
    //                 //removeInvader(invadersIndexBlock)


    //         }
    //         if (invadersIndexBlock > 89) {
    //             scoretDisplay.innerHTML = 'GAME OVER'
    //             clearInterval(invadersStop)
    //                 //removeInvader(invadersIndexBlock)
    //         }

    //     }
    //     addInvader(invadersIndexBlock)
    //         // }, 1000)




    //     if (invadersRemoved.length === invadersMove.length) {
    //         scoreDisplay.innerHTML = 'YOU WIN'
    //         clearInterval(invadersStop)
    //     }

    // }


    // invadersStop = setInterval(moveInvaders, 300)

    //todo laser shoot

    function shoot(e) {
        let laserID
        let currentLaserIndex = currentSpaceshipIndex
        console.log(e.key)
        console.log(currentLaserIndex % 10)

        goingUp = true
        direction = -1

        function moveLaser() {

            cells[currentLaserIndex].classList.remove('laser')

            switch (e.key) {
                case 'ArrowUp':

                    currentLaserIndex -= 10


                    if (cells[currentLaserIndex].classList.contains('invader')) {
                        //cells[currentLaserIndex].classList.remove('laser')
                        cells[currentLaserIndex].classList.remove('invader')

                        const invadersRemoved = invadersIndexBlock.indexOf(currentLaserIndex)
                        invadersRemoved.push(invadersRemoved)
                        score += 100
                        scoretDisplay.innerHTML = score
                        console.log(invadersRemoved);


                    }


            }
            cells[currentLaserIndex].classList.add('laser')


            if (currentLaserIndex < 10) {
                clearInterval(laserId)
            }

        }
        moveLaser()
        laserID = setInterval(moveLaser, 100)
    }
    document.addEventListener('keydown', shoot)
    console.log('ArrowUp')
}

document.addEventListener('DOMContentLoaded', init)