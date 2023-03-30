function createGreetable(str) {
    const result = Object.create(createGreetable.prototype);
    result.str = str;
    return result;
  }
  
  createGreetable.prototype.greet = function(greeting) {
    return `${greeting}, ${this.str}!`;
  };
  const g = createGreetable('Dima');
console.log(g.greet('Hello')); 