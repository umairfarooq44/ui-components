import styled from 'styled-components';

const Fonts = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=auto');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

  @font-face {
    font-family: 'Acta Display';
    font-display: auto;
    src: url('/shared/fonts/ActaDisplay-Medium.eot') format('embedded-opentype');
    src: url('/shared/fonts/ActaDisplay-Medium.eot') format('embedded-opentype'),
      url('/shared/fonts/ActaDisplay-Medium.woff') format('woff'),
      url('/shared/fonts/ActaDisplay-Medium.woff2') format('woff2'),
      url('/shared/fonts/ActaDisplay-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Orleans';
    src: url('/shared/fonts/Orleans-Black-Web.woff2') format('woff2'),
      url('/shared/fonts/Orleans-Black-Web.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Orleans';
    src: url('/shared/fonts/Orleans-Bold-Web.woff2') format('woff2'),
      url('/shared/fonts/Orleans-Bold-Web.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Orleans';
    src: url('/shared/fonts/Orleans-Italic-Web.woff2') format('woff2'),
      url('/shared/fonts/Orleans-Italic-Web.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Orleans';
    src: url('/shared/fonts/Orleans-Roman-Web.woff2') format('woff2'),
      url('/shared/fonts/Orleans-Roman-Web.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
`;

export default Fonts;
