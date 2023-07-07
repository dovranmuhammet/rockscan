import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Menu, MenuItem } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import rockDataJson from './rocks.json'
import axios from 'axios'

const RockList = () => {
  const [rockData, setRockData] = useState(rockDataJson)
  const [searchTerm, setSearchTerm] = useState('')
  const [shareMenuAnchor, setShareMenuAnchor] = useState(null)
  const [shareMenuRock, setShareMenuRock] = useState(null)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleShareMenuOpen = (event, rock) => {
    setShareMenuAnchor(event.currentTarget)
    setShareMenuRock(rock)
  }

  const handleShareMenuClose = () => {
    setShareMenuAnchor(null)
    setShareMenuRock(null)
  }

  const filteredRocks = rockData.filter((rock) =>
    rock.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getRockWikipediaData = async (name) => {
    const data = await axios.get(
      `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro=&explaintext=&format=json&titles=${name}`
    )
    const pageId = Object.keys(data.data.query.pages)[0]
    const wikiUrl = `https://en.wikipedia.org/?curid=${pageId}`

    if (window.innerWidth <= 768) {
      window.location.href = wikiUrl
    } else {
      window.open(wikiUrl, '_blank')
    }
  }

  const shareWithEmail = (rock) => {
    const subject = 'Rock Data'
    const body = `Check out this rock: ${rock.name}\n\n${rock.description}`
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    const emailUrl = `mailto:?subject=${encodedSubject}&body=${encodedBody}`
    window.open(emailUrl)
  }

  const shareWithWhatsApp = (rock) => {
    const message = `Check out this rock: ${rock.name}\n\n${rock.description}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const shareWithInstagram = (rock) => {
    const message = `Check out this rock: ${rock.name}\n\n${rock.description}`
    const encodedMessage = encodeURIComponent(message)
    const instagramUrl = `https://www.instagram.com/?text=${encodedMessage}`
    window.open(instagramUrl, '_blank')
  }

  const shareWithTwitter = (rock) => {
    const message = `Check out this rock: ${rock.name}\n\n${rock.description}`
    const encodedMessage = encodeURIComponent(message)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`
    window.open(twitterUrl, '_blank')
  }

  const shareWithFacebook = (rock) => {
    const message = `Check out this rock: ${rock.name}\n\n${rock.description}`
    const encodedMessage = encodeURIComponent(message)
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedMessage}`
    window.open(facebookUrl, '_blank')
  }

  return (
    <div>
      <div
        className='input'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <input
          type='search'
          placeholder='Search rocks'
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '12px 18px',
            borderRadius: '20px',
            border: '1.5px solid #ddd',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            outline: 'none',
            fontSize: '16px',
            width: '800px',
            margin: '10px',
          }}
        />
        <button
          className='up-button'
          onClick={handleScrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#345a8b',
            color: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            border: 'none',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition:
              'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1',
          }}
        >
          <ArrowUpwardIcon style={{ fontSize: '24px' }} />
        </button>
      </div>
      <div className='card-container'>
        {filteredRocks.map((rock) => (
          <Card key={rock.id} className='card'>
            <CardContent>
              <div className='image-container'>
                <img src={rock.wikiImage} alt='Earth' className='card-image' />
              </div>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='card-title'
                style={{
                  color: 'rgb(34, 68, 123)',
                  fontWeight: '550',
                  marginTop: '15px',
                }}
              >
                {rock.name}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                className='card-description'
              >
                {rock.description}
              </Typography>
            </CardContent>
            <CardActions className='card-actions'>
              <IconButton
                style={{
                  backgroundColor: '#345a8b',
                  color: '#fff',
                  borderRadius: '50%',
                  padding: '8px',
                  marginLeft: '8px',
                }}
                aria-label='share'
                onClick={(event) => handleShareMenuOpen(event, rock)}
              >
                <ShareIcon />
              </IconButton>
              <Menu
                anchorEl={shareMenuAnchor}
                open={Boolean(shareMenuAnchor)}
                onClose={handleShareMenuClose}
              >
                <MenuItem onClick={() => shareWithEmail(shareMenuRock)}>
                  Share via Email
                </MenuItem>

                <MenuItem onClick={() => shareWithWhatsApp(shareMenuRock)}>
                  Share on WhatsApp
                </MenuItem>
                <MenuItem onClick={() => shareWithInstagram(shareMenuRock)}>
                  Share on Instagram
                </MenuItem>
                <MenuItem onClick={() => shareWithTwitter(shareMenuRock)}>
                  Share on Twitter
                </MenuItem>
                <MenuItem onClick={() => shareWithFacebook(shareMenuRock)}>
                  Share on Facebook
                </MenuItem>
              </Menu>
              <Button
                style={{
                  backgroundColor: '#345a8b ',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontWeight: 'bold',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  transition:
                    'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
                size='small'
                color='primary'
                onClick={() => getRockWikipediaData(rock.name)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default RockList
