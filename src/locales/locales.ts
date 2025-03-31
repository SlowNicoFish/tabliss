import { pick } from "in-browser-language";
import ar from "./lang/ar.json";
import caES from "./lang/ca-ES.json";
import cs from "./lang/cs.json";
import de from "./lang/de.json";
import el from "./lang/el.json";
import enAU from "./lang/en-AU.json";
import enCA from "./lang/en-CA.json";
import enGB from "./lang/en-GB.json";
import es from "./lang/es.json";
import fa from "./lang/fa.json";
import fi from "./lang/fi.json";
import fr from "./lang/fr.json";
import ga from "./lang/ga.json";
import gd from "./lang/gd.json";
import gl from "./lang/gl.json";
import gu from "./lang/gu.json";
import hi from "./lang/hi.json";
import hu from "./lang/hu.json";
import id from "./lang/id.json";
import it from "./lang/it.json";
import ja from "./lang/ja.json";
import ko from "./lang/ko.json";
import kp from "./lang/kp.json";
import lt from "./lang/lt.json";
import lb from "./lang/lb.json";
import ne from "./lang/ne.json";
import nl from "./lang/nl.json";
import no from "./lang/no.json";
import ro from "./lang/ro.json";
import ru from "./lang/ru.json";
import sk from "./lang/sk.json";
import sr from "./lang/sr.json";
import sv from "./lang/sv.json";
import pl from "./lang/pl.json";
import pt from "./lang/pt.json";
import ptBR from "./lang/pt-BR.json";
import ta from "./lang/ta.json";
import th from "./lang/th.json";
import tr from "./lang/tr.json";
import vi from "./lang/vi.json";
import zhCN from "./lang/zh-CN.json";
import zhTW from "./lang/zh-TW.json";
import uk from "./lang/uk.json";

export const messages = {
  ar: { translation: ar },
  "ca-ES": { translation: caES },
  cs: { translation: cs },
  de: { translation: de },
  el: { translation: el },
  en: { translation: {} }, // Empty object for default English
  "en-AU": { translation: enAU },
  "en-CA": { translation: enCA },
  "en-GB": { translation: enGB },
  es: { translation: es },
  fa: { translation: fa },
  fi: { translation: fi },
  fr: { translation: fr },
  ga: { translation: ga },
  gd: { translation: gd },
  gl: { translation: gl },
  gu: { translation: gu },
  hi: { translation: hi },
  hu: { translation: hu },
  id: { translation: id },
  it: { translation: it },
  ja: { translation: ja },
  ko: { translation: ko },
  kp: { translation: kp },
  lt: { translation: lt },
  lb: { translation: lb },
  ne: { translation: ne },
  nl: { translation: nl },
  no: { translation: no },
  ro: { translation: ro },
  ru: { translation: ru },
  sk: { translation: sk },
  sr: { translation: sr },
  sv: { translation: sv },
  pl: { translation: pl },
  pt: { translation: pt },
  "pt-BR": { translation: ptBR },
  ta: { translation: ta },
  th: { translation: th },
  tr: { translation: tr },
  vi: { translation: vi },
  zh: { translation: {} }, // Empty object for generic Chinese
  "zh-CN": { translation: zhCN },
  "zh-TW": { translation: zhTW },
  uk: { translation: uk },
};

export const locales = Object.keys(messages);
export const defaultLocale = pick(locales, "en");
