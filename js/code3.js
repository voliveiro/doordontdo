function calculateResult(){
    let allQuestionScores = []
    let allMaxScores = []
    event.preventDefault()
    console.log ("JS works!")
    let parentNode=document.querySelectorAll("div")
    for (let i=0; i < parentNode.length; i++) {
        let elementChild = parentNode[i].children
        let answer = elementChild[1].value
        let weight = elementChild[3].value
        console.log (answer, weight)
        let questionScore=answer*weight
        allQuestionScores.push(questionScore)
        let questionMaxScore=3*weight
        console.log(questionScore, questionMaxScore)
        allMaxScores.push(questionMaxScore)
        console.log (allQuestionScores)
        console.log (allMaxScores)

    }
    let numer = allQuestionScores.reduce(function(a, b){
        return a + b;
    }, 0);

    console.log(numer)

    let denom = allMaxScores.reduce(function(a,b){
        return a + b;
    }, 0)
    console.log(denom)

    let finalScore = (numer/denom)*100
    finalScore=Math.floor(finalScore)

    console.log (finalScore)

    if (finalScore >= 66) {
        document.querySelector("#resultDisplay").textContent = `Your score is ${finalScore}. Do it.`
        document.querySelector("#resultDisplay").style.color="green"
    } else {
        document.querySelector("#resultDisplay").textContent = `Your score is ${finalScore}. Don't do it.`
        document.querySelector("#resultDisplay").style.color="red"
    }

    }