export default function RoundedBox({ className, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <label className={`btn-rounded ${className}`}>
            <input className="hidden" type="radio" {...props} />
            {props.title}
        </label>
    )
}