import {makeAutoObservable} from "mobx";
import {CellAddress} from "@/shared";
import {CellModel} from "@/entities/Cell";

export class GridModel {
  columns: number;
  rows: number;

  cells: Map<CellAddress, CellModel>;

  constructor({ columns, rows, cells }: { columns: number; rows: number; cells: Map<CellAddress, CellModel> }) {
    this.columns = columns;
    this.rows = rows;
    this.cells = cells;

    makeAutoObservable(this);
  }

  get displayCells(): CellModel[] {
    const result = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.cells.has([i, j])) {
          result.push(this.cells.get([i, j])!);
        }
        else {
          result.push(CellModel.empty([i, j]));
        }
      }
    }

    return result;
  }

  static default(): GridModel {
    return new GridModel({
      columns: 100,
      rows: 100,
      cells: new Map<CellAddress, CellModel>(),
    });
  }
}
