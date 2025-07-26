import React, { createContext, useContext, useState, useEffect } from "react";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const [mobile, setMobile] = useState(true);
  const [rightBar, setRightBar] = useState(true);
  const [toggleTop, setToggle] = useState(true);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [showItem, setShowItem] = useState(true);
  const [activeMobileMenu, setActiveMobileMenu] = useState(true);
  const [isLightTheme, setLightTheme] = useState(false); // Forcer le mode sombre par défaut

  const checkScreenSize = () => {
    if (window.innerWidth < 1600) {
      setMobile(false);
      setRightBar(false);
    } else {
      setMobile(true);
      setRightBar(true);
    }
  };

  // ===========> Mode sombre forcé START
  useEffect(() => {
    // Forcer le mode sombre au chargement
    setLightTheme(false);
    document.body.classList.add("active-dark-mode");
    localStorage.setItem("prospero-theme", "dark");
  }, []);

  // Suppression de la fonction toggleTheme car elle n'est plus nécessaire
  // ===========> Mode sombre forcé END

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const shouldCollapseLeftbar = !mobile;
  const shouldCollapseRightbar = !rightBar;

  return (
    <CreateContext.Provider
      value={{
        mobile,
        setMobile,
        showItem,
        setShowItem,
        activeMobileMenu,
        setActiveMobileMenu,
        toggleTop,
        setToggle,
        toggleAuth,
        setToggleAuth,
        rightBar,
        setRightBar,
        shouldCollapseLeftbar,
        shouldCollapseRightbar,
        isLightTheme,
        setLightTheme,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
