import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import BodyServiceItem from "./BodyServiceItem"
import { useStateContext } from "../../context/ContextProvider"

function BodyServices() {
    const [services, setServices] = useState([])
    const {setActiveService} = useStateContext();

    useEffect(() => {
        axiosClient.get('/services')
        .then(({data}) => {
            setServices(data.data)
            setActiveService(data.data[0].id)
        })
    }, [services.length])
    
    // console.log(services)

    return (
        <>
        <div className={`flex justify-around flex-wrap max-w-[70vw] mx-auto  mt-20 bg-black text-white p-5 rounded-xl `}>
            {services.map(item => <BodyServiceItem key={item.id} item={item} />)}
            
        </div>

        <div>

        </div>
        </>
    )
}

export default BodyServices
