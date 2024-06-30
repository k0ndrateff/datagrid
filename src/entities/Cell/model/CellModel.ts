import { makeAutoObservable } from "mobx";
import {CellAddress} from "@/shared";
import {ExpressionModel} from "@/entities/Expression";

export class CellModel {
  value: string;
  address: CellAddress;

  invalid: boolean;

  constructor({ value, address }: { value: string; address: CellAddress }) {
    this.value = value;
    this.address = address;
    this.invalid = false;

    makeAutoObservable(this);
  }

  get computedValue(): string {
    this.invalid = false;

    if (this.value.startsWith('=')) {
      try {
        const expression = this.value.slice(1);
        const model = new ExpressionModel(expression);

        return String(model.parse());
      }
      catch (ex) {
        this.invalid = true;

        return String(ex);
      }
    }

    return this.value;
  }

  static empty(address: CellAddress): CellModel {
    return new CellModel({
      address: address,
      value: ""
    });
  }

  setValue(value: string): void {
    this.value = value;
  }
}
