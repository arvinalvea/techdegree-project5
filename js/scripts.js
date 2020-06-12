let userInput;

document.getElementById("pic-search").addEventListener("keyup", function() {
  let input = document.getElementById("pic-search");
    userInput = input.value.toLowerCase()
    console.log(userInput);
    
    $('a').each(function(index, element) {

      let caption = document.getElementsByTagName("a")[index].getAttribute("data-title");
      let match = caption.includes(userInput);
      console.log(match);
  
      if (match != true || match === null) {
        $('.item').eq(index).hide();
      } else {
        $('.item').eq(index).show();
      }
    
    });  
  
});
            








