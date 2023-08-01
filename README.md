<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Emoji

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> An emoji database.



<section class="usage">

## Usage

```javascript
import emoji from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-emoji@deno/mod.js';
```

#### emoji()

Returns an emoji database.

```javascript
var data = emoji();
// returns [ {...}, ... ]
```

Each element in the returned database has the following fields:

-   **group**: emoji group (illustrative); e.g., `'Smileys & Emotion'`.
-   **subgroup**: emoji subgroup (illustrative); e.g., `'face-smiling'`.
-   **codepoints**: list of one or more hex code points, separated by spaces; e.g., `'1F600'`.
-   **hash**: hash value used to match related emoji.
-   **status**: indicates whether an emoji element is missing one or more emoji presentation selectors. Possible values: `'fully-qualified'`, `'minimally-qualified'`, `'unqualified'`.
-   **emoji**: rendered emoji; e.g., `'😀'`.
-   **short_name**: CLDR short name; e.g., `'grinning face'`.
-   **description**: short description (often matching the CLDR short name, but omitting skin tones, hair styles, et cetera).
-   **aliases**: an `array` of emoji aliases (i.e., common names used to refer to an emoji).
-   **keywords**: an `array` of keywords related to an emoji.
-   **codes**: an `array` of emoji codes (i.e., convenient character sequences used within text to refer to an emoji); e.g., `':grinning:'` and `':call_me_hand::skin-tone-5:'`.

In addition, for those emoji supporting skin tones, an element may have the following field:

-   **skin_tones**: an `array` of skin tone modifiers based on the Fitzpatrick scale; e.g., `'skin-tone-2'`.

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import emoji from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-emoji@deno/mod.js';

var data;
var len;
var idx;
var d;
var i;

data = emoji();
len = data.length;

// Select random emoji...
for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    d = data[ idx ];
    console.log( d.emoji + ' => ' + d.codes[ 0 ] );
}
```

</section>

<!-- /.examples -->



<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets-emoji-code-picto`][@stdlib/datasets/emoji-code-picto]</span><span class="delimiter">: </span><span class="description">emoji codes and pictographs.</span>
-   <span class="package-name">[`@stdlib/datasets-emoji-picto-code`][@stdlib/datasets/emoji-picto-code]</span><span class="delimiter">: </span><span class="description">emoji pictographs and codes.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-emoji.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-emoji

[test-image]: https://github.com/stdlib-js/datasets-emoji/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-emoji/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-emoji/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-emoji?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-emoji.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-emoji/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-emoji#cli
[cli-url]: https://github.com/stdlib-js/datasets-emoji/tree/cli
[@stdlib/datasets-emoji]: https://github.com/stdlib-js/datasets-emoji/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-emoji/tree/deno
[umd-url]: https://github.com/stdlib-js/datasets-emoji/tree/umd
[esm-url]: https://github.com/stdlib-js/datasets-emoji/tree/esm
[branches-url]: https://github.com/stdlib-js/datasets-emoji/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[ndjson]: http://specs.frictionlessdata.io/ndjson/

<!-- <related-links> -->

[@stdlib/datasets/emoji-code-picto]: https://github.com/stdlib-js/datasets-emoji-code-picto/tree/deno

[@stdlib/datasets/emoji-picto-code]: https://github.com/stdlib-js/datasets-emoji-picto-code/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
