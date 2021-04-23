module.exports = {
  cat: (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write("\n");
      process.stdout.write(data);
    }
    process.stdout.write("\nprompt > ");
  },
};
