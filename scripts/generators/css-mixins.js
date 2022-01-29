const fs = require('fs');
const path = require('path');
const { css } = require('mdn-data');

/**
 * This will need to be changed if the mixin
 * in `src/_tokens.scss` changes.
 */
const cssPropertyMixin = 'css-property-with-token';

/**
 * Relative path of the output to `src/_tokens.scss`.
 * This should be calculated using something from path,
 * but that's not worth the two-second effort at the moment.
 */
const tokensRelativePath = './tokens.scss';

const root = path.dirname(path.dirname(__dirname));
const output = path.join(root, 'src', '_css-properties.scss');

/**
 * Creates an individual Sass mixin for the given CSS property.
 * 
 * @param {string} property 
 * @param {object} data 
 */
function createSassMixin(property, data) {
  const {
    groups,
    // Not loving this.
    // Definitely want to have a better strategy should this ever be undefined.
    // Probably best to leave off the link all-together but it's not a priority at this point.
    mdn_url = `https://developer.mozilla.org/docs/Web/CSS/${property}`,
  } = data;

  const [group = 'CSS Properties'] = groups;

  return `
/// Applies the \`$token\` to the CSS \`${property}\` property.
/// There is no type checking, so the token value must be valid for the property.
/// @group ${group}
/// @access public
/// @param {string} $token - Name of token to apply to the property.
/// @output CSS \`${property}\` property set to the \`$token\` value.
/// @see ${mdn_url}
@mixin ${property}($token) {
  @include ${cssPropertyMixin}('${property}', $token);
}
`;
}

/**
 * Creates file of mixins for CSS properties.
 * 
 * @param {object} properties
 */
function createSassMixinFileContent(properties = css.properties) {
  const mixins = Object.keys(properties)
    // Don't feel like dealing with these right now.
    .filter((property) => !property.startsWith('-'))
    .map((property) => createSassMixin(property, properties[property]));

  return `@use '${tokensRelativePath}' as *;
${mixins.join('\n')}
`
}

fs.writeFileSync(output, createSassMixinFileContent());

/// Probably add generator for index.scss
