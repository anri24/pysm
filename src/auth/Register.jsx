import { useRef } from "react";
import { useTranslation } from "react-i18next";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";

function Register() {
    const [t] = useTranslation("global");
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const {token, setUser, setToken} = useStateContext();

    if(token) return <Navigate to='/' />


    function onRegister(e){
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: confirmPasswordRef.current.value,
        }

        axiosClient.post('/register',payload)
        .then(({data}) => {
            setToken(data.token)
            setUser(data.user)
        })
    }

    return (
        <form onSubmit={onRegister}>
            <div className="flex flex-col items-center mt-20 gap-5 text-center p-10 bg-slate-200 rounded w-96 mx-auto">
                <h2 className="text-2xl underline uppercase">{t('auth.register')}</h2>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="name" className="capitalize">{t('auth.name')}</label>
                <input ref={nameRef} type="text" id="name" className="border-stone-400 border-[1px] rounded w-60 p-2" />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="email" className="capitalize">{t('auth.email')}</label>
                <input ref={emailRef} type="email" id="email" className="border-stone-400 border-[1px] rounded w-60 p-2" />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="password" className="capitalize">{t('auth.password')}</label>
                <input ref={passwordRef} type="password" id="password"  className="border-stone-400 border-[1px] rounded  p-2"  />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="password_confirmation" className="capitalize">{t('auth.password_confirmation')}</label>
                <input ref={confirmPasswordRef} type="password" id="password_confirmation"  className="border-stone-400 border-[1px] rounded  p-2"  />
            </div>
            <button type="submit" className="bg-[#00c492] w-60 p-2 text-white rounded mt-2">{t('auth.register')}</button>
        </div>
        </form>
    )
}

export default Register
