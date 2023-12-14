import ImageWrapper from "@/ui/ImageWrapper";
import ProgressBar from "@/ui/ProgressBar";
import Groups from "@/icons/Groups";


interface PropsType {
    imgURL: string,
    title: string,
    favorites?: number,
    isFavorite?: boolean,
    description: string,
    users?: number,
    date?: string,
    isOwned?: boolean,
    className?: string,
}

export default function MyEvent(props: PropsType) {
    return (
        <div className={`grid min-w-[14rem] p-3 border rounded-lg ${props.className}`}>
            <ImageWrapper src={props.imgURL} ratio={69.54} className="shadow-3 rounded-lg" />
            <div className="flex-between mt-1 gap-2">
                <h4 className="capitalize font-bold">{props.title}</h4>
                {props.users && (
                    <>
                        <ProgressBar progress={(props.users / 30) * 100} className="flex-1" />
                        <div className="flex-middle flex-col text-surface-9">
                            <Groups className="w-5 mx-auto" />
                            <small className="text-xs font-medium leading-1">{props.users}/30</small>
                        </div>
                    </>
                )}
            </div>
            <p className="mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <b className="text-surface-9">{props.date}</b>
            <div className="grid grid-cols-2 justify-between gap-2 mt-6">
                <button className="btn-primary bg-surface-11 border text-black">Chat</button>
                <button className="btn-primary bg-transparent border text-black">Leave</button>
            </div>
        </div>
    )
}