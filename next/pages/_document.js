import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core'
import { GoogleFont } from "react-typography"
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.4,
  headerLineHeight: 1.075,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: '300',
  googleFonts: [
    {
      name: 'Lato',
      styles: ['300', '400', '700', '900'],
    },
  ],
})

class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleFont typography={typography} />
          <Global
            styles={css`
              ${typography.toString()}
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
