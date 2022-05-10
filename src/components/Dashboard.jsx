import { Card, Grid, TextField, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import Topbar from './Topbar'
import { Circle } from 'better-react-spinkit'
import { useState } from 'react'

import useNews from '../hooks/useNews'

import NewsThumbNail from './NewsThumbNail'

export default function Dashboard() {
  const [query, setQuery] = useState('')
  const [submitQuery, setSubmitQuery] = useState('')
  const { data, error, isLoading } = useNews(submitQuery)

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    setSubmitQuery(query)
    e.preventDefualt()
  }

  return (
    <>
      {/*  */}
      <Container>
        <Topbar />

        <SearchContainer>
          <StyledCard>
            <Search>
              {/* <SearchIcon /> */}
              <TextField
                label="Search for News"
                type="search"
                variant="outlined"
                size="small"
                placeholder="Search News"
                value={query}
                onChange={handleSearchChange}
                fullWidth
              />
            </Search>
            <UseIconButton onClick={handleSearch}>
              <ResumeText>Search</ResumeText>
            </UseIconButton>
          </StyledCard>
        </SearchContainer>
        {!isLoading ? (
          <GridContainer>
            <StyledGrid direction="row" alignItems="center" container>
              {data?.articles?.map((item) => (
                <NewsThumbNail
                  key={item.title}
                  author={item.author}
                  title={item.title}
                  imgUrl={item.urlToImage}
                  url={item.url}
                  desc={item.description}
                />
              ))}
            </StyledGrid>
          </GridContainer>
        ) : (
          <>
            <Circle size={15} color="blue" />
            <MessageContainer>
              <WelcomeMessage>{error ? <>{error}</> : <></>}</WelcomeMessage>
            </MessageContainer>
          </>
        )}
      </Container>
    </>
  )
}

const StyledGrid = styled(Grid)`
  margin: 20px 0 0;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

const StyledCard = styled(Card)`
  display: flex;
  display: flex;
  align-newss: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

const GridContainer = styled.div`
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Container = styled.div`
  background-color: whitesmoke;
  min-height: calc(100vh - 40px);
  border-right: 1px solid lightgray;
`

const Search = styled.div`
  min-width: 35vw;
  display: flex;
  align-newss: center;
  padding: 0.75rem;
  border-radius: 2px;
`

const SearchContainer = styled.div`
  display: flex;
  align-newss: center;
  justify-content: center;
  margin: 1rem 0;
`

const MessageContainer = styled.div`
  display: flex;
  align-newss: center;
  justify-content: center;
  min-height: 50vh;
`

const WelcomeMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #b2b1b9;
`
const ResumeText = styled.code`
  background-color: #4700d8;
  color: #fff;
  padding: 2px 10px;
  border-radius: 4px;
`

const UseIconButton = styled(IconButton)`
  cursor: pointer;
  border-radius: 4px !important;
`
