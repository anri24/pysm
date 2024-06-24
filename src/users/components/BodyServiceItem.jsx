import { useTranslation } from "react-i18next";
import { useStateContext } from "../../context/ContextProvider";

function BodyServiceItem({item}) {
    const {activeService, setActiveService} = useStateContext();

    const { i18n } = useTranslation();
    const curLang = i18n.language;


    return (
        <div onClick={setActiveService(item.id)} className={`capitalize ${activeService === item.id ? 'text-green-700': 'text-white'}`}>
            {item[`name_${curLang}`]}
        </div>
    )
}

export default BodyServiceItem
