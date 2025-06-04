const button = document.querySelector('button');
const item = document.getElementById('input');
const list = document.getElementById('list');
const deleteBtn = document.querySelectorAll('.delete-btn');

/*item.addEventListener('input', (e) => {
    console.log('Current input:', e.target.value); //testing input in console log
});*/


button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const inputValue = item.value;
    console.log(`clicked, value: ${inputValue}`); //logging users input

    if (inputValue !== '') {
        const li = document.createElement('li');
        //li.textContent = inputValue;
        li.innerHTML = `${inputValue}<span class="delete-btn">X</span>`; //add delete button to new li
        list.appendChild(li);
        item.value = '';
    }
});

/*deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const li = e.target.parentElement;
    list.removeChild(li);
});*/

// rewrite deleteBtn to use event delegation
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add search functionality
const searchInput = document.getElementById('search-input');
// const searchTerm = searchInput.value.toLowerCase(); // want it inside the searchInput event listener so it updates as user types
// const items = list.querySelectorAll('li'); same as above

searchInput.addEventListener('input', (e) => {
    const searchTerm = searchInput.value.toLowerCase();
    const items = list.querySelectorAll('li');
    
    items.forEach(item => {
        /*if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';    
        }*/
       // only show items that start with the search term
        if (item.textContent.toLowerCase().startsWith(searchTerm)) {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
});
