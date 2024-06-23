import { useTranslation } from "react-i18next";

function Register() {
    const [t] = useTranslation("global");

    return (
        <form>
            <div className="flex flex-col items-center mt-20 gap-5 text-center p-5 bg-slate-200 rounded w-96 mx-auto">
                <h2 className="text-2xl underline uppercase">{t('auth.register')}</h2>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="name" className="capitalize">{t('auth.name')}</label>
                <input type="email" id="name" className="border-stone-400 border-[1px] rounded w-60 p-2" />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="email" className="capitalize">{t('auth.email')}</label>
                <input type="email" id="email" className="border-stone-400 border-[1px] rounded w-60 p-2" />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="password" className="capitalize">{t('auth.password')}</label>
                <input type="password" id="password"  className="border-stone-400 border-[1px] rounded  p-2"  />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="password_confirmation" className="capitalize">{t('auth.password_confirmation')}</label>
                <input type="password" id="password_confirmation"  className="border-stone-400 border-[1px] rounded  p-2"  />
            </div>
            <button type="button" className="bg-[#00c492] w-60 p-2 text-white rounded mt-2">{t('auth.register')}</button>
        </div>
        </form>
    )
}

export default Register
