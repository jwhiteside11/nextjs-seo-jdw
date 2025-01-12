const EmailSVG = ({ color }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="44" height="44" rx="6" stroke={color} strokeWidth="4"/>
    <path d="M2 10L21.7505 28.266C22.1585 28.6433 22.4993 29.0931 22.9243 29.4512C23.8091 30.1969 24.9018 30.1827 25.7787 29.4086C26.1627 29.0695 26.4757 28.6554 26.8461 28.3015L46 10" stroke={color} strokeWidth="4"/>
    <path d="M2 40L18.0139 25.1898M46 40L30.5 25.1898" stroke={color} strokeWidth="4"/>
  </svg>
);

export default EmailSVG;