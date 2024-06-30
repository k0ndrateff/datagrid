import styled from "styled-components";
import {GridModel} from "../model/GridModel";
import {observer} from "mobx-react-lite";
import {Cell} from "@/entities/Cell";

interface RootProps {
  $columns: number;
  $rows: number;
}

const Root = styled.div<RootProps>`
  display: grid;
  grid-template-columns: repeat(${p => p.$columns}, 1fr);
  grid-template-rows: repeat(${p => p.$rows}, 1fr);
`;

interface Props {
  model: GridModel;
}

const Grid = observer((props: Props) => {
  const { model } = props;

  return (
    <Root $columns={model.columns} $rows={model.rows}>
      {model.displayCells.map(c => (
        <Cell key={String(c.address)} model={c} />
      ))}
    </Root>
  );
});

export { Grid };
