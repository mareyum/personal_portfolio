export const posts = [
  {
    slug: 'what-makes-a-brand-identity-last',
    title: 'What Makes a Brand Identity Actually Last',
    date: '2026-05-12',
    excerpt:
      'Trends fade fast, but a handful of brand identities stay relevant for decades. Here is what separates the two.',
    image: 'https://picsum.photos/seed/blog-1/700/460',
    body: [
      'Every few years, a wave of rebrands sweeps through an industry and most of them look dated within eighteen months. The identities that last share one trait: they were built around a genuine insight about the business, not a trend board.',
      'Before touching color or type, I ask clients what they want people to feel three seconds after seeing the logo. If nobody in the room can answer that clearly, the identity work has to start there.',
      'Longevity also comes from restraint. The most durable systems tend to be simple enough that they still work in one color, at 16 pixels, embroidered on a hat. If a mark only works as a full-color animation, it will not age well.',
    ],
  },
  {
    slug: 'packaging-design-on-a-startup-budget',
    title: 'Packaging Design on a Startup Budget',
    date: '2026-03-02',
    excerpt:
      'You do not need a six-figure packaging budget to look premium on a shelf. A few practical constraints to design around.',
    image: 'https://picsum.photos/seed/blog-2/700/460',
    body: [
      'Most early-stage brands assume premium packaging means custom tooling and foil stamping. In practice, the biggest lever is restraint: one strong idea, executed cleanly, beats five decorative techniques applied at once.',
      'Standard stock sizes and printer templates exist for a reason — using them is not a compromise, it is how you keep your unit costs sane while you are still validating demand.',
      'Spend the saved budget on one thing people touch: a satisfying box open, a card insert with a human voice, a label that survives a fridge. Those details get photographed and shared far more than an expensive finish nobody notices.',
    ],
  },
  {
    slug: 'logo-vs-identity-system',
    title: 'A Logo Is Not a Brand Identity',
    date: '2025-11-20',
    excerpt:
      'Clients often come in asking for "a new logo" when what they actually need is a system. Here is the difference in practice.',
    image: 'https://picsum.photos/seed/blog-3/700/460',
    body: [
      'A logo is one asset. An identity system is the set of rules that let dozens of people, across years, make consistent design decisions without asking you first.',
      'That system includes color usage, type pairing, photography direction, spacing rules, and — just as important — a clear list of what not to do with the mark.',
      'When a client asks for "just a logo refresh," I usually walk them through where that mark actually needs to live: a truck, a app icon, a conference badge, a receipt. The logo is the easy 10%; the system is the other 90% that keeps it looking right everywhere.',
    ],
  },
  {
    slug: 'social-templates-that-dont-look-templated',
    title: 'Social Templates That Do Not Look Templated',
    date: '2025-09-08',
    excerpt:
      'Template systems save in-house teams enormous time, but they can flatten a brand if built carelessly. A few guardrails that help.',
    image: 'https://picsum.photos/seed/blog-4/700/460',
    body: [
      'The goal of a social template system is not to make every post identical — it is to make every post unambiguously yours, even when a non-designer builds it in fifteen minutes.',
      'I build these around a small set of layout "moods" instead of one rigid grid: a quote mood, a product mood, a behind-the-scenes mood. Each has its own rules but shares type and color.',
      'The guardrail that matters most is a short do/don’t sheet with real screenshots. Teams follow style guides far more consistently when they can see a wrong example next to a right one.',
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}
