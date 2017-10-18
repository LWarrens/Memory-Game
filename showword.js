		function removeWord()
        {
		var currentWord = ""
document.getElementById("word").innerHTML = currentWord;
        }

		function showWord()
        {
		var currentWord = localStorage.getItem('currentWord');
document.getElementById("word").innerHTML = currentWord;
        }
