export class listanegociacao {
  #listanegociacao;

  constructor() {
    this.#listanegociacao = [];
  }

  adicionar(negociacao) {
    this.#listanegociacao.push(negociacao);
  }

  filtrar(val) {
    return [].concat(this.#listanegociacao).filter(neg => {
      if (neg.valor > val) {
        return neg;
      }
    });
  }

  get lista() {
    return [].concat(this.#listanegociacao);
  }
}