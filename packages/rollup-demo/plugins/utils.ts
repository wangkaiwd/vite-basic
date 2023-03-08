export const objectKeys = <T extends object> (value: T) => {
  return Object.keys(value) as (keyof T)[];
};
