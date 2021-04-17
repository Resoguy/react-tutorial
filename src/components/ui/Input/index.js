import s from './Input.module.css';


const Input = ({onChangeHandler, value, type = 'text', name, placeholder, disabled = false}) => {
    return (
        <div>
            <input
                className={s.input}
                onChange={onChangeHandler}
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled} />
        </div>
    )
}

export default Input;