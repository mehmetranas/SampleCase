import { Card } from "antd";
import ContactForm from "../../components/ContactForm";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <div class="bg-white p-8 rounded-2xl shadow-lg w-4/12">
      <div className="flex flex-col gap-4">
        <p className="text-center text-2xl text-black">{t("contact-title")}</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
