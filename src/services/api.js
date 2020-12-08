class Api {
  #headers;

  constructor() {
    this.#headers = new Headers();
  }
}

export default new Api();
