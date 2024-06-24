import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import BodyServiceItem from "./BodyServiceItem"

function BodyServices() {
    const [services, setServices] = useState([])

    useEffect(() => {
        axiosClient.get('/services')
        .then(({data}) => {
            setServices(data)
        })
    }, [services.length])

    return (
        <div className="flex justify-around flex-wrap max-w-[70vw] mx-auto  mt-20 bg-black text-white p-5 rounded-xl">
            {services.map(item => <BodyServiceItem key={item.id} item={item} />)}
        </div>
    )
}

export default BodyServices
