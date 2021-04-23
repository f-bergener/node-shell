// Output a prompt
const mod = require("./pwd");
const mod1 = require("./ls");
const mod2 = require("./cat");
const fs = require("fs");
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const args = cmd.split(" ");
  if (args[0] === "pwd") mod.cmd();
  else if (args[0] === "ls") {
    fs.readdir("./", "utf8", mod1.ls);
  } else if (args[0] === "cat") {
    fs.readFile(`./${args[1]}`, "utf8", mod2.cat);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
