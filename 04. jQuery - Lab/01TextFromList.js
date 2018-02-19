function extractText() {
    let values=$('#items').find('li').toArray().map((li)=>
        $(li).text()).join(', ');
    $('#result').text(values);
}
