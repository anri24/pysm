import { useTranslation } from "react-i18next";
import { useStateContext } from "../../context/ContextProvider";
import PaymentComponent from "./PaymentComponent";
import { Navigate } from "react-router-dom";

function PaymentModal() {
    const { i18n } = useTranslation();
    const curLang = i18n.language;
    const {token, selectedOrderData, setIsModalOpen, setSelectedOrderData} = useStateContext();

    if(!token){
        setIsModalOpen(false)
        setSelectedOrderData({})
        return <Navigate to='/login' />
    }

    return (
        <>
        <div onClick={() => {
            setIsModalOpen(false)
            selectedOrderData({})
        }} className="fixed top-0 left-0 w-full h-full bg-white/60"></div>
        <div className="fixed overflow-auto  top-0 left-[35vw] w-96 h-[26rem] text-center mt-[30vh] bg-white">
            {console.log(selectedOrderData)}
            <div className="mt-5 flex flex-col gap-5 w-[90%] mx-auto">
                <div className="bg-black p-2 text-white">{selectedOrderData[`name_${curLang}`]}</div>
                <div>{selectedOrderData[`visits_${curLang}`]}</div>
                <div>{selectedOrderData[`guaranty_${curLang}`]}</div>
                <div>visitors: {selectedOrderData.visitor_number}</div>
                <div>price: {selectedOrderData.price.toFixed(2)}</div>
                <PaymentComponent />
            </div>
        </div>
        </>
    )
}

export default PaymentModal
