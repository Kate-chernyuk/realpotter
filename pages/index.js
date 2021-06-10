import Head from 'next/head'
import styles from '../styles/Home.module.css'
import content from '../data/posts.json'

export default function Home() {
  const allPosts = content.posts
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Добро пожаловать в Хогвартс!
        </h1>
        <img src="/1056776-trees-painting-illustration-digital-art-birds-fantasy-art-architecture-rock-nature-snow-winter-castle-tower-fan-art-owl-Hogwarts-screenshot.jpg" alt="Hog" width='1500' height='600'  />
        {
          allPosts.map(function(post) {
            return (
              <a href={"/posts/" + post.slug} className={styles.card}>
                <h2>{post.title}</h2>
              </a>
            )
          })
        }
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
