var myInput1 = document.getElementById("psw1");
var letter1 = document.getElementById("letter1");
var capital1 = document.getElementById("capital1");
var number1 = document.getElementById("number1");
var specialCharacter1 = document.getElementById("special-character1");
var length1 = document.getElementById("length1");
var strengthbar1 = document.getElementById("meter1");

var myInput2a = document.getElementById("pw-input1");
var myInput2b = document.getElementById("pw-input2");
var myOutput2 = document.getElementById("psw2").innerHTML;
var letter2 = document.getElementById("letter2");
var capital2 = document.getElementById("capital2");
var number2 = document.getElementById("number2");
var specialCharacter2 = document.getElementById("special-character2");
var length2 = document.getElementById("length2");
var strengthbar2 = document.getElementById("meter2");

myInput1.onkeyup = function() {
    var strength = 0;

    var lowerCaseLetters = /[a-z]/g;
    if(myInput1.value.match(lowerCaseLetters)) {  
        letter1.classList.remove("invalid");
        letter1.classList.add("valid");
        strength += 1;
    } else {
        letter1.classList.remove("valid");
        letter1.classList.add("invalid");
    }
    
    var upperCaseLetters = /[A-Z]/g;
    if(myInput1.value.match(upperCaseLetters)) {  
        capital1.classList.remove("invalid");
        capital1.classList.add("valid");
        strength += 1;
    } else {
        capital1.classList.remove("valid");
        capital1.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if(myInput1.value.match(numbers)) {  
        number1.classList.remove("invalid");
        number1.classList.add("valid");
        strength += 1;
    } else {
        number1.classList.remove("valid");
        number1.classList.add("invalid");
    }
    
    var specialCharacters = /[\u0021\u0022\u0023\u00a4\u0025\u0026\u002f\u0028\u0029\u003d\u003f\u0060\u0040\u00a3\u0024\u20AC\u007b\u005b\u005d\u007d\u005c\u003c\u003e\u007c\u002c\u003b\u002e\u003a\u002d\u005f\u0027\u002a\u00a8\u005e\u007e\u00a7\u00bd\u002b\u00B4]/g;
    if(myInput1.value.match(specialCharacters)) {  
        specialCharacter1.classList.remove("invalid");
        specialCharacter1.classList.add("valid");
        strength += 1;
    } else {
        specialCharacter1.classList.remove("valid");
        specialCharacter1.classList.add("invalid");
    }

    if(myInput1.value.length >= 14) {
        length1.classList.remove("invalid");
        length1.classList.add("valid");
        strength += 1;
    } else {
        length1.classList.remove("valid");
        length1.classList.add("invalid");
    }

    switch (strength) {
        case 0:
        strengthbar1.value = 5;
        break;

        case 1:
        strengthbar1.value = 20;
        break;

        case 2:
        strengthbar1.value = 40;
        break;

        case 3:
        strengthbar1.value = 65;
        break;

        case 4:
        strengthbar1.value = 80;
        break;

        case 5:
        strengthbar1.value = 100;
        break;
    }
}

var strength = 0;

var lowerCaseLetters = /[a-z]/g;
if(myOutput2.match(lowerCaseLetters)) {  
    letter2.classList.remove("invalid");
    letter2.classList.add("valid");
    strength += 1;
} else {
    letter2.classList.remove("valid");
    letter2.classList.add("invalid");
}

var upperCaseLetters = /[A-Z]/g;
if(myOutput2.match(upperCaseLetters)) {  
    capital2.classList.remove("invalid");
    capital2.classList.add("valid");
    strength += 1;
} else {
    capital2.classList.remove("valid");
    capital2.classList.add("invalid");
}

var numbers = /[0-9]/g;
if(myOutput2.match(numbers)) {  
    number2.classList.remove("invalid");
    number2.classList.add("valid");
    strength += 1;
} else {
    number2.classList.remove("valid");
    number2.classList.add("invalid");
}

var specialCharacters = /[\u0021\u0022\u0023\u00a4\u0025\u0026\u002f\u0028\u0029\u003d\u003f\u0060\u0040\u00a3\u0024\u20AC\u007b\u005b\u005d\u007d\u005c\u003c\u003e\u007c\u002c\u003b\u002e\u003a\u002d\u005f\u0027\u002a\u00a8\u005e\u007e\u00a7\u00bd\u002b\u00B4]/g;
if(myOutput2.match(specialCharacters)) {  
    specialCharacter2.classList.remove("invalid");
    specialCharacter2.classList.add("valid");
    strength += 1;
} else {
    specialCharacter2.classList.remove("valid");
    specialCharacter2.classList.add("invalid");
}

if(myOutput2.length >= 14) {
    length2.classList.remove("invalid");
    length2.classList.add("valid");
    strength += 1;
} else {
    length2.classList.remove("valid");
    length2.classList.add("invalid");
}

switch (strength) {
    case 0:
    strengthbar2.value = 5;
    break;

    case 1:
    strengthbar2.value = 20;
    break;

    case 2:
    strengthbar2.value = 40;
    break;

    case 3:
    strengthbar2.value = 65;
    break;

    case 4:
    strengthbar2.value = 80;
    break;

    case 5:
    strengthbar2.value = 100;
    break;
}

if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("message2").style.display = "block";

    var PWInput1 = document.getElementById("psw1");
    PWInput1.onfocus = function() {
        document.getElementById("message1").style.display = "block";
        document.getElementById("message2").style.display = "none";
    }

    PWInput1.onblur = function() {
        document.getElementById("message1").style.display = "none";
        document.getElementById("message2").style.display = "block";
    }
}
