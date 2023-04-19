import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

function emReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const TabelaLinha = ({ negociacao }) => {
  const { data, valor, quantidade } = negociacao;
  const formattedDate = moment(data).format('DD/MM/YYYY');
  
  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{quantidade}</td>
      <td>{emReais(Number(valor))}</td>
      <td>{emReais(Number(valor) * Number(quantidade))}</td>
    </tr>
  );
};

TabelaLinha.propTypes = {
  negociacao: PropTypes.shape({
    data: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
  }).isRequired,
};
