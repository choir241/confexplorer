export default function AuthButton({label, className}:{label: string, className?: string}){
    return(
        <button className={className}>
            {label}
        </button>
    )
}