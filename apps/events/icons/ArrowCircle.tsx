import SVGProps from "./SVGProps";

export default function ArrowCircle(props: SVGProps) {
    return (
        <svg {...props} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9417 18.4594L16.0225 26.1344C15.4061 26.6649 14.4092 26.6649 13.7993 26.1344L12.3171 24.859C11.7007 24.3285 11.7007 23.4707 12.3171 22.9459L18.6392 17.5056L12.3171 12.0654C11.7007 11.5349 11.7007 10.6771 12.3171 10.1523L13.7927 8.8656C14.4092 8.33512 15.4061 8.33512 16.016 8.8656L24.9351 16.5406C25.5581 17.0711 25.5581 17.9289 24.9417 18.4594Z" fill="currentColor" />
            <circle cx="17.5" cy="17.5" r="15.5" stroke="currentColor" strokeWidth="4" />
        </svg>
    );
}