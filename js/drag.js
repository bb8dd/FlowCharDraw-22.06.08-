const folder = document.querySelector(".folder");
let isPress = false;

let positionX;
let positionY;

const move = () => {
    if (isPress) {
        console.log("들어오고 있음", isPress)
        window.addEventListener("mousemove", (e) => {
            let positionX = e.clientX;
            let positionY = e.clientY;
            folder.style.left = `${positionX}px`;
            folder.style.top = `${positionY}px`;
            console.log(positionX, positionX);
        })
    } else {
        console.log("들어오고 있음", isPress)
        clearInterval(mouseMove);
    }
}

const folderDribble = () => {
    isPress = true;
    setInterval(move, 100);
};

const folderDribbleStop = () => {
    console.log("들어옴")
    isPress = false;
    if(!isPress) {
        console.log("들어옴!!!!")
        clearInterval(mouseMove);
    }
}

const mouseMove = setInterval(move, 100);
const mouseStop = clearInterval(mouseMove);

folder.addEventListener("mousedown", folderDribble);
window.addEventListener("mouseup", mouseStop);
