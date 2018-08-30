import { assign } from 'lodash';

export class TestService {
  private settings: Object;

  constructor(cfg1: Object, cfg2: Object) {
    this.settings = assign({}, cfg1, cfg2);
  }

  get(key: any): any {
    return this.settings[key];
  }
}
