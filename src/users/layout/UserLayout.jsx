import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import i18next from "i18next";

function UserLayout() {
    const lang = i18next.language;
    console.log(lang)

    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default UserLayout
