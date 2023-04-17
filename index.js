const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector("#score");
const Show_Sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTime;

const sentences = ['Hello Shashank Yadav',
    'I am Frontend Developer',
    'I am Full Stack Web Developer']

// Step 5
const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0){
        let typing_speed = (actualWorlds / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you Wrote ${actualWords} words & time taken ${time_taken} sec`;

    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}

// Step 4
const endTypingTest = () => {
    btn.innerText = "Start";
    let date = new Date();
    endTime = date.getTime();
    totalTimeTaken = (endTime - startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    Show_Sentence.innerHTML = "";
    typing_ground.value = "";
}

// step3
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    //console.log(randomNumber);
    
    Show_Sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}


// step 2
btn.addEventListener('click',() => {
    switch(btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;


        case "done":
            typing_ground.setAttribute('disabled','true');
            endTypingTest();
            break;    


    }
})
