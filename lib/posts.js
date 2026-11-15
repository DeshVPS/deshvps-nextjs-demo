export const posts = [
  {
    slug: "seven-layer-cha",
    title: "How the seven-layer cha gets its layers",
    date: "2026-11-02",
    summary: "Density, temperature and a very steady hand: the Srimangal classic, explained.",
    body: [
      "Seven-layer tea was made famous in Srimangal. Each layer is a different brew: black tea, green tea, lemon tea, milk tea and spiced teas, each with a different amount of sugar and condensed milk.",
      "The trick is density. Sweeter, heavier brews go in first; lighter ones are poured slowly over the back of a spoon so they float on top.",
      "Drink it layer by layer, or stir it and lose the show. Both are correct.",
    ],
  },
  {
    slug: "malai-cha-at-home",
    title: "Malai cha at home",
    date: "2026-10-18",
    summary: "The thick, creamy street-stall milk tea, without a street stall.",
    body: [
      "Boil full-cream milk slowly and let the skin form; that is your malai.",
      "Brew strong CTC tea, add sugar and condensed milk, then pour from a height to froth it.",
      "Spoon the malai on top. Serve in a small glass, never a mug.",
    ],
  },
  {
    slug: "why-shingara-needs-cha",
    title: "Why every shingara needs a cha",
    date: "2026-09-30",
    summary: "A short, entirely serious study of Dhaka's favourite afternoon pairing.",
    body: [
      "Spiced potato, flaky pastry, hot oil. Then a sweet, milky cha to calm it all down.",
      "We tested this pairing every afternoon for a month. The results were consistent.",
    ],
  },
];

export const findPost = (slug) => posts.find((p) => p.slug === slug);
