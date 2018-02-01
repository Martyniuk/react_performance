// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import hab from '../../assets/blueHabibi.jpg';
import amy from '../../assets/amy.jpg';

// Components
import Shisha from '../Shisha';

const adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
const nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
const shishasImg = [hab, amy];

export default class Barchik extends Component {
    constructor() {
        super();

        this.state = {
            listOfShishas: []
        }
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

            const shishka = <Shisha key = {key} name ={`${getAdj} ${getNoun}`} img = {getImg} />;
            result.push(shishka);
        }
        this.setState((prevState) => ({ listOfShishas: [...result, ...prevState.listOfShishas]}))
    };

    generateShisha = () => {
        this.shishaGenerator();
    };

    render() {
        const { listOfShishas } = this.state;
        return (
            <div className={Styles.content}>
                <div className={Styles.contentChoseBar}>
                    Wanna smthing to buy?
                    <a className={Styles.contentLink} onClick={this.generateShisha}>To show the shit</a>
                </div>
                <div className={Styles.constentList}>
                    {listOfShishas}
                </div>
            </div>
        )
    }
}
