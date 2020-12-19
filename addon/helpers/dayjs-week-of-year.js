import BaseHelper from './base-helper';

export default class DayjsWeekOfYear extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_weekOfYear);

    return this.dayjs.self(params[0]).week();
  }
}
