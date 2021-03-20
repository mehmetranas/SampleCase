import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import styled from "styled-components";
import LoginForm from "../LoginForm";

const FooterText = styled.p`
  font-size: 0.8em !important;
  color: ffffff90 !important;
`;

function AuthButton() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="focus:outline-none text-blue-900 text-sm py-2.5 px-5 rounded-md hover:bg-blue-50"
      >
        {t("login")}
      </button>
      <Modal
        destroyOnClose
        title={t("login")}
        visible={openModal}
        footer={[<FooterText>React Framework</FooterText>]}
        cancelText={t("cancel")}
        onCancel={() => setOpenModal(false)}
      >
        <LoginForm />
      </Modal>
    </>
  );
}

export default AuthButton;
