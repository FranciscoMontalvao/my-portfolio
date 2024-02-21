import { useState } from "react"
import { render } from "react-dom"
import { Layout } from "./Pages/Layout"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Tecnologies } from "./Pages/Tecnologies"
import { Projects } from "./Pages/Projects"

export const App = () => {
  return (

    <div>
      <Layout>
        <Projects />
      </Layout>
    </div>
  )
}

