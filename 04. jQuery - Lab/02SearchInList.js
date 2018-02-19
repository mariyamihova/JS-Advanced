function search() {
   let targetValue=$('#searchText').val();
   let counter=0;
   $('#towns').find('li').each((index, element)=>{
       if(element.textContent.includes(targetValue)){
           counter++;
           $(element).css('font-weight','bold');
       }

   });
    $('#result').text(counter+' matches count.');
}
