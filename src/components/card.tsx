import avt from "../assets/avt.jpg"
type Props = {
    data: object
}

const card = ({ data }: Props) => {
    return (
        <div className="flex flex-col items-center p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
            <img src={data.banner} alt="" className="w-40 h-20" />
            <h3 className="pt-8 pb-2 text-xl font-semibold">{data.title}</h3>
            <p className="py-2">{data.desc}</p>
            <h4 className="py-4 text-teal-600">Languages & Famework I use</h4>
            <div className="flex items-center justify-center gap-5">
                {data.languages.map((language, index) => (
                    <p key={index} className="px-2 py-2 text-gray-800 rounded-md py-1/2 bg-slate-300">
                        {language.name}
                    </p>
                ))}
                {data.frameworks.map((framework, index) => (
                    <p key={index} className="px-2 py-2 text-gray-800 rounded-md py-1/2 bg-slate-300">
                        {framework.name}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default card