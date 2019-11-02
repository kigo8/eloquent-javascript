const size = 8;

for (i = 0; i < size; i++) {
  let line = "";

  for (z = 0; z < size; z++) {
    if (i % 2 === 0) {
      if (z % 2 === 0) {
        line += " ";
      } else {
        line += "#"
      }
    } else {
      if (z % 2 === 0) {
        line += "#";
      } else {
        line += " "
      }
    }
  }

  console.log(line);
}