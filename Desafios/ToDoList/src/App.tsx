import { PlusCircle, Trash } from 'phosphor-react'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'

import Clipboard from './assets/Clipboard.svg'

import { ChangeEvent, FormEvent, useState } from 'react'

const ToDoGroup = [
  {
    id: 1,
    isConcluded: true,
    description: 'testee asldksajd alkdjlsak alsdjsalkd alskjdlsakdjlsa testee asldksajd alkdjlsak alsdjsalkd alskjdlsakdjlsa testee asldksajd alkdjlsak alsdjsalkd alskjdlsakdjlsa',
  },
  {
    id: 2,
    isConcluded: false,
    description: 'testee2 asldksajd alkdjlsak alsdjsalkd alskjdlsakdjlsa',
  }, {
    id: 3,
    isConcluded: false,
    description: 'testee3 asldksajd alkdjlsak alsdjsalkd alskjdlsakdjlsa',
  }, {
    id: 4,
    isConcluded: true,
    description: 'testee4 asldksajd alkdjlsak alsdjsalkd alskjdlsakdjlsa',
  },
];


interface TodoType {
  id: number;
  isConcluded: boolean;
  description: string;
}

function App() {

  const [todos, setTodos] = useState<TodoType[]>([])
  todos.sort((a, b) => {
    if (a.isConcluded && !b.isConcluded) {
      return 1; // a vem antes de b
    }
    if (!a.isConcluded && b.isConcluded) {
      return -1; // a vem depois de b
    }
    return 0; // mantém a ordem atual
  });
  

  const [newDescriptionTodo, setNewDescriptionTodo] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    if (newDescriptionTodo != '') {
      const newTodo: TodoType = {
        id: Math.random(),
        description: newDescriptionTodo,
        isConcluded: false
      };
      setTodos(oldState => [...oldState, newTodo]);
      setNewDescriptionTodo('');
    }
  }

  function handleDeleteOneTodo(id: number) {
    const newTodos = todos.filter(todo => todo.id != id);

    setTodos(newTodos);

  }


  function handleToggleTodo(id: number) {

    const newTodos = todos.map(todo => todo.id == id ? {
      ...todo,
      isConcluded: !todo.isConcluded
    } : todo);

    setTodos(newTodos)

  }
  const filteredToDoGroup = todos.filter(item => item.isConcluded === true);


  return (
    <>
      <Header />
      <div className={styles.content}>
        <header className={styles.contentHeader}>
          <form onSubmit={handleCreateNewComment}>
            <input type="text" value={newDescriptionTodo} 
            onChange={(e) => setNewDescriptionTodo(e.target.value)} 
            placeholder='Adicione uma tarefa' />
            <button type='submit'>Criar<PlusCircle size={20} /></button>
          </form>
        </header>
        <main className={styles.contentMain}>
          <header>
            <p>Tarefas Criadas<span>{todos.length}</span></p>
            <p>Concluídas<span>{todos.length === 0 ? '0' : `${todos.length} de ${filteredToDoGroup.length}`}</span></p>
          </header>
          <div className={styles.contentList}>
            {
              todos.length === 0 ? (
                <div className={styles.emptyMessage}>
                  <img src={Clipboard} alt="icon clipboard" />
                  <p>
                    Você ainda não tem tarefas cadastradas
                  </p>
                  <p>
                    Crie tarefas e organize seus itens a fazer
                  </p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id} className={styles.todo}>
                    <div className={styles.customCheckbox}>
                      <input 
                      type="checkbox" 
                      name="checkbox" 
                      id={`check-${todo.id}`}
                      checked={todo.isConcluded}
                      onChange={() => handleToggleTodo(todo.id)}
                      />
                      <label htmlFor={`check-${todo.id}`}></label>
                    </div>
                    <p className={todo.isConcluded ? 'completed' : ''}>{todo.description}</p>
                    <button onClick={() => handleDeleteOneTodo(todo.id)}>
                      <Trash size={20} />
                    </button>
                  </div>
                ))
              )

            }

          </div>
        </main>
      </div>
    </>
  )
}

export default App
