import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";
import { Navigate } from "react-router-dom";

function Login() {
    const [t] = useTranslation("global");
    const {token, setUser, setToken, setUserName} = useStateContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    if(token) return <Navigate to='/' />

    const onLogin = (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', data)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token)
            setUserName(data.user)
        })
    }

    return (
        <form onSubmit={onLogin}>
            <div className="flex flex-col items-center mt-20 gap-5 text-center p-10 bg-slate-200 rounded w-96 mx-auto">
                <h2 className="text-2xl underline uppercase">{t('auth.login')}</h2>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="email" className="capitalize">{t('auth.email')}</label>
                <input ref={emailRef} type="email" id="email" className="border-stone-400 border-[1px] rounded w-60 p-2" />
            </div>
            <div className="flex flex-col gap-2 w-60">
                <label htmlFor="password" className="capitalize">{t('auth.password')}</label>
                <input ref={passwordRef} type="password" id="password"  className="border-stone-400 border-[1px] rounded  p-2"  />
            </div>
            <button type="submit" className="bg-[#00c492] w-60 p-2 text-white rounded mt-2">{t('auth.login')}</button>
        </div>
        </form>
    )
}

export default Login
