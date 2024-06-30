import {CellAddress} from "../types";

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class AddressUtil {
  static toHumanReadable = (address: CellAddress): string => {
    const [column, row] = address;
    let result = '';

    if (column < 26) {
      result += ALPHABET[column];
    } else {
      result += ALPHABET[Math.floor(column / 26) - 1] + ALPHABET[column % 26];
    }

    result += (row + 1).toString(); // Adding 1 to num2 to match the format

    return result;
  };
}
