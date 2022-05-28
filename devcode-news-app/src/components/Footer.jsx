import styled from 'styled-components'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import CodeIcon from '@material-ui/icons/Code'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <StyledFiberManualRecordIcon />
        <h5>Made by Aditya</h5>
        <StyledFiberManualRecordIcon />
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #4700d8;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #748eb3;
`

const FooterContent = styled.div`
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 320px) {
    margin: 0 6px;
  }
`

const StyledFiberManualRecordIcon = styled(FiberManualRecordIcon)`
  font-size: 10px !important;
  margin: 0 4px;
`
