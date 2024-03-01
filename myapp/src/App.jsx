import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./COMPONENTS/navbar/navbar";
import ThemeContext from "./CONTEXT/themeContext";
import MainRoutes from "./ROUTES/mainRoutes";

function App() {
  const [theme,setTheme]=useState('dark')
  useEffect(()=>{
   const appTheme=localStorage.getItem('theme')
   if(appTheme!=null){
    setTheme(appTheme)
   }
  },[])
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
       <div id="app-wrapper" data-theme={theme}>
       <Navbar />
        <MainRoutes />
       </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
