import s from './Button.module.css';


const Button = ({children, onClickHandler, variant = 'primary', block = false}) => {

    return(
        <button 
            className={`${s.button} ${s[variant]} ${block ? s.block : ''}`}
            onClick={onClickHandler}>
            {children}
        </button>
    )
}

export default Button;