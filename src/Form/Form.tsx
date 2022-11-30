import React, {useRef} from 'react'
import './Form.scss'


export const Form : React.FC<{setUsers : Function}> = ({setUsers}) => {
    const form = useRef(null)

    const handleSubmit : Function = () => {
        alert(1)
        // const data = {
        //     firstname: firstname.current,
        //     lastname,
        //     email,
        //     country,
        //     city
        // }
        setUsers((users : [] ) => [...users, {}])
    }



    return (
    <div className='main-form__layout'>
        <h1>Form</h1>
        <form className='main-form' ref={form}>
            <label>
                Firstname:
                <input type="text" minLength={3}/>
            </label>
            <label>
                Lastname:
                <input type="text" minLength={3} />
            </label>
            <label>
                Email:
                <input type="email"/>
            </label>
            <label>
                Country:
                <input type="text" minLength={3}/>
            </label>
            <label>
                City:
                <input type="city" minLength={3}/>
            </label>
        </form>
        <button className='main-form__button' onClick={() => handleSubmit()}>Send</button>
    </div>
    )
}