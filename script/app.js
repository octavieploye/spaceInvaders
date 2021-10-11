function init() {
    const cells = document.querySelectorAll('.grid div')
    console.log(cells);
    console.log(cells[94]);
    const startButton = document.querySelector('.start')
    const resetButton = document.querySelector('.reset')
    const scoreText = document.querySelector('#score-span')
    const livesText = document.querySelector('#lives-span')


    const invadersMove = document.querySelectorAll('.invader')
    const invadersIndexBlock = [0, 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28, 31, 33, 35, 37, 39]

    console.log(invadersIndexBlock[0])

    function removeInvader() {


        console.log(invadersMove.classList)
        console.log(invadersMove[19]);

        invadersMove[19].classList.remove('invader')
    }

    removeInvader()

    let currentSpaceshipIndex = 94
    let direction = 1
    let goingRight = true
        // let invaderRemoved: []


    function moveSpaceShip(e) {

        cells[currentSpaceshipIndex].classList.remove('spaceShip')

        console.log(e.key);
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


}
document.addEventListener('DOMContentLoaded', init)