import styles from './styles.module.scss';

export default function BoxField({ className, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <label className={`flex-middle ${styles.root} ${className}`}>
            <input className="hidden" type="radio" {...props} />
            {props.title}
        </label>
    )
}