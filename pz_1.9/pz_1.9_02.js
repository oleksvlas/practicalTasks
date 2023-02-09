let a = 0;
do {
  if (a === 0) {
    console.log(a + " - це нуль ");
  } else if (a % 2 == 0) {
    console.log(a + " - парне число ");
  } else if (a / 2 !== 0) {
    console.log(a + " - непарне число ");
  }
  a++;
} while (a <= 10);
