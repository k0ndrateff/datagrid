# Simple Data Grid

Simple & lightweight data grid application. Can be useful for Excel-like calculations or organizing data in matrix view.
No ready-made packages are used in this app, all logic is written natively. 

[Check it out!](https://k0ndrateff.github.io/datagrid)

### Stack

* React
* Typescript
* Vite
* MobX

I’m trying to organize the project according to the Feature-Sliced Design methodology, although there are places 
with cross-imports.

### Supported features

* Fixed 100 × 100 grid
* Selecting one cell at a time (selected cell’s address is displayed in the bottom-left corner)
* Arithmetics in cells (to enable formula mode, start cell input with “=”, for example `=2+2`)
* Handling complex functions, like `=abs(2-4)`

### Roadmap

1. More functions in formula mode
2. Referencing other cells in formula mode
3. Resizing columns and rows
4. Saving grid data in local storage
5. “Endless” grid
6. Importing CSV files
7. More...
