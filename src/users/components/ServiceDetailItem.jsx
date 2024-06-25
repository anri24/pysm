import { useTranslation } from "react-i18next";

function ServiceDetailItem({detail}) {
    const { i18n } = useTranslation();
    const curLang = i18n.language;

    return (
        <div className="mt-20 bg-[#f2f2f2] flex flex-col text-start">
            <div className="py-5 text-center rounded bg-black text-white">{detail[`name_${curLang}`]}</div>
            <div className=" py-5 text-center rounded border-b-2 border-[#00000020]">{detail[`visits_${curLang}`]}</div>
            <div className=" py-5 text-center rounded border-b-2 border-[#00000020]">{detail[`guaranty_${curLang}`]}</div>
            <div className=" p-5 rounded border-b-2 border-[#00000020]"><input disabled defaultValue={detail.price} className="bg-[#e9ecef] p-2" /></div>
            <div className="p-5 py-5 rounded border-b-2 border-[#00000020]"><input defaultValue={detail.visitor_number} className="bg-[#e9ecef] p-2" /></div>
            <div className="bg-black p-3 flex justify-center">
                <button type="button" className="bg-[#00c492] w-[80%]  p-2 rounded text-white">order now</button>
            </div>
        </div>
    )
}

export default ServiceDetailItem
