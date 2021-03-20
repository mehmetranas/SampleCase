import ContactForm from "../../components/ContactForm";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-11/12 md:w-4/12">
      <div className="flex flex-col gap-4">
        <p className="text-center text-2xl text-black">{t("contact-title")}</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
