const form = document.querySelector(".add");
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const generateTemplate = (todo) => {
    const template = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
        `;

        list.innerHTML += template

  };


  const todo = form.add.value.trim();

  if(todo.length){
    generateTemplate(todo)
    form.reset()
  }
});

//delete todos
list.addEventListener('click', (e)=> {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

//search Function
const filterTodos = (term)=>{

    const ObjList = Array.from(list.children)
    ObjList.filter(item => !item.textContent.toLocaleLowerCase().includes(term))
    .forEach(item => item.classList.add('filtered'))


    const newObjList = Array.from(list.children)
    newObjList.filter(item => item.textContent.toLocaleLowerCase().includes(term))
    .forEach(item => item.classList.remove('filtered'))
}

search.addEventListener('keyup', (e)=>{

    const searchedTerm = search.value.toLocaleLowerCase().trim()
    console.log(searchedTerm);
    filterTodos(searchedTerm)
})
