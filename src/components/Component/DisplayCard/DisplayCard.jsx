import { useContext } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AppContext } from "../../../state/context";

export default function DisplayCard() {
  const { displayState, setDisplayState } = useContext(AppContext);

  const DisplayObj = {
    grouping: ["status", "user", "priority"],
    ordering: ["priority", "title"],
  };

  const onChangeHandler = (e) => {
    const modifDisplayState = { ...displayState };
    if (e.target.id === "grouping") {
      modifDisplayState.grouping = e.target.value;
    } else if (e.target.id === "ordering") {
      modifDisplayState.ordering = e.target.value;
    }
    setDisplayState(modifDisplayState);
  };

  return (
    <DisplayCardWrapper>
      <div className="setting-wrapper">
        <Label>Grouping</Label>
        <div className="select-wrapper">
          <Select
            id="grouping"
            name="grouping"
            value={displayState.grouping}
            onChange={onChangeHandler}
          >
            {DisplayObj.grouping.map((item) => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </Select>
          <div className="arrow-down">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className="setting-wrapper">
        <Label>Ordering</Label>
        <div className="select-wrapper">
          <Select
            id="ordering"
            name="ordering"
            value={displayState.ordering}
            onChange={onChangeHandler}
          >
            {DisplayObj.ordering.map((item) => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </Select>
          <div className="arrow-down">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </DisplayCardWrapper>
  );
}

const DisplayCardWrapper = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;
  padding: 1rem 1rem;
  background: #fafafa;
  border: 0.5px solid #e0e0e0;
  border-radius: 8px;
  width: fit-content;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  .setting-wrapper {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;

    .select-wrapper {
      border: 1px solid #f4f4f4;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 3px #a8a8a8;
      width: 5rem;
      box-sizing: border-box;
      position: relative;

      .arrow-down {
        position: absolute;
        right: 0rem;
        top: 0.3rem;
        color: #494949;
      }
    }
  }
`;

const Label = styled.h1`
  font-size: 14px;
  font-weight: 525;
  color: #8d8d8d;
`;

const Select = styled.select`
  all: unset;
  width: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  color: #494949;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 14px;
`;
