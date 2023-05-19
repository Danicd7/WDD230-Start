// Year actualization 
document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;


// Book of Mormon favorite chapters
button.addEventListener('click', function() {
    if (input.value != '') {
        const listItem = document.createElement('li');
        const removeButton = document.createElement('button');

        const item = input.value;
        listItem.textContent = item;
        removeButton.textContent = '❌';

        listItem.appendChild(removeButton);
        list.appendChild(listItem);

        removeButton.addEventListener('click', function() {
            list.removeChild(listItem);
            input.focus();
        })
        input.value = '';
        input.focus();
    }
});