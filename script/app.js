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
        //for (let i = 0; i < invadersMove.length; i++) {

        cells[invadersIndexBlock].classList.remove('invader')

    }
    //}

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
    function moveInvaders() {

        const leftEdge = invadersMove[0] % 10 === 0
        const rightEdge = invadersMove[invadersMove.length - 1] % 9 === -1
        removeInvader()

        //clearInterval(invadersMove)

        if (invadersIndexBlock += 0 + 2) {
            direction = -1
            goingRight = false
                //addInvader(invadersIndexBlock)

            if (invadersIndexBlock -= 2 - 1) {

                direction = 1
                goingRight = true
                    //removeInvader(invadersIndexBlock)

            }

        }
        addInvader(invadersIndexBlock)
            // }, 1000)

        //todo invaders reaching bottom edge

        // if (cells[invadersIndexBlock].classList.contains('invader', 'spaceShip')) {
        //     scoretDisplay.innerHTML = 'GAME OVER'
        //     clearInterval(invadersStop)
        // }


        // for (let i = 0; i < invadersMove.length; i++) {
        //     if (invadersMove[i] > (cells.length)) {
        //         scoreDisplay.innerHTML = 'GAME OVER'
        //         clearInterval(invadersStop)
        //     }
        // }
        // if (invadersRemoved.length === invadersMove.length) {
        //     scoreDisplay.innerHTML = 'YOU WIN'
        //     clearInterval(invadersStop)
        // }

    }


    invadersStop = setInterval(moveInvaders, 1000)
}

document.addEventListener('DOMContentLoaded', init)