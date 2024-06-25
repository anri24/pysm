import { useTranslation } from "react-i18next";
import { useStateContext } from "../../context/ContextProvider";

function BodyServiceItem({item}) {
    const {activeService, setActiveService} = useStateContext();

    const { i18n } = useTranslation();
    const curLang = i18n.language;

    return (
        <div onClick={() => setActiveService(item)} className={`capitalize cursor-pointer ${activeService.id === item.id ? 'text-green-700': 'text-white'}`}>
            {item[`name_${curLang}`]}
        </div>
    )
}

export default BodyServiceItem
