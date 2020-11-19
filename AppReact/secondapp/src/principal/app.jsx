import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../template/custom.css';

import React from 'react';
import Menu from '../template/menu';
import Book from '../book/book';
import Routes from '../principal/routes';

export default (props) => (
  <div className="container">
    <h1>Seja bemvindo ao curso de Arquitetura javaScript - IGTI</h1>
    <Menu />
    <Routes />
  </div>
);
