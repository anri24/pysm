function ServiceDetailItem({detail}) {
    console.log(detail)
    return (
        <div className="mt-20 bg-[#f2f2f2] flex flex-col text-start">
            <div className="py-5 text-center rounded bg-black text-white">{detail.name}</div>
            <div className=" py-5 text-center rounded border-b-2 border-[#00000020]">{detail.visits}</div>
            <div className=" py-5 text-center rounded border-b-2 border-[#00000020]">{detail.guaranty}</div>
            <div className=" p-5 rounded border-b-2 border-[#00000020]"><input value={detail.price} className="bg-[#e9ecef] p-2" /></div>
            <div className="p-5 py-5 rounded border-b-2 border-[#00000020]"><input value={detail.price} className="bg-[#e9ecef] p-2" /></div>
        </div>
    )
}

export default ServiceDetailItem
