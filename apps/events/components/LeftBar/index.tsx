'use client';
import Logo from "@/icons/Logo";
import Link from "next/link";
import links from "./links";
import { usePathname } from "next/navigation";
import styles from './styles.module.scss';

export default function LeftBar() {
    const pathname = usePathname();
    return (
        <>
            <input className={styles.input} id="Navgation-Bar" type="checkbox" />
            <div className={`flex gap-3 h-screen transition-all text-ground-light fixed z-5 sm:sticky top-0 ${styles.root}`}>
                <div className="flex-1 overflow-auto flex flex-col shadow-1 bg-accent-8">
                    <Link href='/' className="p-3 border-b-2 flex-middle border-b-primary">
                        <Logo className="w-12 h-12 md:w-14 md:h-14" />
                    </Link>
                    <ul className={`${styles.main} h1 flex-1 py-2 flex flex-col`}>
                        {links.map(({ icon, path }, index) => {
                            return (
                                <li key={index} className={pathname === path ? styles.active : ''}>
                                    <Link href={path}>
                                        {typeof icon === 'string' ? <i className={`fa-solid ${icon}`}></i> : icon}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <label htmlFor="Navgation-Bar" className={`btn-icon sm:hidden shadow-1 h4 bg-accent-8 text-ground-light ${styles.close}`}>
                    <i className="fa-solid fa-xmark scale-125"></i>
                </label>
            </div>
        </>
    )
}
