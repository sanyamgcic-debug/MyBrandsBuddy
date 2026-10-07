import { legacyServices } from './legacy-services';
export type IconName =
  | 'Search'
  | 'Instagram'
  | 'MousePointerClick'
  | 'Sparkles'
  | 'Monitor'
  | 'PenTool'
  | 'Smartphone'
  | 'MessageCircle'
  | 'Heart'
  | 'Users'
  | 'ChartNoAxesCombined'
  | 'Target';
export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  category: string;
  theme: string;
  headline: string;
  description: string;
  intro: string;
  problemTitle: string;
  problem: string;
  approachTitle: string;
  approach: string;
  included: string[];
  process: string[];
  benefits: string[];
  audience: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
  related: string[];
  outcome: string;
};
export const services: Service[] = [
  {
    number: '01',
    slug: 'seo-local-search',
    title: 'SEO & Local Search',
    shortTitle: 'SEO & Local Search',
    icon: 'Search',
    category: 'Discovery',
    theme: 'search',
    headline: 'Be the answer.\nNot another search.',
    description:
      'Help the right people find you at the moment they need you. Technical clarity, useful content and a stronger local presence, working together.',
    intro:
      'Help the right people find you at the moment they need you. Technical clarity, useful content and a stronger local presence, working together.',
    problemTitle: 'Your customers are looking. Can they find you?',
    problem:
      'A great business can still be difficult to discover. Incomplete listings, unclear service pages and technical friction leave customers with unanswered questions. We start by finding the gaps that matter to your market.',
    approachTitle: 'Search begins with intent.',
    approach:
      'We connect what people search for with pages that genuinely help them. Local signals, technical foundations and useful answers support a more discoverable business.',
    included: [
      'Technical SEO audits',
      'On-page SEO and internal linking',
      'Local keyword strategy',
      'Google Business Profile',
      'Local content planning',
      'Search visibility reporting',
    ],
    process: [
      'Audit the search experience',
      'Map customer intent',
      'Improve pages and local signals',
      'Review discovery and enquiries',
    ],
    benefits: [
      'A clearer local presence',
      'More useful service pages',
      'Better visibility into search enquiries',
    ],
    audience: [
      'Local and service businesses',
      'Multi-location teams',
      'Businesses rebuilding their website',
    ],
    deliverables: [
      'Prioritized technical audit',
      'Keyword-to-page map',
      'Optimized pages within scope',
      'Monthly search and enquiry review',
    ],
    faqs: [
      {
        question: 'Do you guarantee a Google ranking?',
        answer:
          'No. Search positions depend on many factors. We agree the work, establish a baseline and report progress without promising a particular ranking.',
      },
      {
        question: 'Can you work on our existing website?',
        answer:
          'Yes. We review the platform and access first, then prioritize changes that can be implemented safely.',
      },
      {
        question: 'Does local SEO include our Google Business Profile?',
        answer:
          'Yes, where relevant to your scope. We review business details, categories, content and the customer review journey.',
      },
    ],
    cta: 'Improve Your Search Visibility',
    related: ['website-development', 'content-creation', 'performance-marketing'],
    outcome: 'A clearer local presence',
  },
  {
    number: '02',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing & Management',
    shortTitle: 'Social Media Marketing & Management',
    icon: 'Instagram',
    category: 'Discovery',
    theme: 'social',
    headline: 'More than a feed.\nA reason to follow.',
    description:
      'A social presence with a clear point of view. Strategy, publishing and community management that make your business easier to recognise and choose.',
    intro:
      'A social presence with a clear point of view. Strategy, publishing and community management that make your business easier to recognise and choose.',
    problemTitle: 'Posting more isn’t always the answer.',
    problem:
      'An active account can still feel disconnected from the business. We align your topics, visuals and conversations with the customers you want to reach, so each platform has a purpose.',
    approachTitle: 'Build familiarity, one useful moment at a time.',
    approach:
      'We choose the right role for Instagram, Facebook and LinkedIn, then design a manageable publishing rhythm. Reels, posts and conversations form one coherent brand experience.',
    included: [
      'Platform and audience strategy',
      'Monthly content calendars',
      'Instagram, Facebook and LinkedIn',
      'Reels and social creative',
      'Community management within scope',
      'Analytics and editorial reviews',
    ],
    process: [
      'Listen to your audience',
      'Build the editorial direction',
      'Create and manage the calendar',
      'Learn from the response',
    ],
    benefits: [
      'A recognisable social identity',
      'A dependable publishing rhythm',
      'Conversations connected to business goals',
    ],
    audience: [
      'Local brands with regular stories',
      'Founder-led businesses',
      'Teams needing consistent management',
    ],
    deliverables: [
      'Platform-specific content calendar',
      'Approved posts and reels',
      'Community response guidelines',
      'Monthly performance notes',
    ],
    faqs: [
      {
        question: 'Which platforms will you manage?',
        answer:
          'We choose platforms around your audience and capacity. Instagram, Facebook and LinkedIn can be included in an agreed scope.',
      },
      {
        question: 'Do you handle replies and messages?',
        answer:
          'Community management can be included. We agree response hours, escalation rules and which questions your team should answer.',
      },
      {
        question: 'Is paid advertising included?',
        answer:
          'Organic management and paid campaigns are scoped separately. Media spend is always agreed before launch.',
      },
    ],
    cta: 'Build Your Social Presence',
    related: ['content-creation', 'iphone-camera-shoots', 'graphic-design'],
    outcome: 'A recognisable social identity',
  },
  {
    number: '03',
    slug: 'branding-brand-strategy',
    title: 'Branding & Brand Strategy',
    shortTitle: 'Branding & Brand Strategy',
    icon: 'Sparkles',
    category: 'Strategy',
    theme: 'branding',
    headline: 'Make your difference\nimpossible to miss.',
    description:
      'Positioning, identity and language that tell one clear story. Build a brand people can understand, remember and recognise wherever they meet it.',
    intro:
      'Positioning, identity and language that tell one clear story. Build a brand people can understand, remember and recognise wherever they meet it.',
    problemTitle: 'A logo can’t do all the work.',
    problem:
      'When your positioning is unclear, every campaign has to start again. Your identity, messaging and customer experience need a shared idea that helps the business make decisions.',
    approachTitle: 'Find the idea worth building around.',
    approach:
      'We work from your audience and business context to define a useful position. Then we translate it into a visual and verbal system your team can actually use.',
    included: [
      'Brand discovery and positioning',
      'Audience and competitor context',
      'Logo and identity direction',
      'Typography and colour systems',
      'Messaging and tone of voice',
      'Practical brand guidelines',
    ],
    process: [
      'Find the business truth',
      'Define your position',
      'Build the identity system',
      'Equip the team to use it',
    ],
    benefits: [
      'A sharper value proposition',
      'Consistency across touchpoints',
      'A system that supports future campaigns',
    ],
    audience: [
      'New brands finding their voice',
      'Businesses refreshing their identity',
      'Teams entering a different market',
    ],
    deliverables: [
      'Positioning and messaging document',
      'Approved identity assets',
      'Brand usage guidelines',
      'Launch-ready asset package',
    ],
    faqs: [
      {
        question: 'Can we keep our existing logo?',
        answer:
          'Absolutely. We can strengthen the system around an existing identity when it still serves the business.',
      },
      {
        question: 'What is included in a brand identity?',
        answer:
          'The scope may include logo direction, typography, colour, visual language and usage guidelines. We agree the asset list in the proposal.',
      },
      {
        question: 'Will we receive editable files?',
        answer:
          'We specify editable source files, exported formats and font or asset licensing in the handover scope.',
      },
    ],
    cta: 'Build a Stronger Brand',
    related: ['graphic-design', 'website-development', 'business-marketing-consulting'],
    outcome: 'A sharper value proposition',
  },
  {
    number: '04',
    slug: 'business-marketing-consulting',
    title: 'Business & Marketing Consulting',
    shortTitle: 'Business & Marketing Consulting',
    icon: 'Target',
    category: 'Strategy',
    theme: 'consulting',
    headline: 'A clearer direction.\nA better next decision.',
    description:
      'Make sense of your market, priorities and growth options. Practical business and marketing thinking that turns scattered activity into a plan.',
    intro:
      'Make sense of your market, priorities and growth options. Practical business and marketing thinking that turns scattered activity into a plan.',
    problemTitle: 'Busy marketing can hide an unclear strategy.',
    problem:
      'Different channels, competing ideas and limited resources make it hard to know what to do next. We step back with you to examine the customer journey and the decisions behind it.',
    approachTitle: 'Start with the business question.',
    approach:
      'We combine an audit of your current activity with customer and market context. The output is a focused roadmap with priorities, responsibilities and ways to judge progress.',
    included: [
      'Marketing and business audits',
      'Go-to-market planning',
      'Customer acquisition strategy',
      'Funnel and journey review',
      'Digital growth planning',
      'Actionable strategy workshops',
    ],
    process: [
      'Frame the challenge',
      'Audit the current system',
      'Choose focused priorities',
      'Build the execution roadmap',
    ],
    benefits: [
      'Clearer investment priorities',
      'A shared direction for your team',
      'Practical decisions instead of channel noise',
    ],
    audience: [
      'Founders planning the next stage',
      'SMEs with fragmented marketing',
      'Teams preparing a launch',
    ],
    deliverables: [
      'Audit and opportunity summary',
      'Customer journey map',
      'Prioritized growth roadmap',
      'Workshop notes and next actions',
    ],
    faqs: [
      {
        question: 'Is consulting separate from execution?',
        answer:
          'It can be. You can use the roadmap with your own team or ask us to scope the execution.',
      },
      {
        question: 'Do we need to know which services we want?',
        answer:
          'No. Understanding the business problem comes first. We help identify which capabilities are useful.',
      },
      {
        question: 'What should we bring to the first conversation?',
        answer:
          'Your goals, current marketing activity and the questions you need answered are enough to begin.',
      },
    ],
    cta: 'Talk Strategy',
    related: ['branding-brand-strategy', 'performance-marketing', 'website-development'],
    outcome: 'Clearer investment priorities',
  },
  {
    number: '05',
    slug: 'business-loan-assistance',
    title: 'Business Loan Assistance & Guidance',
    shortTitle: 'Business Loan Assistance & Guidance',
    icon: 'Users',
    category: 'Strategy',
    theme: 'funding',
    headline: 'Plan the funding.\nPrepare the business.',
    description:
      'Organized assistance for businesses exploring funding. Understand the preparation involved, clarify your needs and approach the next conversation with better information.',
    intro:
      'Organized assistance for businesses exploring funding. Understand the preparation involved, clarify your needs and approach the next conversation with better information.',
    problemTitle: 'The preparation matters before the application.',
    problem:
      'Unclear funding goals and scattered documentation make financing conversations difficult. We help you organize the business context and identify questions to discuss with the appropriate provider.',
    approachTitle: 'Clarity, documentation and a considered next step.',
    approach:
      'We help structure your funding requirement, organize a readiness checklist and support application preparation. MyBrandsBuddy provides assistance and guidance; we are not a lender.',
    included: [
      'Funding readiness discussions',
      'Business funding planning',
      'Financing option orientation',
      'Documentation checklists',
      'Application preparation support',
      'Questions for funding providers',
    ],
    process: [
      'Clarify the funding purpose',
      'Review preparation needs',
      'Organize application information',
      'Support your next conversation',
    ],
    benefits: [
      'A clearly articulated funding need',
      'An organized preparation checklist',
      'Better questions for potential providers',
    ],
    audience: [
      'Business owners exploring funding',
      'SMEs preparing documentation',
      'Founders reviewing their next investment',
    ],
    deliverables: [
      'Funding-purpose summary',
      'Readiness and document checklist',
      'Application preparation notes',
      'Provider conversation checklist',
    ],
    faqs: [
      {
        question: 'Can you guarantee loan approval?',
        answer:
          'No. Approval, eligibility, rates and terms are determined by the lender or provider. We cannot guarantee approval or funding.',
      },
      {
        question: 'Are you a lender?',
        answer:
          'No. This service is assistance and guidance, not lending, credit underwriting or an offer of finance.',
      },
      {
        question: 'Should I send financial documents through this form?',
        answer:
          'No. Do not submit bank details, identity documents or sensitive financial information through the public enquiry form. We first agree the scope and an appropriate information-sharing process.',
      },
    ],
    cta: 'Discuss Your Funding Needs',
    related: ['business-marketing-consulting', 'website-development', 'branding-brand-strategy'],
    outcome: 'A clearly articulated funding need',
  },
  {
    number: '06',
    slug: 'website-development',
    title: 'Website Development — WordPress & Custom Code',
    shortTitle: 'Website Development',
    icon: 'Monitor',
    category: 'Technology',
    theme: 'web',
    headline: 'A better place\nfor your business online.',
    description:
      'Thoughtful interfaces, purposeful content and reliable development. WordPress or custom code, chosen around what your business actually needs.',
    intro:
      'Thoughtful interfaces, purposeful content and reliable development. WordPress or custom code, chosen around what your business actually needs.',
    problemTitle: 'Your website should make the decision easier.',
    problem:
      'Slow pages, confusing navigation and vague content add friction to an otherwise good offer. We shape the website around the questions customers ask and the action you want them to take.',
    approachTitle: 'Design the journey. Then choose the technology.',
    approach:
      'We map the content and conversion paths before choosing a stack. WordPress suits many editable business sites; custom development supports more tailored experiences and integrations.',
    included: [
      'UI/UX and content architecture',
      'WordPress development',
      'Custom-code websites',
      'Campaign landing pages',
      'Responsive performance work',
      'SEO-friendly page structure',
    ],
    process: [
      'Map the customer journey',
      'Design the experience',
      'Build and integrate',
      'Test, launch and hand over',
    ],
    benefits: [
      'A clear route to enquiry',
      'A considered mobile experience',
      'An editable, maintainable foundation',
    ],
    audience: [
      'Businesses replacing an ageing site',
      'Founders launching a new offer',
      'Teams needing tailored functionality',
    ],
    deliverables: [
      'Approved responsive designs',
      'Developed pages and integrations',
      'Launch and accessibility checks',
      'Handover and editing guidance',
    ],
    faqs: [
      {
        question: 'WordPress or custom code?',
        answer:
          'We recommend a platform after understanding your content, integrations, budget and maintenance needs. Neither is automatically the right choice.',
      },
      {
        question: 'Can you redesign without losing our content?',
        answer:
          'Yes. We audit the existing pages and plan content migration and redirects as part of the scope.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Handover is included in the agreed project. Maintenance, hosting and ongoing improvements are confirmed separately.',
      },
    ],
    cta: 'Build Your Website',
    related: ['seo-local-search', 'branding-brand-strategy', 'graphic-design'],
    outcome: 'A clear route to enquiry',
  },
  {
    number: '07',
    slug: 'graphic-design',
    title: 'Graphic Design & Creative Content',
    shortTitle: 'Graphic Design & Creative Content',
    icon: 'PenTool',
    category: 'Creative',
    theme: 'design',
    headline: 'Make every impression\nlook intentional.',
    description:
      'Campaigns, presentations and everyday brand graphics, built with a coherent visual language. Good design that earns its place in your marketing.',
    intro:
      'Campaigns, presentations and everyday brand graphics, built with a coherent visual language. Good design that earns its place in your marketing.',
    problemTitle: 'Disconnected visuals dilute a good brand.',
    problem:
      'When each asset starts from scratch, quality becomes inconsistent and production slows down. We build visual systems that give your team a clear direction without making every creative look the same.',
    approachTitle: 'An idea first. A system behind it.',
    approach:
      'We connect each design to the message, audience and format. Campaign concepts extend into coordinated assets, with enough flexibility for different channels and moments.',
    included: [
      'Campaign creative concepts',
      'Social media graphics',
      'Brand and marketing assets',
      'Presentation design',
      'Digital campaign adaptations',
      'Reusable creative templates',
    ],
    process: [
      'Understand the message',
      'Develop the visual concept',
      'Build and adapt the assets',
      'Package for everyday use',
    ],
    benefits: [
      'A consistent visual standard',
      'More coherent campaigns',
      'Assets built for their actual channels',
    ],
    audience: [
      'Marketing teams needing design support',
      'Businesses launching campaigns',
      'Founders presenting a new idea',
    ],
    deliverables: [
      'Approved campaign assets',
      'Platform-specific exports',
      'Editable templates within scope',
      'Asset and usage guide',
    ],
    faqs: [
      {
        question: 'Can you follow our existing guidelines?',
        answer:
          'Yes. Share the current brand system and we will work within it, highlighting any gaps that affect the brief.',
      },
      {
        question: 'Do you create presentation decks?',
        answer:
          'Yes. We can help structure and design business or marketing presentations using your approved content.',
      },
      {
        question: 'How many revisions are included?',
        answer:
          'Revision rounds, feedback checkpoints and final file formats are agreed in the project scope.',
      },
    ],
    cta: 'Create Better Visuals',
    related: ['branding-brand-strategy', 'content-creation', 'social-media-marketing'],
    outcome: 'A consistent visual standard',
  },
  {
    number: '08',
    slug: 'video-production',
    title: 'Video Editing & Video Production',
    shortTitle: 'Video Editing & Video Production',
    icon: 'MousePointerClick',
    category: 'Production',
    theme: 'video',
    headline: 'A good story.\nBeautifully in motion.',
    description:
      'From the first hook to the final frame. Video production and editing that give your brand a voice, a pace and something worth watching.',
    intro:
      'From the first hook to the final frame. Video production and editing that give your brand a voice, a pace and something worth watching.',
    problemTitle: 'Attention needs a reason to stay.',
    problem:
      'A collection of clips is not yet a story. We shape the idea, structure and rhythm around the message, whether you need a short social reel or a considered brand film.',
    approachTitle: 'Plan for the way people watch.',
    approach:
      'We begin with the audience, platform and purpose. Storyboards guide production; editing, sound and motion bring clarity to the final piece. Each version is built for its destination.',
    included: [
      'Short-form videos and reels',
      'Promotional and brand films',
      'Video editing and pacing',
      'Advertising video creative',
      'Motion graphics and titles',
      'Sound, captions and format adaptations',
    ],
    process: [
      'Shape the story',
      'Plan and produce footage',
      'Edit, sound and refine',
      'Deliver for each platform',
    ],
    benefits: [
      'A message with a clear narrative',
      'Consistent production quality',
      'Useful cuts for different channels',
    ],
    audience: [
      'Brands with a story to explain',
      'Businesses launching a product',
      'Teams with footage to turn into content',
    ],
    deliverables: [
      'Creative treatment or storyboard',
      'Approved final video masters',
      'Agreed platform cutdowns',
      'Captions and delivery formats',
    ],
    faqs: [
      {
        question: 'Can you edit footage we already have?',
        answer:
          'Yes. We first check the footage, sound, rights and intended output to agree what is possible.',
      },
      {
        question: 'Are filming and editing always bundled?',
        answer:
          'No. Editing-only and full production scopes are available. Crew, locations and equipment depend on the brief.',
      },
      {
        question: 'Can you create multiple versions?',
        answer:
          'Yes. Aspect ratios, cutdowns, captions and language versions are specified before production.',
      },
    ],
    cta: 'Create Your Next Video',
    related: ['photography-videography', 'iphone-camera-shoots', 'performance-marketing'],
    outcome: 'A message with a clear narrative',
  },
  {
    number: '09',
    slug: 'photography-videography',
    title: 'Photography / Videography',
    shortTitle: 'Photography / Videography',
    icon: 'Search',
    category: 'Production',
    theme: 'photography',
    headline: 'Show what makes\nyour business yours.',
    description:
      'A considered image library for your brand, products, people and spaces. Photography and videography with a clear role in your business story.',
    intro:
      'A considered image library for your brand, products, people and spaces. Photography and videography with a clear role in your business story.',
    problemTitle: 'Your own visuals make the difference visible.',
    problem:
      'Generic imagery rarely captures the care behind a business. A planned shoot gives you authentic material for your website, campaigns and everyday communication.',
    approachTitle: 'A visual story, planned before the shutter.',
    approach:
      'We work from the brand direction, shot list and final uses. Location, lighting and production are coordinated so the shoot delivers a practical library, not just a few beautiful frames.',
    included: [
      'Brand and business photography',
      'Product photography',
      'Corporate and team visuals',
      'Event coverage within scope',
      'Promotional videography',
      'Shoot planning and art direction',
    ],
    process: [
      'Define the visual story',
      'Plan the location and shot list',
      'Capture with purpose',
      'Select, edit and deliver',
    ],
    benefits: [
      'A cohesive brand image library',
      'Visuals specific to your business',
      'Assets planned for reuse',
    ],
    audience: [
      'Product and retail brands',
      'Professional service businesses',
      'Teams needing campaign or event visuals',
    ],
    deliverables: [
      'Agreed selection of edited images',
      'Video outputs within scope',
      'Web and print export formats',
      'Asset usage and handover notes',
    ],
    faqs: [
      {
        question: 'Do you travel for shoots?',
        answer:
          'Location, travel and production requirements are discussed when scoping the shoot. Availability is confirmed before booking.',
      },
      {
        question: 'How many final images are included?',
        answer:
          'The shot list and edited image count are agreed in the proposal, along with formats and delivery timing.',
      },
      {
        question: 'Can images be used in paid ads?',
        answer:
          'We confirm the intended usage and any relevant talent, location or asset permissions before the shoot.',
      },
    ],
    cta: 'Plan a Shoot',
    related: ['graphic-design', 'website-development', 'video-production'],
    outcome: 'A cohesive brand image library',
  },
  {
    number: '10',
    slug: 'iphone-camera-shoots',
    title: 'iPhone & Camera Shoots',
    shortTitle: 'iPhone & Camera Shoots',
    icon: 'Smartphone',
    category: 'Production',
    theme: 'mobile',
    headline: 'Real moments.\nReady for the feed.',
    description:
      'Agile iPhone content shoots and professional camera production for founders, products and everyday brand stories. Pick the setup that fits the idea.',
    intro:
      'Agile iPhone content shoots and professional camera production for founders, products and everyday brand stories. Pick the setup that fits the idea.',
    problemTitle: 'Great content doesn’t always need a big set.',
    problem:
      'Founders and local teams often need fresh content more regularly than a large production allows. A focused shoot can capture a useful batch of stories in a format that feels native to social.',
    approachTitle: 'Choose the tool around the story.',
    approach:
      'We plan a concise shot list, content hooks and locations. iPhone capture suits quick, natural content; a professional camera setup adds control where the brief needs it.',
    included: [
      'iPhone content sessions',
      'Professional camera shoots',
      'Founder and personal-brand content',
      'Product and lifestyle content',
      'Reels and short social footage',
      'On-location content production',
    ],
    process: [
      'Plan the content moments',
      'Choose the capture setup',
      'Shoot a focused batch',
      'Edit for social delivery',
    ],
    benefits: [
      'A fresh bank of usable content',
      'A lighter production workflow',
      'A more personal brand presence',
    ],
    audience: [
      'Founders and creators',
      'Local businesses with regular updates',
      'Product teams needing social assets',
    ],
    deliverables: [
      'Agreed edited reel package',
      'Selected images or clips',
      'Vertical-first platform exports',
      'Content handover notes',
    ],
    faqs: [
      {
        question: 'How do we choose iPhone or camera?',
        answer:
          'We look at the setting, lighting, desired finish and final use. The equipment should serve the content rather than dictate it.',
      },
      {
        question: 'Can you help us feel comfortable on camera?',
        answer:
          'We plan prompts, talking points and shot ideas so the session has structure and room for natural moments.',
      },
      {
        question: 'Is this available on location?',
        answer:
          'On-location production is scoped around location, access, timing and travel requirements.',
      },
    ],
    cta: 'Book a Shoot',
    related: ['social-media-marketing', 'content-creation', 'video-production'],
    outcome: 'A fresh bank of usable content',
  },
  {
    number: '11',
    slug: 'content-creation',
    title: 'Content Creation',
    shortTitle: 'Content Creation',
    icon: 'PenTool',
    category: 'Creative',
    theme: 'content',
    headline: 'Good stories need\na working system.',
    description:
      'Turn what your business knows into useful, consistent content. Strategy, scripts and publishing systems that keep your message moving.',
    intro:
      'Turn what your business knows into useful, consistent content. Strategy, scripts and publishing systems that keep your message moving.',
    problemTitle: 'A blank calendar is usually a strategy problem.',
    problem:
      'Random ideas and last-minute posts make it difficult to build a recognisable voice. We turn customer questions, business priorities and your expertise into a focused editorial plan.',
    approachTitle: 'Build around the questions worth answering.',
    approach:
      'We define content pillars and a practical calendar, then create the words and visual direction for each format. Approval and publishing workflows help good ideas reach the right channels.',
    included: [
      'Content strategy and pillars',
      'Editorial calendars',
      'Reel concepts and scripts',
      'Carousel planning and copy',
      'Captions and brand storytelling',
      'Publishing and approval systems',
    ],
    process: [
      'Find useful stories',
      'Build the editorial calendar',
      'Write and develop formats',
      'Organize publishing and learning',
    ],
    benefits: [
      'A consistent voice',
      'Less last-minute content pressure',
      'A reusable editorial approach',
    ],
    audience: [
      'Teams with expertise to share',
      'Founders building a public voice',
      'Businesses managing several channels',
    ],
    deliverables: [
      'Content strategy and calendar',
      'Approved scripts and captions',
      'Agreed visual content assets',
      'Publishing and approval workflow',
    ],
    faqs: [
      {
        question: 'Is this the same as social media management?',
        answer:
          'No. Content creation develops the ideas and assets. Account publishing and community management are separate services that can be connected.',
      },
      {
        question: 'Can you use our existing material?',
        answer:
          'Yes. We can reshape approved articles, talks, product information and footage into new formats when rights allow.',
      },
      {
        question: 'How is content approved?',
        answer:
          'We agree review rounds, owners and deadlines before production so publishing stays predictable.',
      },
    ],
    cta: 'Build Your Content Engine',
    related: ['social-media-marketing', 'graphic-design', 'video-production'],
    outcome: 'A consistent voice',
  },
  {
    number: '12',
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    shortTitle: 'Performance Marketing',
    icon: 'ChartNoAxesCombined',
    category: 'Discovery',
    theme: 'performance',
    headline: 'Every campaign\nneeds a clear purpose.',
    description:
      'Paid media built around the action that matters. Creative testing, useful measurement and continuous optimization across Google and Meta.',
    intro:
      'Paid media built around the action that matters. Creative testing, useful measurement and continuous optimization across Google and Meta.',
    problemTitle: 'Clicks are only part of the picture.',
    problem:
      'A campaign can attract attention without creating the right enquiries. We examine the offer, audience, creative and landing journey together so the reporting reflects more than traffic.',
    approachTitle: 'Connect the creative to the conversion.',
    approach:
      'We define the campaign goal and measurement plan before launch. Audience and creative tests produce useful learning; budget decisions follow the evidence rather than a guess.',
    included: [
      'Google Ads and Meta Ads',
      'Lead-generation campaigns',
      'Retargeting where appropriate',
      'Creative and offer testing',
      'Landing-page and funnel review',
      'Campaign optimization and reporting',
    ],
    process: [
      'Define the conversion',
      'Build tracking and creative',
      'Launch controlled tests',
      'Review quality and optimize',
    ],
    benefits: [
      'A clearer view of campaign spend',
      'Structured creative learning',
      'A connected enquiry journey',
    ],
    audience: [
      'Businesses with a clear offer',
      'Teams ready to invest in paid reach',
      'Brands improving an existing funnel',
    ],
    deliverables: [
      'Campaign and measurement plan',
      'Approved ad creative and setup',
      'Testing and optimization log',
      'Spend and conversion reporting',
    ],
    faqs: [
      {
        question: 'Is the ad budget included?',
        answer: 'No. Media spend is separate from management fees and is agreed before launch.',
      },
      {
        question: 'Can you guarantee leads or return on spend?',
        answer:
          'No. Outcomes depend on the offer, market, budget and execution. We report transparently and optimize within the agreed plan.',
      },
      {
        question: 'Do we need a landing page?',
        answer:
          'We review the existing destination first. A new or improved landing page may be recommended if it addresses a clear gap.',
      },
    ],
    cta: 'Launch a Campaign',
    related: ['website-development', 'video-production', 'business-marketing-consulting'],
    outcome: 'A clearer view of campaign spend',
  },
  {
    number: '13',
    slug: 'real-estate-marketing',
    title: 'Real Estate Marketing — Video Shoot, Ads & SMM',
    shortTitle: 'Real Estate Marketing',
    icon: 'Monitor',
    category: 'Discovery',
    theme: 'estate',
    headline: 'A property is a place.\nMake people feel it.',
    description:
      'Connect cinematic property content, paid campaigns and social presence. A complete marketing story from the first impression to a qualified conversation.',
    intro:
      'Connect cinematic property content, paid campaigns and social presence. A complete marketing story from the first impression to a qualified conversation.',
    problemTitle: 'Square footage doesn’t tell the whole story.',
    problem:
      'Buyers need to understand the space, setting and reason to enquire. Disconnected listing content and campaigns can miss what makes a property distinctive. We build one considered launch narrative.',
    approachTitle: 'Show the place. Frame the opportunity.',
    approach:
      'We plan property photography and films around the buyer journey, then translate that story into listing content, social media and paid campaigns. Your team handles property advice and sales; we support the marketing journey.',
    included: [
      'Property video shoots and photography',
      'Real estate reels and listing content',
      'Meta Ads and lead generation',
      'Social media management',
      'Agent personal branding',
      'Property and project launch campaigns',
    ],
    process: [
      'Understand the property and audience',
      'Capture the space and its story',
      'Build the launch campaign',
      'Review enquiries and refine',
    ],
    benefits: [
      'A coherent property presentation',
      'Creative aligned across channels',
      'A clearer path from interest to enquiry',
    ],
    audience: [
      'Real estate agents and consultants',
      'Developers planning a project launch',
      'Property businesses building a brand',
    ],
    deliverables: [
      'Property photo and video package',
      'Listing and social creative',
      'Agreed campaign setup',
      'Enquiry and campaign review',
    ],
    faqs: [
      {
        question: 'Do you offer shoots without ad management?',
        answer:
          'Yes. Property content and complete campaign scopes can be commissioned separately.',
      },
      {
        question: 'Do you guarantee sales or qualified leads?',
        answer:
          'No. We improve the presentation and marketing journey, but cannot guarantee enquiries, lead quality or property sales.',
      },
      {
        question: 'Who verifies property claims and approvals?',
        answer:
          'Your team supplies and approves accurate property details, required disclosures and permissions before publication. We do not invent project facts.',
      },
    ],
    cta: 'Market Your Property',
    related: ['photography-videography', 'performance-marketing', 'social-media-marketing'],
    outcome: 'A coherent property presentation',
  },
];

// Preserve previously published specialist URLs while the primary catalog follows the new brief.
export const supplementalServices: Service[] = legacyServices
  .filter((s) => ['app-store-optimization', 'whatsapp-marketing'].includes(s.slug))
  .map((s) => ({
    ...s,
    number: '+',
    category: 'Specialist',
    theme: s.slug === 'whatsapp-marketing' ? 'social' : 'mobile',
    problemTitle: s.headline,
    problem: s.intro,
    approachTitle: 'A focused plan for your next step.',
    approach: s.outcome,
    included: s.deliverables,
    process: [
      'Review the current experience',
      'Agree the priorities',
      'Implement the plan',
      'Review and improve',
    ],
    benefits: [s.outcome],
    audience: [s.audience],
    faqs: [
      {
        question: 'Can this be scoped as a standalone service?',
        answer: 'Yes. We agree your needs, deliverables and budget before beginning.',
      },
    ],
    cta: 'Discuss this service',
    related: ['content-creation', 'performance-marketing'],
  }));
export const allServices = [...services, ...supplementalServices];
export const serviceGroups = [
  'Strategy',
  'Discovery',
  'Technology',
  'Creative',
  'Production',
] as const;
