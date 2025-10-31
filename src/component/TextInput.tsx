export default function TextInput({currentValue, handleOnValueChange}:{
    currentValue: string,
    handleOnValueChange: (e: string) => void
}){
    return(
        <textarea
        onChange = {(e)=>handleOnValueChange(e.target.value)}
        placeholder={currentValue}
        defaultValue={currentValue}></textarea>
    )
}