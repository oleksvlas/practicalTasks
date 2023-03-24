function getExt(path) {
    if (typeof path !== "string") {
        console.log("Path must be string")
        return
    }

    if (!path.includes('.')) {
        console.log("Incorrect file path")
        return
    }
    return path.substring(path.lastIndexOf('.') + 1)
}


console.log(getExt("asd.js"))