import { List, Button, Modal } from 'antd';
import { useTodo } from '../../Hook/useTodo';
import { Todo } from './Todo';
import { TodoFormModal } from './TodoFormModal';

const Todos = () => {
  const { 
    addTodo, 
    editTodo, 
    isAddingTodo, 
    isLoading, 
    removeTodo, 
    todoToRemove, 
    todos, 
    setAddingTodo, 
    setTodoToEdit, 
    setTodoToRemove,
    todoToEdit 
  } = useTodo();

  return (
    <div style={{ width: '700px', margin: '0 auto' }}>
      <h1>Moja lista todo </h1>
      <Button type="primary" onClick={() => setAddingTodo(true)}>
        Dodaj todo
      </Button>

      <List
        loading={isLoading}
        dataSource={todos}
        renderItem={(item) => (
          <Todo todo={item} setTodoToEdit={setTodoToEdit} setTodoToRemove={setTodoToRemove} />
        )}
      />

      <TodoFormModal
        title={!!todoToEdit ? 'Edytuj todo' : 'Dodaj todo'}
        onFinish={todoToEdit ? editTodo : addTodo}
        isVisible={!!todoToEdit || isAddingTodo}
        onCancel={todoToEdit ? setTodoToEdit : setAddingTodo}
        initialValues={todoToEdit}
      />
      <Modal
        title="Usuwanie"
        visible={todoToRemove !== null}
        onCancel={() => setTodoToRemove(null)}
        onOk={() => removeTodo(todoToRemove)}
      >
        Chcesz usunąć tego todo?
      </Modal>
    </div>
  );
};

export default Todos;
