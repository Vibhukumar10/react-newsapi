import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

export default function Topbar() {
  return (
    <Header>
      {/* Icons */}
      <LogoContainer>
        <UseIconButton
          onClick={() => {
            // router.push('/')
          }}>
          <Image
            src="https://internshala.com/cached_uploads/logo%2F62793831bd36f1652111409.png"
            alt="Logo"
            width={35}
            height={35}
          />
          <Text>DevCode newsAPI</Text>
        </UseIconButton>
      </LogoContainer>

      <ResumeContainer>
        <UseIconButton>
          <ResumeText>
            <Link
              href="https://drive.google.com/file/d/1l1_kaJn165KqRapABW_FmYqkiyFoj2Dy/view?usp=sharing"
              target="_blank">
              Résumé
            </Link>
          </ResumeText>
        </UseIconButton>
      </ResumeContainer>
    </Header>
  )
}

const LogoContainer = styled.div``

const Link = styled.a`
  text-decoration: none;
  color: #fff;
`

const Text = styled.code``
const ResumeText = styled.code`
  background-color: #4700d8;
  color: #fff;
  padding: 2px 10px;
  border-radius: 4px;
`

const ResumeContainer = styled.div``

const Image = styled.img`
  margin-right: 10px;
`

const UseIconButton = styled(IconButton)`
  cursor: pointer;
  border-radius: 4px !important;
`

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 50;
  padding: 15px;
  height: 65px;
  border-bottom: 1px solid lightgray;
`
