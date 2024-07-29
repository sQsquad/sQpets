import './inputCheckbox.sass'

export default function InputCheckbox({name, type, textLabel}) {
    return (
        <div className='checkbox_container'>
            <input 
                className='input_checkbox'
                type={type} 
                id={name} 
            />
            <label
                className='label'
                htmlFor={name}
            >
                {textLabel}
            </label>
        </div>
    )
}