import { LoaderCircle } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import Bouton from '../components/Boutons'
import SésaraLogo from '../components/logo'
import Champs from '../components/inputes'
import { Link, useNavigate } from 'react-router-dom'
import {users} from "../data/users" 

function Login() {
  const [mail, setMail] = useState('')
  const [passe, setPasse] = useState('')
  const [errors, setErrors] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const naviguer = useNavigate();


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userFind = users.find((us) => us.email === mail && us.password === passe );
    if (!mail) {
       setErrors(false)
       setMail('')
    }else if (!passe) {
      setErrors(false)
      setPasse('')
    }else if(userFind){
      setErrors(true)
      naviguer("/dashboard")
    }else{
      setErrors(false)
    }

  }

  return (
    <div className="relative bg-[#FFF8E7] text-white py-16 px-8 overflow-hidden">
      <div className="w-full max-w-2xl mx-auto rounded-lg p-6 shadow-2xl items-center justify-center md:flex-row md:items-center">
        <SésaraLogo />
        <h2 className="mb-8 text-center text-3xl font-semibold text-[#8C5E3E]">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className='text-gray-700'>Email :</label>
          <Champs
            type="email"
            label="Email"
            placeholder="Entrer votre adresse email"
            value={mail}
            onChange={e=>setMail(e.target.value)}
            className='h-10 w-120 mx-25 my-2 px-4 text-gray-700 bg-white border-1'
          />{(errors && !mail) ? (<span className='text-red-500 text-sm'>le champs est  réquis</span>): ''}<br/>
          <div>
            <label htmlFor="Username" className='text-gray-700'>Mot de passe :</label>
            <Champs
              type="password"
              label="Password"
              placeholder="Entrer votre mot de passe"
              value={passe}
              onChange={e=>setPasse(e.target.value)}
              className='h-10 w-120 mx-25 my-2 px-4 text-gray-700 bg-white border-1'
            />{(errors && passe) ? (<span className='text-red-500 text-sm'>le champs est  réquis</span>): ''}
            {/* Forgot Password Link */}
            <div className="mb-4 justify-center items-center">
              <Link to="/réinitialisation" className="text-sm text-green-600 ml-60 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
         
            <Bouton
            className="h-10 w-40 ml-55 bg-green-600 m-5 rounded-md"
            disabled={showLoader}
            loading={showLoader}
            type="submit"
            onClick={()=>handleSubmit}
          >
            {showLoader ? <LoaderCircle className="animate-spin" color="#fff" /> : 'Se connecter'}
          </Bouton>
        </form>
        {/* Sign-up Link */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Vous n'avez déjà un compte ? </span>
          <Link
            to="/s'inscrire"
            className="text-sm font-medium text-green-600 hover:underline"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login