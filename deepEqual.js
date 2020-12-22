
const isFunction = function(value) {
  return typeof value === 'function';
};
const isObject = function(value) {
  return typeof value === 'object';
}

const deepClone = function(target, map = new Map()) {

  if (!isObject(target) || isFunction(target) || target === null) {
    return target;
  };

  if (map.get(target)) {
    return map.get(target);
  }

  const clone = Array.isArray(target) ? [] : {};

  map.set(target, clone)

  const keys = Reflect.ownKeys(target);
  const length = keys.length;

  for (let i = 0; i < length; i++) {
    clone[keys[i]] = deepClone(target[keys[i]], map);
  }

  return clone;
}