main();

function main() {
    console.log(add(1, 2));
    console.log(sub(1, 2));
    console.log(mul(1, 2));
    console.log(div(1, 2));
}

function checkAllArgsIsNumbers(...args) {
    for (const arg of args) {
        if (arg !== undefined) {
            if (typeof arg !== "number") {
                throw Error("The argument " + arg + " is not number");
            }
        } else {
            throw Error("One of the arguments is undefined");
        }
    }
}

function doExpression(exp, arg1, arg2) {
    try {
        checkAllArgsIsNumbers(arg1, arg2);
        return exp(arg1, arg2);
    } catch (e) {
        console.log(e.message);
    }
}

function add(a1, a2) {
    const addingExpr = function (arg1, arg2) {
        return arg1 + arg2
    };
    return doExpression(addingExpr, a1, a2);
}

function sub(a1, a2) {
    const subtractingExpr = function (arg1, arg2) {
        return arg1 - arg2
    };
    return doExpression(subtractingExpr, a1, a2);
}

function mul(a1, a2) {
    const multiplyingExpr = function (arg1, arg2) {
        return arg1 * arg2
    };
    return doExpression(multiplyingExpr, a1, a2);
}

function div(a1, a2) {
    const dividingExpr = function (arg1, arg2) {
        if (arg2 === 0) {
            throw Error ("Second argument can`t be equal to zero")
        }
        return arg1 / arg2
    };
    return doExpression(dividingExpr, a1, a2);
}