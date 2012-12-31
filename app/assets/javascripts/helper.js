var characterLimit = 140;  
  
charLimit = function(){  
      
    $('#remainingCharacters').html(characterLimit);  
      
    $('#micropost_id').bind('keyup', function(){  
        var charactersUsed = $(this).val().length;  
          
        if(charactersUsed > characterLimit){  
            charactersUsed = characterLimit;  
            $(this).val($(this).val().substr(0, characterLimit));  
            $(this).scrollTop($(this)[0].scrollHeight);  
        }  
          
        var charactersRemaining = characterLimit - charactersUsed;  
          
        $('#remainingCharacters').html(charactersRemaining);  
    });  
}  