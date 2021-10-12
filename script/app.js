function init() {
    const cells = document.querySelectorAll('.grid div')
    console.log(cells);
    console.log(cells[94]);
    const startButton = document.querySelector('.start')
    const resetButton = document.querySelector('.reset')
    const scoreText = document.querySelector('#score-span')
    const livesText = document.querySelector('#lives-span')


    const invadersMove = document.querySelectorAll('.invader')
    const invadersIndexBlock = [0, 2]

    console.log(invadersIndexBlock)
    console.log(invadersMove)

    //todo invader moveRight -->removeInvader else addInvader by one cell only at an interval of 2sec
    //todo invader moveLeft  -->removeInvader else addInvader by one cell only at an interval of 2 sec
    //todo Invader movedown  -->removeinvader else addInvader by oneCellOnly at an interval of 4.5sec


    let direction = 1
    let goingRight = true
    let invadersRemoved = []
    let invadersTiming



    // remove/add invaders

    // function removeInvader() {
    //     for (let i = 0; i < invadersMove.length; i++) {

    //         cells[invadersMove[i]].classList.remove('invader')
    //     }
    // }
    // removeInvader();
    // console.log(removeInvader);

    // function addInvader() {
    //     for (let = i; i < invadersMove.length; i++)
    //         if (invadersRemoved.includes(i)) {
    //             cells[invadersMove[i]].classList.add('invader')
    //             console.log(addInvader);
    //         }
    // }
    // addInvader();

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

}

// move Invaders

//         function moveInvaders() {
//             const leftEdge = invadersMove[0] % 10 === 0
//             const rightEdge = invadersMove[invadersMove.length - 1] % 10 === -1
//             removeInvader()

//             console.log(removeInvader);

//             // go right

//             if (rightEdge && goingRight) {

//                 for (let i = 0; i < invadersMove.length; i++) {

//                     invadersMove[i] += 10 + 1
//                     direction = -1
//                     goingRight = false
//                 }
//                 console.log(goingRight);
//             }


//             //go left

//             if (leftEdge && goingRight) {
//                 for (let i = 0; i < invadersMove.length; i++) {
//                     invadersMove[i] += 10 - 1
//                     direction = 1
//                     goingRight = true

//                 }
//                 console.log(goingRight);
//             }
//             for (let i = 0; i < invadersMove.length; i++) {
//                 invadersMove[i] += direction
//             }
//             addInvader()
//             console.log(moveInvaders);
//         }
//     }
//     moveInvaders()
//     invadersTiming = setInterval(moveInvaders, 1000)

// }

document.addEventListener('DOMContentLoaded', init)