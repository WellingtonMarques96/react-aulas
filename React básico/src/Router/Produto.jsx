import React from 'react';
import {useParams, useLocation, NavLink, Outlet} from 'react-router-dom';


const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to=''>Descrição</NavLink> {''}
        <NavLink to='avaliacao'>Avaliação</NavLink> {' '}
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
