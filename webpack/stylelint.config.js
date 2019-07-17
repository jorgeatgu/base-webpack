module.exports = {
    "rules": {
        "at-rule-empty-line-before": ["always", {
            except: ["blockless-after-same-name-blockless", "first-nested"],
            ignore: ["after-comment"],
            message: "Deja un espacio despues de una propiedad"
        }],
        "at-rule-name-case": ["lower", {
            message: "Las propiedades siempre en minúsculas"
        }],
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-after": ["always", {
            message: "Punto y coma = return"
        }],
        "block-closing-brace-newline-after": ["always", {
            message: "Llave = return"
        }],
        "block-closing-brace-newline-before": ["always", {
            message: "La llave de cierre siempre va sola "
        }],
        "block-no-empty": [true, {
            message: "Propiedad vacía, golpe de remo por gañan."
        }],
        "block-opening-brace-newline-after": ["always", {
            message: "Llave de apertura siempre va sola"
        }],
        "block-opening-brace-space-before": ["always", {
            message: "Propiedad y llave siempre separadas por un espacio"
        }],
        "color-hex-length": ["short", {
            message: "¿Te gusta escribir más?"
        }],
        "color-no-invalid-hex": [true, {
            message: "En la vida eso será un color"
        }],
        "comment-whitespace-inside": "always",
        "declaration-bang-space-before": ["always", {
            message: "Que menos que dar un poco de separación a ese !important del averno"
        }],
        "declaration-block-no-duplicate-properties": [true, {
            message: "Propiedades repetidas. Seguro que has copiado y pegado de algún sitio."
        }],
        "declaration-block-no-shorthand-property-overrides": [true, {
            message: "El shorthand en primer lugar. Ejemplo .foo { margin: 10px; margin-right: 5px; }"
        }],
        "declaration-block-semicolon-space-before": ["never", {
            message: "Espacio antes del ; lo próximo será usar Bootstrap ¿no?"
        }],
        "declaration-block-single-line-max-declarations": [1, {
            message: "Declaración por línea. La legibilidad es innegociable!!"
        }],
        "declaration-block-trailing-semicolon": ["always", {
            message: "Te has dejado un ; nada más que decir ¿no?"
        }],
        "declaration-colon-space-after": ["always", {
            message: "Después de : siempre se deja espacio"
        }],
        "declaration-colon-space-before": ["never", {
            message: "Antes de los : jamás se deja espacio"
        }],
        "function-calc-no-unspaced-operator": [true, {
            message: "Los operadores matematicos siempre van acompañados de un espacio, antes y después. Siempre"
        }],
        "function-comma-space-after": "always",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": ["lower", {
            message: "Minúsculas"
        }],
        "function-whitespace-after": ["always", {
            message: "spacebar"
        }],
        "keyframe-declaration-no-important": [true, {
            message: "quita ese important"
        }],
        "max-empty-lines": 1,
        "max-nesting-depth": [2, {
            message: "No, no y no. Deja de abusar del nesting"
        }],
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "no-eol-whitespace": [true, {
            message: "A borrar los espacios"
        }],
        "no-extra-semicolons": [true, {
            message: "Te sobra un ;"
        }],
        "no-duplicate-selectors": true,
        "number-leading-zero": ["never", {
            message: "Escribiendo ceros de más"
        }],
        "number-no-trailing-zeros": [true, {
            message: "Sobran ceros"
        }],
        "property-case": ["lower", {
            message: "En minúsculas"
        }],
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": ["always", {
            message: "Espacio entre selectores"
        }],
        "selector-combinator-space-before": ["always", {
            message: "Espacio entre selectores"
        }],
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-colon-notation": ["single", {
            message: "Doble para IE8. Estamos en 2018."
        }],
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "unit-case": "lower",
        "unit-no-unknown": true
    },

}
