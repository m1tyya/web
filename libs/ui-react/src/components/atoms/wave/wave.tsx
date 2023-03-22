type WaveProps = {
	background_color: string;
};

export function Wave({ background_color }: WaveProps): JSX.Element {
	return (
		<svg viewBox='0 0 1440 490' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M0,500v-250c151,-33,303,-65,444,-58s273,55,437,71s362,2,559,-13v250z'
				fill={background_color}
			/>
		</svg>
	);
}
