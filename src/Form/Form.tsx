import React, {FormEvent, useEffect, useRef, useState} from 'react'
import './Form.scss'
import axios from "axios";
import ReactLoading from 'react-loading';
import autoAnimate from "@formkit/auto-animate";


const FormMain : React.FC<{setUsers : Function}> = ({setUsers}) => {
    const [loading, setLoading]: [boolean, Function] = useState<boolean>(false);
    const parentLoading = useRef<HTMLDivElement>(null);
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

        inputs.forEach(el => {
            data[el.name as keyof Fields] = el.value;
            el.disabled = !loading;
            el.value = '';
        })

        axios.post<Fields>('http://localhost:3001/users', {...data, id : `${new Date()}`})
            .catch(err => alert(err)).finally(() => setLoading(false))
        setUsers((users : [] ) => [...users, data])
    }

    useEffect(() => {
        if (parentLoading.current) {
            autoAnimate(parentLoading.current);
        }
    }, [parentLoading]);

    return (
    <div className='main-form__layout' ref={parentLoading}>
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
        {loading && <ReactLoading type='bars' color="#a9a9a9" className='loading'/>}
    </div>
    )
}

export const Form = React.memo(FormMain);