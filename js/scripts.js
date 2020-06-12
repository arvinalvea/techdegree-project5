let userInput;
let notFound = [];


document.getElementById("pic-search").addEventListener("keyup", function() {
  
  let input = document.getElementById("pic-search");
    userInput = input.value.toLowerCase()
    
    $('a').each(function(index, element) {

      let caption = document.getElementsByTagName("a")[index].getAttribute("data-title");
      let match = caption.includes(userInput);
      

      if (match != true || match === null) {
        $('.item').eq(index).hide();
        notFound.push('not found');
      } else {
        $('.item').eq(index).show();
        notFound.pop();
      } 

      
      console.log(notFound.length);

      // if (notFound.length > 12) {
      //   $('#noPhotos').show(); 
      // } else {
      //   $('#noPhotos').hide();
      // }

    });
    
    
  
});
            








