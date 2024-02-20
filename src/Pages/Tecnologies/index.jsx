import js from "../../assets/techstack/js.png"
import css from "../../assets/techstack/css.png"
import html from "../../assets/techstack/html.png"
import react from "../../assets/techstack/react.png"
import tailwind from "../../assets/techstack/tailwind.png"
import sass from "../../assets/techstack/sass.png"

import git from "../../assets/techstack/git.png"
import github from "../../assets/techstack/github.png"
import vscode from "../../assets/techstack/vscode.png"
import figma from "../../assets/techstack/figma.png"
import npm from "../../assets/techstack/npm.png"
import postman from "../../assets/techstack/postman.png"




export const Tecnologies = () => {

  return (
    <div className="text-slate-50 mt-40 w-screen flex justify-center" >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mb-10">
          <div className="mb-10">
            <h2 className="text-4xl">
              Tecnologias
            </h2>
            <p>
              Tecnologias com as quais tenho trabalhado recentemente
            </p>
          </div>

          <div className="flex flex-row gap-16">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={tailwind} alt="" />
            <img src={sass} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-4xl mb-4">
            Ferramentas
          </h2>
          <div className="flex flex-row gap-16">
            <img src={vscode} alt="" />
            <img src={git} alt="" />
            <img src={github} alt="" />
            <img src={figma} alt="" />
            <img src={npm} alt="" />
            <img src={postman} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}