import install from '@twind/with-next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	public override render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link href='/favicon.svg' rel='icon' type='image/svg+xml' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default install(MyDocument);
