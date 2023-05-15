/* eslint-disable unicorn/prefer-spread */
import clsx from 'clsx';
import { forwardRef, type ImgHTMLAttributes, type Ref } from 'react';

import {
	type ImageDecoding,
	type ImageFetchPriority,
	type ImageLoaing,
	type ImageType,
	type MediaFeature,
	type MediaType,
	type Position,
} from 'ui-react';

type MediaQuery = {
	query: MediaFeature;
	type?: MediaType;
	value: string;
};

type ImageSize = {
	media: MediaQuery;
	size: string;
};

type ImageSizes = {
	default_size: string;
	image_sizes: Array<Pick<ImageSize, 'size'>>;
	media_feature: Extract<MediaFeature, 'max-width' | 'min-width'>;
};

type SrcsetValues = {
	descriptor: string;
	src: string;
};

type Srcset = Array<SrcsetValues>;

type PictureSource = ImageSizes & {
	height: number;
	srcset: Srcset;
	width: number;
} & (
		| {
				media: MediaQuery;
				mime: ImageType;
		  }
		| {
				media: MediaQuery;
				mime?: ImageType;
		  }
		| {
				media?: MediaQuery;
				mime: ImageType;
		  }
	);

type ImageProps = {
	alt: string;
	decoding?: ImageDecoding;
	fetch_priority?: ImageFetchPriority;
	height: number;
	loading?: ImageLoaing;
	position?: Position;
	sources?: Array<PictureSource>;
	srcset: Srcset;
	styles?: string;
	width: number;
};

function resolve_sources(srcset: Srcset): string {
	let res = ``;
	srcset.map(({ descriptor, src }) => {
		res = res.concat(`${src} ${descriptor}, `);
	});

	return res;
}

export const Image = forwardRef(
	(
		{
			alt,
			decoding,
			fetch_priority,
			height,
			loading,
			position,
			sources,
			srcset,
			styles,
			width,
		}: ImageProps,
		ref: Ref<any>,
	): JSX.Element => {
		const picture_styles = clsx(
				styles,
				position,
				// [`h-${dimension === `height` ? `[${size_value}px]` : `auto`}`],
				// [`w-${dimension === `width` ? `[${size_value}px]` : `auto`}`],
			),
			image_props: ImgHTMLAttributes<any> = {
				alt,
				decoding,
				height,
				loading,
				srcSet: resolve_sources(srcset),
				width,
			};

		return (
			<picture className={picture_styles} ref={ref}>
				{sources?.map(
					({ default_size, height, image_sizes, media, media_feature, mime, srcset, width }) => {
						let source_props_sizes = ``;
						source_props_sizes = source_props_sizes.concat(
							media_feature === `min-width` ? `${default_size}, ` : ``,
						);
						image_sizes.map(
							({ size }) =>
								(source_props_sizes = source_props_sizes.concat(`(${media_feature}: ${size}), `)),
						);
						source_props_sizes = source_props_sizes.concat(
							media_feature === `max-width` ? default_size : ``,
						);
						const source_props_srcset = resolve_sources(srcset),
							source_props: React.DetailedHTMLProps<
								React.SourceHTMLAttributes<HTMLSourceElement>,
								HTMLSourceElement
							> = {
								height,
								media:
									media === undefined
										? ``
										: `${media.type === undefined ? `` : `${media.type}, `}(${media.query}: ${
												media.value
										  })`,
								sizes: source_props_sizes,
								srcSet: source_props_srcset,
								type: mime === undefined ? `` : `image/${mime}`,
								width,
							};

						return <source key={default_size} {...source_props} />;
					},
				)}
				<img {...image_props} />
			</picture>
		);
	},
);
