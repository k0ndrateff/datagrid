import {SelectionModel} from "../model/SelectionModel";
import {AddressUtil, FloatingPanel} from "@/shared";
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--cell-value);
  font-family: var(--mono-font);
`;

interface Props {
  model: SelectionModel;
}

const Selection = observer((props: Props) => {
  const { model } = props;

  if (!model.selectedCell) return null;

  return (
    <FloatingPanel bottom={16} left={16}>
      <Value>
        {AddressUtil.toHumanReadable(model.selectedCell)}
      </Value>
    </FloatingPanel>
  );
});

export { Selection };
