import { makeAutoObservable } from "mobx";
import {CellAddress} from "@/shared";

export class CellModel {
  value: string;
  address: CellAddress;

  constructor({ value, address }: { value: string; address: CellAddress }) {
    this.value = value;
    this.address = address;

    makeAutoObservable(this);
  }

  get computedValue(): string {
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
