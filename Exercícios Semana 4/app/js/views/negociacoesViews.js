export class negociacoesViews {
  viewList(lista) {
    let tb = document.getElementById('tbody');
    tb.innerText = '';

    for (let index = 0; index < lista.length; index++) {
      let tr = tb.insertRow();

      let td_data = tr.insertCell();
      let td_quantidade = tr.insertCell();
      let td_valor = tr.insertCell();

      td_data.innerText = lista[index].data;
      td_quantidade.innerText = lista[index].quantidade;
      td_valor.innerText = lista[index].valor;

    }
  }
}