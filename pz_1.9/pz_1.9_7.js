const convertToFarangate = () => {
    let Tc = Number(prompt("Введіть температуру в цельсіях"))

    let Tf = (9/5)*Tc + 32

    console.log("Tc = " + Tc)
    console.log("Tf = " + Tf)
}

convertToFarangate()
