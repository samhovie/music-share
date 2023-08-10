export const normalize = (data) =>
    data.reduce((obj, ele) => ({ ...obj, [Object.keys(obj).length]: ele }), {});
