import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import { jumpToSection } from './Helpers/Helper'
import Link from 'next/link';
// import MyEditor from '../components/textEditor'


var sentiment = require('wink-sentiment');
console.log(sentiment('Excited to be part of the @imascientist team:-)!'))


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
      <p>
          GO TO A SECTION!!
        </p>
        <Button
          onClick={(e) => {
            jumpToSection("section2")
          }}
        >
          Go to section 1
        </Button>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
  <Link href={"/SomePageThatNeedsATextEditor" } >try out this cool text editor dawg</Link>
      <h1>Fast Refresh not Demo</h1>
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
      <section id="section1">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Section 1</h2>
        <p>This is the content of Section 1.</p>
      </section>

      <section id="section2">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <section id="section3">
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
      </section>
    </main>

  )
}

export default Home
