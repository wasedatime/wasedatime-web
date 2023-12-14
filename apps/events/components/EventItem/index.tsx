import Link from "next/link";
import styles from './styles.module.scss';
import ImageWrapper from "@/ui/ImageWrapper";
import Star from "@/icons/Star";
import ProgressBar from "@/ui/ProgressBar";
import Groups from "@/icons/Groups";
import Pencil from "@/icons/Pencel";
import Trash from "@/icons/Trash";


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

export default function EventItem(props: PropsType) {
    return (
        <div className={`${styles.root} ${props.className}`}>
            <ImageWrapper src={props.imgURL} ratio={69.54} className="shadow-3 rounded-lg" />
            <div className="flex absolute right-0 h3">
                <button className="btn-icon -mx-[0.5em]">
                    <Pencil />
                </button>
                <button className="btn-icon">
                    <Trash />
                </button>
            </div>
            <div className="flex-between mt-1">
                <h4 className="capitalize font-bold">{props.title}</h4>
                {props.favorites && (
                    <div className="grid text-center leading-1 mt-1">
                        <button className="btn-icon text-primary h5 -mb-[0.1em]">
                            <Star className="scale-150" fill={props.isFavorite ? 'currentColor' : 'none'} stroke={props.isFavorite ? "" : "currentColor"} />
                        </button>
                        <small>{props.favorites}</small>
                    </div>
                )}
            </div>
            <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex-center text-surface-9 gap-2">
                <b>{props.date}</b>
                {props.users && (
                    <>
                        <ProgressBar progress={(props.users / 30) * 100} className="flex-1" />
                        <div className="flex-middle flex-col">
                            <Groups className="w-5 mx-auto" />
                            <small className="text-xs font-medium leading-1">{props.users}/30</small>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}