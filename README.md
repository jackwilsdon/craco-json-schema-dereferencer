# craco-json-schema-dereferencer

A [craco] plugin that adds JSON Schema dereferencing to [create-react-app] 2.

Powered by [`@cloudflare/json-schema-ref-loader`][@cloudflare/json-schema-ref-loader]

## Installation

Make sure you have [craco] installed before continuing. You can find the
official installation instructions [here][craco-install].

You can then install `craco-json-schema-dereferencer` using your package manager
of choice;

```Shell
npm install --save @jackwilsdon/craco-json-schema-dereferencer
```

```Shell
yarn add @jackwilsdon/craco-json-schema-dereferencer
```

## Usage

The plugin provides a few options to allow the inclusion and exclusion of files;

```JavaScript
{
  // The expression to match to include files.
  // Default: /\.json$/ (i.e. files ending with .json)
  test: ...,
  // The condition to match to include files.
  // Default: the app's source directory
  include: ...,
}
```

See the [webpack condition documentation][webpack-condition] for possible `test`
and `include` values.

These options can be passed under the `options` property of the plugin;

```JavaScript
// craco.config.js
const DereferencerPlugin = require('@jackwilsdon/craco-json-schema-dereferencer');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: DereferencerPlugin,
      options: {
        // Only dereference .schema.json files.
        test: /\.schema\.json/,
        // Only dereference files in the schemas directory.
        include: path.join(__dirname, 'src', 'schemas'),
      },
    },
  ],
};
```

[craco]: https://github.com/sharegate/craco
[craco-install]: https://github.com/sharegate/craco/tree/master/packages/craco#installation
[create-react-app]: https://github.com/facebook/create-react-app
[@cloudflare/json-schema-ref-loader]: https://github.com/cloudflare/json-schema-tools/tree/master/workspaces/json-schema-ref-loader
[webpack-condition]: https://webpack.js.org/configuration/module/#condition