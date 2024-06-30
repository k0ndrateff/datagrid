import {Grid, GridModel} from "@/features/Grid";

const DataGrid = () => {
  const gridModel = GridModel.default();

  return (
    <Grid model={gridModel} />
  );
};

export { DataGrid };
