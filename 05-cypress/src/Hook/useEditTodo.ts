import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../Api/Todos';
import { TodoType } from '../Model/Todo';

export const useEditTodo = () => {
    const { id } = useParams<{ id: string }>();
    const [todo, setTodo] = useState<TodoType>();
    const [isLoading, setLoading] = useState(true);
  
    const fetchTodo = async () => {
      try {
        const todo = await api.get<TodoType>(`/${id}`);
  
        setTodo(todo.data);
      } catch (error) {
        if (error.response.status === 404) {
            setTodo(null);
        }
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTodo();
    }, [id]);

    return {
        todo,
        isLoading
    }
}