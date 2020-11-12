const addForm = document.querySelector('.add-form');
const ul = document.querySelector('ul');
const searchInput = document.querySelector('#b');
const li = document.querySelectorAll('li');
const deleteAll = document.querySelector('#delete-all');
function deleteTodoUI(deleteTarget){
  console.log(deleteTarget);
  deleteTarget.parentElement.remove();
}
  
function addTodoUI(todoValue){
  ul.innerHTML += ` <li class="list-group-item"> 
                      <span>${todoValue}</span>
                      <span class="delete-btn fa fa-trash"></span>
                    </li>`;
  console.log('add done!');
}
  
addForm.addEventListener('submit', e => {
  e.preventDefault(); //prevent refresh page
  let todoValue = addForm.firstElementChild.value.trim();
  addTodoUI(todoValue);
  addForm.reset();
  
})
ul.addEventListener('click', e => {
  if(e.target.classList.contains('delete-btn')){
      deleteTodoUI(e.target);
  }
  console.log(e.target);
})

searchInput.addEventListener('keyup', e => {
  e.preventDefault();
  console.log(searchInput.value);
  const searchValue = searchInput.value;
  for(let i = 0 ; i< ul.childElementCount; i++){
    const todo = ul.children[i].firstElementChild.textContent;
    if(todo.indexOf(searchValue) >= 0 ){
      console.log('work!');
      ul.children[i].style.display = 'flex'; 
    }else{
      ul.children[i].style.display = 'none';
    }
  }
})
deleteAll.addEventListener('click', () => {
  for ( let i = 0 ; i < ul.childElementCount + 1; i++){
    ul.children[0].remove();
    ul.children[1].remove();
  } 
})