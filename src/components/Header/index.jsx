import icon from '../../assets/icon.jpeg';

export const Header = () => {
  return (
    <div className='fixed top-0 flex ablsoute flex-row'>
      <div className="flex items-center gap-36 text-2xl">
      <div>
        <img className='w-16 h-16 shadow-md' src={icon}  alt="icone aqui" />
      </div>
      <div className="text-slate-50">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
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
  );
};
