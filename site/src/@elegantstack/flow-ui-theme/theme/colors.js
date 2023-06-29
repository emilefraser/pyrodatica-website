const white = '#fff'
const gray = {
  200: '#edf2f7',
  300: '#e2e8f0',
  400: '#cbd5e0',
  500: '#a0aec0',
  600: '#718096',
  700: '#4a5568',
  800: '#2d3748',
  900: '#1a202c'
}
const indigo = {
  100: '#ebf4ff',
  300: '#a3bffa',
  500: '#667eea',
  600: '#5a67d8',
  800: '#434190'
}
const purple = {
  100: '#faf5ff',
  300: '#d6bcfa',
  500: '#9f7aea',
  600: '#805ad5',
  800: '#553c9a'
}
const green = {
  100: '#f0fff4',
  500: '#48bb78'
}
const red = {
  100: '#fff5f5',
  500: '#f56565'
}

const yellow = {
  50: "#FEF9F1",
  100: "#FDF2DE",
  200: "#FAE1B3",
  300: "#F7D088",
  400: "#F3BD58",
  500: "#EFA51A",
  600: "#DB940F",
  700: "#BF810D",
  800: "#9D6A0B",
  900: "#724D08",
  950: "#563A06"
}

const blue = {
  50: "#F3F8FC",
  100: "#EBF3F9",
  200: "#D0E2F1",
  300: "#B8D3EA",
  400: "#9DC2E2",
  500: "#7BACD8",
  600: "#629DD0",
  700: "#4289C7",
  800: "#316FA5",
  900: "#24527A",
  950: "#1A3A57"
}




const darkblue = {
    50: "#F0F5FA",
    100: "#E4EDF6",
    200: "#C2D7EA",
    300: "#9CBEDD",
    400: "#679BCB",
    500: "#376D9F",
    600: "#30608C",
    700: "#2D5881",
    800: "#25496A",
    900: "#193148",
    950: "#0D1A26"
}


//Primary
const alpha = {
  alphaLighter: yellow[100],
  alphaLight: yellow[300],
  alpha: yellow[500],
  alphaDark: yellow[600],
  alphaDarker: yellow[800]
}

// Secondary
const beta = {
  betaLighter: blue[100],
  betaLight: blue[300],
  beta: blue[500],
  betaDark: blue[600],
  betaDarker: blue[800]
}

// Reserved
const gamma = {}

// Reserved
const psi = {}

// Neutral
const omega = {
  omegaLighter: gray[200],
  omegaLight: gray[300],
  omega: gray[500],
  omegaDark: gray[600],
  omegaDarker: gray[800]
}

export default {
  text: gray[600],
  article: gray[700],
  heading: gray[800],

  ...alpha,
  ...beta,
  ...gamma,
  ...psi,
  ...omega,

  successLight: green[100],
  success: green[500],
  errorLight: red[100],
  error: red[500],

  white: white,
  background: `#f8f8f8`,
  contentBg: white,
  headerBg: white,
  footerBg: white,

  mute: gray[300],
  highlight: gray[200],

  modes: {
    dark: {
      // Reverse alpha
      alphaLighter: alpha.alphaDarker,
      alphaLight: alpha.alphaDark,
      alphaDark: alpha.alphaLight,
      alphaDarker: alpha.alphaLighter,

      // Reverse beta
      betaLighter: beta.betaDarker,
      betaLight: beta.betaDark,
      betaDark: beta.betaLight,
      betaDarker: beta.betaLighter,

      // Reverse omega
      omegaLighter: omega.omegaDarker,
      omegaLight: omega.omegaDark,
      omegaDark: omega.omegaLight,
      omegaDarker: omega.omegaLighter,

      text: gray[400],
      article: gray[300],
      heading: gray[200],

      background: gray[900],
      contentBg: gray[800],
      headerBg: gray[800],
      footerBg: gray[800],

      mute: gray[600]
    }
  }
}

