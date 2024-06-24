import { useTranslation } from "react-i18next";

function BodyServiceItem({item}) {
    const { i18n } = useTranslation();
    const curLang = i18n.language;

    return (
        <div className="capitalize">
            {item[`name_${curLang}`]}
        </div>
    )
}

export default BodyServiceItem
