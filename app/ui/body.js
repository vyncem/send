const html = require('choo/html');
const Header = require('./header');
const Footer = require('./footer');

module.exports = function body(main) {
  return function(state, emit) {
    const b = html`
      <body
        class="flex flex-col items-center font-sans md:h-screen bg-white"
  style="background: linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(56,189,248,0.18) 40%, rgba(232,121,249,0.18) 80%, rgba(236,72,153,0.18) 100%);"

      >
        ${state.cache(Header, 'header').render()} ${main(state, emit)}
        ${state.cache(Footer, 'footer').render()}
      </body>
    `;
    if (state.layout) {
      // server side only
      return state.layout(state, b);
    }
    return b;
  };
};
