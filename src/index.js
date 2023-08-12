import React from "react"
import { render, ReactDOM } from "react-dom"
import "normalize.css"

import App from "./app"
import { GlobalStyles } from "./global-styles"
import { firebase } from "./lib/firebase.prod"
import { FirebaseContext } from "./context/firebase"
render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")

  // const root = ReactDOM.createRoot(document.getElementById("root"))
  // root.render(
  //   <>
  //     <FirebaseContext.Provider value={{ firebase }}>
  //       <GlobalStyles /> <App />
  //     </FirebaseContext.Provider>
  //   </>
)
