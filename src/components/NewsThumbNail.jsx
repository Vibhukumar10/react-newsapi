import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  Card: {
    textAlign: 'center'
  },
  overlay: {
    width: '100%',
    textAlign: 'center',
    transition: '.5s ease',
    position: 'absolute',
    top: '27.5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
  },
  image: {
    opacity: '0.9',
    filter: 'blur(0.1px) saturate(1) contrast(1) brightness(0.75)',
    transition: '.5s ease',
    backfaceVisibility: 'hidden'
  }
})

const truncate = (str) => {
  return str?.length > 75 ? str?.substring(0, 72) + '...' : str
}

export default function NewsThumbNail({ url, imgUrl, title, author, desc }) {
  const classes = useStyles()

  return (
    <>
      <StyledGrid lg={3} md={4} sm={6} xs={12} style={{ padding: '1rem' }} item>
        <StyledCard>
          <CardActionArea href={url} target="_blank">
            <CardMedia
              component="img"
              alt="Thumb Nail"
              height="150"
              image={imgUrl}
              title="Thumb Nail"
              className={classes.image}
            />
            <Typography variant="h5" className={classes.overlay}>
              <span
                style={{
                  opacity: '0.8',
                  fontWeight: 'lighter'
                }}>
                {/* {title} */}
              </span>
            </Typography>
            <CardContent>
              <UseTypography gutterBottom variant="h6" component="h2">
                {truncate(title)}
              </UseTypography>
              <Typography variant="body3" color="textSecondary" component="p">
                {desc?.length > 200 ? desc?.substring(0, 197) + '...' : desc}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Author:{' '}
                {!author
                  ? 'Unknown'
                  : author?.length > 25
                  ? author?.substring(0, 23) + '...'
                  : author}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: 'space-between', alignItems: 'center ' }}>
            {/* <LastUpdated date={timestamp} /> */}
            <IconContainer>
              <Open href={url} target="_blank">
                <IconButton
                  color="primary"
                  onClick={() => {
                    //   router.push(`/inventory/${id}`)
                  }}
                  style={{ padding: '6px' }}>
                  <OpenInNewIcon />
                </IconButton>
              </Open>
            </IconContainer>
          </CardActions>
        </StyledCard>
      </StyledGrid>
    </>
  )
}
const StyledGrid = styled(Grid)`
  @media (max-width: 1280px) {
    text-align: center;
  }
`

const Open = styled.a`
  padding: 0;
  margin: 0;
`

const UseTypography = styled(Typography)`
  font-size: 0.2rem;
  min-height: 100px;
`

const IconContainer = styled.div``

const StyledCard = styled(Card)`
  max-width: 345px;
  @media (max-width: 1280px) {
    margin: 0 auto;
  }
`
