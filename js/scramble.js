let words = [
    {
        word: "Cyberbullying",
        hint: "The use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature."
    },
    {    

        word: "Online Predators",
        hint: "Adults who use the internet to abuse children online."
    },
    {    
        word: "Adware",
        hint: "A harmful code that displays unwanted advertising on your computer."
    },
    {    
        word: "Cybercrime",
        hint: "Any Internet related illegal activity."
    },
    {    
        word: "Cybersecurity",
        hint: "A technique or software that protect the computer and prevent online crime."
    },
    {    
        word: "Cyberstalking",
        hint: "Methods used to harm, track or harass another person online."
    },
    {    
        word: "File Sharing",
        hint: "A software that enables multiple users to access the same file. File sharing sometimes is used illegally to download music or software."
    },
    {    
        word: "Firewall",
        hint: "A security system usually made up of hardware and software used to block hackers."
    },
    {    
        word: "Hackers",
        hint: "A person who uses computers to gain unauthorised access to data."
    },
    {    
        word: "scammer",
        hint: "A person who commits fraud or participates in illegal scheme."
    },
    {    
        word: "Grooming",
        hint: "A method that bad persons and sexual predators use to get to know and seduce their victims for sexual abuse."
    },
    {    
        word: "Hardware",
        hint: "A term for the actual computer equipment and related machines or computer parts."
    },
    {    
        word: "Identity theft",
        hint: "A crime where someone steal another person's important information like credit card, social security number, or bank account."
    },
    {    
        word: "Internet",
        hint: "A giant collection of computers that connect people and information online."
    },
    {    
        word: "Malware",
        hint: "Stands for Malicious software or code which includes any harmful code, worms and trojans that is designed to damage the computer or collect information."
    },
    {    
        word: "Password",
        hint: "A secret word or number that muse be used to gain access to an online service."
    },
    {    
        word: "Phishing",
        hint: "A type of online fraud where someone tried to trick the victim into revealing sensitive details such as username, password or credit card details."
    },
    {    
        word: "Software",
        hint: "Any program that runs on a computer"
    },
    {    
        word: "Spam",
        hint: "Unwanted email or junk mail that is used for money scam or sexual in nature."
    },
    {    
        word: "Spyware",
        hint: "A piece of software installed on computers to collect information about them without their knowledge."
    },
    {    
        word: "Texting",
        hint: "A method of sending short messages between mobile phones."
    },
    {    
        word: "Username",
        hint: "The name a user select to be identified on a computer, network, or online gaming forum."
    },
    {    
        word: "Virus",
        hint: "A software or a program that typically arrives through email attachments and tries to harm your computer."
    },
    {    
        word: "Attachment",
        hint: "A file that is sent along with an email message, social network post, IM, via Skype and various other programs. It can be any sort of file and pictures are often sent this way."
    },
    {    
        word: "Blacklist",
        hint: "A list of undesired websites or keywords that are blocked to ensure that browsing the internet is safer."
    },
    {    
        word: "Bookmarks",
        hint: "A web address stored in your browser to let you go directly to a specific website or web page which also known as favourites."
    },
    {    
        word: "Browser",
        hint: "A program that allows you to use the WEB to view internet pages."
    },
    {    
        word: "Chatting",
        hint: "Taking part in an online chat, either in a chat room, online gaming or by instant messaging."
    }
]

const wordText = document.getElementById("wordScramble"),
hintText = document.getElementById("hint-span"),
inputField = document.getElementById("inputScramble"),
refreshBtn = document.getElementById("refresh-word"),
checkBtn = document.getElementById("check-word");

let correctWord;

const initGame = () => {
    document.getElementById("feedback").innerHTML = "";
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) {
        document.getElementById("feedback").innerHTML = `<h3 class='accentIncorrect'>Enter a word!</h3>`;
        return
    }
    if(userWord !== correctWord) {
        document.getElementById("feedback").innerHTML = `<h3 class='accentIncorrect'>Incorrect!</h3>`;
        return
    }
    document.getElementById("feedback").innerHTML = "<h3 class='accent'>Correct!</h3>";
    setTimeout(() => { initGame(); }, 1500);
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkBtn.click();
    }
});
