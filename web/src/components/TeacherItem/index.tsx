import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(): JSX.Element {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/18605492?s=460&u=8d54fa4e1dc93c5585e423a5d5bde9dced24f4e6&v=4" alt="Maurício Sampaio" />
        <div>
          <strong>Maurício Sampaio</strong>
          <span>Javascript</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Javascript avançado.
        <br />
        <br />
        Apaixonado por ensinar e por mudar a vida das pessoas através do ensino.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
