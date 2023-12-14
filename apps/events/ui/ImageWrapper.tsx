interface PropsType extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    src?: string,
    alt?: string,
    ratio?: number
}

export default function ImageWrapper({ src, alt = "", ratio = 50, className = "", ...props }: PropsType) {
    return (
        <span className={`flex relative ${className}`} {...props}>
            <span style={{ paddingTop: `${ratio}%`, borderRadius: 'inherit' }}>
                <img className="absolute-full rounded-[inherit] object-cover" src={src} alt={alt} />
            </span>
        </span>
    )
}