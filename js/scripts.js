var name = prompt("Hello Welcome to Pig Latin Translator! What is your name?");

var play = prompt("Do you want to translate a 'sentence' or 'word'?");

if(play == "word"){
  var word = prompt("What word would you like to be translated " + name + "?");

  var firstindex = word.search(/[aeiou]/i);

  if(firstindex === 0){
    var newWord = word + "ay";
    alert(newWord);
  }

  else if (word.startsWith("qu") === true){
    var newWord = word.split("");
    newWord[0] = null;
    newWord[1] = null;
    newWord.push("quay");
    alert(newWord.join(""));
  }

  else if (word.startsWith("qu", 1) === true){
    var newWord = word.split("");
    newWord[0] = null;
    newWord[1] = null;
    newWord[2] = null;
    newWord.push(word[0] + "quay");
    alert(newWord.join(""));
  }

  else if (firstindex !== 0){
         var newWord = word.slice(firstindex) + word.slice(0, firstindex) + "ay";
         alert(newWord);
  }
}

else if(play == "sentence"){
  var sentence = prompt("What sentence would you like to be translated " + name + "?");

  var newSentence = sentence.split(" ");

  var latinSentence = newSentence.map(function(cent){
    var firstindex = cent.search(/[aeiou]/i);

    if(firstindex === 0){
      return cent + "ay";
    }

    else if (cent.startsWith("qu") === true){
      return cent.slice(2) + cent.slice(0, 2) + "ay";
    }

    else if (cent.startsWith("qu", 1) === true){
      return cent.slice(3) + cent.slice(0, 3) + "ay";
    }

    else if (firstindex !== 0){
          return cent.slice(firstindex) + cent.slice(0, firstindex) + "ay";
    }
  });
  alert(latinSentence.join(" "));
}
