import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style"
import Card from "../reuseable/Card";
import FlexRow from "../reuseable/FlexRow";
import RowItem from "../reuseable/RowItem";

const Envelope = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" viewBox="0 0 512 512">
      <path fill={colors.primary} d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
    </svg>
  );
}

const CommitteeCard = ({ name, role, email }) => {
  return (
    <RowItem bases={[100, 50, 33, 33]}>
      <Card width={"100%"} height={"100%"}>
        <p css={`text-align: center; font-family: ${fonts.serif}; font-size: x-large; margin: 10px;`}>{role}</p>
        <p css={`text-align: center; margin: 10px;`}>{name}</p>
        <a href={'mailto:' + email} css={`width: 20px; margin: 10px;`} aria-label="email"><Envelope /></a>
      </Card>
    </RowItem>
  )
}

const CardsContainer = styled(FlexRow)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;`

const CommitteeCards = ({ data }) => {
  return (
    <CardsContainer>
      {data.map(member => <CommitteeCard name={member.name} role={member.role} email={member.crsid+'@cam.ac.uk'} />)}
    </CardsContainer>
  )
}

export default CommitteeCards