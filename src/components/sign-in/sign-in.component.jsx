import React,{useState} from 'react';
import ForomInput from '../form-input/forom-input.component';
import './sign.scss'
import CustomButton from '../custom-button/custom-button.component';
import { singInWithGoogle } from '../../firebase/firebase';



const SignIn = ({emailSigninStart})=> {
  const [userCreateDetails,setUserCreateDetails]=useState({email : '', password : '' })

    const {email,password}=userCreateDetails;

   const handelSubmit = (event) => {
        event.preventDefault();
       emailSigninStart(email,password);

    }

   const handelChange = (event) => {

        const { value, name } = event.target;
        setUserCreateDetails({...userCreateDetails,[name] : value })

    }




        return (

            <div className='sign-in'>

                <h2>I alredy have an account</h2>
                <span>sign in with your email and your password</span>

                <form onSubmit={handelSubmit}>
                    <ForomInput name="email" type="email" value={email} handelChange={handelChange} required label="email" />

                    <ForomInput name="password" type="password" value={password} handelChange={handelChange} required label="password" />

                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSingIn>
                            {''}
                            Sign In with google {''}</CustomButton>

                    </div>



                </form>
            </div>

        )

}


export default SignIn;
