import {Grid, GridModel} from "@/features/Grid";
import {Selection, SelectionModel} from "@/features/Selection";
import {observer} from "mobx-react-lite";

const DataGrid = observer(() => {
  const gridModel = GridModel.default();
  const selectionModel = new SelectionModel();

  return (
    <>
      <Grid model={gridModel} selectionModel={selectionModel} />

      <Selection model={selectionModel} />
    </>
  );
});

export { DataGrid };
