import { ProviderWrapper as LanguageProviderWrapper } from "contexts/LanguageContext";
import App from "components/App/App"

// Placer le Provider autour de mon application , permet à tous les composants enfants d'accéder aux informations de contexte
const AppLoader = () => {
  return (
    <LanguageProviderWrapper >
        <App />
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader