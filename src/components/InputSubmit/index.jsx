import './inputSubmit.sass';

export default function InputSubmit({ name, type, text }) {
    return (
        <>
        <label className="submit_label" htmlFor={name} />
        <input className="input_submit" type={type} id={name} value={text} />
        </>
    );
}
