import { Button, Form, Input, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BACKEND_LOGIN_URL = `${process.env.REACT_APP_API_HREF}/login`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const isAuthenticated = !!window.localStorage.getItem('authToken');
    if (isAuthenticated) {
      navigate('/');
    }
  }, [pathname]);

  const handleFinish = (formData: { username: string; password: string }) => {
    setFormError('');

    fetch(BACKEND_LOGIN_URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 401) {
          setFormError('Niepoprawne dane logowania');
        }
        if (res.status === 500) {
          setFormError('Niespodziewany błąd serwera');
        }
        if (res.ok) {
          return res.json();
        }
      })
      .then((user) => {
        if (typeof user.authToken === 'string') {
          window.localStorage.setItem('authToken', user.authToken);
          window.localStorage.setItem('userName', user.name);
          navigate('/');
        } 
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 200 }}>
      <Form onFinish={handleFinish} style={{ maxWidth: 600 }}>
        <Form.Item label="Login" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Hasło" name="password" rules={[{ required: true }]}>
          <Input type="password" />
        </Form.Item>
        <Button htmlType="submit">Zaloguj</Button>
        <div>
          <Typography.Text type="danger">{formError}</Typography.Text>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
