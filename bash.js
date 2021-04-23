// Output a prompt
const mod = require("./pwd");
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", mod.cmd);
