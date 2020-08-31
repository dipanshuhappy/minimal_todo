let count=0
let todoList=document.querySelector("ol")
function saveTodo(){
    let todoTextArea=document.getElementById("todo")
    let todoText=todoTextArea.value
        if(todoText.length>0){
            todoList.innerHTML+='<li id='+(count++)+'>'+String(todoText).trim()+'</li>'
            todoTextArea.value=""
            let todoItems=document.querySelectorAll("ol li")
            todoItems.forEach(setTodoList)
        }
}
function setTodoList(item){
    
    item.setAttribute("contenteditable","false")
    item.onkeypress=function(){
      return event.keyCode!=13
    }
    item.ondblclick=deleteTodo.bind(item)
    item.onclick=editTodo.bind(item)
    }
function deleteTodo(items){
    let deletedItem=items.srcElement

        items.srcElement.parentNode.removeChild(deletedItem)
    console.log("ldks")
}
function editTodo(items){
    console.log(items)
    let selectedItem=items.srcElement
    selectedItem.setAttribute("contenteditable","true")
    console.log(selectedItem)
}
function stopEdit(items){
    let selectedItem=items.srcElement
    if(event.keyCode===13){
        selectedItem.setAttribute("contenteditable","false")
    }
    console.log(selectedItem)
}
/*let todoItems=document.querySelectorAll("ol li")
todoItems.forEach(function(item){
    console.log(item.id)
    if(item.ondblclick!=null){
    let deletedItem=document.getElementById(item.id)
    item.parentNode.removeChild(deletedItem)
    }
})*/