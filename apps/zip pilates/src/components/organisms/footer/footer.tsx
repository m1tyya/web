import { css, cx } from '@twind/core';
import { useMediaQuery } from 'usehooks-ts';

import { container_padding } from '../hero';

type FooterProps = {};

const st = {
	_: `bg-primary/5 px-${container_padding[1]} pt-${container_padding[0]} pb-4`,
	f1: {
		_: ` leading-[2] `,
		address: {
			_: `flex flex-col md:(flex-row justify-around px-6)`,
			text: `hover:text-secondary-darker duration-[0.2s] font-text text-fluid-base text-gray-500 font-normal`,
			title: `tracking-[.11rem] text-fluid-md font-merri`,
		},
	},
	f2: {
		_: `mt-10 md:(flex gap-8 items-center)`,
		copyright: `text-fluid-sm font-text flow-root`,
		divider: `w-[.8px] h-[16px] block bg-black`,
		link: cx(
			css({
				'&:after': {
					backgroundColor: `black`,
					bottom: `0`,
					content: `''`,
					height: `1px`,
					left: `0`,
					opacity: `1`,
					position: `absolute`,
					transform: `translate3d(-100%, 0, 0)`,
					transition: `opacity 400ms, transform 400ms`,
					width: `100%`,
				},
				'&:hover::after, &:focus::after': {
					opacity: 1,
					transform: `translate3d(0, 0, 0)`,
				},
			}),
			`block text-fluid-sm mt-4 relative overflow-hidden w-min md:(mt-0)`,
		),
	},
};

export function Footer({}: FooterProps): JSX.Element {
	const is_phone = useMediaQuery(`(max-width: 768px)`);

	return (
		<div className={st._}>
			<footer className={st.f1._}>
				<address className={st.f1.address._}>
					<div>
						<h3 className={st.f1.address.title}>Skontaktuj się z nami</h3>
						<a href='tel:+48 732 901 415'>
							<p className={st.f1.address.text}>+48 732 901 415</p>
						</a>
						<a href='mailto:zip.pilates.studio@gmail.com'>
							<p className={st.f1.address.text}>zip.pilates.studio@gmail.com</p>
						</a>
					</div>
					<div>
						<h3 className={`${st.f1.address.title} mt-5 md:mt-0`}>Nasz adres</h3>
						<a href='https://goo.gl/maps/NF4XZsZfhJ39fdHJ7'>
							<p className={st.f1.address.text}>
								Zip Pilates Studio <br />
								Kazimierza Górskiego 1/1302 <br />
								81-304 Gdynia <br />
							</p>
						</a>
					</div>
				</address>
			</footer>
			<footer className={st.f2._}>
				<p className={st.f2.copyright}>© Zip Pilates Studio 2023. Wszelkie prawa zastrzeżone.</p>
				{!is_phone && <hr className={st.f2.divider} />}
				<a className={st.f2.link} href='/legal'>
					Regulamin
				</a>
			</footer>
		</div>
	);
}
