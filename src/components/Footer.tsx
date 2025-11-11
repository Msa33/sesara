import type { ChangeEvent, FormEvent } from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import SésaraLogo from "./logo"
import Bouton from './Boutons'
import { useState } from "react"
import Champs from './inputes'
export default function Footer (){
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

        if (!email) {
            setError('Entrer votre adresse email')
            setSuccess(false)
        }else{
            setSuccess(true)
            setEmail('')
        }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }
    return (
        <footer >
            <div className='bg-gray-800 h-96 w-full px-30 py-5'> 
            <div className='flex border-b-2 border-gray-400 w-full pb-10'>
                <SésaraLogo />
                
                    <p className='text-white font-bold ml-90 mr-0 w-full text-2xl '>Abonner à notre NewsLetter pour ne rien manquer</p>

                {success ? (
                <p className="mb-6 text-center text-green-600">
                    L'email à a été envoyé avec succès 
                </p>
                ) : (
                <form onChange={(
                    
                )=>handleSubmit} className='ml-10'>
                    <Champs
                        type="email"
                        placeholder="Votre adresse email"
                        error={error}
                        value={email}
                        onChange={handleChange} 
                        className='bg-white text-gray-500 w-100 h-10 rounded-lg mb-2 pl-5'
                    />

                    <Bouton
                        className="h-10 w-35 rounded-lg ml-65 bg-green-600 text-white font-bold mr-0"
                        disabled={loading}
                        loading={loading}
                        type="submit"
                    >Souscrire</Bouton>
            
                </form>
        )}

            </div>
                
            <div className="grid justify-between grid-cols-3 gap-4 py-10 pl-60 itemes-center border-b-2 border-gray-400">
                <ul>
                    <p className="block mb-1 text-base font-semibold  text-gray-200">Nos partenaire</p>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <p className="block mb-1 text-base font-bold  text-gray-200">Réseaux Sociaux</p>
                    <li className='flex text-gray-400'> <Facebook/> SésaraMarcket</li>
                    <li className='flex text-gray-400'> <Twitter/> SésaraMarcket</li>
                    <li className='flex text-gray-400'> <Instagram/> SésaraMarcket</li>
                </ul>
                <ul>
                    <p className="block mb-1 text-base font-semibold  text-gray-200">Information</p>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <p className="block mb-4 text-sm text-center text-slate-500 py-2 md:mb-0">
                Copyright © 2025 
                <a href="https://material-tailwind.com/"> Sésara Marcket</a>. Tout
                Droit réservé
            </p>
            </div>
        </footer>
    )
}