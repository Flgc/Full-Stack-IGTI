import React from 'react';
import IconButton from '../template/iconButton';

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map((book) => (
      <tr>
        <td>
          <IconButton style="success" icon="check"></IconButton>
          <IconButton style="warning" icon="undo"></IconButton>
          <IconButton style="danger" icon="trasch-o"></IconButton>
        </td>
      </tr>
    ));
  };
  return (
    <table classeName="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Autor</th>
          <th>Preço</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
