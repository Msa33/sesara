import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MonPanier from "../pages/MonPanier";
import Sinscrire from "../pages/Sinscrire";
import Connexion from "../pages/Connexion";
import Produit from "../pages/Produits";
import Apropos from "../pages/Apropos";
import Réinitialisation from "../pages/Reinitialisation";
import ContactPage from "../pages/ContactPage";
import Dashboard from "../pages/Dashboard";

const MesRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/panier" element={<MonPanier />} />
            <Route path="/s'inscrire" element={<Sinscrire/>} />
            <Route path="/se_connecter" element={<Connexion/>} />
            <Route path="/produits" element={<Produit/>} />
            <Route path="/a_propos" element={<Apropos/>} />
            <Route path="/réinitialisation" element={<Réinitialisation/>} />
            <Route path="/contact" element={<ContactPage/>} /> 
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    )
}

export default MesRoutes 