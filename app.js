function createParagraph(){
    var wordOne = document.getElementById("one").value;
    var wordTwo = document.getElementById("two").value;
    var wordThree = document.getElementById("three").value;
    var wordFour = document.getElementById("four").value;
    var wordFive = document.getElementById("five").value;
    var wordSix = document.getElementById("six").value;
    var wordSeven = document.getElementById("seven").value;

    console.log(wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven);

    var paragraph = "<p> My favorite place to drive my " + wordOne + " is to the " + wordTwo + " ." + " Me and my " + wordThree + " alway enjoy looking at all the beautiful " + wordFour + ". " + " I always end up spilling " + wordFive + " in my car so we stop by a " + wordSix + " to get the car looking " + wordSeven + " again! </p>";

    console.log(paragraph);
    
    document.getElementById('answer').innerHTML = paragraph;
}