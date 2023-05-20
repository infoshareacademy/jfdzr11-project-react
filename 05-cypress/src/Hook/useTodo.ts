import { useEffect, useState } from 'react';
import { api } from '../Api/Todos';
import { TodoType } from '../Model/Todo';

export const useTodo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [todoToEdit, setTodoToEdit] = useState<TodoType | null>(null);
    const [todoToRemove, setTodoToRemove] = useState<number | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [isAddingTodo, setAddingTodo] = useState(false);
  
    const fetchTodos = async () => {
      const todos = await api.get<TodoType[]>('');
      setTodos(todos.data);
      setLoading(false);
    };
  
    const addTodo = async (newAnimal: TodoType) => {
      await api.post('', newAnimal);
      fetchTodos();
      setAddingTodo(false);
    };
  
    const editTodo = async (todo: TodoType) => {
      await api.put(`/${todoToEdit.id}`, todo);
      fetchTodos();
      setTodoToEdit(null);
    };
  
    const removeTodo = async (id: number) => {
      await api.delete(`/${id}`);
      setTodoToRemove(null);
      fetchTodos();
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);
    
    return {
        todos,
        todoToRemove,
        isLoading,
        isAddingTodo,
        addTodo,
        editTodo,
        removeTodo,
        setAddingTodo, 
        setTodoToEdit, 
        setTodoToRemove,
        todoToEdit 
    }
}