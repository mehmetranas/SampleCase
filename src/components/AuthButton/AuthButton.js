import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import LoginForm from "../LoginForm";
import LanguageDropdown from "../LanguageDropdown";

function AuthButton({ isMobile }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className={`focus:outline-none text-blue-900 text-sm py-2.5 px-5  hover:bg-blue-50 ${
          isMobile ? "w-full bg-gray-200" : "rounded-md"
        }`}
      >
        {t("login")}
      </button>
      <Modal
        destroyOnClose
        title={t("login")}
        visible={openModal}
        footer={[
          <div key="language" className="flex justify-start align-middle">
            <LanguageDropdown hideArrow={false} isFlag={false} />
          </div>,
        ]}
        cancelText={t("cancel")}
        onCancel={() => setOpenModal(false)}
      >
        <LoginForm />
      </Modal>
    </>
  );
}

export default AuthButton;
