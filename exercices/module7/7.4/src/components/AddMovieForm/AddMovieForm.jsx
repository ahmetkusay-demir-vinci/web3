import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import "./AddMovieForm.css";

const AddMovieForm = ({ onMovieAdded }) => {

  const onFinish = (values) => {
    onMovieAdded(values);
  };

  return (
      <Form
          layout="vertical"
          onFinish={onFinish}
      >
        <Form.Item
            label="Titre"
            name="title"
            rules={[{ required: true, message: 'Veuillez entrer le titre du film !' }]}
        >
          <Input placeholder="Enter movie title" />
        </Form.Item>

        <Form.Item
            label="Réalisateur"
            name="director"
            rules={[{ required: true, message: 'Veuillez entrer le nom du réalisateur !' }]}
        >
          <Input placeholder="Enter director's name" />
        </Form.Item>

        <Form.Item
            label="Durée"
            name="duration"
            rules={[{ required: true, message: 'Veuillez entrer la durée du film !' }]}
        >
          <InputNumber min={0} placeholder="Enter duration" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
            label="URL de l'image"
            name="imageUrl"
        >
          <Input placeholder="Enter image URL" />
        </Form.Item>

        <Form.Item
            label="Description"
            name="description"
        >
          <Input.TextArea placeholder="Enter description" />
        </Form.Item>

        <Form.Item
            label="Budget"
            name="budget"
            rules={[{ required: true, message: 'Veuillez entrer le budget !' }]}
        >
          <InputNumber min={0} placeholder="Enter budget" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Ajouter
          </Button>
        </Form.Item>
      </Form>
  );
};

export default AddMovieForm;