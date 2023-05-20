import { Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { useEditTodo } from '../../Hook/useEditTodo';

const EditLayout = ({ children }) => {
    return (
        <>
        <div>
            <NavLink to="/">Wróc do listy</NavLink>
        </div>
        <div>{children}</div>
        </>
    );
};

const EditTodo = () => {
    const { todo, isLoading } = useEditTodo();

    if (isLoading) {
        return <Spin size="large" />;
    }

    return (
        <EditLayout>
        {todo === null ? (
            <h1>Nie ma takiego todo</h1>
        ) : (
            <>
            <h1>Edytuj </h1>
            </>
        )}
        </EditLayout>
    );
};

export default EditTodo;
