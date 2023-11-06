import { error } from "console";
import inquirer from "inquirer";

const info = [];

const questions = [
  {
    type: "input",
    name: "PokemonName",
    message: "Enter Pokemon name :",
  },

  {
    type: "checkbox",
    name: "options",
    message: "Pokemon info to download :",
    choices: ["Artwork", "Stats" , "Sprites"],
  },
];

async function prompt() {
  const answers = await inquirer.prompt(questions);

  info.push(answers);

  return info;
}

export { prompt };
