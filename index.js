const inputEl = document.getElementById("input-el")
const btn = document.getElementById("btn")
const results = document.getElementById("results")


let numberArray = []

btn.addEventListener("click", function(){
    console.log("btn")
    findPrime(inputEl.value)
    randomNumber = inputEl.value
})

function findPrime(x){
    for (let i = 2; i < x / 2; i++){
        let newNumber = (x / i) * 10
        makeNumberArray(newNumber.toString())
    }
}

function makeNumberArray(z){
    let lastNumber = z.charAt(z.length-1)
    numberArray.push(lastNumber)
    analizeTheNumberArray()
}

function analizeTheNumberArray(){
    if (numberArray.includes("0")){
        results.innerText = inputEl.value + " is not prime"
    } else {
        results.innerText = inputEl.value + " is prime"
    }
    clearVariables()
}

function clearVariables(){
    // inputEl.value = ""
}

