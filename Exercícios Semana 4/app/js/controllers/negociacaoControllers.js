import { listanegociacao } from '../models/listanegociacao.js';
import { aNegociacao } from '../models/negociacao.js';
import { negociacoesViews } from '../views/negociacoesViews.js';

export class NegociacaoControllers {
  #campoData;
  #campoQuantidade;
  #campoValor;
  listanegociacao;

  constructor() {
    this.#campoData = document.getElementById('data');
    this.#campoQuantidade = document.getElementById('quantidade');
    this.#campoValor = document.getElementById('valor');
    this.listanegociacao = new listanegociacao();
  }

  criarNegociacao() {
    let dt = new Date(this.#campoData.value);
    let data =
      dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
    let quantidade = this.#campoQuantidade.value;
    let valor = this.#campoValor.value;
    let negociacao = new aNegociacao(data, quantidade, valor);
    let negView = new negociacoesViews();

    this.listanegociacao.adicionar(negociacao);
    negView.viewList(this.listanegociacao.lista);
  }

  filtrarNegociacao(valor) {
    let negView = new negociacoesViews();
    let listaFiltrada = this.listanegociacao.filtrar(valor);
    negView.viewList(listaFiltrada);
  }
}