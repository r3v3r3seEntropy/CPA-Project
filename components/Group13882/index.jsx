import React from "react";
import styled from "styled-components";
import { BarlowNormalAbbey24px, PlayfairdisplayBoldMineShaft30px } from "../../styledMixins";


class Group13882 extends React.Component {
  render() {
    return (
      <Group138821>
        <ResearchAdvocacy>
          Research &amp;
          <br />
          Advocacy
        </ResearchAdvocacy>
        <Text73>
          Highlight patterns and issues faced by stigmatised communities through research and advocate for changes.
        </Text73>
      </Group138821>
    );
  }
}

const Group138821 = styled.div`
  width: 334px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 180px;
`;

const ResearchAdvocacy = styled.div`
  ${PlayfairdisplayBoldMineShaft30px}
  min-height: 40px;
  margin-right: 5px;
  min-width: 299px;
  letter-spacing: 0;
`;

const Text73 = styled.div`
  ${BarlowNormalAbbey24px}
  width: 330px;
  min-height: 116px;
  margin-top: 24px;
  margin-right: 4px;
  letter-spacing: 0;
`;

export default Group13882;
