const buttonA = document.getElementById("a")
const buttonB = document.getElementById("b")

function A() {
    console.log("Function A has been called!")
}

function B() {
    setTimeout(() => console.log("Function B has been called!"), 3000)
}

function helperPromise() {
    const promise = new Promise((resolve, reject) => {
        const string1 = "LUT"
        const string2 = "LUT"
        if (string1 === string2) {
            resolve()
        } else {
            reject()
        }

    })
    return promise
}

buttonA.addEventListener("click", () => {
    A()
    B()
    setTimeout(() => console.log("From the timeout"), 0)
    console.log("Button A has been pressed")

    helperPromise().then(()=> {
        console.log("Promise resolved")
    }).catch(()=> {
        console.log("Promise rejected")
    })

    runAsync();

    (async () => {
        try {
            await helperPromise()
            console.log("Async: resolved")
        } catch(e) {
            console.log("Async: rejected")
        }
    })()
    

})

async function runAsync() {
    try {
        await helperPromise()
        console.log("Async: resolved")
    } catch(e) {
        console.log("Async: rejected")
    }
}

buttonB.addEventListener("click", () => {
    let x = 0;
    while(x < 10000000) {
        x++
    }
    console.log("Loop finished!")

})