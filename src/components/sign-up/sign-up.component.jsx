import React, { useState } from 'react';
import ForomInput from '../form-input/forom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss'



const SignUp = () => {

    const [userCreateDetails, setUserCreateDetails] = useState({ displayName: '', email: '', password: '', confirmpassword: '' })

    const { displayName, email, password, confirmpassword } = userCreateDetails;

    const handelSubmit = async event => {
        event.preventDefault();

        if (password != confirmpassword) {
            console.log("password is not match")
            return;
        }



    }



    const handelChange = (event) => {
        const { name, value } = event.target;
        setUserCreateDetails({ ...userCreateDetails, [name]: value });

    }





    return (
        <div className='sign-up'>
            <h2 className='title'> I do not have an account </h2>
            <span>sign up with your email and your password</span>
            <form className='sign-up-form' onClick={handelSubmit}>
                <ForomInput
                    type='email' name='displayName' value={displayName} onChange={handelChange} label='display name' required   >


                </ForomInput>


                <ForomInput
                    type='email' name='email' value={email} onChange={handelChange} label='display email' required   >


                </ForomInput>

                <ForomInput
                    type='password' name='password' value={password} onChange={handelChange} label='password' required   >


                </ForomInput>

                <ForomInput
                    type='password' name='confirmpassword' value={confirmpassword} onChange={handelChange} label='confirmpassword' required   >


                </ForomInput>

                <CustomButton stype='submit' > sign up</CustomButton>

            </form>



        </div>


    )

}





export default SignUp;