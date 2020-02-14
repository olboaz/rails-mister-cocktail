import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["♥️ Change your life", "🍸 Drink lot of Cocktails !"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
