interface PropsType extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    progress: number;
}

export default function ProgressBar({ progress, className, ...props }: PropsType) {
    return (
        <span className={`flex ${className} min-h-[2px] bg-surface-10`} {...props}>
            <span style={{ width: `${progress}%` }} className="transition-all bg-surface-9" />
        </span>
    )
}