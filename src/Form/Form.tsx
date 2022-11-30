import React, {FormEvent, useState} from 'react'
import './Form.scss'
import axios from "axios";
import set = Reflect.set;




export const Form : React.FC<{setUsers : Function}> = ({setUsers}) => {
    const [loading, setLoading]: [boolean, Function] = useState<boolean>(false);

    const handleSubmit : Function = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data : Fields = {
            firstname : '',
            lastname :'',
            email : '',
            country : '',
            city : ''
        }
        setLoading(true)
        const inputs = Array.from((event.target as HTMLFormElement).elements)
            .filter((el) => el.tagName === 'INPUT')
            .map(el => (el as HTMLInputElement));
        console.log(loading)
        inputs.forEach(el => {
            data[el.name as keyof Fields] = el.value;
            el.disabled = !loading;
            el.value = '';
        })

        axios.post<Fields>('http://localhost:3001/users', {...data, id : `${new Date()}`})
            .catch(err => alert(err)).finally(() => setLoading(false))
        setUsers((users : [] ) => [...users, data])
    }



    return (

    <div className='main-form__layout'>
        <h1>Form</h1>
        <form className='main-form' onSubmit={(e) => handleSubmit(e)} >
            <label>
                Firstname:
                <input type="text" name='firstname' minLength={3} required disabled={loading}/>
            </label>
            <label>
                Lastname:
                <input type="text" name='lastname' minLength={3} required disabled={loading}/>
            </label>
            <label>
                Email:
                <input type="email" name='email' disabled={loading}/>
            </label>
            <label>
                Country:
                <input type="text" name='country'  minLength={3} required disabled={loading}/>
            </label>
            <label>
                City:
                <input type="city" name='city' minLength={3} required disabled={loading} />
            </label>
            <button className='main-form__button' type='submit'disabled={loading}>Send</button>
        </form>
        {loading && <h1>...</h1>}
    </div>
    )
}