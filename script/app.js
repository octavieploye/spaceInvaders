function init() {
    const cells = document.querySelectorAll(".grid div");
    const startButton = document.querySelector(".start");
    const resetButton = document.querySelector(".reset");
    const scoreText = document.querySelector("#score-span");
    const livesText = document.querySelector("#lives-span");
    const scoretDisplay = document.querySelector(".score");

    const invadersMove = document.querySelectorAll(".invader");
    //const aliensIndicesRow1 = [0, 2, 4, 6, 8, 11, 13, 15, 17, 22, 24, 26, 28]


    let direction = 1;
    let invadersIndexBlock = 0
    let invadersRemoved = [];
    let invadersStop;
    let lives = 3;
    let score = 0;

    function start() {
        invadersStop = setInterval(moveInvaders, 1000)
            //invadersStop = setInterval(moveInvaders2, 1000)
    }

    function reset() {


        window.location.reload()
        clearInterval(invadersStop)
        console.log(reset)

    }


    //todo remove/add invaders

    function removeInvader(invadersMove) {
        cells[invadersIndexBlock].classList.remove("invader");
    }

    removeInvader();
    console.log(removeInvader);

    function addInvader() {
        cells[invadersIndexBlock].classList.add("invader");
        console.log(addInvader)
    }

    addInvader();

    let currentSpaceshipIndex = 94;

    // todo move spaceship left/right

    function moveSpaceShip(e) {
        cells[currentSpaceshipIndex].classList.remove("spaceShip");

        console.log(e.key);
        console.log(currentSpaceshipIndex % 10);
        switch (e.key) {
            case "ArrowLeft":
                if (currentSpaceshipIndex % 10 != 0) currentSpaceshipIndex -= 1;

                break;

            case "ArrowRight":
                if (currentSpaceshipIndex % 10 != 9) currentSpaceshipIndex += 1;
                break;
        }
        cells[currentSpaceshipIndex].classList.add("spaceShip");
    }

    document.addEventListener("keydown", moveSpaceShip);

    //todo Move invaders



    //todo Robin version

    function moveInvaders() {
        // const leftEdge = invadersMove[0] % 10 === 0;
        // const rightEdge = invadersMove[invadersMove.length] % 9 === -1;
        removeInvader();

        invadersIndexBlock += direction


        if (invadersIndexBlock === 10) {

            direction = -direction;
            invadersIndexBlock += 9

        }
        if (invadersIndexBlock > 89) {
            scoretDisplay.innerHTML = "GAME OVER";
            clearInterval(invadersStop);
            //removeInvader(invadersIndexBlock)
        }

        addInvader(invadersIndexBlock);


        if (invadersRemoved.length === invadersMove.length) {
            scoreDisplay.innerHTML = "YOU WIN";
            clearInterval(invadersStop);
        }
    }

    //invadersStop = setInterval(moveInvaders, 1000);

    //todo invader 2
    let invadersIndexBlock2 = 2

    //todo remove/add invaders

    function removeInvader2(invadersMove) {
        cells[invadersIndexBlock2].classList.remove("invader");
    }

    removeInvader2();


    function addInvader2() {
        cells[invadersIndexBlock2].classList.add("invader");

    }

    addInvader2();

    //todo Move invaders 2

    function moveInvaders2() {
        // const leftEdge = invadersMove[0] % 10 === 0;
        // const rightEdge = invadersMove[invadersMove.length - 1] % 9 === -1;
        removeInvader2();

        invadersIndexBlock2 += direction


        if (invadersIndexBlock2 === 10) {

            direction = -direction;
            invadersIndexBlock2 += 9
        }
        if (invadersIndexBlock2 > 89) {
            scoretDisplay.innerHTML = "GAME OVER";
            clearInterval(invadersStop);
            //removeInvader(invadersIndexBlock)
        }

        addInvader2(invadersIndexBlock2);


        if (invadersRemoved.length === invadersMove.length) {
            scoreDisplay.innerHTML = "YOU WIN";
            clearInterval(invadersStop);
        }
    }

    //invadersStop = setInterval(moveInvaders2, 1000);


    //     //todo invader 4

    let invadersIndexBlock4 = 4

    // //todo remove/add invaders

    function removeInvader4(invadersMove) {
        cells[invadersIndexBlock4].classList.remove("invader");
    }

    removeInvader4();
    console.log(removeInvader4);

    function addInvader4() {
        cells[invadersIndexBlock4].classList.add("invader");
        console.log(addInvader4)
    }

    addInvader4();

    // //todo Move invaders4

    function moveInvaders4() {
        // const leftEdge = invadersMove[0] % 10 === 0;
        // const rightEdge = invadersMove[invadersMove.length - 1] % 9 === -1;
        removeInvader4();

        invadersIndexBlock4 += direction


        if (invadersIndexBlock4 === 10) {

            direction = -direction;
            invadersIndexBlock4 += 9
        }
        if (invadersIndexBlock4 > 89) {
            scoretDisplay.innerHTML = "GAME OVER";
            clearInterval(invadersStop);
            //removeInvader(invadersIndexBlock)
        }

        addInvader4(invadersIndexBlock4);


        if (invadersRemoved.length === invadersMove.length) {
            scoreDisplay.innerHTML = "YOU WIN";
            clearInterval(invadersStop);
        }
    }



    // invadersStop = setInterval(moveInvaders4, 1000)

    // //todo invader 6

    // let invadersIndexBlock6 = 6

    // //todo remove/add invaders

    // function removeInvader6(invadersMove) {
    //     cells[invadersIndexBlock6].classList.remove("invader");
    // }

    // removeInvader6();
    // console.log(removeInvader6);

    // function addInvader6() {
    //     cells[invadersIndexBlock6].classList.add("invader");
    //     console.log(addInvader6)
    // }

    // addInvader6();

    // //todo Move invaders 6



    // invadersStop = setInterval(moveInvaders6, 1000)

    // //todo invader 8

    // let invadersIndexBlock8 = 8

    // //todo remove/add invaders

    // function removeInvader8(invadersMove) {
    //     cells[invadersIndexBlock8].classList.remove("invader");
    // }

    // removeInvader8();
    // console.log(removeInvader8);

    // function addInvader8() {
    //     cells[invadersIndexBlock8].classList.add("invader");
    //     console.log(addInvader8)
    // }

    // addInvader8();

    // //todo Move invaders 8




    // invadersStop = setInterval(moveInvaders8, 1000)

    // //todo invader 11

    // let invadersIndexBlock11 = 11

    // //todo remove/add invaders

    // function removeInvader11(invadersMove) {
    //     cells[invadersIndexBlock11].classList.remove("invader");
    // }

    // removeInvader11();
    // console.log(removeInvader11);

    // function addInvader11() {
    //     cells[invadersIndexBlock11].classList.add("invader");
    //     console.log(addInvader11)
    // }

    // addInvader11();

    // //todo Move invaders 11



    // invadersStop = setInterval(moveInvaders11, 3000)

    // //todo invader 13

    // let invadersIndexBlock13 = 13

    // //todo remove/add invaders

    // function removeInvader13(invadersMove) {
    //     cells[invadersIndexBlock13].classList.remove("invader");
    // }

    // removeInvader13();


    // function addInvader13() {
    //     cells[invadersIndexBlock13].classList.add("invader");

    // }

    // addInvader13();

    // //todo Move invaders 13



    // invadersStop = setInterval(moveInvaders13, 4000)

    // //todo invader 15

    // let invadersIndexBlock15 = 15

    // //todo remove/add invaders

    // function removeInvader15(invadersMove) {
    //     cells[invadersIndexBlock15].classList.remove("invader");
    // }

    // removeInvader15();


    // function addInvader15() {
    //     cells[invadersIndexBlock15].classList.add("invader");

    // }

    // addInvader15();

    // //todo Move invaders 15



    // invadersStop = setInterval(moveInvaders15, 5000)

    // //todo invader 17

    // let invadersIndexBlock17 = 17
    //     //todo remove/add invaders

    // function removeInvader17(invadersMove) {
    //     cells[invadersIndexBlock17].classList.remove("invader");
    // }

    // removeInvader17();


    // function addInvader17() {
    //     cells[invadersIndexBlock17].classList.add("invader");

    // }

    // addInvader17();

    // //todo Move invaders 17



    // invadersStop = setInterval(moveInvaders17, 900)

    // //todo invader 22

    // let invadersIndexBlock22 = 22
    //     //todo remove/add invaders

    // function removeInvader22(invadersMove) {
    //     cells[invadersIndexBlock22].classList.remove("invader");
    // }

    // removeInvader22();


    // function addInvader22() {
    //     cells[invadersIndexBlock22].classList.add("invader");

    // }

    // addInvader22();

    // //todo Move invaders



    // invadersStop = setInterval(moveInvaders22, 300)

    // //todo invader 24

    // let invadersIndexBlock24 = 24
    //     //todo remove/add invaders

    // function removeInvader24(invadersMove) {
    //     cells[invadersIndexBlock24].classList.remove("invader");
    // }

    // removeInvader24();


    // function addInvader24() {
    //     cells[invadersIndexBlock24].classList.add("invader");

    // }

    // addInvader24();

    // //todo Move invaders




    // invadersStop = setInterval(moveInvaders24, 300)

    // //todo invader 26


    // let invadersIndexBlock26 = 26
    //     //todo remove/add invaders

    // function removeInvader26(invadersMove) {
    //     cells[invadersIndexBlock26].classList.remove("invader");
    // }

    // removeInvader26();


    // function addInvader26() {
    //     cells[invadersIndexBlock26].classList.add("invader");

    // }

    // addInvader26();

    // //todo Move invaders 26




    // invadersStop = setInterval(moveInvaders26, 1000)

    // //todo invader 28

    // let invadersIndexBlock28 = 28
    //     //todo remove/add invaders

    // function removeInvader28(invadersMove) {
    //     cells[invadersIndexBlock28].classList.remove("invader");
    // }

    // removeInvader28();


    // function addInvader28() {
    //     cells[invadersIndexBlock28].classList.add("invader");

    // }

    // addInvader28();

    // //todo Move invaders


    // invadersStop = setInterval(moveInvaders28, 1000)



    //todo laser shoot

    function shoot(e) {
        let laserId;
        let currentLaserIndex = currentSpaceshipIndex;


        function moveLaser() {
            cells[currentLaserIndex].classList.remove("laser")

            switch (e.key) {
                case "ArrowUp":
                    currentLaserIndex -= 10;

                    if (cells[currentLaserIndex].classList.contains("invader")) {

                        cells[currentLaserIndex].classList.remove("invader")
                        score += 100;
                        scoretDisplay.innerHTML = score
                        console.log(`score is now ${score}`)

                    }

                    // if (aliensIndicesRow1 < 1) {
                    //     scoretDisplay.innerHTML = "You Win!"
                    // }
            }
            cells[currentLaserIndex].classList.add("laser")

            if (currentLaserIndex < 10) {
                cells[currentLaserIndex].classList.remove("laser")
                clearInterval(laserId);
            }

            if (currentLaserIndex === currentSpaceshipIndex) {
                cells[currentLaserIndex].classList.remove("laser")
            }
        }
        moveLaser();
        laserId = setInterval(moveLaser, 100)
    }
    document.addEventListener("keydown", shoot)
    console.log("ArrowUp");

    startButton.addEventListener('click', start)
    console.log(start);

    resetButton.addEventListener('click', reset)


}

document.addEventListener("DOMContentLoaded", init)