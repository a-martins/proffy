import React from 'react';

import whastappIcon from '../../assets/images/icons/whatsapp.svg';
import api from './../../services/Api';

import './style.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  subject: string;
  whatsapp: string;
  bio: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function handlerNewConnection() {
    await api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost},00</strong>
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=55${teacher.whatsapp}`}
          target='_blank'
          rel='noopener noreferrer'
          onClick={handlerNewConnection}
        >
          <img src={whastappIcon} alt='Whatsapp' /> Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
