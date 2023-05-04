import Document, { DocumentContext } from "next/document"
import custom from "!!raw-loader!../styles/feed.css"
import { ServerStyleSheets } from "@material-ui/core/styles"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: custom,
            }}
          />
          {sheets.getStyleElement()}
        </>
      ),
    }
  }
}
