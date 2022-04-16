import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


const name = 'Darth Vader';
export const siteTitle = 'Darth Vader Information';

export default function Layout({children, home}) {
    return <div className={
        styles.container
    }>
        <Head>
            <link rel='icon' href='/favicon.ico'/>
            <meta name='description' content='Learn how to build a personal website using next.Js'/>

        </Head>
        <header className={
            styles.header
        }>
            {
            home ? (
                <Image priority src='/images/anakin.jpg'
                    className={
                        utilStyles.borderCircle
                    }
                    height={144}
                    width={144}
                    alt={name}/>
            ) : (
                <>
                    <Link href='/'>
                        <a>
                            <Image priority src="/images/anakin.jpg"
                                className={
                                    utilStyles.borderCircle
                                }
                                height={108}
                                width={108}
                                alt={name}/>
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
                </>
            )
        } </header>
        <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    </div>
}
