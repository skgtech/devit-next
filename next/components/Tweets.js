import React from 'react'

const Tweets = () => {
  return (
    <div className="tweets">
      <div className="tweets__container">
        <ul id="autoWidth" className="cs-hidden">
          <li className="tweet-item">
            <blockquote className="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                RFC 968 is one of my favs. &quot;Twas the Night Before Start-up&quot; Enjoy!
                <a href="https://t.co/VQuUqTx9Sq">https://t.co/VQuUqTx9Sq</a>
              </p>
              &mdash; Ian Philpot 🤙🏻 Casual Delivery (@tripdubroot)
              <a href="https://twitter.com/tripdubroot/status/944962092343463936?ref_src=twsrc%5Etfw">
                December 24, 2017
              </a>
            </blockquote>
          </li>
          <li className="tweet-item">
            <blockquote className="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                Friends with a Switch, DM me your Nintendo friend code thing
              </p>
              &mdash; Nicolas (@necolas){' '}
              <a href="https://twitter.com/necolas/status/945329056853188609?ref_src=twsrc%5Etfw">
                December 25, 2017
              </a>
            </blockquote>
          </li>
          <li className="tweet-item">
            <blockquote className="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                RFC 968 is one of my favs. &quot;Twas the Night Before Start-up&quot; Enjoy!
                <a href="https://t.co/VQuUqTx9Sq">https://t.co/VQuUqTx9Sq</a>
              </p>
              &mdash; Ian Philpot 🤙🏻 Casual Delivery (@tripdubroot)
              <a href="https://twitter.com/tripdubroot/status/944962092343463936?ref_src=twsrc%5Etfw">
                December 24, 2017
              </a>
            </blockquote>
          </li>
          <li className="tweet-item">
            <blockquote className="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                Friends with a Switch, DM me your Nintendo friend code thing
              </p>
              &mdash; Nicolas (@necolas){' '}
              <a href="https://twitter.com/necolas/status/945329056853188609?ref_src=twsrc%5Etfw">
                December 25, 2017
              </a>
            </blockquote>
          </li>
        </ul>
        <button className="block__cta">Go to twitter</button>
      </div>
    </div>
  )
}

export default Tweets
