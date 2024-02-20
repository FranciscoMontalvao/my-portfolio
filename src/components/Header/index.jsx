import { About } from '../../Pages/About';
import { Home } from '../../Pages/Home';
import icon from '../../assets/icon.jpeg';

export const Header = ({setPage}) => {



  return (
    <div>
      <div className='fixed top-2 flex  flex-row bg-slate-950 z-50 w-screen justify-center'>
        <div className="flex items-center gap-36 text-2xl">
          <div>
            <img className='w-16 h-16 shadow-md' src={icon} alt="icone aqui" />
          </div>
          <div className="text-slate-50">
            <nav>
              <ul className="flex space-x-4">
                <li onClick={()=>setPage(<Home/>)}>
                  <a>Home</a>
                </li>
                <li onClick={()=>setPage(<About/>)} > 
                  <a>Sobre</a>
                </li>
                <li>
                  <a href="#">Tecnologias</a>
                </li>
                <li>
                  <a href="#">Projetos</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
