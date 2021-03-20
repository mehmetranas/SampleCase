import { Select } from "antd";
import { LanguagesImplementations } from "../translations/languages";
import { changeLanguage } from "../translations/i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const CustomSelect = styled(Select)`
  .ant-select-selection-item {
    padding: 0 !important;
  }
  span.ant-select-arrow {
    display: none !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

function LanguageDropdown() {
  const { i18n } = useTranslation();
  if (LanguagesImplementations) {
    return (
      <CustomSelect
        onChange={changeLanguage}
        value={i18n.language}
        bordered={false}
      >
        {LanguagesImplementations.map(({ flag, value }) => (
          <Select.Option key={value} value={value}>
            <img height="20" width="20" src={flag} alt="" />
          </Select.Option>
        ))}
      </CustomSelect>
    );
  }
}

export default LanguageDropdown;
