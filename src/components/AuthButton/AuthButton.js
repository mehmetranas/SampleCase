import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";

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
        title="Basic Modal"
        visible={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default AuthButton;
