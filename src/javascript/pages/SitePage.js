// SitePage.js
import React from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button } from "antd"; // Importez les composants Ant Design

const SitePage = () => {
  const { siteId } = useParams();

  // Appels aux API back-end pour récupérer les détails du site et des énigmes

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    // Ajoutez ici votre logique pour gérer les soumissions du formulaire
  };

  return (
    <div className="sitePageContainer">
      <h1>{`Site ${siteId}`}</h1>
      <Form
        name="siteForm"
        onFinish={onFinish}
        initialValues={{ siteName: "", siteDescription: "" }}
      >
        <Form.Item
          label="Site Name"
          name="siteName"
          rules={[{ required: true, message: "Please enter the site name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Site Description"
          name="siteDescription"
          rules={[
            { required: true, message: "Please enter the site description!" }
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SitePage;
