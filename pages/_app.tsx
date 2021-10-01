import { AppProps } from 'next/app';
import TransitionsModal from '@components/TransitionLoader';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TransitionsModal />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
