//Example 1: Player and their number

function Pemain(name, number) {
    this.name = name;
    this.number = number;
    this.sayName = function() {
        console.log(this.name)
    };
    this.sayNumber = function() {
        console.log(this.number)
    }
}

const pemain1 = new Pemain('Asyikin', 'X');
const pemain2 = new Pemain('Austin', 'Y');
pemain1.sayName();
pemain2.sayName();
pemain1.sayNumber();
pemain2.sayNumber();

//Example 2: Book and its properties

function Buku(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.page} pages, ${this.read} `);
    };
}

const buku1 = new Buku('Animal Farm', 'George Orwell', '144 pages', 'Have read');
buku1.info();

// Example 3: Cars and thier properties:

function Kereta(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.infoKereta = function() {
        console.log(`I own a ${this.model} from ${this.make} that was released in ${this.year}. It is ${this.color} in color.`);
    };
}

const kereta1 = new Kereta("Perodua", "Axia", 2024, "blue");
console.log(kereta1.make);
console.log(kereta1.model);
console.log(kereta1.year);
console.log(kereta1.color);

const kereta2 = new Kereta("Jeep", "Grand Cherokee", 2023, "silver");
kereta2.infoKereta();











