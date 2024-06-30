import { CellModel } from "../model/CellModel";
import { observer } from 'mobx-react-lite';
import styled from "styled-components";

const Root = styled.div`
  width: 160px;
  height: 40px;

  display: flex;
  align-items: center;

  padding: 8px;
  border: 0.5px solid var(--cell-border-inactive);
`;

interface Props {
  model: CellModel;
}

const Cell = observer((props: Props) => {
  const { model } = props;

  return (
    <Root>
      {model.computedValue}
    </Root>
  );
});

export { Cell };
