import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const romanceBooks =
[
    {
      "asin": "0008288798",
      "title": "A Reaper at the Gates (Ember Quartet, Book 3)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
      "price": 12.6,
      "category": "romance"
    },
    {
      "asin": "1597808709",
      "title": "A Second Chance: The Chronicles of St. Mary's Book Three",
      "img": "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
      "price": 9.86,
      "category": "romance"
    },
    {
      "asin": "1578562953",
      "title": "Edge of Eternity",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
      "price": 15.19,
      "category": "romance"
    },
    {
      "asin": "0199540241",
      "title": "The Female Quixote: or The Adventures of Arabella (Oxford World's Classics)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51x4zFJVgSL.jpg",
      "price": 6.22,
      "category": "romance"
    },
    {
      "asin": "0345511190",
      "title": "The Essential Reader's Companion (Star Wars) (Star Wars: Essential Guides)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/A1wNlTrYVqL.jpg",
      "price": 28.45,
      "category": "romance"
    },
    {
      "asin": "1629143715",
      "title": "The Man from Battle Flat: A Western Trio",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71GCjmvwIjL.jpg",
      "price": 11.91,
      "category": "romance"
    },
    {
      "asin": "0345508998",
      "title": "No Prisoners (Star Wars: The Clone Wars)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91ycXXrwCsL.jpg",
      "price": 12.69,
      "category": "romance"
    },
    {
      "asin": "0451414888",
      "title": "Dragon Fate: Book Six of The Age of Fire",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81qAK72OCYL.jpg",
      "price": 8.53,
      "category": "romance"
    },
    {
      "asin": "0008238979",
      "title": "An Orphan's War",
      "img": "https://images-na.ssl-images-amazon.com/images/I/519z4%2B1KEfL.jpg",
      "price": 11.23,
      "category": "romance"
    },
    {
      "asin": "0425262227",
      "title": "The Tower (Guardians of Destiny)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91qzAwU5wcL.jpg",
      "price": 9.52,
      "category": "romance"
    },
    {
      "asin": "0316505382",
      "title": "Blood Oath (Sawbones)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71cLSp4y22L.jpg",
      "price": 15.19,
      "category": "romance"
    },
    {
      "asin": "0804179794",
      "title": "The Collected Short Stories of Louis L'Amour, Volume 7: Frontier Stories",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81%2ByT7qClCL.jpg",
      "price": 6.64,
      "category": "romance"
    },
    {
      "asin": "0515115843",
      "title": "Lord of Falcon Ridge",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91mxWdyMsCL.jpg",
      "price": 8.53,
      "category": "romance"
    },
    {
      "asin": "0316077070",
      "title": "The Rebel Prince (The Moorehawke Trilogy)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71REEAYhw1L.jpg",
      "price": 14.28,
      "category": "romance"
    },
    {
      "asin": "045120865X",
      "title": "Blaze Wyndham",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71Ul8Eoz09L.jpg",
      "price": 22.32,
      "category": "romance"
    },
    {
      "asin": "1499860846",
      "title": "The Seventh Scroll (2) (The Egyptian Series)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81j3E4E4lyL.jpg",
      "price": 13.49,
      "category": "romance"
    },
    {
      "asin": "1524762474",
      "title": "The Mountain Between Us (Movie Tie-In): A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91oO1lRHkaL.jpg",
      "price": 10.3,
      "category": "romance"
    },
    {
      "asin": "0804192499",
      "title": "Utah Blaine",
      "img": "https://images-na.ssl-images-amazon.com/images/I/816d9nB7r5L.jpg",
      "price": 22.14,
      "category": "romance"
    },
    {
      "asin": "1524783358",
      "title": "North to the Rails: A Novel (Talon and Chantry)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71r0NaakVfL.jpg",
      "price": 25.71,
      "category": "romance"
    },
    {
      "asin": "0345511433",
      "title": "Crucible: Star Wars Legends",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81cOWVjJWFL.jpg",
      "price": 7.59,
      "category": "romance"
    },
    {
      "asin": "0739323741",
      "title": "The Collected Bowdrie Dramatizations: Volume III (Chuck Bowdrie's Adventures)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/912EUMHHMgL.jpg",
      "price": 27.27,
      "category": "romance"
    },
    {
      "asin": "0553804529",
      "title": "The Collected Short Stories of Louis L'Amour, Volume 3: The Frontier Stories",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71p8msuFWAL.jpg",
      "price": 17.38,
      "category": "romance"
    },
    {
      "asin": "0307737543",
      "title": "Last of the Breed",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81lFpMN9uXL.jpg",
      "price": 22.09,
      "category": "romance"
    },
    {
      "asin": "0735286124",
      "title": "Radigan: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81yNX5v5uAL.jpg",
      "price": 20.44,
      "category": "romance"
    },
    {
      "asin": "1489713921",
      "title": "River Divided",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71nt4jhGwUL.jpg",
      "price": 3.23,
      "category": "romance"
    },
    {
      "asin": "0804127093",
      "title": "The Quick and the Dead",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71EfTDy1sgL.jpg",
      "price": 27.62,
      "category": "romance"
    },
    {
      "asin": "0990846105",
      "title": "Apparition Island (4) (The Windjammer Mystery Series)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51yDJ5TgDbL.jpg",
      "price": 12.72,
      "category": "romance"
    },
    {
      "asin": "0875654282",
      "title": "Sins of the Younger Sons",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81sC1XaM7XL.jpg",
      "price": 24.89,
      "category": "romance"
    },
    {
      "asin": "0307737500",
      "title": "The Walking Drum",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81OzqN3T0FL.jpg",
      "price": 25.86,
      "category": "romance"
    },
    {
      "asin": "0525531491",
      "title": "The Mountain Between Us (Movie Tie-In): A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91DyWHD5eAL.jpg",
      "price": 19.36,
      "category": "romance"
    },
    {
      "asin": "0441017851",
      "title": "The Devil's Eye (An Alex Benedict Novel)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91-z5E-Y8QL.jpg",
      "price": 7.99,
      "category": "romance"
    },
    {
      "asin": "1644383357",
      "title": "Helen's Crusade",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71FRJ0J56UL.jpg",
      "price": 11.04,
      "category": "romance"
    },
    {
      "asin": "0544242157",
      "title": "Foxfire",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51c8-cGk9-L.jpg",
      "price": 13.97,
      "category": "romance"
    },
    {
      "asin": "1524783234",
      "title": "Taggart: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71uwInuX3FL.jpg",
      "price": 25.94,
      "category": "romance"
    },
    {
      "asin": "161170278X",
      "title": "The Crackerjack",
      "img": "https://images-na.ssl-images-amazon.com/images/I/616z3tDYdmL.jpg",
      "price": 5.57,
      "category": "romance"
    },
    {
      "asin": "0425262820",
      "title": "River of Dreams (A Novel of the Nine Kingdoms)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91JJv0wvgqL.jpg",
      "price": 12.57,
      "category": "romance"
    },
    {
      "asin": "0451462114",
      "title": "Marion Zimmer Bradley's Ravens of Avalon",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91kcKRLoskL.jpg",
      "price": 13.63,
      "category": "romance"
    },
    {
      "asin": "0316077062",
      "title": "The Poison Throne (The Moorehawke Trilogy)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71eOpcRHZrL.jpg",
      "price": 11.43,
      "category": "romance"
    },
    {
      "asin": "1934648302",
      "title": "Consuelo: A Romance of Venice",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51Rs2ZlRaPL.jpg",
      "price": 16.93,
      "category": "romance"
    },
    {
      "asin": "0980001714",
      "title": "Rigged For Murder (1) (The Windjammer Mystery Series)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41rVUmaVMGL.jpg",
      "price": 13.56,
      "category": "romance"
    },
    {
      "asin": "1621052370",
      "title": "Bacon Fried Bastard",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71SovvgQVhL.jpg",
      "price": 7.47,
      "category": "romance"
    },
    {
      "asin": "0451465296",
      "title": "Downfall (Cal Leandros)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81QzorZkC1L.jpg",
      "price": 7.59,
      "category": "romance"
    },
    {
      "asin": "0804126577",
      "title": "The Man Called Noon",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81tuLxeFfdL.jpg",
      "price": 16.98,
      "category": "romance"
    },
    {
      "asin": "0441017185",
      "title": "Countdown",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91sAp2bPd6L.jpg",
      "price": 17.32,
      "category": "romance"
    },
    {
      "asin": "1427213879",
      "title": "More Plums in One: Four to Score, High Five, and Hot Six (Stephanie Plum Novels)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51e2WHkPTGL.jpg",
      "price": 29.44,
      "category": "romance"
    },
    {
      "asin": "0802124380",
      "title": "Captain in Calico",
      "img": "https://images-na.ssl-images-amazon.com/images/I/518J1HukJhL.jpg",
      "price": 9.01,
      "category": "romance"
    },
    {
      "asin": "1510732403",
      "title": "The Maw: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81GqXjyvKQL.jpg",
      "price": 8.78,
      "category": "romance"
    },
    {
      "asin": "0786039477",
      "title": "The Hour of Death (Sixkiller, U.S. Marshal)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91MZ7-twSAL.jpg",
      "price": 7.46,
      "category": "romance"
    },
    {
      "asin": "0451474422",
      "title": "Midnight Captive (A Killer Instincts Novel)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/817GQvotg3L.jpg",
      "price": 7.59,
      "category": "romance"
    },
    {
      "asin": "0307338541",
      "title": "Hey, Cowgirl, Need a Ride?",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91Q23vCeSNL.jpg",
      "price": 11.52,
      "category": "romance"
    },
    {
      "asin": "014100200X",
      "title": "The Royal Family: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51%2BGxv8V0yL.jpg",
      "price": 20.46,
      "category": "romance"
    },
    {
      "asin": "0735286043",
      "title": "Last Stand at Papago Wells: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81tb0NCtAYL.jpg",
      "price": 26.04,
      "category": "romance"
    },
    {
      "asin": "0307914801",
      "title": "How the West Was Won",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71GBfa97tOL.jpg",
      "price": 25.99,
      "category": "romance"
    },
    {
      "asin": "1773021109",
      "title": "The Librarian",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51GYYSRTWHL.jpg",
      "price": 16.71,
      "category": "romance"
    },
    {
      "asin": "1978623372",
      "title": "Frame-Up, The (The Golden Arrow Mysteries)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61DddbrefWL.jpg",
      "price": 3.9,
      "category": "romance"
    },
    {
      "asin": "0515154938",
      "title": "Slocum 430: Slocum's Silver Burden",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81BTd8fZphL.jpg",
      "price": 5.67,
      "category": "romance"
    },
    {
      "asin": "1940177197",
      "title": "Around the World in 80 Days",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81tgMmYwMuL.jpg",
      "price": 3.61,
      "category": "romance"
    },
    {
      "asin": "1501142941",
      "title": "Hold Back the Stars: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71-3uRNabmL.jpg",
      "price": 13.21,
      "category": "romance"
    },
    {
      "asin": "1536682721",
      "title": "AFTERLIFE",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61qg6AstcML.jpg",
      "price": 3.08,
      "category": "romance"
    },
    {
      "asin": "1606600796",
      "title": "The War of the Worlds",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41C8uu0n62L.jpg",
      "price": 25.21,
      "category": "romance"
    },
    {
      "asin": "0451239490",
      "title": "Valley of the Gun (Ranger Sam Burrack)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71IH4FqgQuL.jpg",
      "price": 5.29,
      "category": "romance"
    },
    {
      "asin": "1573443646",
      "title": "The Low Road",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51FNT2IrZcL.jpg",
      "price": 12.93,
      "category": "romance"
    },
    {
      "asin": "0451463498",
      "title": "The Grimrose Path (Trickster, Book 2)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81n9CQS6FcL.jpg",
      "price": 7.13,
      "category": "romance"
    },
    {
      "asin": "1945181184",
      "title": "The Ballade of Mary Reede: Twilight of the Buccaneers",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71rOfBjcSUL.jpg",
      "price": 11.98,
      "category": "romance"
    },
    {
      "asin": "0307969401",
      "title": "The Rustlers of West Fork: A Novel (Hopalong Cassidy)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/713uI-unuxL.jpg",
      "price": 22.08,
      "category": "romance"
    },
    {
      "asin": "0345312015",
      "title": "Hooligans",
      "img": "https://images-na.ssl-images-amazon.com/images/I/714V%2BHRtTlL.jpg",
      "price": 7.82,
      "category": "romance"
    },
    {
      "asin": "0345401964",
      "title": "Exit to Eden",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91woJZrijhL.jpg",
      "price": 12.63,
      "category": "romance"
    },
    {
      "asin": "0140138986",
      "title": "Very Old Bones (Contemporary American Fiction)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81urNWREXLL.jpg",
      "price": 12.37,
      "category": "romance"
    },
    {
      "asin": "045146429X",
      "title": "The Doomsday Vault: A Novel of the Clockwork Empire",
      "img": "https://images-na.ssl-images-amazon.com/images/I/815zlGzAxgL.jpg",
      "price": 7.8,
      "category": "romance"
    },
    {
      "asin": "0307737624",
      "title": "The Broken Gun",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71wCTIHwCSL.jpg",
      "price": 14.98,
      "category": "romance"
    },
    {
      "asin": "0425266567",
      "title": "The Rider of Phantom Canyon (A Strongheart Western)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91Md5IiSWgL.jpg",
      "price": 6.93,
      "category": "romance"
    },
    {
      "asin": "0451464494",
      "title": "Devil's Punch: A Corine Solomon Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71VhTIf%2BlyL.jpg",
      "price": 7.6,
      "category": "romance"
    },
    {
      "asin": "0385341946",
      "title": "Tap & Gown (Ivy League)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91sdvpaHUEL.jpg",
      "price": 13.32,
      "category": "romance"
    },
    {
      "asin": "1589262654",
      "title": "Thr3e",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71ycUjc-NmL.jpg",
      "price": 10.07,
      "category": "romance"
    },
    {
      "asin": "1944125132",
      "title": "Alexandru's Kiss (Magic, New Mexico)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81w4DyBbVLL.jpg",
      "price": 5.3,
      "category": "romance"
    },
    {
      "asin": "1626392242",
      "title": "Advance: Exodus: Book One",
      "img": "https://images-na.ssl-images-amazon.com/images/I/812XgmsnMfL.jpg",
      "price": 13.01,
      "category": "romance"
    },
    {
      "asin": "1593091273",
      "title": "Two Thin Dimes: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51e9UmyhhmL.jpg",
      "price": 12.3,
      "category": "romance"
    },
    {
      "asin": "161986598X",
      "title": "The Wild Wild West 10th Anniversary Book Collection: Shadows from Boot Hill, King of the Gunman, The Magic Quirt and the No-Gun Man (Stories from the Golden Age)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91rtbJA88-L.jpg",
      "price": 13.25,
      "category": "romance"
    },
    {
      "asin": "0979647525",
      "title": "The Tourist Trail: A Novel (Across Oceans)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61G3kQRUjZL.jpg",
      "price": 10.92,
      "category": "romance"
    },
    {
      "asin": "1978637292",
      "title": "One Word Kill (Impossible Times)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71V%2BT%2BNO1GL.jpg",
      "price": 21.68,
      "category": "romance"
    },
    {
      "asin": "0997894512",
      "title": "The Boy Who Wanted Wings",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71qNt2Ob3%2BL.jpg",
      "price": 13.32,
      "category": "romance"
    },
    {
      "asin": "1594931526",
      "title": "Comfortable Distance",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51mm5DjD%2BcL.jpg",
      "price": 12.26,
      "category": "romance"
    },
    {
      "asin": "0486814718",
      "title": "Rob Roy (Dover Thrift Editions)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51chWEpdMCL.jpg",
      "price": 6.19,
      "category": "romance"
    },
    {
      "asin": "1543698549",
      "title": "The Ragged Edge of Night",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71ZScZGnsLL.jpg",
      "price": 26.13,
      "category": "romance"
    },
    {
      "asin": "0786033894",
      "title": "Charley Sunday's Texas Outfit",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91X7kZeswXL.jpg",
      "price": 6.6,
      "category": "romance"
    },
    {
      "asin": "1976578000",
      "title": "By the Sulu Sea: A Palawan Adventure Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51SX1e90jCL.jpg",
      "price": 8.27,
      "category": "romance"
    },
    {
      "asin": "1978644027",
      "title": "Girls on the Line: A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71a2gjdTyPL.jpg",
      "price": 14.79,
      "category": "romance"
    },
    {
      "asin": "1781892377",
      "title": "The Jade Lioness (Kumashiro)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/918k-8I2Q4L.jpg",
      "price": 3.42,
      "category": "romance"
    },
    {
      "asin": "0553762931",
      "title": "The Way Beneath: Kingdoms, Book 3",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71FLEEh%2B7VL.jpg",
      "price": 18.05,
      "category": "romance"
    },
    {
      "asin": "0786033932",
      "title": "The Comancheros",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91KNGCv7YoL.jpg",
      "price": 5.52,
      "category": "romance"
    },
    {
      "asin": "1480540439",
      "title": "Magic Triumphs (Kate Daniels)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71mjTAvMklL.jpg",
      "price": 19.75,
      "category": "romance"
    },
    {
      "asin": "0062136003",
      "title": "Wicked Lies: A Dark Mission Novella",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51Rsu02bD2L.jpg",
      "price": 3.9,
      "category": "romance"
    },
    {
      "asin": "1511342021",
      "title": "Crash and Burn (Sisterhood Series)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/7136bYereaL.jpg",
      "price": 21.13,
      "category": "romance"
    },
    {
      "asin": "0563524960",
      "title": "Just William: Volume 4",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71Mi6-TRRUL.jpg",
      "price": 18.97,
      "category": "romance"
    },
    {
      "asin": "1933110902",
      "title": "Wall of Silence",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51a%2BSB2WzJL.jpg",
      "price": 9.39,
      "category": "romance"
    },
    {
      "asin": "1922200867",
      "title": "Mud and Glass",
      "img": "https://images-na.ssl-images-amazon.com/images/I/8106zlwObJL.jpg",
      "price": 5.76,
      "category": "romance"
    },
    {
      "asin": "1504021762",
      "title": "A Sterkarm Tryst",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51jkZP-R7eL.jpg",
      "price": 15.93,
      "category": "romance"
    },
    {
      "asin": "0473458489",
      "title": "The Carlswick Mythology (The Carlswick Mysteries)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51E0jsUlH-L.jpg",
      "price": 5.95,
      "category": "romance"
    },
    {
      "asin": "0984304975",
      "title": "Jade: Outlaw",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41wpD1ENEzL.jpg",
      "price": 3.09,
      "category": "romance"
    },
    {
      "asin": "1640271716",
      "title": "Distraction",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61RxwDkZgdL.jpg",
      "price": 13.51,
      "category": "romance"
    },
    {
      "asin": "0809599813",
      "title": "Tarzan of the Apes by Edgar Rice Burroughs, Fiction, Classics, Action & Adventure",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71ANZC5paNL.jpg",
      "price": 5.25,
      "category": "romance"
    },
    {
      "asin": "1543120008",
      "title": "The Cursed Seven",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41HcKd0Rp3L.jpg",
      "price": 10.53,
      "category": "romance"
    },
    {
      "asin": "0995501300",
      "title": "Mission: Black (A Division Eight Thriller)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71qlpe1ySlL.jpg",
      "price": 6.1,
      "category": "romance"
    },
    {
      "asin": "0615698859",
      "title": "Thin Places",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51it4U9s3nL.jpg",
      "price": 2.52,
      "category": "romance"
    },
    {
      "asin": "0988285843",
      "title": "Land Sharks: A Swindle in Sumatra (A World Travel Mystery Adventure)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/514oOXqAIEL.jpg",
      "price": 6.63,
      "category": "romance"
    },
    {
      "asin": "1640278745",
      "title": "One Man's Journey",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71UENL%2BESUL.jpg",
      "price": 5.64,
      "category": "romance"
    },
    {
      "asin": "1980641129",
      "title": "Zombie Annihilation: A Post-Apocalyptic Zombie Survival (Last Man Standing)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/515gv62P3nL.jpg",
      "price": 10.64,
      "category": "romance"
    },
    {
      "asin": "0865348790",
      "title": "Little Kerber Creek, A Novel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71c7VBIrvKL.jpg",
      "price": 7.61,
      "category": "romance"
    },
    {
      "asin": "0994517246",
      "title": "Seizing Control (Black Shamrocks MC)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/618Jc1Q32WL.jpg",
      "price": 9.18,
      "category": "romance"
    },
    {
      "asin": "080214019X",
      "title": "The Adventures of Miles and Isabel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51MrMdMRxyL.jpg",
      "price": 5.26,
      "category": "romance"
    },
    {
      "asin": "042526534X",
      "title": "Black Ransom",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81DrCqh6DxL.jpg",
      "price": 6.22,
      "category": "romance"
    },
    {
      "asin": "0595508987",
      "title": "The Amber Lights of Home",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61-NHgQRbLL.jpg",
      "price": 5.01,
      "category": "romance"
    },
    {
      "asin": "0692974458",
      "title": "Four Samuel",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81T72IZwZmL.jpg",
      "price": 7.82,
      "category": "romance"
    },
    {
      "asin": "1095461494",
      "title": "RACHEL: The Whiskey Moon Ranch Trilogy Book One",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41BZfycYy0L.jpg",
      "price": 13.16,
      "category": "romance"
    },
    {
      "asin": "146854389X",
      "title": "Cheat River Three",
      "img": "https://images-na.ssl-images-amazon.com/images/I/515SkqZ-nqL.jpg",
      "price": 17.86,
      "category": "romance"
    },
    {
      "asin": "0999881728",
      "title": "The Council of Excalibur",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51u7iHb02jL.jpg",
      "price": 7.14,
      "category": "romance"
    },
    {
      "asin": "0999206710",
      "title": "Beneath the Mists (Of Astral and Umbral)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71iASuOvcVL.jpg",
      "price": 5.62,
      "category": "romance"
    },
    {
      "asin": "1520265603",
      "title": "Diamonds in the Rough: Gillian Panter Adventure 1 (The Gillian Panter Chronicles)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41dMgTwKHNL.jpg",
      "price": 2.7,
      "category": "romance"
    },
    {
      "asin": "198078146X",
      "title": "The Dark Lane",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51gqduG-DAL.jpg",
      "price": 7.79,
      "category": "romance"
    },
    {
      "asin": "1549896806",
      "title": "Ellas (Spanish Edition)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41OSyMQSrbL.jpg",
      "price": 7.34,
      "category": "romance"
    },
    {
      "asin": "1622872517",
      "title": "Off Plumb",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61UuvKp3qsL.jpg",
      "price": 5.36,
      "category": "romance"
    },
    {
      "asin": "145557578X",
      "title": "Fearless (The Survival Race)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71mHWidiW8L.jpg",
      "price": 12.86,
      "category": "romance"
    },
    {
      "asin": "996325506X",
      "title": "Matoula's Echo",
      "img": "https://images-na.ssl-images-amazon.com/images/I/613nQJf8auL.jpg",
      "price": 8.61,
      "category": "romance"
    },
    {
      "asin": "1980718466",
      "title": "BLOOD BROTHERS: A Novel By",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41jeRWinp9L.jpg",
      "price": 4.05,
      "category": "romance"
    },
    {
      "asin": "1943594112",
      "title": "The House of Baric Part One: Shields Down (House of Baric Trilogy)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81HsuBCA2VL.jpg",
      "price": 33.57,
      "category": "romance"
    },
    {
      "asin": "0995756112",
      "title": "Elephant Walk: The Brigandshaw Chronicles Book 2",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81LKd1nWrOL.jpg",
      "price": 5.45,
      "category": "romance"
    },
    {
      "asin": "1483022021",
      "title": "Over the Edge  (Troubleshooters series, Book 3)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91vVbxOztSL.jpg",
      "price": 26.04,
      "category": "romance"
    },
    {
      "asin": "1940310857",
      "title": "Pahutchae's Pouch",
      "img": "https://images-na.ssl-images-amazon.com/images/I/714Vz8-AWdL.jpg",
      "price": 9.85,
      "category": "romance"
    },
    {
      "asin": "0984903038",
      "title": "She Who Is Hidden",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71N0-iIbRdL.jpg",
      "price": 7.7,
      "category": "romance"
    },
    {
      "asin": "0692746617",
      "title": "Sonny's Secret",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61JxH0PiIgL.jpg",
      "price": 2.61,
      "category": "romance"
    },
    {
      "asin": "0595454860",
      "title": "Jabez Snow",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51XVHSdl7BL.jpg",
      "price": 2.17,
      "category": "romance"
    },
    {
      "asin": "1945756020",
      "title": "The Cure",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71WV9Pa4D5L.jpg",
      "price": 7.16,
      "category": "romance"
    },
    {
      "asin": "1621833046",
      "title": "Lisa Meets Her Match",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81heLvNmT6L.jpg",
      "price": 2.84,
      "category": "romance"
    },
    {
      "asin": "0997962429",
      "title": "Trapped",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61hUeLsCD4L.jpg",
      "price": 8.55,
      "category": "romance"
    },
    {
      "asin": "0999631292",
      "title": "For Love of Eden",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51ZT5baO0PL.jpg",
      "price": 0.96,
      "category": "romance"
    },
    {
      "asin": "1640962824",
      "title": "Eien No Ai",
      "img": "https://images-na.ssl-images-amazon.com/images/I/61rxoTbf7DL.jpg",
      "price": 7.91,
      "category": "romance"
    },
    {
      "asin": "0425272435",
      "title": "The Great West Detective Agency",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81U%2B9vvwM4L.jpg",
      "price": 1.88,
      "category": "romance"
    },
    {
      "asin": "1536625469",
      "title": "Atlas",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71k3fnKzHFL.jpg",
      "price": 4.58,
      "category": "romance"
    },
    {
      "asin": "1587761572",
      "title": "The Tuareg: Blue Man of the Sahara",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81idEVWRrCL.jpg",
      "price": 20.2,
      "category": "romance"
    },
    {
      "asin": "0956500722",
      "title": "The Warm Pink Jelly Express Train",
      "img": "https://images-na.ssl-images-amazon.com/images/I/712EoQ5D%2B8L.jpg",
      "price": 6.71,
      "category": "romance"
    },
    {
      "asin": "0595310974",
      "title": "The Senior Year",
      "img": "https://images-na.ssl-images-amazon.com/images/I/51cH%2BDpcG1L.jpg",
      "price": 9.36,
      "category": "romance"
    },
    {
      "asin": "1978650159",
      "title": "Ask No Mercy (Max Anger)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71mURHoL7lL.jpg",
      "price": 4.36,
      "category": "romance"
    },
    {
      "asin": "1718189540",
      "title": "Grace (Portuguese Edition)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41BymAHaHjL.jpg",
      "price": 2.36,
      "category": "romance"
    },
    {
      "asin": "0961451955",
      "title": "In Rembrandt's Shadow",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71p0n4HQaDL.jpg",
      "price": 5.45,
      "category": "romance"
    },
    {
      "asin": "099717952X",
      "title": "Pirate's Patch",
      "img": "https://images-na.ssl-images-amazon.com/images/I/711fEq6vqQL.jpg",
      "price": 5.56,
      "category": "romance"
    },
    {
      "asin": "1606646028",
      "title": "The Count of Monte Cristo, Volume II (of V) by Alexandre Dumas, Fiction, Classics, Action & Adventure, War & Military",
      "img": "https://images-na.ssl-images-amazon.com/images/I/91OONfSuc6L.jpg",
      "price": 5.61,
      "category": "romance"
    },
    {
      "asin": "1608090027",
      "title": "Stuff to Spy For (The Stuff Series)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81cmBZFVXIL.jpg",
      "price": 10.02,
      "category": "romance"
    },
    {
      "asin": "1592122604",
      "title": "Yukon Madness (Action Adventure Short Stories Collection)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/81YCMdEgE9L.jpg",
      "price": 7.15,
      "category": "romance"
    },
    {
      "asin": "1504716019",
      "title": "Gracie's Touch (Zion Warriors Series, Book 1)",
      "img": "https://images-na.ssl-images-amazon.com/images/I/71zbNC%2Bsz9L.jpg",
      "price": 21.33,
      "category": "romance"
    },
    {
      "asin": "1941859739",
      "title": "Hidden Pearls: The Skull",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41MOdUFEQpL.jpg",
      "price": 11.7,
      "category": "romance"
    }
  ]
  
   
function RomanceBooks() {
    const randomBooks = [];

    while (randomBooks.length < 4) {
        const randomIndex = Math.floor(Math.random() * romanceBooks.length);
        if (!randomBooks.includes(romanceBooks[randomIndex])) {
            randomBooks.push(romanceBooks[randomIndex]);
        }
    }
    return (
        <Container className="px-0">
            <h3 className='mt-5 mb-3'>Romance</h3>
            <Row className="row-gap-5">
                {randomBooks.map((book, index) => (
                    <Col xs={3}>
                        <Card style={{ width: '18rem' }}>
                            <Image
                                src={book.img}
                                fluid
                                style={{
                                    height: '300px',
                                    objectFit: 'cover',
                                }}
                            />
                            <Card.Body>
                                <h6 className="text-truncate">{book.title}</h6>
                                <span className="badge rounded-pill text-bg-primary"> € {book.price}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default RomanceBooks;