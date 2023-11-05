import { prompt } from "./prompts.js";

async function fun() {
  const a = await prompt();
  console.log(a);
}

fun();

