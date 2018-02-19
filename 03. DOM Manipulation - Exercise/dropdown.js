function addItem() {
    let newTextItem=document.getElementById("newItemText").value;
    let newItemValue=document.getElementById("newItemValue").value;
    let element=document.createElement("option");
    element.textContent=newTextItem;
    element.value=newItemValue;
    let parent=document.getElementById('menu');
    parent.appendChild(element);
    document.getElementById("newItemText").value='';
    document.getElementById("newItemValue").value='';

}
