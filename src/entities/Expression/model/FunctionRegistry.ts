export type MathFunc = (a: number) => number;
export type FunctionRegistry = Record<string, MathFunc>;

export const functionRegistry: FunctionRegistry = Object.freeze({
  abs: Math.abs,
  acos: Math.acos,
  acosh: Math.acosh,
  asin: Math.asin,
  asinh: Math.asinh,
  atan: Math.atan,
  atanh: Math.atanh,
  cos: Math.cos,
  cosh: Math.cosh,
  log10: Math.log10,
  sin: Math.sin,
  sinh: Math.sinh,
  sqrt: Math.sqrt,
  tan: Math.tan,
  tanh: Math.tanh,
});
