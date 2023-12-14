'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

interface PropsType {
    children?: React.ReactNode,
    className?: string
}

interface StateType {
    left?: boolean,
    right?: boolean,
    position: number
}

export default function EventsWrapper({ className, children, ...props }: PropsType) {
    const parentRef = useRef<HTMLDivElement>(null);

    const [{ left, right, position }, setState] = useState<StateType>({ position: 0 })

    const rightHandler = () => {
        const parent = parentRef.current;
        if (!parent) return
        const children = parent.children;
        for (let i = children.length; i > 0; i--) {
            const child = children[i - 1] as HTMLDivElement;
            const parentWidth = parent.offsetWidth;
            const parentPosition = parentWidth + position;
            if (child.offsetLeft < parentPosition) {
                const state: StateType = { position: child.offsetLeft, left: true, right: i !== children.length }
                setState(state)
                break;
            }
        }
    }

    const leftHandler = () => {
        const parent = parentRef.current;
        if (!parent) return;
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLDivElement;
            if (child.offsetLeft + child.offsetWidth > position) {
                const newPosition = Math.max(0, child.offsetLeft - parent.offsetWidth);
                const state: StateType = { position: newPosition, left: newPosition > 0, right: true };
                setState(state);
                break;
            }
        }
    }
    


    useEffect(() => {
        const parent = parentRef.current;
        if (!parent) return
        const children = parent.children;
        for (let i = children.length; i > 0; i--) {
            const child = children[i - 1] as HTMLDivElement;
            if (child.offsetLeft < parent.offsetWidth + position) {
                const state: StateType = { position: 0, right: true }
                setState(state)
                break;
            }
        }
    }, [])
    return (
        <div className={`grid relative items-center ${styles.root}`}>
            <div className="lg:overflow-hidden overflow-auto" {...props}>
                <div className={styles.main} ref={parentRef} style={{ left: `${-position}px` }}>
                    {children}
                </div>
            </div>
            {right && (
                <button onClick={rightHandler} className='btn-icon h3 -right-2 lg:flex hidden lg:left-[100%]'>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )}


            {left && <button onClick={leftHandler} className='btn-icon h3 lg:flex hidden -left-2 lg:right-[100%]'>
                <i className="fa-solid fa-chevron-left"></i>
            </button>}
        </div>
    )
}