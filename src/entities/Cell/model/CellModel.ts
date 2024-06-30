import { makeAutoObservable } from "mobx";

export class CellModel {
  value: string;
  address: string;

  constructor({ value, address }: { value: string; address: string }) {
    this.value = value;
    this.address = address;

    makeAutoObservable(this);
  }

  get computedValue(): string {
    return this.value;
  }

  static empty(address: string): CellModel {
    return new CellModel({
      address: address,
      value: "0"
    });
  }
}
