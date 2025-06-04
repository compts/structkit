/* eslint-disable sort-keys */
const entity = [
    {
        "decimal": "&#160;",
        "entity": "&nbsp;",
        "html": " ",
        "hex": "&#xA0;"
    },
    {"decimal": "&#34;",
        "entity": "&quot;",
        "hex": "&#x22;",
        "html": '"',
        "title": "quotation mark = APL quote"},
    {"decimal": "&#38;",
        "entity": "&amp;",
        "hex": "&#x26;",
        "html": "&",
        "title": "ampersand"},
    {"decimal": "&#60;",
        "entity": "&lt;",
        "hex": "&#x3C;",
        "html": "<",
        "title": "less-than sign"},
    {"decimal": "&#62;",
        "entity": "&gt;",
        "hex": "&#x3E;",
        "html": ">",
        "title": "greater-than sign"},
    {"decimal": "&#710;",
        "entity": "&circ;",
        "hex": "&#x2C6;",
        "html": "^",
        "title": "modifier letter circumflex accent"},
    {"decimal": "&#123;",
        "entity": "&lbrace;",
        "hex": "&#x7B;",
        "html": "{",
        "title": "Left curly bracket"},
    {"decimal": "&#125;",
        "entity": "&rbrace;",
        "hex": "&#x7D;",
        "html": "}",
        "title": "Right curly bracket"},
    {
        "decimal": "&#161;",
        "entity": "&iexcl;",
        "html": "¡",
        "hex": "&#xA1;"
    },
    {
        "decimal": "&#162;",
        "entity": "&cent;",
        "html": "¢",
        "hex": "&#xA2;"
    },
    {
        "decimal": "&#163;",
        "entity": "&pound;",
        "html": "£",
        "hex": "&#xA3;"
    },
    {
        "decimal": "&#164;",
        "entity": "&curren;",
        "html": "¤",
        "hex": "&#xA4;"
    },
    {
        "decimal": "&#165;",
        "entity": "&yen;",
        "html": "¥",
        "hex": "&#xA5;"
    },
    {
        "decimal": "&#166;",
        "entity": "&brvbar;",
        "html": "¦",
        "hex": "&#xA6;"
    },
    {
        "decimal": "&#167;",
        "entity": "&sect;",
        "html": "§",
        "hex": "&#xA7;"
    },
    {
        "decimal": "&#168;",
        "entity": "&uml;",
        "html": "¨",
        "hex": "&#xA8;"
    },
    {
        "decimal": "&#169;",
        "entity": "&copy;",
        "html": "©",
        "hex": "&#xA9;"
    },
    {
        "decimal": "&#170;",
        "entity": "&ordf;",
        "html": "ª",
        "hex": "&#xAA;"
    },
    {
        "decimal": "&#171;",
        "entity": "&laquo;",
        "html": "«",
        "hex": "&#xAB;"
    },
    {
        "decimal": "&#172;",
        "entity": "&not;",
        "html": "¬",
        "hex": "&#xAC;"
    },
    {
        "decimal": "&#173;",
        "entity": "&shy;",
        "html": "­",
        "hex": "&#xAD;"
    },
    {
        "decimal": "&#174;",
        "entity": "&reg;",
        "html": "®",
        "hex": "&#xAE;"
    },
    {
        "decimal": "&#175;",
        "entity": "&macr;",
        "html": "¯",
        "hex": "&#xAF;"
    },
    {
        "decimal": "&#176;",
        "entity": "&deg;",
        "html": "°",
        "hex": "&#xB0;"
    },
    {
        "decimal": "&#177;",
        "entity": "&plusmn;",
        "html": "±",
        "hex": "&#xB1;"
    },
    {
        "decimal": "&#178;",
        "entity": "&sup2;",
        "html": "²",
        "hex": "&#xB2;"
    },
    {
        "decimal": "&#179;",
        "entity": "&sup3;",
        "html": "³",
        "hex": "&#xB3;"
    },
    {
        "decimal": "&#180;",
        "entity": "&acute;",
        "html": "´",
        "hex": "&#xB4;"
    },
    {
        "decimal": "&#181;",
        "entity": "&micro;",
        "html": "µ",
        "hex": "&#xB5;"
    },
    {
        "decimal": "&#182;",
        "entity": "&para;",
        "html": "¶",
        "hex": "&#xB6;"
    },
    {
        "decimal": "&#184;",
        "entity": "&cedil;",
        "html": "¸",
        "hex": "&#xB8;"
    },
    {
        "decimal": "&#185;",
        "entity": "&sup1;",
        "html": "¹",
        "hex": "&#xB9;"
    },
    {
        "decimal": "&#186;",
        "entity": "&ordm;",
        "html": "º",
        "hex": "&#xBA;"
    },
    {
        "decimal": "&#187;",
        "entity": "&raquo;",
        "html": "»",
        "hex": "&#xBB;"
    },
    {
        "decimal": "&#188;",
        "entity": "&frac14;",
        "html": "¼",
        "hex": "&#xBC;"
    },
    {
        "decimal": "&#189;",
        "entity": "&frac12;",
        "html": "½",
        "hex": "&#xBD;"
    },
    {
        "decimal": "&#190;",
        "entity": "&frac34;",
        "html": "¾",
        "hex": "&#xBE;"
    },
    {
        "decimal": "&#191;",
        "entity": "&iquest;",
        "html": "¿",
        "hex": "&#xBF;"
    },
    {
        "decimal": "&#215;",
        "entity": "&times;",
        "html": "×",
        "hex": "&#xD7;"
    },
    {
        "decimal": "&#247;",
        "entity": "&divide;",
        "html": "÷",
        "hex": "&#xF7;"
    },
    {
        "decimal": "&#8704;",
        "entity": "&forall;",
        "html": "∀",
        "hex": "&#x2200;"
    },
    {
        "decimal": "&#8706;",
        "entity": "&part;",
        "html": "∂",
        "hex": "&#x2202;"
    },
    {
        "decimal": "&#8707;",
        "entity": "&exist;",
        "html": "∃",
        "hex": "&#x2203;"
    },
    {
        "decimal": "&#8709;",
        "entity": "&empty;",
        "html": "∅",
        "hex": "&#x2205;"
    },
    {
        "decimal": "&#8711;",
        "entity": "&nabla;",
        "html": "∇",
        "hex": "&#x2207;"
    },
    {
        "decimal": "&#8712;",
        "entity": "&isin;",
        "html": "∈",
        "hex": "&#x2208;"
    },
    {
        "decimal": "&#8713;",
        "entity": "&notin;",
        "html": "∉",
        "hex": "&#x2209;"
    },
    {
        "decimal": "&#8715;",
        "entity": "&ni;",
        "html": "∋",
        "hex": "&#x220B;"
    },
    {
        "decimal": "&#8719;",
        "entity": "&prod;",
        "html": "∏",
        "hex": "&#x220F;"
    },
    {
        "decimal": "&#8721;",
        "entity": "&sum;",
        "html": "∑",
        "hex": "&#x2211;"
    },
    {
        "decimal": "&#8722;",
        "entity": "&minus;",
        "html": "−",
        "hex": "&#x2212;"
    },
    {
        "decimal": "&#8727;",
        "entity": "&lowast;",
        "html": "∗",
        "hex": "&#x2217;"
    },
    {
        "decimal": "&#8730;",
        "entity": "&radic;",
        "html": "√",
        "hex": "&#x221A;"
    },
    {
        "decimal": "&#8733;",
        "entity": "&prop;",
        "html": "∝",
        "hex": "&#x221D;"
    },
    {
        "decimal": "&#8734;",
        "entity": "&infin;",
        "html": "∞",
        "hex": "&#x221E;"
    },
    {
        "decimal": "&#8736;",
        "entity": "&ang;",
        "html": "∠",
        "hex": "&#x2220;"
    },
    {
        "decimal": "&#8743;",
        "entity": "&and;",
        "html": "∧",
        "hex": "&#x2227;"
    },
    {
        "decimal": "&#8744;",
        "entity": "&or;",
        "html": "∨",
        "hex": "&#x2228;"
    },
    {
        "decimal": "&#8745;",
        "entity": "&cap;",
        "html": "∩",
        "hex": "&#x2229;"
    },
    {
        "decimal": "&#8746;",
        "entity": "&cup;",
        "html": "∪",
        "hex": "&#x222A;"
    },
    {
        "decimal": "&#8747;",
        "entity": "&int;",
        "html": "∫",
        "hex": "&#x222B;"
    },
    {
        "decimal": "&#8756;",
        "entity": "&there4;",
        "html": "∴",
        "hex": "&#x2234;"
    },
    {
        "decimal": "&#8764;",
        "entity": "&sim;",
        "html": "∼",
        "hex": "&#x223C;"
    },
    {
        "decimal": "&#8773;",
        "entity": "&cong;",
        "html": "≅",
        "hex": "&#x2245;"
    },
    {
        "decimal": "&#8776;",
        "entity": "&asymp;",
        "html": "≈",
        "hex": "&#x2248;"
    },
    {
        "decimal": "&#8800;",
        "entity": "&ne;",
        "html": "≠",
        "hex": "&#x2260;"
    },
    {
        "decimal": "&#8801;",
        "entity": "&equiv;",
        "html": "≡",
        "hex": "&#x2261;"
    },
    {
        "decimal": "&#8804;",
        "entity": "&le;",
        "html": "≤",
        "hex": "&#x2264;"
    },
    {
        "decimal": "&#8805;",
        "entity": "&ge;",
        "html": "≥",
        "hex": "&#x2265;"
    },
    {
        "decimal": "&#8834;",
        "entity": "&sub;",
        "html": "⊂",
        "hex": "&#x2282;"
    },
    {
        "decimal": "&#8835;",
        "entity": "&sup;",
        "html": "⊃",
        "hex": "&#x2283;"
    },
    {
        "decimal": "&#8836;",
        "entity": "&nsub;",
        "html": "⊄",
        "hex": "&#x2284;"
    },
    {
        "decimal": "&#8838;",
        "entity": "&sube;",
        "html": "⊆",
        "hex": "&#x2286;"
    },
    {
        "decimal": "&#8839;",
        "entity": "&supe;",
        "html": "⊇",
        "hex": "&#x2287;"
    },
    {
        "decimal": "&#8853;",
        "entity": "&oplus;",
        "html": "⊕",
        "hex": "&#x2295;"
    },
    {
        "decimal": "&#8855;",
        "entity": "&otimes;",
        "html": "⊗",
        "hex": "&#x2297;"
    },
    {
        "decimal": "&#8869;",
        "entity": "&perp;",
        "html": "⊥",
        "hex": "&#x22A5;"
    },
    {
        "decimal": "&#8901;",
        "entity": "&sdot;",
        "html": "⋅",
        "hex": "&#x22C5;"
    },
    {
        "decimal": "&#913;",
        "entity": "&Alpha;",
        "html": "Α",
        "hex": "&#x391;"
    },
    {
        "decimal": "&#914;",
        "entity": "&Beta;",
        "html": "Β",
        "hex": "&#x392;"
    },
    {
        "decimal": "&#915;",
        "entity": "&Gamma;",
        "html": "Γ",
        "hex": "&#x393;"
    },
    {
        "decimal": "&#916;",
        "entity": "&Delta;",
        "html": "Δ",
        "hex": "&#x394;"
    },
    {
        "decimal": "&#917;",
        "entity": "&Epsilon;",
        "html": "Ε",
        "hex": "&#x395;"
    },
    {
        "decimal": "&#918;",
        "entity": "&Zeta;",
        "html": "Ζ",
        "hex": "&#x396;"
    },
    {
        "decimal": "&#919;",
        "entity": "&Eta;",
        "html": "Η",
        "hex": "&#x397;"
    },
    {
        "decimal": "&#920;",
        "entity": "&Theta;",
        "html": "Θ",
        "hex": "&#x398;"
    },
    {
        "decimal": "&#921;",
        "entity": "&Iota;",
        "html": "Ι",
        "hex": "&#x399;"
    },
    {
        "decimal": "&#922;",
        "entity": "&Kappa;",
        "html": "Κ",
        "hex": "&#x39A;"
    },
    {
        "decimal": "&#923;",
        "entity": "&Lambda;",
        "html": "Λ",
        "hex": "&#x39B;"
    },
    {
        "decimal": "&#924;",
        "entity": "&Mu;",
        "html": "Μ",
        "hex": "&#x39C;"
    },
    {
        "decimal": "&#925;",
        "entity": "&Nu;",
        "html": "Ν",
        "hex": "&#x39D;"
    },
    {
        "decimal": "&#926;",
        "entity": "&Xi;",
        "html": "Ξ",
        "hex": "&#x39E;"
    },
    {
        "decimal": "&#927;",
        "entity": "&Omicron;",
        "html": "Ο",
        "hex": "&#x39F;"
    },
    {
        "decimal": "&#928;",
        "entity": "&Pi;",
        "html": "Π",
        "hex": "&#x3A0;"
    },
    {
        "decimal": "&#929;",
        "entity": "&Rho;",
        "html": "Ρ",
        "hex": "&#x3A1;"
    },
    {
        "decimal": "&#931;",
        "entity": "&Sigma;",
        "html": "Σ",
        "hex": "&#x3A3;"
    },
    {
        "decimal": "&#932;",
        "entity": "&Tau;",
        "html": "Τ",
        "hex": "&#x3A4;"
    },
    {
        "decimal": "&#933;",
        "entity": "&Upsilon;",
        "html": "Υ",
        "hex": "&#x3A5;"
    },
    {
        "decimal": "&#934;",
        "entity": "&Phi;",
        "html": "Φ",
        "hex": "&#x3A6;"
    },
    {
        "decimal": "&#935;",
        "entity": "&Chi;",
        "html": "Χ",
        "hex": "&#x3A7;"
    },
    {
        "decimal": "&#936;",
        "entity": "&Psi;",
        "html": "Ψ",
        "hex": "&#x3A8;"
    },
    {
        "decimal": "&#937;",
        "entity": "&Omega;",
        "html": "Ω",
        "hex": "&#x3A9;"
    },
    {
        "decimal": "&#945;",
        "entity": "&alpha;",
        "html": "α",
        "hex": "&#x3B1;"
    },
    {
        "decimal": "&#946;",
        "entity": "&beta;",
        "html": "β",
        "hex": "&#x3B2;"
    },
    {
        "decimal": "&#947;",
        "entity": "&gamma;",
        "html": "γ",
        "hex": "&#x3B3;"
    },
    {
        "decimal": "&#948;",
        "entity": "&delta;",
        "html": "δ",
        "hex": "&#x3B4;"
    },
    {
        "decimal": "&#949;",
        "entity": "&epsilon;",
        "html": "ε",
        "hex": "&#x3B5;"
    },
    {
        "decimal": "&#950;",
        "entity": "&zeta;",
        "html": "ζ",
        "hex": "&#x3B6;"
    },
    {
        "decimal": "&#951;",
        "entity": "&eta;",
        "html": "η",
        "hex": "&#x3B7;"
    },
    {
        "decimal": "&#952;",
        "entity": "&theta;",
        "html": "θ",
        "hex": "&#x3B8;"
    },
    {
        "decimal": "&#953;",
        "entity": "&iota;",
        "html": "ι",
        "hex": "&#x3B9;"
    },
    {
        "decimal": "&#954;",
        "entity": "&kappa;",
        "html": "κ",
        "hex": "&#x3BA;"
    },
    {
        "decimal": "&#955;",
        "entity": "&lambda;",
        "html": "λ",
        "hex": "&#x3BB;"
    },
    {
        "decimal": "&#956;",
        "entity": "&mu;",
        "html": "μ",
        "hex": "&#x3BC;"
    },
    {
        "decimal": "&#957;",
        "entity": "&nu;",
        "html": "ν",
        "hex": "&#x3BD;"
    },
    {
        "decimal": "&#958;",
        "entity": "&xi;",
        "html": "ξ",
        "hex": "&#x3BE;"
    },
    {
        "decimal": "&#959;",
        "entity": "&omicron;",
        "html": "ο",
        "hex": "&#x3BF;"
    },
    {
        "decimal": "&#960;",
        "entity": "&pi;",
        "html": "π",
        "hex": "&#x3C0;"
    },
    {
        "decimal": "&#961;",
        "entity": "&rho;",
        "html": "ρ",
        "hex": "&#x3C1;"
    },
    {
        "decimal": "&#962;",
        "entity": "&sigmaf;",
        "html": "ς",
        "hex": "&#x3C2;"
    },
    {
        "decimal": "&#963;",
        "entity": "&sigma;",
        "html": "σ",
        "hex": "&#x3C3;"
    },
    {
        "decimal": "&#964;",
        "entity": "&tau;",
        "html": "τ",
        "hex": "&#x3C4;"
    },
    {
        "decimal": "&#965;",
        "entity": "&upsilon;",
        "html": "υ",
        "hex": "&#x3C5;"
    },
    {
        "decimal": "&#966;",
        "entity": "&phi;",
        "html": "φ",
        "hex": "&#x3C6;"
    },
    {
        "decimal": "&#967;",
        "entity": "&chi;",
        "html": "χ",
        "hex": "&#x3C7;"
    },
    {
        "decimal": "&#968;",
        "entity": "&psi;",
        "html": "ψ",
        "hex": "&#x3C8;"
    },
    {
        "decimal": "&#969;",
        "entity": "&omega;",
        "html": "ω",
        "hex": "&#x3C9;"
    },
    {
        "decimal": "&#977;",
        "entity": "&thetasym;",
        "html": "ϑ",
        "hex": "&#x3D1;"
    },
    {
        "decimal": "&#978;",
        "entity": "&upsih;",
        "html": "ϒ",
        "hex": "&#x3D2;"
    },
    {
        "decimal": "&#982;",
        "entity": "&piv;",
        "html": "ϖ",
        "hex": "&#x3D6;"
    },
    {
        "decimal": "&#338;",
        "entity": "&OElig;",
        "html": "Œ",
        "hex": "&#x152;"
    },
    {
        "decimal": "&#339;",
        "entity": "&oelig;",
        "html": "œ",
        "hex": "&#x153;"
    },
    {
        "decimal": "&#352;",
        "entity": "&Scaron;",
        "html": "Š",
        "hex": "&#x160;"
    },
    {
        "decimal": "&#353;",
        "entity": "&scaron;",
        "html": "š",
        "hex": "&#x161;"
    },
    {
        "decimal": "&#376;",
        "entity": "&Yuml;",
        "html": "Ÿ",
        "hex": "&#x178;"
    },
    {
        "decimal": "&#402;",
        "entity": "&fnof;",
        "html": "ƒ",
        "hex": "&#x192;"
    },
    {
        "decimal": "&#710;",
        "entity": "&circ;",
        "html": "ˆ",
        "hex": "&#x2C6;"
    },
    {
        "decimal": "&#732;",
        "entity": "&tilde;",
        "html": "˜",
        "hex": "&#x2DC;"
    },
    {
        "decimal": "&#8194;",
        "entity": "&ensp;",
        "html": " ",
        "hex": "&#x2002;"
    },
    {
        "decimal": "&#8195;",
        "entity": "&emsp;",
        "html": " ",
        "hex": "&#x2003;"
    },
    {
        "decimal": "&#8201;",
        "entity": "&thinsp;",
        "html": " ",
        "hex": "&#x2009;"
    },
    {
        "decimal": "&#8204;",
        "entity": "&zwnj;",
        "html": "‌",
        "hex": "&#x200C;"
    },
    {
        "decimal": "&#8205;",
        "entity": "&zwj;",
        "html": "‍",
        "hex": "&#x200D;"
    },
    {
        "decimal": "&#8206;",
        "entity": "&lrm;",
        "html": "‎",
        "hex": "&#x200E;"
    },
    {
        "decimal": "&#8207;",
        "entity": "&rlm;",
        "html": "‏",
        "hex": "&#x200F;"
    },
    {
        "decimal": "&#8211;",
        "entity": "&ndash;",
        "html": "–",
        "hex": "&#x2013;"
    },
    {
        "decimal": "&#8212;",
        "entity": "&mdash;",
        "html": "—",
        "hex": "&#x2014;"
    },
    {
        "decimal": "&#8216;",
        "entity": "&lsquo;",
        "html": "‘",
        "hex": "&#x2018;"
    },
    {
        "decimal": "&#8217;",
        "entity": "&rsquo;",
        "html": "’",
        "hex": "&#x2019;"
    },
    {
        "decimal": "&#8218;",
        "entity": "&sbquo;",
        "html": "‚",
        "hex": "&#x201A;"
    },
    {
        "decimal": "&#8220;",
        "entity": "&ldquo;",
        "html": "“",
        "hex": "&#x201C;"
    },
    {
        "decimal": "&#8221;",
        "entity": "&rdquo;",
        "html": "”",
        "hex": "&#x201D;"
    },
    {
        "decimal": "&#8222;",
        "entity": "&bdquo;",
        "html": "„",
        "hex": "&#x201E;"
    },
    {
        "decimal": "&#8224;",
        "entity": "&dagger;",
        "html": "†",
        "hex": "&#x2020;"
    },
    {
        "decimal": "&#8225;",
        "entity": "&Dagger;",
        "html": "‡",
        "hex": "&#x2021;"
    },
    {
        "decimal": "&#8226;",
        "entity": "&bull;",
        "html": "•",
        "hex": "&#x2022;"
    },
    {
        "decimal": "&#8230;",
        "entity": "&hellip;",
        "html": "…",
        "hex": "&#x2026;"
    },
    {
        "decimal": "&#8240;",
        "entity": "&permil;",
        "html": "‰",
        "hex": "&#x2030;"
    },
    {
        "decimal": "&#8242;",
        "entity": "&prime;",
        "html": "′",
        "hex": "&#x2032;"
    },
    {
        "decimal": "&#8243;",
        "entity": "&Prime;",
        "html": "″",
        "hex": "&#x2033;"
    },
    {
        "decimal": "&#8249;",
        "entity": "&lsaquo;",
        "html": "‹",
        "hex": "&#x2039;"
    },
    {
        "decimal": "&#8250;",
        "entity": "&rsaquo;",
        "html": "›",
        "hex": "&#x203A;"
    },
    {
        "decimal": "&#8254;",
        "entity": "&oline;",
        "html": "‾",
        "hex": "&#x203E;"
    },
    {
        "decimal": "&#8364;",
        "entity": "&euro;",
        "html": "€",
        "hex": "&#x20AC;"
    },
    {
        "decimal": "&#8482;",
        "entity": "&trade;",
        "html": "™",
        "hex": "&#x2122;"
    },
    {
        "decimal": "&#8592;",
        "entity": "&larr;",
        "html": "←",
        "hex": "&#x2190;"
    },
    {
        "decimal": "&#8593;",
        "entity": "&uarr;",
        "html": "↑",
        "hex": "&#x2191;"
    },
    {
        "decimal": "&#8594;",
        "entity": "&rarr;",
        "html": "→",
        "hex": "&#x2192;"
    },
    {
        "decimal": "&#8595;",
        "entity": "&darr;",
        "html": "↓",
        "hex": "&#x2193;"
    },
    {
        "decimal": "&#8596;",
        "entity": "&harr;",
        "html": "↔",
        "hex": "&#x2194;"
    },
    {
        "decimal": "&#8629;",
        "entity": "&crarr;",
        "html": "↵",
        "hex": "&#x21B5;"
    },
    {
        "decimal": "&#8968;",
        "entity": "&lceil;",
        "html": "⌈",
        "hex": "&#x2308;"
    },
    {
        "decimal": "&#8969;",
        "entity": "&rceil;",
        "html": "⌉",
        "hex": "&#x2309;"
    },
    {
        "decimal": "&#8970;",
        "entity": "&lfloor;",
        "html": "⌊",
        "hex": "&#x230A;"
    },
    {
        "decimal": "&#8971;",
        "entity": "&rfloor;",
        "html": "⌋",
        "hex": "&#x230B;"
    },
    {
        "decimal": "&#9674;",
        "entity": "&loz;",
        "html": "◊",
        "hex": "&#x25CA;"
    },
    {
        "decimal": "&#9824;",
        "entity": "&spades;",
        "html": "♠",
        "hex": "&#x2660;"
    },
    {
        "decimal": "&#9827;",
        "entity": "&clubs;",
        "html": "♣",
        "hex": "&#x2663;"
    },
    {
        "decimal": "&#9829;",
        "entity": "&hearts;",
        "html": "♥",
        "hex": "&#x2665;"
    },
    {
        "decimal": "&#9830;",
        "entity": "&diams;",
        "html": "♦",
        "hex": "&#x2666;"
    }

];

const listType = [
    'decimal',
    'entity',
    'hex'
];

const whitespace = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003' +
         '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
         '\u2029\uFEFF';

exports.entity =entity;
exports.listType =listType;
exports.whitespace =whitespace;
