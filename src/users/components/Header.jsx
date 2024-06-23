import { Link } from "react-router-dom"
import en_flag from './../../../public/images/locale-flags/en-flag.png'
import ar_flag from './../../../public/images/locale-flags/ar-flag.png'
import { useTranslation } from "react-i18next";

function Header() {
    const [t, i18n] = useTranslation("global");

    function changeLanguage(lang){
        i18n.changeLanguage(lang)
    }

    return (
        <div className="bg-[#00c492] text-white">
            <div className="flex justify-around w-[90%] mx-auto p-5">
                <div className="flex justify-around w-[90%]">
                    <Link to='/register' className="">{t('auth.register')}</Link>
                    <Link to='/' className="">Logo</Link>
                    <Link to='/login' className="">{t('auth.login')}</Link>
                </div>
                <div className="w-[5%] flex justify-end gap-5">
                    <button className="" onClick={() => changeLanguage('en')}><img src={en_flag} width='20px' /></button>
                    <button className="" onClick={() => changeLanguage('ar')}><img src={ar_flag} width='20px' /></button>
                </div>
            </div>
            <div className="mx-auto p-5 border-t-[1px] border-t-[#00b083]">
                <div className="w-[30%] mx-auto flex justify-around">
                <div>{t('header.technical_support')}</div>
                <div>{t('header.blog')}</div>
                <div>{t('header.categories')}</div>
                <Link to='/'>{t('header.main')}</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
