import styles from './styles.module.scss';

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    options: string[],
}

export default function Switches({ options, className, title, ...props }: PropsType) {
    return (
        <div className='grid'>
            <label className='mb-[0.25em]'>{title}</label>
            <div className={`${styles.root} ${className}`}>
                {options.map((option, index) => (
                    <label key={index} className="Form-Field flex-middle px-[1.35em]">
                        <input
                            type="radio"
                            className="hidden"
                            name={props.name || Math.random().toString()}
                            defaultChecked={option === (props.value || props.defaultValue)}
                            {...props}
                            value={option}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    )
}