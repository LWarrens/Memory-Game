
	 function showVideos()
        {
		//var currentWord =  localStorage.getItem('currentWord');
		//var sign = currentWord + ".gif"
		
          //  document.getElementById("img").src = "../signs/" + sign 
			//removeWord()
			//setTimeout(removeSign, 3000);
			//setTimeout(showWord, 3000);
			showWord()
        }
		
		
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
		
	function showThumb()
        {
		var currentWord =  localStorage.getItem('currentWord');
		var thumb = currentWord + ".jpg"
		
            document.getElementById("img").src = "../thumbs/" + thumb 
			
        }
		
		function removeSign () 
		{
		document.getElementById("img").src = "" ;
		}