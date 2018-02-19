function attachEvents() {
$('#items li').on('click', function () {
    if(!$(this).attr('data-selected')){
        $(this).attr('data-selected', true);
        $(this).css('background-color', '#DDD');
    }else{
        $(this).removeAttr('data-selected');
        $(this).css('background-color', '');
    }


})
    $('#showTownsButton').on('click',function () {
        let li= $('#items li[data-selected=true]')
            let towns=li.toArray().map(li=>li.textContent).join(", ");
        $('#selectedTowns').text(`Selected towns: ${towns}`);
    })

}

