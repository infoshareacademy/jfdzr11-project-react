import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import EditTodo from './components/EditTodo/EditTodo';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import RequireAuth from './components/RequireAuth';
import Todos from './components/Todos/Todos';

import './global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Todos />
              </RequireAuth>
            }
          />
          <Route
            path="/:id"
            element={
              <RequireAuth>
                <EditTodo />
              </RequireAuth>
            }
          />
          <Route path={'/dashboard'} element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
