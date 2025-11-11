import { LoaderCircle } from 'lucide-react'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import Bouton from './Boutons'
import SésaraLogo from './logo'
import Champs from './inputes'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email.trim()) {
      setError('Please enter a valid email.')
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  return (
    <div className="relative bg-[#FFF8E7] text-white py-16 px-8 overflow-hidden">
      <div className="w-full max-w-2xl mx-auto rounded-lg p-6 shadow-2xl items-center justify-center md:flex-row md:items-center">
        <SésaraLogo />
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#8C5E3E]">Réinitialisation du mot passe</h2>

        {success ? (
          <p className="mb-6 text-center text-green-600">
            L'email à a été envoyé avec succès 
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Champs
              type="email"
              placeholder="Entrer votre adresse email"
              value={email}
              onChange={handleChange}
              error={error}
              className='w-full mb-10 border-1 rounded-md h-10 px-4 bg-white text-gray-600'
              
            />
            <Bouton
              className="h-10 w-80 text-xl ml-35 bg-green-600 rounded-md "
              disabled={loading}
              loading={loading}
              type="submit"
            >
              {loading ? <LoaderCircle className="animate-spin" color="#fff" /> : 'Réinitialiser le mot de passe'}
            </Bouton>
          </form>
        )}

        <div className="mt-4 text-center">
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

export default ForgotPassword