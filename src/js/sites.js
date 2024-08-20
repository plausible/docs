import React, { createContext, useEffect, useState } from 'react'

export const SiteContext = createContext(null)

export function SiteContextProvider({ children }) {
  const [sites, setSites] = useState({
    loading: true,
    isLoggedIn: false,
    sites: []
  })

  const [selectedSite, setSelectedSite] = useState(localStorage.getItem("plausible_docs_site"))

  function selectSite(domain) {
    localStorage.setItem("plausible_docs_site", domain)
    setSelectedSite(domain)
  }

  useEffect(() => {
    async function loadSites() {
      const response = await fetch("/api/docs/sites")

      if (response.status === 200) {
        const { data } = await response.json()
        setSites({
          loading: false,
          isLoggedIn: true,
          sites: data
        })
        setSelectedSite(data[0].domain)
      } else {
        setSites({
          loading: false,
          isLoggedIn: false,
          sites: []
        })
      }
    }
    loadSites()
  }, [])


  return (
    <SiteContext.Provider value={{ ...sites, selectedSite, selectSite }}>
      {children}
    </SiteContext.Provider>
  )
}
