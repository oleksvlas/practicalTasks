function sequence(start = 0, step = 1) {
    let count = start; // ініціалізуємо лічильник значенням start
    
    // Повертаємо функцію-генератор, яка при кожному виклику дає значення на step більше
    return function() {
      const value = count;
      count += step;
      return value;
    };
  }
  const generator = sequence(10, 3); // створити генератор, що починається з 10 та збільшується на 3
const generator2 = sequence(7, 1); // створити ще один генератор, що починається з 7 та збільшується на 1

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8