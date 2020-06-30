function calculateResult(){
    
    //question 1
    let w1=0;

    let x = document.getElementById('question1-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w1 = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w1 = 2; 
    } else { 
        w1 = 1; 
    }; 

    let score1 = 0; 
    if (document.getElementById('section1-yes').checked){
        score1 +=2;
    } else if (document.getElementById('section1-maybe').checked){
        score1 +=1;
    } else { 
        score1 +=0
    }; 
    
    q1score= w1 * score1;

    //question 2

    let w2=0; 

    x = document.getElementById('question2-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w2 = 3; 
    } else if (x.options[x.selectedIndex].value  = "2"){
        w2 = 2; 
    } else { 
        w2 = 1; 
    }; 

    let score2 = 0; 

    if (document.getElementById('section2-yes').checked){
        score2 +=2;
    } else if (document.getElementById('section2-maybe').checked){
        score2 +=1;
    } else { 
        score1 +=0
    }; 

    q2score= w2 * score2;

    // question 3

    let w3=0; 
    x = document.getElementById('question3-wt-selector');

    if (x.options[x.selectedIndex].value  = "3"){
        w3 = 3; 
    } else if (x.options[x.selectedIndex].value  = "2"){
        w3 = 2; 
    } else { 
        w3 = 1; 
    }; 

    let score3 = 0; 

    if (document.getElementById('section3-yes').checked){
        score3 +=2;
    } else if (document.getElementById('section3-maybe').checked){
        score3 +=1;
    } else { 
        score1 +=0
    }; 

    q3score= w3 * score3;

    // question 4

    let w4=0; 
    x = document.getElementById('question4-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w4 = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w4 = 2; 
    } else { 
        w4 = 1; 
    }; 

    let score4 = 0; 

    if (document.getElementById('section4-yes').checked){
        score4 +=2;
    } else if (document.getElementById('section4-maybe').checked){
        score4 +=1;
    } else { 
        score1 +=0
    }; 

    q4score= w4 * score4;

    // Question 5

    let w5=0
    x = document.getElementById('question5-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w5 = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w5 = 2; 
    } else { 
        w5 = 1; 
    }; 

    let score5 = 0; 

    if (document.getElementById('section5-yes').checked){
        score5 +=2;
    } else if (document.getElementById('section5-maybe').checked){
        score5 +=1;
    } else { 
        score1 +=0
    }; 

    q5score= w5 * score5;

    // Question 6

    let w6=0
    x = document.getElementById('question6-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w6 = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w6 = 2; 
    } else { 
        w6 = 1; 
    }; 

    let score6 = 0; 

    if (document.getElementById('section6-yes').checked){
        score6 +=2;
    } else if (document.getElementById('section6-maybe').checked){
        score6 +=1;
    } else { 
        score1 +=0
    }; 

    q6score= w6 * score6;

    // Question 7

    let w7=0
    x = document.getElementById('question7-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w7 = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w7 = 2; 
    } else { 
        w7 = 1; 
    }; 

    let score7 = 0; 

    if (document.getElementById('section7-yes').checked){
        score7 +=2;
    } else if (document.getElementById('section7-maybe').checked){
        score7 +=1;
    } else { 
        score1 +=0
    }; 

    q7score= w7 * score7;

    // Question 8

    let w8=0; 
    x = document.getElementById('question8-wt-selector');

    if (x.options[x.selectedIndex].value = "3"){
        w8 = 3; 
    } else if (x.options[x.selectedIndex].value = "2"){
        w8 = 2; 
    } else { 
        w8 = 1; 
    }; 

    let score8 = 0; 

    if (document.getElementById('section8-yes').checked){
        score8 +=2;
    } else if (document.getElementById('section8-maybe').checked){
        score8 +=1;
    } else { 
        score1 +=0
    }; 


    q8score= w8 * score8;

    // FINAL TALLY

    let totalScore = q1score + q2score + q3score + q4score + q4score + q6score + q7score + q8score

    //weighted total is a "yes", at 2 points, multiplied by the question's importance. 

    let weightedTotal= 2 * (w1 + w2 + w3 + w4 + w5 + w6 + w7 + w8)

    let finalScore = (totalScore/weightedTotal)*100

    if (finalScore > 66){
        alert(finalScore);
        message = `Your score is ${finalScore}.  \n Do it.`;
        document.getElementById("resultdisplay").innerHTML = message; 
    } else {
        alert(finalScore);
        message = `Your score is ${finalscore}. \n Don't do it.`
        document.getElementById("resultdisplay").innerHTML = message;
    }; 
    
}