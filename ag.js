#! /usr/bin/env node
import inquirer from "inquirer";
//step 1
//for Player
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    heathDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    heathIncrease() {
        let health = this.health + 25;
        this.health = health;
    }
}
//step 2 for Opponent
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    heathDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let player = await inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter your name:"
    }]);
let opponent = await inquirer.prompt([{
        type: "list",
        name: "select",
        message: "Select your opponent name:",
        choices: ["Skeleton", "Alien", "Zombie"]
    }]);
let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.select);
//Skeleton
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "option",
                message: "What would you like to do",
                choices: ["Attack", "Drink", "Run for your life"]
            }]);
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.heathDecrease();
                console.log(`${player1.name} health is ${player1.health}`);
                console.log(`${opponent1.name} health is ${opponent1.health}`);
                if (player1.health <= 0) {
                    console.log("You loose better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.heathDecrease();
                console.log(`${player1.name} health is ${player1.health}`);
                console.log(`${opponent1.name} health is ${opponent1.health}`);
                if (opponent1.health <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink") {
            player1.heathIncrease();
            console.log(`${player1.name} health is ${player1.health}`);
        }
        if (ask.option == "Run for your life") {
            console.log("You loose better luck next time");
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "option",
                message: "What would you like to do",
                choices: ["Attack", "Drink", "Run for your life"]
            }]);
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.heathDecrease();
                console.log(`${player1.name} health is ${player1.health}`);
                console.log(`${opponent1.name} health is ${opponent1.health}`);
                if (player1.health <= 0) {
                    console.log("You loose better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.heathDecrease();
                console.log(`${player1.name} health is ${player1.health}`);
                console.log(`${opponent1.name} health is ${opponent1.health}`);
                if (opponent1.health <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink") {
            player1.heathIncrease();
            console.log(`${player1.name} health is ${player1.health}`);
        }
        if (ask.option == "Run for your life") {
            console.log("You loose better luck next time");
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "option",
                message: "What would you like to do",
                choices: ["Attack", "Drink", "Run for your life"]
            }]);
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.heathDecrease();
                console.log(`${player1.name} health is ${player1.health}`);
                console.log(`${opponent1.name} health is ${opponent1.health}`);
                if (player1.health <= 0) {
                    console.log("You loose better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.heathDecrease();
                console.log(`${player1.name} health is ${player1.health}`);
                console.log(`${opponent1.name} health is ${opponent1.health}`);
                if (opponent1.health <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink") {
            player1.heathIncrease();
            console.log(`${player1.name} health is ${player1.health}`);
        }
        if (ask.option == "Run for your life") {
            console.log("You loose better luck next time");
            process.exit();
        }
    }
} while (true);
