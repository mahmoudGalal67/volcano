import React , {createContext, useState} from 'react'

export const langContext = createContext()


export function LanguageProvider({children}) {
  
  const defaultLang = JSON.parse(localStorage.getItem("lang")) || "AR"
  const [lang, setLanguage] = useState(defaultLang)
  
  const setlang = (lang)=>{
    setLanguage(lang)
    localStorage.setItem("lang" , JSON.stringify(lang))
  }

  return (
    <langContext.Provider value={{lang, setlang}}>
      {children}
    </langContext.Provider>
  )
}
