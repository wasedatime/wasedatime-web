import Document, { DocumentContext } from 'next/document'
import custom from '!!raw-loader!../styles/feed.css';

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style amp-custom="" dangerouslySetInnerHTML={{
            __html: custom
          }} />
        </>
      )
    }
  }
}