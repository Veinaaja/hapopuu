import {FaBrain, FaGg } from "react-icons/fa";
import { MdFiberManualRecord } from "react-icons/md";
import { BsHammer } from "react-icons/bs";

export const FeatureList = [
  {
    id: 1,
    icon: <FaBrain color="#0a1930" size={22} />,
    heading: "Sinulle suunniteltu",
    text: "Hapopuun huonekalut suunnitellaan asiakkaiden toiveiden mukaisesti, huomioimalla värit, muodot ja materiaalit. Tiivis yhteistyö varmistaa, että lopputulos on ainutlaatuinen ja täydellisesti räätälöity asiakkaan visioon.",
  },
  {
    id: 2,
    icon: <BsHammer color="#0a1930" size={22} />,
    heading: "Laadukas käsityö",
    text: "Korostetaan huippulaatuista käsityötä ja ammattitaitoa, mikä erottaa Hapopuun tuotteet massatuotannosta.",
  },
  {
    id: 3,
    icon: <FaGg color="#0a1930" size={22} />,
    heading: "Laadukkaat Materiaalit",
    text: "Yritys käyttää vain korkealaatuisia materiaaleja, jotka kestävät aikaa ja kulutusta. Tämä varmistaa, että huonekalut säilyttävät ulkonäkönsä ja toimivuutensa vuosien varrella.",
  },
  {
    id: 4,
    icon: <MdFiberManualRecord color="#0a1930" size={22} />,
    heading: "Huolto-ohjeet ja Neuvonta",
    text: "Asiakkaille tarjotaan selkeät huolto-ohjeet, jotka auttavat heitä ylläpitämään huonekalujen kuntoa pitkällä aikavälillä. Lisäksi yritys voi tarjota neuvontaa huonekalujen asianmukaisesta hoidosta.",
  }
];
