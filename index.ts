import inquirer from "inquirer";

const answer : {
    Sentence : string
} = await inquirer.prompt([{
    name : "Sentence",
    type : "string",
    message : "Enter Your Sentence To Count The Words:"
}])

const words = answer.Sentence.trim().split(" ");

console.log(words);

console.log(`Your Sentence Word Count is ${words.length}`);