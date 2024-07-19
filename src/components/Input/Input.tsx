import styles from '../../styles/Input.module.css'

interface InputFielProps {
    state:string;
    setState: (value: string)=> void ;
    labelText:string
}

function InputField({state, setState, labelText}:InputFielProps) {
    return (
        <div className={styles.container}>
            <label htmlFor="user">{labelText}</label>
            <input className={styles.input_field} onChange={(e)=> setState(e.target.value)} type="text" value={state} />
        </div>
    )
}

export default InputField;