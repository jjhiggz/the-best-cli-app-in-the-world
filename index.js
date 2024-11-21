import inquirer from "inquirer";

async function main() {
  const result = await inquirer.prompt([
    { message: "What is your name", name: "name" },
  ]);

  console.log("Hello ", result.name);
}

main();
