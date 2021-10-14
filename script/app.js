function init() {
    const cells = document.querySelectorAll(".grid div");
    const startButton = document.querySelector(".start");
    const resetButton = document.querySelector(".reset");
    const scoreText = document.querySelector("#score-span");
    const livesText = document.querySelector("#lives-span");
    const scoretDisplay = document.querySelector(".score");

    const invadersMove = document.querySelectorAll(".invader");
    const invadersIndex = [0, 2, 4, 6, 8, 11, 13, 15, 17, 22, 24, 26, 28]
    let invadersIndexBlock = 0
    let invadersIndexBlock2 = 2
    let invadersIndexBlock4 = 4
    let invadersIndexBlock6 = 6
    let invadersIndexBlock8 = 8
    let invadersIndexBlock11 = 11
    let invadersIndexBlock13 = 13
    let invadersIndexBlock15 = 15
    let invadersIndexBlock17 = 17
    let invadersIndexBlock22 = 22
    let invadersIndexBlock28 = 28
    let invadersIndexBlock24 = 24
    let invadersIndexBlock26 = 26

    let direction = 1;
    let invadersStop;
    let score = 0;

    function start() {
        invadersStop = setInterval(moveInvaders, 1000)
        invadersStop2 = setInterval(moveInvaders2, 1000)
        invadersStop4 = setInterval(moveInvaders4, 1000)
        invadersStop6 = setInterval(moveInvaders6, 1000)
        invadersStop8 = setInterval(moveInvaders8, 1000)
        invadersStop11 = setInterval(moveInvaders11, 1000)
        invadersStop13 = setInterval(moveInvaders13, 1000)
        invadersStop15 = setInterval(moveInvaders15, 1000)
        invadersStop17 = setInterval(moveInvaders17, 1000)
        invadersStop22 = setInterval(moveInvaders22, 1000)
        invadersStop24 = setInterval(moveInvaders24, 1000)
        invadersStop26 = setInterval(moveInvaders26, 1000)
        invadersStop28 = setInterval(moveInvaders28, 1000)
    }


    function reset() {

        window.location.reload()

    }


    let currentSpaceshipIndex = 94;

    // todo move spaceship left/right

    cells[currentSpaceshipIndex].classList.add("spaceShip");

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

    //todo remove/add invaders

    function removeInvader() {
        cells[invadersIndexBlock].classList.remove("invader");


    }

    //removeInvader();

    function addInvader() {
        cells[invadersIndexBlock].classList.add("invader");

    }

    //addInvader();

    //todo Robin version


    //addInvader();


    function moveInvaders() {
        removeInvader()


        invadersIndexBlock += direction

        addInvader();


        if (invadersIndexBlock > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop)
        }

    }

    //todo invader 2


    //todo remove/add invaders

    function removeInvader2(invadersMove) {
        cells[invadersIndexBlock2].classList.remove("invader");
    }
    //removeInvader2()

    function addInvader2() {
        cells[invadersIndexBlock2].classList.add("invader");

    }

    //addInvader2();

    //todo Move invaders 2

    function moveInvaders2() {


        removeInvader2();

        invadersIndexBlock2 += direction

        addInvader2();

        if (invadersIndexBlock2 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop2)
        }

    }

    //todo invader 4

    //todo remove/add invaders

    function removeInvader4(invadersMove) {
        cells[invadersIndexBlock4].classList.remove("invader");
    }



    function addInvader4() {
        cells[invadersIndexBlock4].classList.add("invader");

    }



    //todo Move invaders4

    function moveInvaders4() {

        removeInvader4();

        invadersIndexBlock4 += direction

        addInvader4();

        if (invadersIndexBlock4 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop4)
        }
    }



    //todo invader 6

    //todo remove/add invaders

    function removeInvader6(invadersMove) {
        cells[invadersIndexBlock6].classList.remove("invader");
    }

    //removeInvader6();


    function addInvader6() {
        cells[invadersIndexBlock6].classList.add("invader");

    }

    //addInvader6();

    //todo Move invaders 6

    function moveInvaders6() {

        removeInvader6();

        invadersIndexBlock6 += direction

        addInvader6();
        if (invadersIndexBlock6 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop6)
        }

    }


    //todo invader 8


    //todo remove/add invaders

    function removeInvader8(invadersMove) {
        cells[invadersIndexBlock8].classList.remove("invader");
    }

    //removeInvader8();


    function addInvader8() {
        cells[invadersIndexBlock8].classList.add("invader");

    }

    //addInvader8();

    // //todo Move invaders 8

    function moveInvaders8() {

        removeInvader8();

        invadersIndexBlock8 += direction

        addInvader8();

        if (invadersIndexBlock8 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop8)
        }

    }

    // //todo invader 11

    // //todo remove/add invaders

    function removeInvader11(invadersMove) {
        cells[invadersIndexBlock11].classList.remove("invader");
    }

    //removeInvader11();


    function addInvader11() {
        cells[invadersIndexBlock11].classList.add("invader");

    }

    //addInvader11();

    // //todo Move invaders 11

    function moveInvaders11() {

        removeInvader11();

        invadersIndexBlock11 += direction

        addInvader11();

        if (invadersIndexBlock11 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop11)
        }

    }

    // //todo invader 13

    // //todo remove/add invaders

    function removeInvader13(invadersMove) {
        cells[invadersIndexBlock13].classList.remove("invader");
    }

    //removeInvader13();


    function addInvader13() {
        cells[invadersIndexBlock13].classList.add("invader");

    }

    //addInvader13();

    // //todo Move invaders 13

    function moveInvaders13() {

        removeInvader13();

        invadersIndexBlock13 += direction

        addInvader13();

        if (invadersIndexBlock13 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop13)
        }

    }


    //todo invader 15



    //todo remove/add invaders

    function removeInvader15(invadersMove) {
        cells[invadersIndexBlock15].classList.remove("invader");
    }

    //removeInvader15();


    function addInvader15() {
        cells[invadersIndexBlock15].classList.add("invader");

    }

    //addInvader15();

    //todo Move invaders 15

    function moveInvaders15() {

        removeInvader15();

        invadersIndexBlock15 += direction


        addInvader15();

        if (invadersIndexBlock15 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop15)
        }


    }

    //todo invader 17


    //todo remove/add invaders

    function removeInvader17(invadersMove) {
        cells[invadersIndexBlock17].classList.remove("invader");
    }

    //removeInvader17();


    function addInvader17() {
        cells[invadersIndexBlock17].classList.add("invader");

    }

    //addInvader17();

    //todo Move invaders 17

    function moveInvaders17() {

        removeInvader17();

        invadersIndexBlock17 += direction

        addInvader17();

        if (invadersIndexBlock17 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop17)
        }

    }

    //todo invader 22


    //todo remove/add invaders

    function removeInvader22(invadersMove) {
        cells[invadersIndexBlock22].classList.remove("invader");
    }

    //removeInvader22();


    function addInvader22() {
        cells[invadersIndexBlock22].classList.add("invader");

    }

    //addInvader22();

    // //todo Move invaders 22

    function moveInvaders22() {

        removeInvader22();

        invadersIndexBlock22 += direction

        addInvader22();

        if (invadersIndexBlock22 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop22)
        }

    }



    //todo invader 24

    //todo remove/add invaders

    function removeInvader24(invadersMove) {
        cells[invadersIndexBlock24].classList.remove("invader");
    }

    //removeInvader24();


    function addInvader24() {
        cells[invadersIndexBlock24].classList.add("invader");

    }

    //addInvader24();

    //todo Move invaders 24

    function moveInvaders24() {

        removeInvader24();

        invadersIndexBlock24 += direction

        addInvader24()

        if (invadersIndexBlock24 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop24)
        }

    }


    //todo invader 26


    //todo remove/add invaders

    function removeInvader26(invadersMove) {
        cells[invadersIndexBlock26].classList.remove("invader");
    }

    //removeInvader26();


    function addInvader26() {
        cells[invadersIndexBlock26].classList.add("invader");

    }

    //addInvader26();

    //todo Move invaders 26

    function moveInvaders26() {

        removeInvader26();

        invadersIndexBlock26 += direction

        addInvader26()

        if (invadersIndexBlock26 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop26)
        }

    }

    //todo invader 28

    //todo remove/add invaders

    function removeInvader28(invadersMove) {
        cells[invadersIndexBlock28].classList.remove("invader");
    }

    //removeInvader28();

    function addInvader28() {
        cells[invadersIndexBlock28].classList.add("invader");

    }

    //addInvader28();

    //todo Move invaders 28

    function moveInvaders28() {

        removeInvader28();

        invadersIndexBlock28 += direction

        addInvader28();

        if (invadersIndexBlock28 > 89) {
            scoretDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersStop28)
        }

    }
    //todo laser shoot

    function shoot(e) {
        let laserId;
        let currentLaserIndex = currentSpaceshipIndex;

        function moveLaser() {
            cells[currentLaserIndex].classList.remove("laser")

            switch (e.key) {
                case "ArrowUp":
                    currentLaserIndex -= 10;
                    cells[currentLaserIndex].classList.add("laser")

                    if (cells[currentLaserIndex].classList.contains("invader")) {

                        cells[currentLaserIndex].classList.remove("invader")
                        score += 100;
                        scoretDisplay.innerHTML = score
                        console.log(`score is now ${score}`)

                    }


            }

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