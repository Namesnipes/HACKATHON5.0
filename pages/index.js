import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
var sentiment = require( 'wink-sentiment' );
console.log(sentiment( 'Excited to be part of the @imascientist team:-)!' ))
// import SentimentAnalysis from '../components/classifier.js'

// Load wink-nlp package.
const winkNLP = require( 'wink-nlp' );
// Load english language model — light version.
const model = require( 'wink-eng-lite-web-model' );
// Instantiate winkNLP.
const nlp = winkNLP( model );
// Obtain "its" helper to extract item properties.
const its = nlp.its;
// Obtain "as" reducer helper to reduce a collection.
const as = nlp.as;

const text = 'Hello   World🌎! How are you?';
const doc = nlp.readDoc( text );

console.log( doc.out() );
// -> Hello   World🌎! How are you?

console.log( doc.tokens().out( its.type, as.freqTable ) );
// -> [ [ 'word', 5 ], [ 'punctuation', 2 ], [ 'emoji', 1 ] ]


function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}


function Home() {
  const [count, setCount] = useState(0)
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
  {/* <SentimentAnalysis /> */}
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
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
