import React from "react";

export const Form : React.FC<{}> = () => {

    return (
    <>
        <form className='main-form'>
            <label>
                Firstname:
                <input type="text" minLength={3}/>
            </label>
            <label>
                Lastname:
                <input type="text" minLength={3}/>
            </label>
            <label>
                Email:
                <input type="email" />
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
        <button className='main-form__button'>Send</button>
    </>
    )
}