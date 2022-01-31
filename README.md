# sassy-design-tokens (beta)

Sass library designed to make it easier to use design tokens with Sass.

**DISCLAIMER**: This project is in beta stages until version `1.0.0`.
Some features may be different when it is officially released.

This library offers the following features:

- Flattens a theme object with nested values into `dash-case` design token keys and values.
- Includes token values as CSS variables.
- Provides mixins to set CSS properties to token values.
- Throws errors if tokens do not exist to reduce bugs at runtime.

## Quick Start

### Install

#### Node/NPM

`npm install sassy-design-tokens --save-dev`

#### Yarn

`yarn add sassy-design-tokens --dev`

### Configure

The easiest way to use the library features is to create a theming file to `@import` (not `@use`)
the library and set the `$tokens` and `:root` theming.

Afterwards, you can import the theming file with `@use './path/to/theme.scss' as *;`.
This will also give you access to all of the libraries functions.

#### Example `theme.scss`

```scss
@import "sassy-design-tokens";

// This is a theme with nested values.
// If it didn't have nested values, then it could be set to `$tokens` directly without calling `flat-tokens`.
$example-theme: (
  "color": (
    "link": (
      "default": #c69,
      "hover": #d7a,
    ),
  ),
  "font": (
    "family": (
      "default": (
        "Roboto",
        "Helvetica Neue",
        sans-serif,
      ),
      "mono": (
        source-code-pro,
        Consolas,
        "Courier New",
        monospace,
      ),
    ),
  ),
);

// `$tokens` should be a flattened map of keys and values.
// The `flat-tokens` function will accept nested or flat objects.
// Nested objects will generate keys in `dash-case`.
// To avoid accidentally overriding keys, the function will throw an error when duplicate keys are found.
// If you have a map without nested values, then you can set `$tokens` without nesting.
$tokens: flat-tokens($example-theme);

// This will include your tokens as CSS variables.
// You want to wrap this in a mixin so that you only call it once.
// Alternatively, you could just add root styles in a single file directly.
@mixin root-variables() {
  :root {
    @include tokens();
  }
}
```

#### Example `index.scss` (or other file that use the theme)

```scss
@use "./theme.scss" as *;

// This should only happen once in your app.
@include root-variables();

body {
  // This will set the body's `font-family` property to the `font-family-default` token value.
  // Alternatively, `@include font-family("font-family");` would also work.
  @include font-family("font-family-default");
}

code {
  @include font-family("font-family-mono");
}

a {
  // Alternatively, `@include color("color-link-default");` would also work.
  @include color("color-link");

  &:hover {
    @include color("color-link-hover");
  }
}
```
