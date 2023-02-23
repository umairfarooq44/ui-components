import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { font } from '../Utils';

const Reset = createGlobalStyle`
  ${reset}

  :root {
    --focus-color: #f6ad28;
    --focus-style: 2px solid var(--focus-color);
  }

  html {
    ${font()}
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: Inter,"Open Sans",Arial,sans-serif;
  }

  a:focus, button:focus, input:focus, select:focus, textarea:focus {
    outline: var(--focus-style);
    outline-offset: 2px;
  }

  /* https://web.dev/prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Reset;
