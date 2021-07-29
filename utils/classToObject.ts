/**
 * Transform a store object (actions, mutations, getters) defined as class into a normal object
 */
const classToObject = (target: any) => {
  // eslint-disable-next-line new-cap
  const classInstance = new target();

  const newTarget = {};
  const classProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(classInstance));
  for (const name of classProperties) {
    if (name !== 'constructor') {
      newTarget[name] = classInstance[name];
    }
  }

  return newTarget;
};

export default classToObject;
