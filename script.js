// Function that adds 2 random numbers between 1-6

function rollDice () {
    return Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
}

// Define the arrays where we want to store the sums and possible sums //

let possibleSums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Arrays start with an index of zero. There should be 13 zeros in the count Array //

// Make a for loop that will run the rollDice function and incriment each sum into the count array.//

for (let i = 1; i < 1000; i++) {
    let result = rollDice()
    count[result] = count[result] + 1
}

// Now define a location in the HTML you want to have the bar graph //

let destination = document.getElementById('Container')

let secondOutput = document.getElementById('numberOutput')

// This for loop will write onto our HTML and will also style the layout of the bar graph //

for (let j = 2; j < count.length; j++) {
    let graphRow = document.createElement('div')
    graphRow.style.display= 'flex'
    let header = document.createElement('div')
    header.style.width= '20px'
    let headerText = document.createTextNode(possibleSums[j - 2])
    header.appendChild(headerText)
    graphRow.appendChild(header)
    let bar = document.createElement('div')
    bar.style.backgroundColor = 'orange'
    bar.style.width = count[j] + 'px'
    let divText = document.createTextNode(count[j])
    bar.appendChild(divText)
    graphRow.appendChild(bar)
    destination.appendChild(graphRow)
}

for (let w = 2; w < count.length; w++) {
    let output = document.createElement('div')
    output.style.display = 'flex'
    let header = document.createElement('div')
    header.style.width = '22px'
    let headertext = document.createTextNode(possibleSums[w - 2] + ':')
    header.appendChild(headertext)
    output.appendChild(header)
    let outputfreq = document.createElement('div')
    let divText = document.createTextNode(count[w])
    outputfreq.appendChild(divText)
    output.appendChild(outputfreq)
    secondOutput.appendChild(output)
}