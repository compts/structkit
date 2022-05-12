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

exports.entity =entity;
exports.listType =listType;
