import { Link } from 'react-router-dom';
import Button from '../../../global-components/LinkButton/Button';
import { InputTextForm } from '../../../global-components/LinkButton/InputTextForm';
import { LinkButton } from '../../../global-components/LinkButton/Link-Button';
import UpdateRegistration  from '../../../updatedLoginSignIn/UpdateRegistration'
import '../../../registration.css'


export default function SignUp() {
  return (
    <div className="bg-sunray-500 p-10">
       <LinkButton pathName="/" text="Home" />
      {/*<h1 className="text-white font-bold text-center text-5xl">Get Started</h1>
      <h3 className="text-white font-bold text-center mt-4">Already have an account? <Link to='/login'><span className="text-black hover:text-[#FF99A8]">Log In</span></Link></h3>
      <InputTextForm text="Name" />
      <InputTextForm text="Email" />
      <InputTextForm text="Username" />
      <InputTextForm text="Password" />
      <Button text="Sign Up" /> */}
      <UpdateRegistration />
    </div>
  )
}
