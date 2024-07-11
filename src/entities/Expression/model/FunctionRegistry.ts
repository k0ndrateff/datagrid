export type MathFunc = (a: number) => number;
export type FunctionRegistry = Record<string, MathFunc>;

export const functionRegistry: FunctionRegistry = Object.freeze({
  abs: Math.abs
});
