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

  for(let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];
    const {name,dueDate}=todoObject;
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button   onclick="
      todoList.splice(${i},1);
      renderTodoList();
      "class="todo-html-delete">Delete</button>
    `;
    todoListHTML+=html;
  }
  console.log(todoList);
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}
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




// const todoList=['washing dishs','groming'];   

// renderTodoList();

// function renderTodoList(){
//   let todoListHTML='';
//   for(let i=0;i<todoList.length;i++){
//     const todo=todoList[i];
//     const html=`
//     <div>
//       ${todo}
//       <button onclick="
//       todoList.splice(${i},1);
//       renderTodoList();
//       "Delete</button>
//     </div>`;
//     todoListHTML+=html;
//   }
//   document.querySelector('.js-todo-list').innerHTML=todoListHTML;
// }

// function addTodo(){
//   const inputElement=document.querySelector('.js-name-input');
//   const name=inputElement.value;

//   todoList.push(name);
//   console.log(todoList)
//   inputElement.value='';

//   renderTodoList();
// }