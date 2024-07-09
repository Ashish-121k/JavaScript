const todoArray = [];


function rendershow(){
    let htmlList = '';

    for(let i=0; i<todoArray.length; i++){
        const todoObject = todoArray[i];
        const elementName = todoObject.name;
        const elementDate = todoObject.date;

        const html = `
            <div>${elementName}</div>
            <div>${elementDate}</div>
            <button onclick = "
                todoArray.splice(${i}, 1);
                rendershow();
            " class = "delete-button">Delete</button>
        `;

        htmlList += html;
    }
    document.querySelector('.show-todo')
    .innerHTML = htmlList;
}

function addOne(){
    const inputElement = document.querySelector(".todoElement");
    const inputDate = document.querySelector(".date-input");

    const val1= inputElement.value;
    const val2 = inputDate.value;
    todoArray.push({
        name :val1,
        date :val2
    });

    rendershow();

    inputElement.value = '';
    inputDate.value = '';
    
}