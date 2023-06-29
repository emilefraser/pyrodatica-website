import React from 'react'
import { Link } from 'gatsby'
import { Flex, Button, Heading, Text } from 'theme-ui'
import { FaRegHandshake } from 'react-icons/fa'

const styles = {
  wrapper: {
    alignItems: `center`,
    flexDirection: `column`,
    bg: `omegaLighter`,
    borderRadius: `lg`,
    size: `full`,
    p: 4,
  },
  heading: {
    color: `omegaDark`,
    wordSpacing: 500, //force line breaks
    svg: {
      color: `beta`,
      size: `icon.lg`,
      display: `block`,
      mb: 3,
    },
  },
  subheading: {
    color: `omegaDark`,
    fontWeight: `normal`,
  },
  list: {
    color: `omegaDark`,
    listStyle: `none`,
    m: 0,
    p: 0,
    li: {
      p: 0,
      my: 2,
    },
    'li:before': {
      content: `""`,
      display: `inline-block`,
      width: `icon.xs`,
      bg: `success`,
      borderRadius: `full`,
      size: `7px`,
      mr: `7px`,
    },
  },
  button: {
    display: `block`,
    mt: `auto`,
  },
}

const BannerVertical = () => (
  <Flex sx={styles.wrapper}>
    <Heading variant='h2' sx={styles.heading}>
      <FaRegHandshake />
      BA Molecules for Success
    </Heading>
    <Heading variant='h4' sx={styles.subheading}>
    Dive into the BA Molecules video series and unlock your potential today!
    </Heading>
    <Text as='ul' variant='small' sx={styles.list}>
      <li>Learn the Essentials: Master the fundamentals of business analysis through our engaging video series.</li>
      <li>Explore Tools & Techniques: Discover the most effective tools and techniques used by successful business analysts.</li>
      <li>Boost Your Career: Enhance your skills and knowledge and unlock new opportunities in the world of business analysis.</li>
    </Text>
    <Button
      variant='primary'
      as={Link}
      to='/category/videos/'
      sx={styles.button}
      aria-label='View Now'
    >
      Learn More
    </Button>
  </Flex>
)

export default BannerVertical
