import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
var sentiment = require( 'wink-sentiment' );
console.log(sentiment( 'Excited to be part of the @imascientist team:-)!' ))


function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}


function Home() {
  const [count, setCount] = useState(0)
  
  // Text that gets updated on textbox change
  const [text, setText] = useState("Enter Text");

  // Stores a score of the sentiment of the text variable
  const sentimentOfTextBox = sentiment(text).score
  console.log(sentimentOfTextBox)

  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p>Current value: {count}</p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Component with state.</p>
        <ClickCount />
      </div>
      <hr className={styles.hr} />
      <div>
        <p>
          The button below will throw 2 errors. You'll see the error overlay to
          let you know about the errors but it won't break the page or reset
          your state.
        </p>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode(), 0)
            throwError()
          }}
        >
          Throw an Error
        </Button>
      </div>
      <div>
        <br></br>
        <form method="post">
        <input
          name="textbox"
          type="text"
          defaultValue="Enter text"
          onChange={e => setText(e.target.value)}
        />
        </form>
      </div>

      <hr className={styles.hr} />
    </main>
  )
}

export default Home
