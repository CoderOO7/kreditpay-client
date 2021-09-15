import { apiProvider } from './provider';

export default class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (params) => apiProvider.getAll(options.resource, params);
    }

    if (options.getSingle) {
      this.getSingle = (id) => apiProvider.getSingle(options.resource, id);
    }

    if (options.post) {
      this.post = (model) => apiProvider.post(options.resource, model);
    }

    if (options.put) {
      this.put = (id, model) => apiProvider.put(options.resource, id, model);
    }

    if (options.patch) {
      this.patch = (model) => apiProvider.patch(options.resource, model);
    }

    if (options.delete) {
      this.delete = (id) => apiProvider.remove(options.resource, id);
    }
  }
}
