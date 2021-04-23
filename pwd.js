const mod1 = require("./ls");
console.log(mod1);
module.exports = {
  cmd: (data) => {
    const cmd = data.toString().trim(); // remove the newline
    if (cmd === "pwd") {
      process.stdout.write(process.cwd());
    } else if (cmd === "ls") {
      process.stdout.write(mod1());
    } else {
      process.stdout.write("You typed: " + cmd);
    }
    process.stdout.write("\nprompt > ");
  },
};
