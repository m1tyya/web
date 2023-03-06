import install from '@twind/with-next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	override render(): JSX.Element {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default install(MyDocument);
