const canvas = document.getElementById("piano");
const ctx = canvas.getContext("2d");
const socket = io();

canvas.width = 600;
canvas.height = 250;

const piano = new Piano();

socket.on("keyPressed", key => {
    piano.keyPressed(key);
});

socket.on("keyReleased", key => {
    piano.keyReleased(key);
})

window.addEventListener("keydown", e => {
    switch (e.key.toLowerCase()) {
        case "q":
            piano.keyPressed(0);
            socket.emit("keyPressed", 0);
            break;
        case "2":
            piano.keyPressed(1);
            socket.emit("keyPressed", 1);
            break;
        case "w":
            piano.keyPressed(2);
            socket.emit("keyPressed", 2);
            break;
        case "3":
            piano.keyPressed(3);
            socket.emit("keyPressed", 3);
            break;
        case "e":
            piano.keyPressed(4);
            socket.emit("keyPressed", 4);
            break;
        case "r":
            piano.keyPressed(5);
            socket.emit("keyPressed", 5);
            break;
        case "5":
            piano.keyPressed(6);
            socket.emit("keyPressed", 6);
            break;
        case "t":
            piano.keyPressed(7);
            socket.emit("keyPressed", 7);
            break;
        case "6":
            piano.keyPressed(8);
            socket.emit("keyPressed", 8);
            break;
        case "y":
            piano.keyPressed(9);
            socket.emit("keyPressed", 9);
            break;
        case "7":
            piano.keyPressed(10);
            socket.emit("keyPressed", 10);
            break;
        case "u":
            piano.keyPressed(11);
            socket.emit("keyPressed", 11);
            break;

        case "z":
            piano.keyPressed(12);
            socket.emit("keyPressed", 12);
            break;
        case "s":
            piano.keyPressed(13);
            socket.emit("keyPressed", 13);
            break;
        case "x":
            piano.keyPressed(14);
            socket.emit("keyPressed", 14);
            break;
        case "d":
            piano.keyPressed(15);
            socket.emit("keyPressed", 15);
            break;
        case "c":
            piano.keyPressed(16);
            socket.emit("keyPressed", 16);
            break;
        case "v":
            piano.keyPressed(17);
            socket.emit("keyPressed", 17);
            break;
        case "g":
            piano.keyPressed(18);
            socket.emit("keyPressed", 18);
            break;
        case "b":
            piano.keyPressed(19);
            socket.emit("keyPressed", 19);
            break;
        case "h":
            piano.keyPressed(20);
            socket.emit("keyPressed", 20);
            break;
        case "n":
            piano.keyPressed(21);
            socket.emit("keyPressed", 21);
            break;
        case "j":
            piano.keyPressed(22);
            socket.emit("keyPressed", 22);
            break;
        case "m":
            piano.keyPressed(23);
            socket.emit("keyPressed", 23);
            break;
    }
});

window.addEventListener("keyup", e => {
    switch (e.key.toLowerCase()) {
        case "q":
            piano.keyReleased(0);
            socket.emit("keyReleased", 0);
            break;
        case "2":
            piano.keyReleased(1);
            socket.emit("keyReleased", 1);
            break;
        case "w":
            piano.keyReleased(2);
            socket.emit("keyReleased", 2);
            break;
        case "3":
            piano.keyReleased(3);
            socket.emit("keyReleased", 3);
            break;
        case "e":
            piano.keyReleased(4);
            socket.emit("keyReleased", 4);
            break;
        case "r":
            piano.keyReleased(5);
            socket.emit("keyReleased", 5);
            break;
        case "5":
            piano.keyReleased(6);
            socket.emit("keyReleased", 6);
            break;
        case "t":
            piano.keyReleased(7);
            socket.emit("keyReleased", 7);
            break;
        case "6":
            piano.keyReleased(8);
            socket.emit("keyReleased", 8);
            break;
        case "y":
            piano.keyReleased(9);
            socket.emit("keyReleased", 9);
            break;
        case "7":
            piano.keyReleased(10);
            socket.emit("keyReleased", 10);
            break;
        case "u":
            piano.keyReleased(11);
            socket.emit("keyReleased", 11);
            break;

        case "z":
            piano.keyReleased(12);
            socket.emit("keyReleased", 12);
            break;
        case "s":
            piano.keyReleased(13);
            socket.emit("keyReleased", 13);
            break;
        case "x":
            piano.keyReleased(14);
            socket.emit("keyReleased", 14);
            break;
        case "d":
            piano.keyReleased(15);
            socket.emit("keyReleased", 15);
            break;
        case "c":
            piano.keyReleased(16);
            socket.emit("keyReleased", 16);
            break;
        case "v":
            piano.keyReleased(17);
            socket.emit("keyReleased", 17);
            break;
        case "g":
            piano.keyReleased(18);
            socket.emit("keyReleased", 18);
            break;
        case "b":
            piano.keyReleased(19);
            socket.emit("keyReleased", 19);
            break;
        case "h":
            piano.keyReleased(20);
            socket.emit("keyReleased", 20);
            break;
        case "n":
            piano.keyReleased(21);
            socket.emit("keyReleased", 21);
            break;
        case "j":
            piano.keyReleased(22);
            socket.emit("keyReleased", 22);
            break;
        case "m":
            piano.keyReleased(23);
            socket.emit("keyReleased", 23);
            break;
    }
});

function render() {
    piano.render(ctx);
}

function update() {
    requestAnimationFrame(update);
    render();

    piano.update();
}

update();
