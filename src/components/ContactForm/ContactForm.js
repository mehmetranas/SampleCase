import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../UserProvider/User";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { countryList } from "../../mockData/data";
import { useHistory } from "react-router-dom";
function ContactForm() {
  const history = useHistory();
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { state } = useAuth();
  function handleSubmit(values) {
    console.log(`Contact Form is ${JSON.stringify(values, null, 2)}`);
    form.resetFields();
  }
  return (
    <div className="w-full">
      <Form
        form={form}
        onFinish={handleSubmit}
        name="contact_form"
        className="contact-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="userName"
          initialValue={state.user?.userName}
          rules={[{ required: true, message: t("name-text") }]}
        >
          <Input
            prefix={<UserOutlined />}
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
          initialValue={state.user?.userEmail}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder={t("email-placeholder")}
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: t("phone-number-text") },
            {
              pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
              message: t("phone-number-validation"),
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined />}
            type="tel"
            placeholder={t("phone-number-placeholder")}
          />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[{ required: true, message: t("country-text") }]}
        >
          <Select
            placeholder={t("country-placeholder")}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {countryList.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {t(`countries-${item.id}`)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: t("message-text") }]}
        >
          <Input.TextArea rows={4} placeholder={t("message-placeholder")} />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-between align-middle">
            <Button type="link" onClick={() => history.push("/")}>
              {t("back")}
            </Button>
            <Button type="primary" htmlType="submit">
              {t("send")}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;
