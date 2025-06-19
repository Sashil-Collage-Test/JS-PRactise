const todoList=[
  {
    name:'washing dish',
    dueDate:'20-10-2020'
  },{
    name:'gromming',
    dueDate:'11-07-30'
  }
];

renderTodoList(); 

function renderTodoList(){
  let todoListHTML='';

  todoList.forEach((todoObject ,index)=> {
    const{name,dueDate}=todoObject;
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="todo-html-delete js-delete-button">Delete</button>
    `;
    todoListHTML+=html;
  });
  console.log(todoList);
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
    });
  });
}

document.querySelector(".js-to-do-button").addEventListener("click",()=>{
  addTodo();
});

function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const inputDate=document.querySelector('.js-todo-date');
  const dueDate=inputDate.value;
  todoList.push(
    {
      name,
      dueDate
    }
  );  
  inputElement.value='';

  renderTodoList();
}

