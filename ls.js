let readdir = {
  ls: (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write("\n");
      process.stdout.write(files.join("\n"));
    }
    process.stdout.write("\nprompt > ");
  },
};
module.exports = readdir;
