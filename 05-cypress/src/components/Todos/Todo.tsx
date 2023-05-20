import { List, Button } from 'antd';
import { TodoType } from '../../Model/Todo';

type TodoProps = {
  todo: TodoType;
  setTodoToEdit: React.Dispatch<React.SetStateAction<TodoType>>;
  setTodoToRemove: React.Dispatch<React.SetStateAction<number>>
}

export const Todo = ({ todo, setTodoToEdit, setTodoToRemove }: TodoProps) => {
    return (
      <List.Item
        className={todo.category}
        data-testid={`todo-row-${todo.name}`}
        actions={[
          <Button key="list-edit" data-testid={`edit-button-${todo.name}`} onClick={() => setTodoToEdit(todo)} type="link">
            Edytuj
          </Button>,
          <Button key="list-remove" data-testid={`remove-button-${todo.name}`} onClick={() => setTodoToRemove(todo.id)} type="link">
            Usuń
          </Button>,
        ]}
      >
        <List.Item.Meta
          title={todo.name}
        />
        {`Opis: ${todo.description}`}
      </List.Item>
    )
}