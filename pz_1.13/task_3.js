class Random {
    //повертає випадкове дійсне число у діапазоні від low (включаючи) до high (не включаючи)
    static nextDouble(low, high) {
      return Math.random() * (high - low) + low;
    }
  //повертає випадкове ціле число у діапазоні від low (включаючи) до high (не включаючи)
    static nextInt(low, high) {
      return Math.floor(Math.random() * (high - low) + low);
    }
  //повертає випадковий елемент з заданого масиву
    static nextElement(array) {
      return array[Random.nextInt(0, array.length)];
    }
  }
  const array = ['a', 'b', 'c', 'd', 'e'];

console.log(Random.nextDouble(0, 1)); // випадкове дійсне число між 0 і 1
console.log(Random.nextInt(0, 10)); // випадкове ціле число між 0 і 10
console.log(Random.nextElement(array)); // випадковий елемент з масиву