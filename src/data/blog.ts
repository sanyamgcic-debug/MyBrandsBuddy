export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  theme: string;
  sections: { heading: string; body: string }[];
};
export const articles: Article[] = [
  {
    slug: 'why-your-local-business-is-not-showing-on-google',
    title: '5 reasons your local business isn’t showing on Google',
    category: 'SEO',
    readTime: '5 min read',
    theme: 'search',
    excerpt: 'Start with the foundations that help customers find and understand your business.',
    sections: [
      {
        heading: '1. Your business information is missing or incomplete',
        body: 'Start by checking whether your Google Business Profile represents your business accurately. Review the name, address, contact information, opening hours and category. A complete, consistent profile makes it easier for customers to understand what you offer.',
      },
      {
        heading: '2. Your website doesn’t explain your local offer',
        body: 'Your service pages should clearly describe what you do and the places you serve. Write useful information for a real customer: your services, the questions you hear most often and the next step to make an enquiry. Avoid repeating city names just to fill the page.',
      },
      {
        heading: '3. Your details differ across the web',
        body: 'Compare the business details on your website, social profiles and relevant local directories. Old phone numbers or conflicting addresses create confusion. Keep a simple record of where your business is listed so updates are easier.',
      },
      {
        heading: '4. Customers cannot see recent evidence of your work',
        body: 'Add real photos of your premises, products or work, with permission where needed. Invite customers to share an honest review of their experience. Do not buy reviews or offer rewards in exchange for positive feedback.',
      },
      {
        heading: '5. You are not measuring the right starting point',
        body: 'Write down your current visibility, website enquiries and calls before making changes. Review progress regularly and look for useful customer actions. Search positions vary, and no one can promise a particular ranking.',
      },
      {
        heading: 'Your next step',
        body: 'Begin with an accurate profile, a useful service page and a clear contact route. These are the digital foundations in our growth framework. A free brand audit can help you decide what to work on first.',
      },
    ],
  },
  {
    slug: 'instagram-vs-facebook-for-local-business',
    title: 'Instagram or Facebook: where should your business show up?',
    category: 'Social Media',
    readTime: '4 min read',
    theme: 'social',
    excerpt:
      'Choose your platform around your customers and the stories you can share consistently.',
    sections: [
      {
        heading: 'Start with your customer, not the platform',
        body: 'Ask who you want to reach, how they discover businesses like yours and what they need to see before getting in touch. Your strongest platform is the one that connects those questions to content you can keep making.',
      },
      {
        heading: 'For visual businesses, show the work',
        body: 'Our salon strategy focuses on Instagram because transformations, service demonstrations and behind-the-scenes stories suit a visual portfolio. Restaurants can use the same approach with dishes, daily specials and the people preparing them. Always get permission before featuring customers.',
      },
      {
        heading: 'For education, build a useful community',
        body: 'The coaching strategy combines longer sample lessons on YouTube with helpful parent and student updates on Facebook. The principle is simple: share something genuinely useful, then give interested families a clear route to a demo class.',
      },
      {
        heading: 'Give every post a purpose',
        body: 'A post can answer a question, introduce a service, demonstrate your work or invite a booking. Choose one clear purpose. Keep your contact details and relevant booking or menu links easy to find.',
      },
      {
        heading: 'Review what leads to a conversation',
        body: 'Track enquiries and bookings alongside engagement. A smaller audience that understands your offer can be more useful than a large follower count with little interest in your business. Use those conversations to shape next month’s content.',
      },
    ],
  },
  {
    slug: 'five-step-local-business-growth-framework',
    title: 'A five-step growth plan for your local business',
    category: 'Business Growth',
    readTime: '6 min read',
    theme: 'strategy',
    excerpt:
      'Audit, foundation, visibility, conversion and scale — a practical order for your next move.',
    sections: [
      {
        heading: '1. Audit: understand where you are',
        body: 'List your current sources of customers, the questions people ask and your biggest obstacle. Review how competitors explain their services. The goal is to understand the gap between your business today and the customer experience you want to create.',
      },
      {
        heading: '2. Foundation: make the essentials work',
        body: 'Connect your business profile, relevant social accounts, website and WhatsApp Business information. Keep the basics accurate. A customer should be able to understand your offer and reach you without hunting across multiple pages.',
      },
      {
        heading: '3. Visibility: become easier to discover',
        body: 'Build a regular rhythm of useful content, relevant local listings and honest customer reviews. Choose topics around the questions your audience actually asks. Keep your activity manageable enough to sustain.',
      },
      {
        heading: '4. Conversion: make the next step obvious',
        body: 'A restaurant needs a menu and order route. A salon needs service information and a booking path. A coaching institute needs a clear demo or enrolment journey. Match your call to action to the decision your customer is ready to make.',
      },
      {
        heading: '5. Scale: learn before spending more',
        body: 'Review the channels producing relevant enquiries and repeat business. Improve the experience, build a referral process and test paid promotion with an agreed budget. Scaling works best when you understand the foundations you are building on.',
      },
    ],
  },
];
