import React from 'react';

import whastappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars0.githubusercontent.com/u/19624975?s=460&u=0d697c9b3bbd9363c8f1c9532333800e2885b195&v=4'
          alt='Alexandre Martins'
        />
        <div>
          <strong>Alexandre Martins</strong>
          <span>Desenvolvimento de Software</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor
        rhoncus sem, ut semper odio tempus non. Vestibulum sed metus nisl. Donec
        in ullamcorper quam. Quisque congue tincidunt sem vitae vulputate.
        Integer quis purus sagittis, egestas purus in, sodales odio. Cras
        blandit posuere elit. Fusce magna nisl, convallis eget pellentesque non,
        vestibulum vel est. Mauris nunc nisi, suscipit sed varius faucibus,
        volutpat at magna. Curabitur hendrerit, urna sed dignissim blandit,
        tellus tellus viverra nibh, vitae pharetra lorem justo at libero.
        Pellentesque mollis in lectus ac imperdiet. Curabitur eget libero erat.
        Phasellus placerat mi eleifend, fermentum urna quis, imperdiet augue.
        Fusce.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type='button'>
          <img src={whastappIcon} alt='Whatsapp' /> Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
