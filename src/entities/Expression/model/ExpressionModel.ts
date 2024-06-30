import {makeAutoObservable} from "mobx";

export class ExpressionModel {
  private readonly expression: string = '';

  private index: number = 0;
  private currentChar: string = '';

  constructor(expression: string) {
    this.expression = expression;
    this.index = 0;
    this.currentChar = this.expression[this.index];

    makeAutoObservable(this);
  }

  private getNextChar = () => {
    this.currentChar = this.expression[++this.index];
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

  private parseFactor = (): number => {
    if (this.currentChar === '(') {
      this.getNextChar();
      const value = this.parseExpression();

      // @ts-expect-error: typescript cannot recognize getNextChar() function
      if (this.currentChar !== ')') {
        throw new Error('Expected closing parenthesis');
      }

      this.getNextChar();
      return value;
    } else if (/[0-9.]/.test(this.currentChar)) {
      return this.parseNumber();
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
