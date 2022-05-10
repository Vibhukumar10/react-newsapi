import { Card, Grid, TextField, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import Topbar from './Topbar'
import { Circle } from 'better-react-spinkit'
import TablePagination from '@material-ui/core/TablePagination'
import ScrollToTop from 'react-scroll-to-top'

import { useState, useEffect } from 'react'

import useNews from '../hooks/useNews'

import NewsThumbNail from './NewsThumbNail'

export default function Dashboard() {
  const [query, setQuery] = useState('')
  const [submitQuery, setSubmitQuery] = useState('')
  const [pageNum, setPageNum] = useState(0)
  const { data, error, isLoading, setIsLoading } = useNews(submitQuery, pageNum)

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    setIsLoading(true)
    setSubmitQuery(query)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageNum])

  return (
    <>
      {/*  */}
      <Container>
        <Topbar />
        <ScrollToTop smooth color="#6f00ff" />
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
        <GridContainer>
          {!isLoading ? (
            <StyledGrid direction="row" alignItems="flex-start" container>
              {data?.articles?.map((item) => (
                <NewsThumbNail
                  key={item.title}
                  author={item.author}
                  title={item.title}
                  imgUrl={item.media}
                  url={item.link}
                  desc={item.summary}
                />
              ))}
            </StyledGrid>
          ) : (
            <>
              <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <div>
                  <Circle color="black" size={60} />
                  <div>{error.message}</div>
                </div>
              </center>
            </>
          )}
        </GridContainer>
        <StyledCard>
          <TablePagination
            count={data.total_hits}
            rowsPerPage={25}
            page={pageNum}
            onChangePage={(e, page) => {
              console.log(e)
              setIsLoading(true)
              setPageNum(page)
            }}
          />
        </StyledCard>
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
  align-item: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

const GridContainer = styled.div`
  padding: 0rem 4rem 2rem;
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
