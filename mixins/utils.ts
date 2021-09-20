export interface UtilsMixin {
  // check if object or prop is defined
  isDefined(val: any): boolean;
  // check if object is null
  isNull(val: object): boolean;
}

export default {
  isDefined(val: any) {
    return typeof val !== 'undefined';
  },
  isNull(val: any) {
    return val === null;
  },
};
