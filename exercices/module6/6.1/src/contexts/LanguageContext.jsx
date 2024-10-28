import React, { useState } from "react";

// React Context : Création du contexte (ici, on stock l'information de la langue) 
const Context = React.createContext(null) // null permet d'avoir une erreur si on oublie le Provider

// Définir un Provider qui va envelopper l'application pour fournir les informations de contexte à tous les composants enfants
const ProviderWrapper = (props) => {

    const [language, setLanguage] = useState("fr")
    const pickLanguage = (newLanguage) => {
        if (newLanguage !== "fr" && newLanguage !== "en")   throw "Invalid language selected : "+newLanguage;
        setLanguage(newLanguage)    
    }
    
    const exposedValue = {
        language,
        pickLanguage,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
