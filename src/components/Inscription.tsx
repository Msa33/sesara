import { LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ChangeEvent, FormEvent} from 'react'
import { useState } from 'react'
import Bouton from './Boutons.tsx'
import SésaraLogo from './logo.tsx'
import Champs from './inputes.tsx'


function Inscription() {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })
  const [showLoader, setShowLoader] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const newErrors = { name: '', email: '', password: '' }

    if (!user.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    if (!user.email.trim()) {
      newErrors.email = 'Please enter a valid email.'
    }

    if (!user.password.trim()) {
      newErrors.password = 'Le mot de passe ne doit pas être vide.'
    }

    if (newErrors.name || newErrors.email || newErrors.password) {
      setErrors(newErrors)
      return
    }

    setShowLoader(true)

    // Mimic API request
    setTimeout(() => {
      setShowLoader(false)
      console.log('Signup successful:', user)
      alert('Signup successful!')
    }, 2000)
  }

  return (
    <div className="relative bg-[#FFF8E7] text-white py-16 px-8 overflow-hidden">
      <div className="w-full max-w-2xl mx-auto rounded-lg p-6 shadow-2xl items-center justify-center md:flex-row md:items-center">
        <SésaraLogo />
        <h2 className="mb-3 text-center text-3xl font-semibold text-[#8C5E3E]">Inscription</h2>
        <form onSubmit={handleSubmit} className="py-3">
          <label htmlFor="Username" className='text-gray-700'>Nom d'utilisateur :</label>
          <Champs
            type="text"
            placeholder="Votre nom d'utilisateur"
            value={user.name}
            onChange={handleChange}
            error={errors.name}
            className='h-10 w-120 mx-25 my-2 px-4 text-gray-700 bg-white border-1'
          />
          <label htmlFor="email" className='text-gray-700'>E-mail :</label>
          <Champs
            type="email"
            label="Email"
            placeholder="Votre adresse e-mail"
            value={user.email}
            onChange={handleChange}
            error={errors.email}
            className='h-10 w-120 mx-25 px-4 my-2 text-gray-600 bg-white border-1'
          />
          <label htmlFor="password" className='text-gray-700'>Mot de passe :</label>
          <Champs
            type="password"
            label="Password"
            placeholder="Votre mot de passe"
            value={user.password}
            onChange={handleChange}
            error={errors.password}
            className='h-10 w-120 mx-25 px-4 my-2 text-gray-600 bg-white border-1'
          />
          <label htmlFor="confirmPass" className='text-gray-700'>Confirmer le mot de passe :</label>
          <Champs
            type="password"
            placeholder="Confirmez votre mot de passe"
            value={user.name}
            onChange={handleChange}
            error={errors.name}
            className='h-10 w-120 mx-25 my-2 px-4 text-gray-600 bg-white border-1'
          />
          <Champs type='checkbox' className='ml-50'/> <label htmlFor="checkbox" className='text-gray-700 '>Afficher le mot de passe</label> <br />
          <label htmlFor="adresse" className='text-gray-700'>Adresse :</label>
          <Champs
            type="text"
            placeholder="Entrer votre adresse"
            value={user.email}
            onChange={handleChange}
            error={errors.email}
            className='h-10 w-120 mx-25 px-4 my-2 text-gray-700 bg-white border-1'
          />
          <label htmlFor="phone" className='text-gray-700'>Téléphone :</label>
          <Champs
            type="text"
            placeholder="Votre numéro de téléphone"
            value={user.password}
            onChange={handleChange}
            error={errors.password}
            className='h-10 w-120 mx-25 px-4 my-2 text-gray-600 bg-white border-1'
            
          />
          <div className="mt-10">
            <Bouton
              className="h-10 w-40 ml-55 bg-green-600 rounded-md"
              disabled={showLoader}
              loading={showLoader}
              type="submit"
            >
              {showLoader ? (
                <LoaderCircle className="animate-spin" color="#fff" />
              ) : (
                "S'inscrire"
              )}
            </Bouton>
          </div>
        </form>
        {/* Login Link */}
        <div className="block mt-4 text-center">
          <span className="text-sm text-gray-600">Vous avez déjà un compte ? </span>
          <Link
            to="/se_connecter"
            className="text-sm font-medium text-green-600 hover:underline"
          >
            Se connecter 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Inscription