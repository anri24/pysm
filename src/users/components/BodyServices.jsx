import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import BodyServiceItem from "./BodyServiceItem"
import { useStateContext } from "../../context/ContextProvider"
import ServiceDetailItem from "./ServiceDetailItem"
import { useTranslation } from "react-i18next"
import PaymentComponent from "./PaymentComponent"
import PaymentModal from "./PaymentModal"

function BodyServices() {
    const { i18n } = useTranslation();
    const curLang = i18n.language;
    const [services, setServices] = useState([])
    const {activeService, setActiveService, isModalOpen} = useStateContext();

    useEffect(() => {
        axiosClient.get('/services')
        .then(({data}) => {
            setServices(data.data)
            setActiveService(data.data[0])
        })
    }, [services.length])

    

    return (
        <>
        <div className="max-w-[70vw] mx-auto mt-20">
        <div className={`flex justify-around flex-wrap  bg-black text-white p-5 rounded-xl `}>
            {services.map(item => <BodyServiceItem key={item.id} item={item} />)}
        </div>
        <div className="flex flex-wrap justify-start gap-x-8">
            {activeService.serviceDetail?.map(detail => <ServiceDetailItem key={detail.id} detail={detail}/>)}
        </div>
        
        </div>

        {isModalOpen && <PaymentModal />}
        </>
    )
}

export default BodyServices
