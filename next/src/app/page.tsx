import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          My portfolio showcasing my projects!&nbsp;
        </p>
        <div>
          <a
            href="https://instagram.com/unofficialdxnny"
            target="_blank"
            rel="noopener noreferrer"
          >

            
          {'By unofficialdxnny'}
           
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <Image
              src="https://raw.githubusercontent.com/unofficialdxnny/Website/main/website/Assets/Images/favicon.png"
              alt="Logo"
              className={styles.vercelLogo}
              width={411}
              height={294}
              priority
            />
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/unofficialdxnny"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Find all my projects here</p>
        </a>

      </div>
    </main>
  )
}
