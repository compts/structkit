const entity = [

    {"decimal": "&#160;",
        "entity": "&nbsp;",
        "hex": "&#xA0;",
        "html": " ",
        "title": "non-breaking space"},
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
        "title": "Right curly bracket"}

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
