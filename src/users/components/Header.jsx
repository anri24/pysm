import { Link } from "react-router-dom"
import flag_en from './../../../public/images/locale-flags/en-flag.png'
import flag_ar from './../../../public/images/locale-flags/ar-flag.png'
import { useTranslation } from "react-i18next";

function Header() {
    const [t, i18n] = useTranslation("global");

    function changeLanguage(lang){
        i18n.changeLanguage(lang)
    }

    return (
        <div className="bg-[#00c492]">
            <div className="flex justify-around w-[90%] mx-auto p-5 ">
                    <div className="flex justify-between w-[90%]">
                        <Link to='/register' className="">{t('header.register')}</Link>
                        <Link to='/' className="">Logo</Link>
                        <Link to='/login' className="">{t('header.login')}</Link>
                    </div>
                    <div className="w-[5%] flex justify-end gap-5">
                    <button className="" onClick={() => changeLanguage('en')}><img src={flag_en} width='20px' /></button>
                    <button className="" onClick={() => changeLanguage('ar')}><img src={flag_ar} width='20px' /></button>
                    </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header
