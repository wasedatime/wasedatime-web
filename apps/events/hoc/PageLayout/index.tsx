import Header, { HeaderProps } from "@/components/Header";
import LeftBar from "@/components/LeftBar";
import styles from './styles.module.scss';


interface PropsType extends HeaderProps {
    title?: string;
    children?: React.ReactNode
}

export default function PageLayout(props: PropsType) {
    return (
        <main className="flex gap-3 lg:gap-6">
            {/* <LeftBar /> */}
            <div className={`flex-1 ${styles.main}`}>
                {/* <Header title={props.title} /> */}
                <div className={`${styles.wrapper} lg:pr-16 md:mr-2 pb-16`}>
                    {props.children}
                </div>
            </div>
        </main>
    )
}