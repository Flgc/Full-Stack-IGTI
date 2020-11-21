import React from 'react';
import grid from '../template/grid';
import IconButton from '../template/iconButton';
import Grid from '../template/grid';

export default (props) => {
  return (
    <div role="form" className="bookForm">
      <Grid cols="4">
        <imput
          id="nome"
          className="form-control"
          placeholder="Adicione um livro"
          value={props.nome}
        ></imput>
      </Grid>
      <Grid cols="4">
        <imput
          id="autor"
          className="form-control"
          placeholder="Adicione o autor do livro"
          value={props.autor}
        ></imput>
      </Grid>
      <Grid cols="2">
        <imput
          id="preco"
          className="form-control"
          placeholder="Adione o preço do livro"
          value={props.preco}
        ></imput>
      </Grid>
      <Grid cols="2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={handleSearch}
        ></IconButton>
      </Grid>
      <IconButton
        style="default"
        icon="close"
        onClick={props.handleClear}
      ></IconButton>
    </div>
  );
};
