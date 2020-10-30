import { AppProps } from 'next/app';
import TransitionsModal from '@components/TransitionLoader';
import NavBar from '../components/NavBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <TransitionsModal />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
