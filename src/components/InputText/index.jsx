import './inputText.sass';

export default function InputText({name, type, textLabel, textPlaceholder}) {
    return (
        <div className='input_container'>
            <input 
                className='input_text'
                type={type} 
                id={name} 
                placeholder={textPlaceholder}
            />
            <label
                className='text_label'
                htmlFor={name}
            >
                {textLabel}
            </label>
        </div>
    )
}