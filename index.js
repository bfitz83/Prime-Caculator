// Elements from the HTML

    const inputEl = document.getElementById("input-el")
    const btn = document.getElementById("btn")
    const results = document.getElementById("results")

// Variables
    
    let numberArray = []
    let inputValue = 0

// Event Listeners

    btn.addEventListener("click", function(){
        if (inputEl.value > 1000000){
            alert("Please, no numbers above 1,000,000!")
            inputEl.value = ""
        } else if (inputEl.value <= 3){
            results.innerText = inputEl.value + " is prime"
        } else if (inputEl.value == 4) {
            results.innerText = inputEl.value + " is not prime"
        } else {
            inputValue = inputEl.value // only did this because I think it looks better. 
            findPrime(inputValue)
        }
    })

// Functions

    // This function Takes the input value from the event listener above and divides it by every number up to half of its value.
            // i.e. if inputEl.value = 8
            // 8 / 1
            // 8 / 2 
            // 8 / 3
            // 8 / 4
        // Then multiplies by 10
    // It then sends these numbers to be put into the numberArray
    
        function findPrime(value){
            numberArray.length = 0 // Yeah, couldn't get these 2 to work anywhere else, so 
            inputEl.value = ""          // here they live. Need them to make it all work. 

            for (let i = 2; i < value / 2; i++){
                let newNumber = (value / i) * 10
                makeNumberArray(newNumber.toString())
            }
        }


    // This funciton takes the last number of the results from findPrime() and stores them in an array
            // so if a result from above is 105, only 5 is stored in the array

        function makeNumberArray(fullNumber){
            let getlastNumber = fullNumber.charAt(fullNumber.length-1)
            numberArray.push(getlastNumber)
            analizeTheNumberArray()
        }

    // This function analizes the array. If a number is not prime, at least one number from 2 to half of its value will not have a decimal.
        // So when you multiply the number from findPrime() above by ten, if the last number is a 0 the number is not prime. So
        // if the array has a 0 in it, then the original inputEl.value is not prime
                // i.e. (8 / 2) * 10 = 40
                // Since we only look at the last number, if a zero end up in the array then it is not prime

            function analizeTheNumberArray(){
                if (numberArray.includes("0")){
                    results.innerText = inputValue + " is not prime"
                } else {
                    results.innerText = inputValue + " is prime"
                }
            }

