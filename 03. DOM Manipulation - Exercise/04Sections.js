function create(input) {
    for(let sentence of input){
        let element=document.createElement('div');
        let paragraph=document.createElement('p');
        paragraph.textContent=sentence;
        paragraph.style.display='none';
        element.addEventListener('click', function () {
            paragraph.style.display='inline-block';
        });
        element.appendChild(paragraph);
        let content=document.getElementById("content");
        content.appendChild(element);
    }
}
