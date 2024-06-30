import {makeAutoObservable} from "mobx";
import {CellAddress} from "@/shared";

export class SelectionModel {
  selectedCell: CellAddress | undefined;

  constructor() {
    this.selectedCell = undefined;

    makeAutoObservable(this);
  }

  selectCell = (address: CellAddress) => {
    this.selectedCell = address;
  }
}
