import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Top } from '../src/components/Top';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <div>
         <Top />
         <Component {...pageProps} />
      </div>
   );
}
