

export default function Input({ title, className, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <label className={`${className} grid`}>
            <span className="mb-[0.25em]">{title}</span>
            <input className="Form-Field" {...props} />
        </label>
    )
}