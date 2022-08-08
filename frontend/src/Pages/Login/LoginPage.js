import { Link } from 'react-router-dom'
import Button from '../../global-components/LinkButton/Button'
import { InputTextForm } from '../../global-components/LinkButton/InputTextForm'
import { LinkButton } from '../../global-components/LinkButton/Link-Button'


export default function LoginPage() {
  return (
    <div className="bg-sunray-500 p-10">
      <LinkButton pathName="/" text="Home" />
      <h1 className="text-white font-bold text-center text-5xl">Login</h1>
      <h3 className="text-white font-bold text-center mt-4">Don't have an account yet? <Link to='/signup'><span className="text-black hover:text-[#FF99A8]">Sign Up</span></Link></h3>
      <InputTextForm text="Username" />
      <InputTextForm text="Password" />
      <Button text="Login" />
    </div>
  )
}


