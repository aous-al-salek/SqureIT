const personalInfo = [
    {
        question: "If someone asks you what your name is? What should you do? Choose the correct answer.",
        answers: {
            a: "Answer the question with your real name.",
            b: "Ignore the question and don’t answer it.",
            c: "Answer the question with a fake name.",
        },
        correctAnswer: "b",
        feedback: {
            a : "You should NOT share your real name.",
            c : "Ignore the question and don’t answer it because it might lead to other questions.",
        },
        image : ""
    },
    {
        question: "What is the best screen name or username if your real name is Liam? Choose the correct answer.",
        answers: {
            a: "Liam A",
            b: "RonaldoCR7",
            c: "Victor",
        },
        correctAnswer: "b",
        feedback: {
            a : "Don't use your real name.",
            c : "Don't use fake names because they will keep asking you for more information.",
        },
        image : ""
    },
    {
        question: "If someone online that you play with said “My school is in the south part of Stockholm” and then asked you what school you go to? What should you do? Choose the correct answer.",
        answers: {
            a: "Answer with your school's name.",
            b: "Answer with a fake school name.",
            c: "Don't answer and continue playing.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Don’t share your school's name.",
            b : "Ignore the question and don’t answer it because it might lead to other questions.",
        },
        image : ""
    },
    {
        question: "What should you do If an online friend asks you where you live? Choose the correct answer.",
        answers: {
            a: "Answer with your real address.",
            b: "Answer with a fake address.",
            c: "Ignore the question and don't answer.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Don’t answer when someone asks about your real address even if they keep asking you.",
            b : "Ignore the question and don't answer it.",
        },
        image : ""
    }
];

const howToBehaveOnline = [
    {
        question: "What should you do if you hear someone curse online? Choose the correct answer.",
        answers: {
            a: "Curse back.",
            b: "Ignore it.",
            c: "Ask them to stop.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Cursing back can lead to more hurt and violence",
            b : "Ignoring hurt can lead to bad consequences",
        },
        image : ""
    },
    {
        question: "Why is it important to not curse? Choose the correct answer.",
        answers: {
            a: "Because it's more fun.",
            b: "Because it's safer.",
            c: "Because you avoid creating a hostile environment and it's polite.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Cursing does more than ruin the fun.",
            b : "Cursing does more than threaten your safety.",
        },
        image : ""
    },
    {
        question: "What should you do if you accidentally curse? Choose the correct answer.",
        answers: {
            a: "Keep cursing.",
            b: "Apologize.",
            c: "Ignore it.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Continuing to curse can lead to more hurt and violence.",
            c : "Ignoring hurt can lead to bad consequences.",
        },
        image : ""
    },
    {
        question: "What should you do if someone hurts you? Choose the correct answer.",
        answers: {
            a: "Hurt them back.",
            b: "Tell an adult.",
            c: "Ignore them.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Hurting someone back can lead to more hurt and violence.",
            c : "Ignoring hurt can lead to bad consequences.",
        },
        image : ""
    },
    {
        question: "Why is it important to not hurt anyone? Choose the correct answer.",
        answers: {
            a: "Because it's more fun.",
            b: "Because it's safer.",
            c: "Because it's kind.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Huring someone does more than ruin the fun.",
            b : "Hurting someone does more than threaten your safety.",
        },
        image : ""
    },
    {
        question: "What should you do if you see someone hurting someone else? Choose the correct answer.",
        answers: {
            a: "Tell an adult.",
            b: "Ignore it.",
            c: "Join in.",
        },
        correctAnswer: "a",
        feedback: {
            b : "Ignoring hurt can lead to bad consequences.",
            c : "Joining in can lead to more hurt and violence.",
        },
        image : ""
    },
    {
        question: "What should you do if someone you don't know tries to talk to you online? Choose the correct answer.",
        answers: {
            a: "Talk to them.",
            b: "Ignore them.",
            c: "Block them.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Talking to strangers online can be dangerous.",
            c : "Blocking someone might not be enough to keep you safe.",
        },
        image : ""
    },
    {
        question: "Why is it important to avoid connecting with strangers in real life? Choose the correct answer.",
        answers: {
            a: "Because it's more fun.",
            b: "Because it's safer.",
            c: "Because it's polite.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Avoiding connecting with strangers in real life is not just about having fun.",
            c : "Avoiding connecting with strangers in real life is not just about being polite.",
        },
        image : ""
    },
    {
        question: "What should you do if someone you don't know wants to meet you in person? Choose the correct answer.",
        answers: {
            a: "Meet them.",
            b: "Ignore them.",
            c: "Tell your parents or a trusted adult.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Meeting someone who might be dangerous can lead to bad consequences.",
            b : "Ignoring someone who might be dangerous can lead to bad consequences.",
        },
        image : ""
    },
    {
        question: "What should you do if you get an email from someone you don't know? Choose the correct answer.",
        answers: {
            a: "Ignore the email.",
            b: "Click on the links in the email.",
            c: "Reply to the email.",
        },
        correctAnswer: "a",
        feedback: {
            b : "Clicking on links in emails from unknown senders can be dangerous",
            c : "Replying to emails from unknown senders can be dangerous",
        },
        image : ""
    },
    {
        question: "Why is it important to not click on unknown links? Choose the correct answer.",
        answers: {
            a: "Because it's safer.",
            b: "Because it's more fun.",
            c: "Because it's polite.",
        },
        correctAnswer: "a",
        feedback: {
            b : "Clicking on links has nothing to do with fun.",
            c : "Clicking on links has nothing to do with being polite.",
        },
        image : ""
    },
    {
        question: "What does it mean to be a critical thinker online? Choose the correct answer.",
        answers: {
            a: "To believe everything you read.",
            b: "To question what you read.",
            c: "To ignore what you read.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Being a critical thinker means questioning what you read and not believing everything you see.",
            c : "Ignoring what you read might mean missing out on important information.",
        },
        image : ""
    },
    {
        question: "What should you do if you're not sure whether something is true or not? Choose the correct answer.",
        answers: {
            a: "Believe it anyway.",
            b: "Ignore it.",
            c: "Question it.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Believing something that might be false can lead to bad decisions.",
            b : "Ignoring something that might be false can lead to bad decisions.",
        },
        image : ""
    },
    {
        question: "What should you do if you have a group of friends that you play with? Choose the correct answer.",
        answers: {
            a: "Leave someone out.",
            b: "Include everyone.",
            c: "Play by yourself.",
        },
        correctAnswer: "b",
        feedback: {
            a : "If you leave someone out, they might feel sad or left out.",
            c : "Playing by yourself might be boring.",
        },
        image : ""
    },
    {
        question: "What should you do if someone is left out when you play together? Choose the correct answer.",
        answers: {
            a: "Ignore them.",
            b: "Ask them to leave.",
            c: "Include them.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Ignoring someone who is left out might make them feel worse.",
            b : "Asking someone to leave might be mean.",
        },
        image : ""
    },
    {
        question: "Why is it important to include everyone when you play together? Choose the correct answer.",
        answers: {
            a: "Because it's more fun.",
            b: "Because it's safer.",
            c: "Because it's polite.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Including everyone is not just about having fun",
            b : "Including everyone is not just about safety",
        },
        image : ""
    },
    {
        question: "Why is it important to get consent before posting pictures online? Choose the correct answer.",
        answers: {
            a: "Because it's fun.",
            b: "Because it's safe.",
            c: "Because it's polite.",
        },
        correctAnswer: "a",
        feedback: {
            b : "Getting consent is not about having fun.",
            c : "Getting consent is not just about being polite.",
        },
        image : ""
    },
    {
        question: "What should you do if someone asks you not to share their picture online? Choose the correct answer.",
        answers: {
            a: "Share it anyway.",
            b: "Ask them why.",
            c: "Respect their wishes.",
        },
        correctAnswer: "c",
        feedback: {
            a : "If someone asks you not to share their picture online, you should respect their wishes and not share it.",
            b : "If someone asks you not to share their picture online, you should respect their wishes and not share it.",
        },
        image : ""
    },
    {
        question: "What should you say when someone offers you something you don’t want? Choose the correct answer.",
        answers: {
            a: "Yes.",
            b: "No.",
            c: "Maybe.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Saying yes can make you feel very tired, and unhappy, and hurt yourself or others.",
            c : "It may make you look like you don’t believe in yourself, and some may try to trick you.",
        },
        image : ""
    },
    {
        question: "What should you be careful about when you post online? Choose the correct answer.",
        answers: {
            a: "What you had for breakfast.",
            b: "What you’re wearing.",
            c: "Personal information.",
        },
        correctAnswer: "c",
        feedback: {
            a : "You should be careful about what personal information you post online.",
            b : "You should be careful about what personal information you post online.",
        },
        image : ""
    },
    {
        question: "What might happen if you reveal too much personal information online? Choose the correct answer.",
        answers: {
            a: "You may make new friends.",
            b: "You may get in trouble.",
            c: "You may reveal too much information.",
        },
        correctAnswer: "c",
        feedback: {
            a : "If you reveal too much personal information online, people might be able to find out things about you that you don’t want them to know.",
            b : "If you reveal too much personal information online, people might be able to find out things about you that you don’t want them to know.",
        },
        image : ""
    },
    {
        question: "What should you do if you’re not sure whether to post something online? Choose the correct answer.",
        answers: {
            a: "Post it anyway.",
            b: "Ask your parents or a trusted adult for help.",
            c: "Ignore it.",
        },
        correctAnswer: "b",
        feedback: {
            a : "If you’re not sure whether to post something online, it’s always better to ask your parents or a trusted adult for help or advice. You may post content that harms you more than it benefits you.",
            c : "If you’re not sure whether to post something online, it’s always better to ask your parents or a trusted adult for help or advice. You may post content that harms you more than it benefits you.",
        },
        image : ""
    }
];

const talkToAnAdult = [
    {
        question: "What should you do if you’re not sure about something? Choose the correct answer.",
        answers: {
            a: "Ask an adult.",
            b: "Ignore it.",
            c: "Do it anyway.",
        },
        correctAnswer: "a",
        feedback: {
            b : "It’s better to be safe than sorry because you might get hurt if you’re not careful.",
            c : "If you’re not sure about something, it’s always better to ask an adult for help or advice.",
        },
        image : ""
    },
    {
        question: "Why is it better to be safe than sorry? Choose the correct answer.",
        answers: {
            a: "Because you may get in trouble.",
            b: "Because you may hurt someone.",
            c: "Because you may get hurt.",
        },
        correctAnswer: "c",
        feedback: {
            a : "It’s better to be safe than sorry because you may get hurt if you’re not careful.",
            b : "It’s better to be safe than sorry because you may get hurt if you’re not careful.",
        },
        image : ""
    },
    {
        question: "Who can you ask for help if you’re not sure about something? Choose the correct answer.",
        answers: {
            a: "Your friends.",
            b: "Your parents or a trusted adult.",
            c: "No one.",
        },
        correctAnswer: "b",
        feedback: {
            a : "You should always ask your parents or a trusted adult for help or advice when you’re not sure about something.",
            c : "You should always ask your parents or a trusted adult for help or advice when you’re not sure about something.",
        },
        image : ""
    },
    {
        question: "Is it safe to download any file you find on the internet? Choose the correct answer.",
        answers: {
            a: "Yes, it's always safe.",
            b: "No, there is always a risk.",
            c: "Maybe.",
        },
        correctAnswer: "b",
        feedback: {
            a : "It is important not to download random files and to avoid untrusted sources even if you use antivirus software.",
            c : "It is important not to download random files and to avoid untrusted sources even if you use antivirus software.",
        },
        image : ""
    },
    {
        question: "What should you do if you are unaware or unsure about something? Choose the correct answer.",
        answers: {
            a: "Do it anyway.",
            b: "Ask first.",
            c: "Keep it to yourself.",
        },
        correctAnswer: "b",
        feedback: {
            a : "If you’re not sure about something, it’s always better to ask someone you trust for help or advice. This way, you can be sure that you’re making the right decision and that you’re staying safe.",
            c : "If you’re not sure about something, it’s always better to ask someone you trust for help or advice. This way, you can be sure that you’re making the right decision and that you’re staying safe.",
        },
        image : ""
    },
    {
        question: "Is it okay to do something if you're not sure about it? Choose the correct answer.",
        answers: {
            a: "Yes, it's always okay.",
            b: "No, it's never okay.",
            c: "Do it anyway.",
        },
        correctAnswer: "b",
        feedback: {
            a : "It’s never okay to do something if you’re not sure about it. If you’re not sure about something, it’s always better to ask someone you trust for help or advice. This way, you can be sure that you’re making the right decision and that you’re staying safe.",
            c : "It’s never okay to do something if you’re not sure about it. If you’re not sure about something, it’s always better to ask someone you trust for help or advice. This way, you can be sure that you’re making the right decision and that you’re staying safe.",
        },
        image : ""
    }
]

const dataOnline = [
    {
        question: "Should you think before you post something online? Choose the correct answer.",
        answers: {
            a: "Yes.",
            b: "No.",
            c: "Maybe.",
        },
        correctAnswer: "a",
        feedback: {
            b : "It is never a bad idea to think before you post something. This helps you protect your privacy and stay safe.",
            c : "It is never a bad idea to think before you post something. This helps you protect your privacy and stay safe.",
        },
        image : ""
    },
    {
        question: "Do you need to be careful with what you share online? Choose the correct answer.",
        answers: {
            a: "Yes, you should be careful.",
            b: "It depends on the situation",
            c: "No, it's okay to share anything.",
        },
        correctAnswer: "a",
        feedback: {
            b : "You should always be careful with what you post online. This helps you protect your privacy and stay safe.",
            c : "You should always be careful with what you post online. This helps you protect your privacy and stay safe.",
        },
        image : ""
    }
];

const phishing = [
    {
        question: "What should you do if you receive an email from a bad person? Choose the correct answer.",
        answers: {
            a: "Give them your game password.",
            b: "Ignore the email.",
            c: "Don't give them your game password",
        },
        correctAnswer: "c",
        feedback: {
            a : "You should never give out your password to anyone, especially someone you don’t know.",
            b : "You should never give out your password to anyone, especially someone you don’t know.",
        },
        image : ""
    },
    {
        question: "What is a phishing email? Choose the correct answer.",
        answers: {
            a: "A fake email.",
            b: "A legitimate email.",
            c: "A funny email.",
        },
        correctAnswer: "a",
        feedback: {
            b : "A phishing email is a fake email with the goal of getting you to do something you shouldn't.",
            c : "A phishing email is a fake email with the goal of getting you to do something you shouldn't.",
        },
        image : ""
    },
    {
        question: "What should you do if someone sends you an email saying they want to give you a prize? Choose the correct answer.",
        answers: {
            a: "Give them the information they request.",
            b: "Ignore the email.",
            c: "Ask your parents or a trusted adult for help.",
        },
        correctAnswer: "c",
        feedback: {
            a : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know offering to give you a prize.",
            b : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know offering to give you a prize.",
        },
        image : ""
    },
    {
        question: "What should you do if someone sends you an email asking for money to help people? Choose the correct answer.",
        answers: {
            a: "Give them your money.",
            b: "Ask your parents or a trusted adult for help.",
            c: "Ingore the email.",
        },
        correctAnswer: "b",
        feedback: {
            a : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know asking for money.",
            c : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know asking for money.",
        },
        image : ""
    },
    {
        question: "What should you do if someone sends you an email saying there’s a problem with your bank account? Choose the correct answer.",
        answers: {
            a: "Ask your parents or a trusted adult for help.",
            b: "Give them your bank password.",
            c: "Ignore the email.",
        },
        correctAnswer: "a",
        feedback: {
            b : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know asking for your bank password.",
            c : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know asking for your bank password.",
        },
        image : ""
    },
    {
        question: "What should you do if someone sends you an email asking for your bank password? Choose the correct answer.",
        answers: {
            a: "Ignore the email.",
            b: "Give them your bank password.",
            c: "Ask your parents or a trusted adult for help.",
        },
        correctAnswer: "c",
        feedback: {
            a : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know asking for your bank password.",
            b : "You should always ask your parents or a trusted adult for help when you receive an email from someone you don’t know asking for your bank password.",
        },
        image : ""
    },
    {
        question: "What is the goal with phishing emails? Choose the correct answer.",
        answers: {
            a: "Serve you ads.",
            b: "Trick you into doing something you shoulden't.",
            c: "Inform you about fishing opportunities in your area.",
        },
        correctAnswer: "b",
        feedback: {
            a : "Although phishing emails may contain ads, the primary goal with phishing emails is to trick you into doing something you shoulden't.",
            c : "Fishing has nothing to do with phishing emails. The primary goal with phishing emails is to trick you into doing something you shoulden't.",
        },
        image : ""
    },
    {
        question: "What should you do if you receive a phishing email? Choose the correct answer.",
        answers: {
            a: "Do what they ask you to do.",
            b: "Reply asking not to be sent such emails.",
            c: "Don't click on anything (text, image, or links) delete the mail, report it as spam, and block the sender.",
        },
        correctAnswer: "c",
        feedback: {
            a : "Never do what a phishing email asks to do. Don't click on anything (text, image, or links) delete the mail, report it as spam, and block the sender.",
            b : "Never reply to a phishing email because the problem will only get worse. Don't click on anything (text, image, or links) delete the mail, report it as spam, and block the sender.",
        },
        image : ""
    }
];

document.getElementById("finish-button-div").style.display = "none";

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

let personalInfoRandom = personalInfo.sort(() => Math.random() - 0.5).slice(0, 2);
let howToBehaveOnlineRandom = howToBehaveOnline.sort(() => Math.random() - 0.5).slice(0, 2);
let talkToAnAdultRandom = talkToAnAdult.sort(() => Math.random() - 0.5).slice(0, 2);
let dataOnlineRandom = dataOnline.sort(() => Math.random() - 0.5).slice(0, 2);
let phishingRandom = phishing.sort(() => Math.random() - 0.5).slice(0, 2);
let concatenatedQuestions = personalInfoRandom.concat(howToBehaveOnline).concat(talkToAnAdultRandom).concat(dataOnlineRandom).concat(phishingRandom)
let quizQuestionsPreliminary = concatenatedQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
let quizQuestions = shuffle(quizQuestionsPreliminary);

let currentQuestion = 0;
let score = 0;
let selectedAnswer = '';

function displayQuestion() {
    let image = quizQuestions[currentQuestion].image;
    let question = quizQuestions[currentQuestion].question;
    let answers = quizQuestions[currentQuestion].answers;
    let imageHTML = `<img id="Imagen" src="${image}" style="width:100%;max-width:1000px">`
    let questionHTML = `<h2>${question}</h2>`;
    let answersHTML = "";
    for (const letter in answers) {
        answersHTML += `<label class="checkbox_label id=checkbox_label_id"><input class="checkbox" type="radio" name="answer" value='${letter}' onclick="selectAnswer('${letter}')"> ${answers[letter]}</label>`;
    }
    document.getElementById("quiz").innerHTML = imageHTML + questionHTML + answersHTML;
}

function selectAnswer(answer) {
    selectedAnswer = answer;
}

function checkAnswer() {
    if (selectedAnswer === '') {
        alert('Please select an answer');
        return;
    }
    if (currentQuestion === quizQuestions.length-1){
        document.getElementById("next-button").innerHTML = "Finish";
    }
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById("feedback").innerHTML = "<h3 class='accent'>Correct!</h3>";
    } else {
        document.getElementById("feedback").innerHTML = `<h3 class='accentIncorrect'>Incorrect! ${quizQuestions[currentQuestion].feedback[selectedAnswer]}</h3>`;
    }
    var x = document.getElementsByClassName("checkbox");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    
    const elements = document.getElementsByClassName("checkbox_label");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    document.getElementById("submit-button").style.display = "none";
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    document.getElementById("feedback").innerHTML = "";
    currentQuestion++;
    selectedAnswer = '';
    if (currentQuestion === quizQuestions.length) {
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("score").innerHTML = `<h2 class='accent'>Your score: ${Math.round(score / quizQuestions.length * 100)}%</h2>`;
        document.getElementById("redo").innerHTML = `<a class="retake" href="javascript:window.location.href=window.location.href">Take the quiz again?</a>`;
        document.getElementById("user-feedback").innerHTML = `<a class="retake" href="/feedback">Give Feedback?</a>`;
        
        document.getElementById("finish-button").style.display = "block";
        document.getElementById("next-button").style.display = "none";
    } else {
        displayQuestion();
        document.getElementById("submit-button").style.display = "block";
        document.getElementById("next-button").style.display = "none";
    }
    clearImageModal()
}

function clearImageModal() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("Imagen");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.body.style.overflow = "hidden";
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
        document.body.style.overflow = "inherit";
    }
}

displayQuestion();
document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("next-button").addEventListener("click", nextQuestion);
