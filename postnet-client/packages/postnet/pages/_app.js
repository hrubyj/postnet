
import { CookiesProvider } from 'react-cookie'
import Head from "next/head";

function MyApp({ Component, pageProps }) {

    return (
        <CookiesProvider>
            <Head>
                <link rel="shortcut icon" href={"/images/favicon.ico"} />
                <title>PostNet</title>
            </Head>
            <Component {...pageProps} />
        </CookiesProvider>
    )
}

export default MyApp