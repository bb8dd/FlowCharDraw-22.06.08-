const folder = document.querySelector(".folder");
let isPress = false;

let positionX;
let positionY;

const folderDribble = () => {
    isPress = true;
};

const folderDribbleStop = (e) => {
    isPress = false;
}

folder.addEventListener("mousedown", folderDribble);
folder.addEventListener("mouseup", folderDribbleStop);

const folderMove = () => {
    setTimeout(() => {
        if (isPress) {
            window.addEventListener("mousemove", (e) => {
                let positionX = e.clientX;
                let positionY = e.clientY;
                folder.style.left = `${positionX}px`;
                folder.style.top = `${positionY}px`;
                console.log(positionX, positionX);
            })
        }
    },10);
}

window.addEventListener("load", folderMove);