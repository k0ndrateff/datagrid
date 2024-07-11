import { makeAutoObservable } from "mobx";
import {functionRegistry} from "./FunctionRegistry";

export class ExpressionModel {
  private readonly expression: string = '';
  private index: number = 0;
  private currentChar: string = '';

  constructor(expression: string) {
    this.expression = expression;
    this.index = 0;
    this.currentChar = this.expression[this.index] || '';
    makeAutoObservable(this);
  }

  private getNextChar = () => {
    this.index++;
    if (this.index < this.expression.length) {
      this.currentChar = this.expression[this.index];
    } else {
      this.currentChar = ''; // End of input
    }
  }

  private parseNumber = (): number => {
    let result = '';

    while (/[0-9.]/.test(this.currentChar)) {
      result += this.currentChar;
      this.getNextChar();
    }

    return parseFloat(result);
  }

  private parseTerm = (): number => {
    let value = this.parseFactor();

    while (this.currentChar === '*' || this.currentChar === '/') {
      const operator = this.currentChar;
      this.getNextChar();
      const nextValue = this.parseFactor();

      if (operator === '*') {
        value *= nextValue;
      } else {
        value /= nextValue;
      }
    }

    return value;
  }

  private parseFunction = (): number => {
    let functionName = '';

    while (/[a-zA-Z]/.test(this.currentChar)) {
      functionName += this.currentChar;
      this.getNextChar();
    }

    if (functionName in functionRegistry) {
      if (this.currentChar === '(') {
        this.getNextChar();
        const value = this.parseExpression();

        // @ts-expect-error: typescript does not recognize getNextChar()
        if (this.currentChar !== ')') {
          throw new Error('Expected closing parenthesis');
        }

        this.getNextChar();
        return functionRegistry[functionName](value);
      } else {
        throw new Error(`Expected opening parenthesis after function name ${functionName}`);
      }
    } else {
      throw new Error(`Unknown function: ${functionName}`);
    }
  }

  private parseFactor = (): number => {
    if (this.currentChar === '(') {
      this.getNextChar();
      const value = this.parseExpression();

      // @ts-expect-error: typescript does not recognize getNextChar()
      if (this.currentChar !== ')') {
        throw new Error('Expected closing parenthesis');
      }

      this.getNextChar();
      return value;
    } else if (this.currentChar === '-') {
      this.getNextChar();
      return -this.parseFactor();
    } else if (/[0-9.]/.test(this.currentChar)) {
      return this.parseNumber();
    } else if (/[a-zA-Z]/.test(this.currentChar)) {
      return this.parseFunction();
    } else {
      throw new Error('Unexpected character');
    }
  }

  private parseExpression = (): number => {
    let value = this.parseTerm();

    while (this.currentChar === '+' || this.currentChar === '-') {
      const operator = this.currentChar;
      this.getNextChar();
      const nextValue = this.parseTerm();

      if (operator === '+') {
        value += nextValue;
      } else {
        value -= nextValue;
      }
    }

    return value;
  };

  parse = (): number | string => {
    const result = this.parseExpression();

    if (this.index < this.expression.length) {
      throw new Error('Unexpected character');
    }

    return result;
  }
}
