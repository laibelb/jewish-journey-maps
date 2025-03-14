
import { TimelinePeriod } from '../components/Timeline';
import { Event } from '../components/HistoricalEvent';

// Historical Periods
export const historicalPeriods: TimelinePeriod[] = [
  {
    id: 'ancient',
    title: 'Ancient Israel',
    year: '1000 BCE - 586 BCE',
    description: 'The period of the united monarchy under Kings David and Solomon, followed by the divided kingdoms of Israel and Judah, until the Babylonian conquest.'
  },
  {
    id: 'babylonian',
    title: 'Babylonian Exile',
    year: '586 BCE - 538 BCE',
    description: 'The period following the destruction of the First Temple when many Jews were exiled to Babylon, marking the first major diaspora event.'
  },
  {
    id: 'second-temple',
    title: 'Second Temple Period',
    year: '538 BCE - 70 CE',
    description: 'The period from the return from Babylonian exile and rebuilding of the Temple through Persian, Hellenistic, and early Roman rule.'
  },
  {
    id: 'roman-diaspora',
    title: 'Roman Diaspora',
    year: '70 CE - 500 CE',
    description: 'Following the destruction of the Second Temple, Jewish communities spread throughout the Roman Empire and beyond.'
  },
  {
    id: 'golden-age',
    title: 'Golden Age in Spain',
    year: '900 CE - 1200 CE',
    description: 'A period of cultural and intellectual flourishing for Sephardic Jews under Muslim rule in the Iberian Peninsula.'
  },
  {
    id: 'medieval',
    title: 'Medieval Europe',
    year: '1000 CE - 1400 CE',
    description: 'The development of Ashkenazi culture amid persecution and expulsions across various European kingdoms.'
  },
  {
    id: 'spanish-expulsion',
    title: 'Spanish Expulsion',
    year: '1492 CE',
    description: 'The expulsion of Jews from Spain, leading to significant migrations to Ottoman lands, North Africa, and elsewhere.'
  },
  {
    id: 'eastern-europe',
    title: 'Eastern European Growth',
    year: '1500 CE - 1800 CE',
    description: 'The growth of Jewish communities in Poland, Lithuania, and surrounding regions, becoming the largest center of Jewish population.'
  },
  {
    id: 'emancipation',
    title: 'Emancipation Era',
    year: '1800 CE - 1880 CE',
    description: 'The period of Jewish political emancipation in Western Europe, with increasing integration into wider society.'
  },
  {
    id: 'mass-migration',
    title: 'Mass Migration',
    year: '1880 CE - 1920 CE',
    description: 'Waves of Jewish migration from Eastern Europe to America, Western Europe, and Palestine, driven by pogroms and economic hardship.'
  },
  {
    id: 'holocaust',
    title: 'Holocaust',
    year: '1933 CE - 1945 CE',
    description: 'The systematic persecution and genocide of European Jews by Nazi Germany and its collaborators.'
  },
  {
    id: 'israel',
    title: 'State of Israel',
    year: '1948 CE - Present',
    description: 'The establishment of the modern State of Israel and subsequent migrations of Jews from around the world.'
  }
];

// Historical Events
export const historicalEvents: Event[] = [
  {
    id: 'jerusalem-capital',
    title: 'Jerusalem becomes capital',
    year: 'c. 1000 BCE',
    location: 'Jerusalem',
    coordinates: [56.2, 42.5],
    description: 'King David conquers Jerusalem and establishes it as the capital of the united Kingdom of Israel, bringing the Ark of the Covenant to the city.',
    periodId: 'ancient',
    image: 'https://images.unsplash.com/photo-1529079875474-0a66a1f176d0?q=80&w=2069'
  },
  {
    id: 'temple-destruction',
    title: 'First Temple Destruction',
    year: '586 BCE',
    location: 'Jerusalem',
    coordinates: [56.2, 42.5],
    description: 'Nebuchadnezzar II of Babylon conquers Jerusalem, destroys the First Temple, and exiles many Jews to Babylon, beginning the Babylonian Exile.',
    periodId: 'babylonian',
    image: 'https://images.unsplash.com/photo-1542742580-21d560c2e31e?q=80&w=1953'
  },
  {
    id: 'cyrus-decree',
    title: 'Cyrus Decree',
    year: '538 BCE',
    location: 'Babylon',
    coordinates: [62.7, 40.5],
    description: 'King Cyrus of Persia conquers Babylon and issues a decree allowing Jews to return to Jerusalem and rebuild the Temple.',
    periodId: 'second-temple',
    originCoordinates: [56.2, 42.5] // From Jerusalem
  },
  {
    id: 'second-temple-destruction',
    title: 'Second Temple Destruction',
    year: '70 CE',
    location: 'Jerusalem',
    coordinates: [56.2, 42.5],
    description: 'Roman forces led by Titus destroy the Second Temple following the Jewish revolt, causing widespread dispersion of the Jewish population.',
    periodId: 'roman-diaspora',
    image: 'https://images.unsplash.com/photo-1589811617551-8ce51b8a09b4?q=80&w=1780'
  },
  {
    id: 'alexandria-community',
    title: 'Alexandria Jewish Community',
    year: '100 CE',
    location: 'Alexandria',
    coordinates: [51.3, 48.2],
    description: 'Alexandria hosts one of the largest and most influential Jewish communities in the diaspora, known for Hellenistic Jewish scholarship.',
    periodId: 'roman-diaspora',
    originCoordinates: [56.2, 42.5] // From Jerusalem
  },
  {
    id: 'babylon-talmud',
    title: 'Babylonian Talmud Completion',
    year: 'c. 500 CE',
    location: 'Babylon',
    coordinates: [62.7, 40.5],
    description: 'The completion of the Babylonian Talmud, the most comprehensive and influential compilation of Jewish oral traditions and legal discussions.',
    periodId: 'roman-diaspora',
    originCoordinates: [56.2, 42.5] // From Jerusalem
  },
  {
    id: 'maimonides',
    title: 'Maimonides in Cordoba',
    year: '1135 CE',
    location: 'Cordoba',
    coordinates: [40.5, 46.8],
    description: 'Birth of Moses Maimonides (Rambam) in Cordoba, who would become one of the most influential Jewish philosophers and legal scholars.',
    periodId: 'golden-age',
    image: 'https://images.unsplash.com/photo-1594980796927-48d2f5851aae?q=80&w=1770',
    originCoordinates: [56.2, 42.5] // From Jerusalem originally
  },
  {
    id: 'spain-expulsion',
    title: 'Expulsion from Spain',
    year: '1492 CE',
    location: 'Spain',
    coordinates: [39, 46.8],
    description: 'The Catholic Monarchs Ferdinand and Isabella issue the Alhambra Decree, expelling all Jews from Spain who refused to convert to Christianity.',
    periodId: 'spanish-expulsion',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1770'
  },
  {
    id: 'ottoman-welcome',
    title: 'Ottoman Empire Welcome',
    year: '1492 CE',
    location: 'Istanbul',
    coordinates: [58.7, 44.3],
    description: 'Sultan Bayezid II welcomes Jewish refugees from Spain to the Ottoman Empire, where they establish thriving communities in Istanbul, Salonica, and elsewhere.',
    periodId: 'spanish-expulsion',
    originCoordinates: [39, 46.8] // From Spain
  },
  {
    id: 'shtetl-culture',
    title: 'Shtetl Culture',
    year: '1700 CE',
    location: 'Poland',
    coordinates: [49.5, 37.8],
    description: 'Development of distinctive Ashkenazi Jewish culture centered in small towns (shtetls) throughout Poland-Lithuania, characterized by Yiddish language and religious observance.',
    periodId: 'eastern-europe',
    image: 'https://images.unsplash.com/photo-1519863735318-91d437af8fc0?q=80&w=1770',
    originCoordinates: [47.7, 38.3] // From Germany region
  },
  {
    id: 'french-emancipation',
    title: 'French Emancipation',
    year: '1791 CE',
    location: 'Paris',
    coordinates: [44.2, 41.3],
    description: 'The French National Assembly grants full citizenship to Sephardic Jews, later extended to all Jews in France, marking a milestone in Jewish emancipation.',
    periodId: 'emancipation'
  },
  {
    id: 'ellis-island',
    title: 'Ellis Island Immigration',
    year: '1892 CE',
    location: 'New York',
    coordinates: [27.5, 41.5],
    description: 'Ellis Island opens as America\'s primary immigration station, processing millions of Jewish immigrants fleeing persecution and economic hardship in Eastern Europe.',
    periodId: 'mass-migration',
    image: 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=1775',
    originCoordinates: [49.5, 37.8] // From Poland region
  },
  {
    id: 'first-zionist-congress',
    title: 'First Zionist Congress',
    year: '1897 CE',
    location: 'Basel',
    coordinates: [45.5, 39.5],
    description: 'Theodor Herzl convenes the First Zionist Congress in Basel, Switzerland, formally launching political Zionism as a movement for Jewish self-determination.',
    periodId: 'mass-migration'
  },
  {
    id: 'kristallnacht',
    title: 'Kristallnacht',
    year: '1938 CE',
    location: 'Germany',
    coordinates: [47.7, 38.3],
    description: 'Coordinated attacks against Jews throughout Nazi Germany and Austria, marking an escalation of state-sponsored persecution.',
    periodId: 'holocaust'
  },
  {
    id: 'israeli-independence',
    title: 'Israeli Declaration of Independence',
    year: '1948 CE',
    location: 'Tel Aviv',
    coordinates: [56.6, 43.3],
    description: 'David Ben-Gurion declares the establishment of the State of Israel, fulfilling the Zionist goal of Jewish national self-determination in the ancestral homeland.',
    periodId: 'israel',
    image: 'https://images.unsplash.com/photo-1541924778220-83a8376642ae?q=80&w=1772',
    originCoordinates: [47.7, 38.3] // Many from Europe
  },
  {
    id: 'operation-moses',
    title: 'Operation Moses',
    year: '1984 CE',
    location: 'Ethiopia/Israel',
    coordinates: [53.8, 51.2],
    description: 'Covert evacuation of Ethiopian Jews (Beta Israel) to Israel during a famine in Sudan, rescuing thousands from persecution and starvation.',
    periodId: 'israel',
    originCoordinates: [50.5, 59.7] // From Ethiopia
  },
  {
    id: 'soviet-aliyah',
    title: 'Soviet Jewish Migration',
    year: '1990 CE',
    location: 'Soviet Union',
    coordinates: [65.0, 35.0],
    description: 'With the fall of the Soviet Union, hundreds of thousands of Soviet Jews immigrate to Israel, the United States, and other countries.',
    periodId: 'israel',
    image: 'https://images.unsplash.com/photo-1566138709953-e9eda3bd7620?q=80&w=1770',
    originCoordinates: [56.6, 43.3] // Destination in Israel
  }
];
