function show_items(event){
    let element = event.currentTarget
    let check_elements  = document.querySelectorAll('.checked')
    let all_items = document.querySelectorAll('.item')
    if (element.checked == false) {
        check_elements.forEach(e => {
            e.style.display = 'none'
        })
    } else {
        all_items.forEach(e => {
            e.style.display = 'flex'
        })
    }
}




function delete_item(event) {
    let element = event.currentTarget
    let dad = element.parentNode

    dad.remove()

}

function complete_item(event) {
    let element = event.currentTarget
    let dad = element.parentNode

    dad.classList.add('checked')
    dad.classList.remove('not_checked')
}

function  createElement(element, classe) {
    let a = document.createElement(element)
    a.classList.add(classe)

    return a
}


function addItem(){
    let input = document.getElementById('add_text_input').value
    let container = document.getElementById('items_container')

    if ( input != '') {

        let item = createElement('div', 'item')
        item.classList.add('not_checked')

        let button_ok = createElement('div', 'button_ok')
        button_ok.onclick = function () {complete_item(event)}
        let img_ok = createElement('img', 'imagem') 
        img_ok.src = 'img/check_icon.svg'
        button_ok.appendChild(img_ok)
        
        let h1 = createElement('h1', 'list_text')
        h1.textContent = input
        
        let button_delete = createElement('div', 'button_delete')
        button_delete.onclick = function () {delete_item(event)}
        let img_del = createElement('img', 'imagem') 
        img_del.src = 'img/delete_icon.svg'
        button_delete.appendChild(img_del)

        item.appendChild(button_ok)
        item.appendChild(h1)
        item.appendChild(button_delete)

        container.appendChild(item)

    }

}