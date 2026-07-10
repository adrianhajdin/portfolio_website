import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';

import Theme from '../styles/theme';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={spaceGrotesk.className}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
