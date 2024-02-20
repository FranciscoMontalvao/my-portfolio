import { Layout } from "../Layout"

export const About = () => {

  return (
      <div >
        <div className="text-slate-50 mt-40 w-screen justify-center" >
          <div className="mb-16">
            <h1 className="text-4xl mb-4">
              Sobre min
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, debitis deleniti, sunt esse consequuntur nemo animi quibusdam voluptates voluptatem ipsa, omnis nobis laborum. Odio obcaecati necessitatibus sunt nobis repellat laboriosam.
            </p>
          </div>

          <div>
            <h2 className="text-4xl mb-12">
              Experiencia Profissional
            </h2>
            <div>
              <ul>
                <li>
                  <h3 className="text-2xl mb-4">
                    Estudante De Programação
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-8">
                      <h4>
                        Faculdade Descomplica
                      </h4>
                      <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1">
                          <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
                        </svg>
                        {" "}Montalania, MG
                      </p>

                    </div>
                    <div className="flex flex-col items-center">
                      <button className="bg-white p-1 text-slate-900 rounded-md mb-2">
                        Intership
                      </button>
                      <p>
                        Jan 2024 - Present
                      </p>
                    </div>
                  </div>
                  <div className='h-px bg-slate-700 mt-2' />
                </li>
              </ul>
            </div>
          </div>


          <div className="mt-16">
            <h2 className="text-4xl mb-12">
              Educacao
            </h2>
            <div>
              <ul>
                <li>
                  <h3 className="text-2xl mb-4">
                    Estudante Engenharia De Software
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-8">
                      <h4>
                        Faculdade Descomplica
                      </h4>
                      <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1">
                          <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
                        </svg>
                        {" "}Montalania, MG
                      </p>

                    </div>
                    <div className="flex flex-col items-center">
                      <button className="bg-white p-1 text-slate-900 rounded-md mb-2">
                        Intership
                      </button>
                      <p>
                        Jan 2024 - Present
                      </p>
                    </div>
                  </div>
                  <div className='h-px bg-slate-700 mt-2' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}