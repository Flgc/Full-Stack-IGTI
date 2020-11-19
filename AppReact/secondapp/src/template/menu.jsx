import React from 'react';

export default (props) => (
  <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="nav-bar-brand" href="#/home">
          Biblioteca
        </a>
        <ul className="nav navbar-nav">
          <li>
            <a href="#/livros">Livros</a>
          </li>
          <li>
            <a href="#/about">Sobre</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
