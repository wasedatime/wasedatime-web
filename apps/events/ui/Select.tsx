

export default function Select({ title, className, ...props }: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>) {
    return (
        <label className={`${className} grid`}>
            <span className="mb-[0.25em]">{title}</span>
            <select className="Form-Field" {...props} />
        </label>
    )
}