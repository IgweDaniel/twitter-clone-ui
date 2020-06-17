export function merge(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
