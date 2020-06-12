// Search content functionality

let userInput;

document.getElementById("pic-search").addEventListener("keyup", function() {
  

  let input = document.getElementById("pic-search");  // Receives user input from search form
    userInput = input.value.toLowerCase() 
    
    $('a').each(function(index, element) {            // Loops through 'a' elements

      let hidden = $('.item[style="display: none;"]');
      let caption = document.getElementsByTagName("a")[index].getAttribute("data-title");    // Targets caption from 'a' element
      let match = caption.includes(userInput);
      
      if (match != true || match === null) {
        $('.item').eq(index).hide();
        if ($('.item').length === hidden.length) {
          $('#noPhoto').removeAttr('hidden');;
           } else {
             $('#noPhoto').attr('hidden', true);
           }
      } else {
        $('.item').eq(index).show();
      } 

    });
    
});
            
let hidden = $('.item[style="display: none;"]');
if (match != true || match === null) {
  $('.item').eq(index).hide();
    if ($('.item').length === hidden.length) {
    // Code here to add "No Photos Found" message.
     }
} else {
  $('.item').eq(index).show();
} 







