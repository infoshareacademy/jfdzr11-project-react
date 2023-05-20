import { Button, Layout as AntLayout } from 'antd';
import { useNavigate } from 'react-router';

const { Header, Content } = AntLayout;

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!window.localStorage.getItem('authToken');
  const userName = window.localStorage.getItem('userName');

  const handleLogout = () => {
    window.localStorage.removeItem('authToken');

    navigate('/login');
  };

  const handleRedirectToDashboard = () => {
    navigate('/dashboard');
  };

  const handleRedirectToList = () => {
    navigate('/');
  };
  
  return (
    <>
      {isAuthenticated && (
        <Header style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
            <div>
              <Button type="link" onClick={handleRedirectToDashboard}>Dashboard</Button>
              <Button type="link" onClick={handleRedirectToList}>List</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ color: 'white', marginRight: 20 }}>Hello {userName} !</div>
              <Button type="primary" onClick={handleLogout}>
                Wyloguj się
              </Button>
            </div>
        </Header>
      )}

      <Content>{children}</Content>
    </>
  );
};

export default Layout;
