function getExt(name) {
    return name.match(/\.([^.]+)$|$/)[1]
}
console.log(getExt("/home/user/main.js"))
console.log(getExt("some-another-file.some.jpeg"))
console.log(getExt("nothing"))
