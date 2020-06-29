
function calculateResult(){
    //alert("Javascript is working");
    let score = 0; 

    if (document.getElementById('section1-yes').checked){
        score +=10;
        
    }else { 
        score +=0
    }; 

    if (document.getElementById('section2-no').checked){
        score +=7;
    }else { 
        score +=0
    }; 

    if (document.getElementById('section3-yes').checked){
        score +=1;
    }else { 
        score +=0
    }; 

    if (document.getElementById('section4-yes').checked){
        score +=1;
    }else { 
        score +=0
    }; 

    if (document.getElementById('section5-yes').checked){
        score +=1;
    }else { 
        score +=0
    }; 

    if (document.getElementById('section6-yes').checked){
        score +=1;
    }else { 
        score +=0
    }; 

    if (document.getElementById('section7-no').checked){
        score +=1;
    }else { 
        score +=0
    }; 

    if (document.getElementById('section8-no').checked){
        score +=1;
        document.getElementById("resultdisplay").innerHTML = score
    }else { 
        score +=0
        document.getElementById("resultdisplay").innerHTML = score
    }; 

    if (score > 16){
        message = `Your score is ${score}.  \n Do it.`
        document.getElementById("resultdisplay").innerHTML = message; 
    }else if  (score = 16 ) {
        message = `Your score is ${score}.  \n Do it, but reprioritise other commitments.`
        document.getElementById("resultdisplay").innerHTML = message; 
    } else {
        message = `Your score is ${score}. \n Don't do it.`
        document.getElementById("resultdisplay").innerHTML = message;
    }; 
    
}