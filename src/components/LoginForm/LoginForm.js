import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../UserProvider/User";

function LoginForm({ signIn }) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { state, dispatch } = useAuth();
  function handleSignUser(values) {
    dispatch({ type: "login", payload: values });
  }
  return (
    <Form
      form={form}
      onFinish={handleSignUser}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="userName"
        rules={[{ required: true, message: t("name-text") }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={t("name-placeholder")}
        />
      </Form.Item>
      <Form.Item
        name="userEmail"
        rules={[
          {
            type: "email",
            message: t("email-validation"),
          },
          { required: true, message: t("email-text") },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={t("email-placeholder")}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: t("password-text") }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={t("password-placeholder")}
        />
      </Form.Item>

      <Form.Item style={{ textAlign: "right" }}>
        <Button type="primary" htmlType="submit">
          {t("login")}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
