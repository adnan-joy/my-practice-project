import React, { useState } from 'react';

const Form = () => {
    const[form,setForm]= useState({
        firstName:"John",
        lastName: "Wick",
        email:"adnanjoy@gmail.com"
    })
    return (
        <>
        <label>
            First name:
            <input value={form.firstName} 
            onChange={e=>{setForm({...form,
                            firstName: e.target.value});
                            }}>
            </input>
        </label>

        <label>
            Last Name:
            <input value={form.lastName}
            onChange={e=>{setForm({...form,
                lastName:e.target.value
                });
            }}>
            </input>
        </label>

        <label>
            Email:
            <input value={form.email} 
                onChange={e=>{setForm({...form,
                    email:e.target.value});
        }}
        >

        </input>
        </label>

        <p>{form.firstName}{" "}{form.lastName}{" "}({form.email})</p>
        </>
    );
};

export default Form;