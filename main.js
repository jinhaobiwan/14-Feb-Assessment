const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;

class Field {

    field = [];

    constructor() {
        //this.field = field;
        this.locationX = 0;
        this.locationY = 0;

        for (let a = 0; a < col; a++) {
            this.field[a] = [];
        }



        this.generateField(row, col, 0.2);
    }

    generateField(height, width, percentage = 0.1) {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const prob = Math.random();
                this.field[y][x] = fieldCharacter;
            }
        }
        //Set the "hat" location
        this.field[9][9] = hat;
        
        //Set the "hole" location
        this.field[0][5] = hole;
        this.field[1][7] = hole;

        //Set character position as [0][0]
        this.field[0][0] = pathCharacter;
    }

    runGame() {
        //Implement your codes
        this.print();
        this.askQuestion();
        for (let hat = 0; hat < field.length; hat++){
            if (field[hat] === 0);
        }
        
    }

    print() {
        clear();
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    askQuestion() {
        const answer = prompt('Which way? ').toUpperCase();
        //Implement your codes when user input U, D, L, R
    }

}   //End of Class

const myfield = new Field();
myfield.runGame();