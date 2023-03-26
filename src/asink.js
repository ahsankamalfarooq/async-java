


// console.log("object")

// setTimeout(function () {
//     console.log("i am setTimeout")
// }, 4000)

// console.log("ahsan")



console.log("start")

function waitforSevenSeconds() {
    let ms = 7000 + new Date().getTime();
    while(new Date()  < ms ) {}
}

setTimeout(() => {
        console.log("i am from timeout")
}, 0 )


// console.log("end")
waitforSevenSeconds()