const greetablePrototype = {
    greet: function(greeting) {
        return `${greeting}, ${this.str}!`
    }
}

function createGreetable(str) {
    const obj = this
    obj.str = str;
    Object.setPrototypeOf(obj, greetablePrototype)
    return this;
}

const t = new createGreetable("Olya");
console.log(t.greet("Hello"))