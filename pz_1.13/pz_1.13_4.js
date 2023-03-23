function createGreetable(str) {
    const result = {str};
    result.greet = function (greeting) {
        return `${greeting}, ${this.str}!`
    };
    return result;
}

const g = createGreetable('Oleg');
console.log (g.greet('Hello'));

