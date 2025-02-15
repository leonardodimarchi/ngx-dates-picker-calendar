/**
 * Internal library helper that helps to check if value is empty
 * @param value
 */
export const isNil = (value: any) => {
  return (typeof value === 'undefined') || (value === null);
};
