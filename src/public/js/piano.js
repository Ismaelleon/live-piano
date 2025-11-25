class Piano {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 600;
        this.height = 250;
        this.keySize = this.width / 14;

        this.synth = new Tone.Synth().toDestination();

        this.notes = [
            "C3",
            "C#3",
            "D3",
            "D#3",
            "E3",
            "F3",
            "F#3",
            "G3",
            "G#3",
            "A3",
            "A#3",
            "B3",
            "C4",
            "C#4",
            "D4",
            "D#4",
            "E4",
            "F4",
            "F#4",
            "G4",
            "G#4",
            "A4",
            "A#4",
            "B4",
        ];
        this.keys = [
            {
                x: this.x,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 2 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 2,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 3,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 4 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 4,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 5 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 5,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 6 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 6,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 7,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 8 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 8,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 9 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 9,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 10,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 11 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 11,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 12 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 12,
                pressed: false,
                type: "white",
            },
            {
                x: this.x + this.keySize * 13 - this.keySize / 2,
                pressed: false,
                type: "black",
            },
            {
                x: this.x + this.keySize * 13,
                pressed: false,
                type: "white",
            },
        ];
    }

    render(ctx) {
        // Piano background
        ctx.fillStyle = "#efefef";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Piano border
        ctx.strokeStyle = "#000";
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        // Render white keys
        for (let key of this.keys) {
            if (key.type === "white") {
                if (key.pressed) {
                    ctx.fillStyle = "#999";
                    ctx.fillRect(key.x, this.y, this.keySize, this.height);
                }

                ctx.strokeStyle = "#000";
                ctx.strokeRect(key.x, this.y, this.keySize, this.height);
            }
        }

        // Render black keys
        for (let key of this.keys) {
            if (key.type === "black") {
                ctx.fillStyle = "#000";
                if (key.pressed) {
                    ctx.fillStyle = "#1f1f1f";
                }

                ctx.fillRect(key.x + this.keySize / 4, this.y, this.keySize / 2, this.height / 2);
            }
        }
    }

    keyPressed(keyIndex) {
        this.keys[keyIndex].pressed = true;
        this.synth.triggerAttack(piano.notes[keyIndex], Tone.now());
    }

    keyReleased(keyIndex) {
        this.keys[keyIndex].pressed = false;
        this.synth.triggerRelease(Tone.now() + 1);
    }

    update() {
    }
}
