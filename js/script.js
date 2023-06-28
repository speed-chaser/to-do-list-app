const newItem = () => {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert('Field cannot be blank');
    } else {
        $('#list').append(li);
    }

    li.on('dblclick', (() => {
        li.toggleClass('strikethrough');
    }));

    let deleteButton = $('<button></button>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on('click', (() => {
        li.addClass('delete');
    }));


    $('#list').sortable();
}    