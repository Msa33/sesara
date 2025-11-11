import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { LoaderCircle } from 'lucide-react'
import Bouton from "./Boutons";
import SésaraLogo from "./logo";
import Champs from "./inputes";

function ContactForm (){
    const [user, setUser] = useState({ name: '', email: '', texterea: '' })
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })
  const [showLoader, setShowLoader] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        setErrors({ ...errors, [name]: '' })
      }

    const HandleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const [nom, setNom] = useState('');
        const [email, setEmail] = useState('');
        const [erea, setErea] = useState('')
        const [erreur, setErreur] = useState(false)
        if (!nom && !email && !erea){
            console.log('Veuillez renplire tous les champs')
            setErreur(false) 
            setNom('');
            setEmail('');
            setErea('');
        }else{
            setErreur(true)
        }
    }
    return(
        <div className="relative bg-[#FFF8E7] text-white py-16 px-8 overflow-hidden">
      <div className="w-full max-w-2xl mx-auto rounded-lg p-6 shadow-2xl items-center justify-center md:flex-row md:items-center">
        <SésaraLogo />
        <h2 className="mb-3 text-center text-3xl font-semibold text-[#8C5E3E]">Contacter Nous</h2>
        <form onSubmit={HandleSubmit} className="py-3">
          <label htmlFor="Username" className='text-gray-700'>Nom d'utilisateur :</label>
          <Champs
            type="text"
            placeholder="Votre nom d'utilisateur"
            value={user.name}
            onChange={handleChange}
            error={errors.name}
            className='h-10 w-120 mx-25 my-2 px-4 text-gray-700 bg-white border-1'
          />
          <label htmlFor="email" className='text-gray-700'>Adresse :</label>
          <Champs
            type="email"
            label="Email"
            placeholder="Votre adresse e-mail"
            value={user.email}
            onChange={handleChange}
            error={errors.email}
            className='h-10 w-120 mx-25 px-4 my-2 text-gray-600 bg-white border-1'
          />
          <label htmlFor="password" className='text-gray-700'>Message :</label>
          <textarea
            placeholder="Votre message ..."
            className='h-50 w-120 mx-25 px-4 my-4 text-gray-600 bg-white border-1'
          />
          <div className="mt-5">
                <Bouton
                className="h-10 w-40 ml-55 bg-green-600 rounded-md"
                disabled={showLoader}
                loading={showLoader}
                type="submit"        
                >
                {showLoader ? (
                    <LoaderCircle className="animate-spin" color="#fff" />
                ) : (
                    "Envoyer"
                )}
                </Bouton>
          </div>
        </form>
        </div>
    </div>

    )
}
export default ContactForm ;