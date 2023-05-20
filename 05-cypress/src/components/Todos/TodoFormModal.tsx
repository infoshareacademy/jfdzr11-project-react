import { useEffect, useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { TodoFormModalProps } from '../../Model/Todo';

export const TodoFormModal = ({ title, onFinish, isVisible, onCancel, initialValues }: TodoFormModalProps) => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [form] = Form.useForm<{ name: string; age: string; species: string }>();
  
    useEffect(() => {
      form.resetFields();
  
      setSubmitting(false);
    }, [isVisible]);
  
    return (
      <Modal
        title={title}
        visible={isVisible}
        onCancel={() => {
          onCancel(false);
        }}
        onOk={async () => {
          await form.validateFields();
          setSubmitting(true);
          await form.submit();
        }}
        okText="Zapisz"
        confirmLoading={isSubmitting}
      >
        <Form name="basic" form={form} onFinish={onFinish} initialValues={initialValues}>
          <Form.Item label="Nazwa" name="name" rules={[{ required: true, message: 'Todo musi mieć nazwę!' }]}>
            <Input />
          </Form.Item>
  
          <Form.Item label="Opis" name="description" rules={[{ required: true, message: 'Todo musi mieć opis' }]}>
            <Input />
          </Form.Item>
  
          <Form.Item name="category" label="Kategoria" rules={[{ required: true, message: 'Todo musi mieć kategorię' }]}>
            <Select>
              <Select.Option value="important">Ważna</Select.Option>
              <Select.Option value="standard">Standardowa</Select.Option>
              <Select.Option value="other">Inne</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  };