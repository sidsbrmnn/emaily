import NextDocument, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';

class Document extends NextDocument {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body className="font-sans antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
