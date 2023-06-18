type AboutProps = {};

const st = {
	list: `list-inside list-[circle] ml-10 text-fluid-md`,
	text: `leading-relaxed text-fluid-md`,
};

export function About({}: AboutProps): JSX.Element {
	return (
		<div>
			<p className={st.text}>
				Nazywam się Tatiana Kantor i jestem zalożycielką Zip Pilates Studio (Gdynia, Trójmiasto,
				pomorskie, Polska). Studio Zip Pilates założyłam w 2020 roku, jednak moja miłość do pilatesu
				i ćwiczeń zaczęła się dużo wcześniej. Moja przygoda z pilatesem zaczęła się od kontuzji,
				bólu, leczenia, kiedy po urazie kręgosłupa próbowałam wszystkich dostępnych sposobów z
				zakresu fizjoterapii, aby ponownie zacząć swobodnie się poruszać. Szybko jednak efekty
				ćwiczeń – ogólne zwiększenie sprawności i świadomości ciała, a w rezultacie ogólna poprawa
				samopoczucia – sprawiły że zakochałam się w tej metodzie i postanowiłam uczynić pilates
				częścią swego życia. Od 2014 roku zajmuję się pilatesem zawodowo. Ukończyłam dwuletnie
				szkolenie Lolita’s Legacy według metody Lolity San Miguel (Floryda, USA), która jest
				bezpośrednią uczennicą Josepha Pilatesa (First Generation Pilates Master Teacher).
				Ukończyłam również szkolenie Michaela Kinga, założyciela brytyjskiej szkoły MK Pilates, a
				także brałam udział w warsztatach prowadzonych przez takie znany osobistości świata pilatesu
				jak Alan Herdman, Kathy Corey, Brett Howard, Jean Claude Nelson. Przez lata rozwijałam swoje
				umiejętności, co pozwoliło mi pracować z różnymi ludźmi – od osób z wadami postawy do
				sportowców, młodymi oraz osobami starszymi. Wszystkich ich łączy miłość do pilatesu,
				widoczne rezultaty od treningów i utrzymanie osiągniętych wyników. W pracy stawiam na
				profesjonalizm, pomoc klientom oraz indywidualne podejście do każdego z nich, zarówno na
				treningu personalnym, jak i na zajęciach grupowych w kameralnych, 3 osobowych grupach
				(TRIO). Jestem przekonana, że metoda pilates świetnie współgra z innymi formami aktywności
				oraz pomoże w rozwoju i nabyciu lepszych wyników. Moim celem jest wspieranie każdego, kto
				chce osiągnąć idealną równowagę między ciałem i umysłem za pomocą świadomej kontroli nad
				ruchami oraz czuć się lepiej i zdrowiej. Nic nie sprawia mi większej satysfakcji niż
				prowadzenie zajęć i wspieranie moich klientów w ich drodze do dobrego samopoczucia.
				Uwielbiam szkolić się i jestem całkowicie oddana mojej sprawie, tak aby w Zip Pilates Studio
				klienci doświadczali to, czego nie można uzyskać nigdzie indziej. Co znajdziesz u mnie w
				Studio:
			</p>
			<ul className={st.list}>
				<li>
					profesjonalny sprzęt firmy Balanced Body – Reformer, Cadillac, Tower, Combo Chair, Ladder
					Barrel, spine corrector. Prowadzę indywidualne, grupowe zajęcia oraz zajęcia w duecie.
				</li>
				<li>profesjonalne podejście do klienta – opiekę, wsparcie, empatię, życzliwość</li>
			</ul>
			<p className={st.text}>
				Jakie korzyści otrzymasz od zajęć – wszystko, co potrzebujesz dla szczęśliwego i zdrowego
				życia:
			</p>
			<ul className={st.list}>
				<li>dobre samopoczucie, zmiany w postawie</li>
				<li>zwiększysz elastyczność stawów oraz mięśni</li>
				<li>polepszysz koordynację, równowagę i wytrzymałość</li>
				<li>poprawisz kondycję, wzmocnisz mięśnie głębokie</li>
				<li>zwiększysz wskaźnik regeneracji po kontuzjach w razie potrzeby</li>
				<li>ulepszysz pamięć mięśniową</li>
				<li>niwelujesz stres</li>
				<li>zwiększysz świadomość własnego ciała.</li>
			</ul>
			<p className={st.text}>
				Jak mówił sam tworca metody: “Po 10 sesjach poczujesz różnicę, po 20 zobaczysz różnicę, a po
				30 będziesz mieć zupełnie nowe ciało ”.
			</p>
		</div>
	);
}
