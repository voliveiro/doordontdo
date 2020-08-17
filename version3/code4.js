function calculateResult(){
    
    let scores=[]
    let maxscores=[]

    //question 1
    let w=0;
    let score=0; 

    let x = document.getElementById('question1-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section1-yes').checked){
        score +=2;
    } else if (document.getElementById('section1-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 
    
    scores.push(w * score);
    maxscores.push(2*w);

    //question 2

    w=0;
    score=0; 

    x = document.getElementById('question2-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value  = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section2-yes').checked){
        score +=2;
    } else if (document.getElementById('section2-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 

    scores.push(w * score);
    maxscores.push(2*w);

    // question 3

    w=0;
    score=0; 


    x = document.getElementById('question3-wt-selector');

    if (x.options[x.selectedIndex].value  = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value  = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section3-yes').checked){
        score +=2;
    } else if (document.getElementById('section3-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 

    scores.push(w * score);
    maxscores.push(2*w);

    // question 4

    w=0;
    score=0; 


    x = document.getElementById('question4-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section4-yes').checked){
        score +=2;
    } else if (document.getElementById('section4-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 

    scores.push(w * score);
    maxscores.push(2*w);

    // Question 5

    w=0;
    score=0; 


    x = document.getElementById('question5-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section5-yes').checked){
        score +=2;
    } else if (document.getElementById('section5-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 

    scores.push(w * score);
    maxscores.push(2*w);

    // Question 6

    w=0;
    score=0; 


    x = document.getElementById('question6-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section6-yes').checked){
        score +=2;
    } else if (document.getElementById('section6-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 

    scores.push(w * score);
    maxscores.push(2*w);

    // Question 7

    w=0;
    score=0; 
 

    x = document.getElementById('question7-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section7-yes').checked){
        score +=2;
    } else if (document.getElementById('section7-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 

    scores.push(w * score);
    maxscores.push(2*w);

    // Question 8

    w=0;
    score=0; 


    x = document.getElementById('question8-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w = 2; 
    } else { 
        w = 1; 
    }; 

    if (document.getElementById('section8-yes').checked){
        score +=2;
    } else if (document.getElementById('section8-maybe').checked){
        score +=1;
    } else { 
        score +=0
    }; 


    scores.push(w * score);
    maxscores.push(2*w);

    // FINAL TALLY

    let sumScores=scores.reduce(function(a,b){
        return a+b;
    },0);

    console.log(sumScores);

    //weighted total is a "yes", at 2 points, multiplied by the question's importance. 

    let sumMaxscores = maxscores.reduce(function(a,b){
        return a+b;
    },0);

    console.log(sumMaxscores);

    let finalScore = (sumScores/sumMaxscores)*100

    if (finalScore > 66){
        message = `Your score is ${finalScore}%.  \n Do it.`;
        document.getElementById("resultdisplay").innerHTML = message; 
    } else {
        message = `Your score is ${finalScore}%. \n Don't do it.`
        document.getElementById("resultdisplay").innerHTML = message;
    }; 
    
}