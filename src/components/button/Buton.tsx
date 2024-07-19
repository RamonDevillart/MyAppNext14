import styles from '../../styles/Button.module.css';
function Button({label}:any) {

    return (
        <button className={'button-primary'}>
            {label}
        </button>
    )
}

export default Button;