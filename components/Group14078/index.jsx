import React from "react";
import styled from "styled-components";
import { FirasansSemiBoldAbbey12px } from "../../styledMixins";


class Group14078 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group140781 className={`group-14078 ${className || ""}`}>
        <Group13916 className="group-13916">
          <Group className="group-1" src="/img/group-75@2x.svg" />
        </Group13916>
        <READMORE className="read-more">READ MORE</READMORE>
      </Group140781>
    );
  }
}

const Group140781 = styled.div`
  height: 14px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  min-width: 81px;

  &.group-14078.group-14078-2 {
    margin-top: 19px;
  }

  &.group-14078.group-14078-3 {
    margin-top: 24px;
  }

  &.group-14078.group-14078-4 {
    margin-top: 19px;
  }

  &.group-14078.group-14078-5 {
    margin-top: 24px;
  }

  &.group-14078.group-14078-6 {
    margin-top: 19px;
  }

  &.group-14078.group-14078-7 {
    margin-top: 25px;
  }

  &.group-14078.group-14078-8 {
    margin-top: 25px;
  }
`;

const Group13916 = styled.div`
  height: 12px;
  display: flex;
  padding: 3px 2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 12px;
  background-color: var(--westar);
  border-radius: 6px;
`;

const Group = styled.img`
  width: 8px;
  height: 6px;
`;

const READMORE = styled.div`
  ${FirasansSemiBoldAbbey12px}
  min-height: 14px;
  margin-left: 4px;
  min-width: 63px;
  letter-spacing: 0;
  text-decoration: underline;
`;

export default Group14078;
