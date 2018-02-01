// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import hab from '../../theme/assets/blueHabibi.jpg';
import amy from '../../theme/assets/amy.jpg';
import eg1 from '../../theme/assets/eg1.jpeg';
import egypt from '../../theme/assets/egypt.jpeg';
import kherson from '../../theme/assets/kherson.jpeg';
import km from '../../theme/assets/km.jpeg';
import amy2 from '../../theme/assets/amy2.jpeg';
import syr from '../../theme/assets/syr.jpeg';
import lol from '../../theme/assets/lol.jpeg';

// Components
import Shisha from '../Shisha';

const adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
const nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
const shishasImg = [hab, amy, eg1, kherson, km, amy2, syr, lol, egypt];

export default class Barchik extends Component {
    constructor () {
        super();

        this.state = {
            listOfShishas: []
        };
    }

    idGenerattor = () => Math.random().toString(32).slice(2);

    getRandomEl = (array) => {
        const index = Math.floor(Math.random() * array.length);

        return array[index];
    };

    shishaGenerator = () => {
        const result = [];

        for (let i = 0; i < 30; i++) {
            const key = this.idGenerattor();
            const getAdj = this.getRandomEl(adjectives);
            const getNoun = this.getRandomEl(nouns);
            const getImg = this.getRandomEl(shishasImg);

            const shishka = <Shisha img = { getImg } key = { key } name = { `${getAdj} ${getNoun}` } />;

            result.push(shishka);
        }
        this.setState((prevState) => ({ listOfShishas: [...result, ...prevState.listOfShishas]}));
    };

    generateShisha = () => {
        this.shishaGenerator();
    };

    render () {
        const { listOfShishas } = this.state;

        return (
            <div className = { Styles.content }>
                <div className = { Styles.contentChoseBar }>
                    <a className = { Styles.contentLink } onClick = { this.generateShisha }>To show the Goods</a>
                </div>
                <div className = { Styles.contentList }>
                    {listOfShishas}
                </div>
            </div>
        );
    }
}
