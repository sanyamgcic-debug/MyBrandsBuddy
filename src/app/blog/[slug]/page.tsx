import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, CTA, SectionHeading } from '@/components/ui';
import { ArticleCard } from '@/components/cards';
import { articles } from '@/data/blog';
import { site } from '@/data/site';
import { pageMetadata, serializeJsonLd } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles.find(a => a.slug === slug); return article ? pageMetadata(article.title, article.excerpt, `/blog/${slug}`) : {}; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles.find(a => a.slug === slug); if (!article) notFound(); return <><PageHero eyebrow={`${article.category} · ${article.readTime}`} title={article.title} description="By the MyBrandsBuddy team"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/blog">Growth journal</Link><span aria-hidden="true">/</span><span>{article.category}</span></nav></PageHero><article className="section"><div className="container"><div className="prose"><p className="article-intro">{article.excerpt}</p>{article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</div></div></article><section className="section why-section"><div className="container"><SectionHeading eyebrow="Keep the ideas coming" title="A little more food for thought."/><div className="grid-three">{articles.filter(a => a.slug !== slug).map(a => <ArticleCard key={a.slug} article={a}/>)}</div></div></section><CTA/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.excerpt, author: { '@type': 'Organization', name: site.name }, mainEntityOfPage: `${site.url}/blog/${article.slug}`, publisher: { '@type': 'Organization', name: site.name } }) }}/></>; }
