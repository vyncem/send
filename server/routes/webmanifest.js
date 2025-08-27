const state = require('../state');

module.exports = async function(req, res) {
  const appState = await state(req);

  const manifest = {
    name: 'Yebo.link',
    short_name: 'Yebo.link',
    lang: req.language,
    icons: [
      {
        src: appState.ui.assets.android_chrome_192px,
        type: 'image/png',
        sizes: '192x192'
      },
      {
        src: appState.ui.assets.android_chrome_512px,
        type: 'image/png',
        sizes: '512x512'
      }
    ],
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#220033',
    background_color: 'white'
  };
  res.set('Content-Type', 'application/manifest+json');
  res.json(manifest);
};
