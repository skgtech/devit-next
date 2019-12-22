import React from 'react'
import { css } from '@emotion/core'

import svg from '../public/new/placeholder-profile-photo.svg'

const SpeakerToBeAnounced = ({isCFPOpen = false}) => {
  return isCFPOpen ? (
          <div
            className="speaker-tba-no-hover speaker-tba"
            css={css`
              position: relative;
              color: #57585a;
              text-align: center;
              padding: 30px;
              background: white;
            `}
          >
            <div
              css={`
                display: block;
              `}
            >
              <img
                css={css`
                  width: 100%;
                  height: 100%;
                  max-width: 240px;
                  max-height: 240px;
                  border-radius: 50%;
                `}
                src={svg}
                alt="DEVit Speaker"
              />
            </div>
            <div className="speaker-tba__center">
              <div className="speaker-tba__title">
                More Speakers <br />
                to be announced
              </div>
            </div>
          </div>
        ) : null
}

export default SpeakerToBeAnounced
