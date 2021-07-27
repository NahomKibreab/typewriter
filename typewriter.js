let sentence =
  "Hello there! Try typing anything after 'node typewriter.js _____' \n";
sentence =
  process.argv.length > 2 ? process.argv.slice(2).join(" ") + "\n" : sentence;

let counter = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);
  counter += 50;
}
