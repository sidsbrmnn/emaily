import ProgressBar from '@badrap/bar-of-progress';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { FunctionComponent } from 'react';
import 'tailwindcss/tailwind.css';

const progress = new ProgressBar({
    color: '#818CF8',
    className: 'bar-of-progress',
    delay: 100,
    size: 2
});

if (typeof window !== 'undefined') {
    progress.start();
    progress.finish();
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', () => {
    progress.finish();
    window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', progress.finish);

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
