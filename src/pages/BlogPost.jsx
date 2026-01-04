// src/pages/BlogPost.jsx
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../constants/blogPosts";
import { blogTopics, blogTopicMap } from "../constants/blogTopics";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);
  const headingBlocks = useMemo(() => {
    if (!post) return [];
    return post.content.filter((block) => block.type === "heading");
  }, [post]);

  const toSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <section className="max-w-3xl mx-auto px-6 sm:px-16">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.2em]">
            Not found
          </p>
          <h1 className="mt-4 text-slate-100 text-3xl sm:text-4xl font-black">
            That article is not here.
          </h1>
          <p className="mt-4 text-slate-300">
            The link may be outdated. Head back to the blog index to choose a
            post.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors"
          >
            Back to blog
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    );
  }

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "heading": {
        const HeadingTag = block.level === 3 ? "h3" : "h2";
        const anchorId = toSlug(block.text);
        return (
          <HeadingTag
            key={`${block.type}-${index}`}
            id={anchorId}
            className="scroll-mt-28 text-2xl sm:text-3xl font-bold text-slate-100"
          >
            {block.text}
          </HeadingTag>
        );
      }
      case "paragraph":
        return (
          <p
            key={`${block.type}-${index}`}
            className="text-slate-300 leading-relaxed"
          >
            {block.text}
          </p>
        );
      case "list": {
        const ListTag = block.style === "ordered" ? "ol" : "ul";
        return (
          <ListTag
            key={`${block.type}-${index}`}
            className={`pl-6 space-y-2 text-slate-300 ${
              block.style === "ordered" ? "list-decimal" : "list-disc"
            }`}
          >
            {block.items.map((item, itemIndex) => (
              <li key={`${block.type}-${index}-${itemIndex}`}>{item}</li>
            ))}
          </ListTag>
        );
      }
      case "image":
        return (
          <figure
            key={`${block.type}-${index}`}
            className="bg-[#0b1226] border border-white/10 rounded-2xl overflow-hidden shadow-sm"
          >
            <img src={block.src} alt={block.alt} className="w-full h-auto" />
            {block.caption && (
              <figcaption className="px-4 py-3 text-xs text-slate-400">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      case "video":
        return (
          <div
            key={`${block.type}-${index}`}
            className="bg-[#0b1226] border border-white/10 rounded-2xl p-4 shadow-sm"
          >
            {block.title && (
              <p className="text-sm font-semibold text-slate-100">
                {block.title}
              </p>
            )}
            <div className="mt-3 aspect-video w-full">
              <iframe
                className="w-full h-full rounded-xl"
                src={block.embedUrl}
                title={block.title || "Embedded video"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        );
      case "code":
        return (
          <pre
            key={`${block.type}-${index}`}
            className="bg-[#0b0f1f] text-slate-100 text-sm rounded-2xl p-5 overflow-x-auto border border-white/10"
          >
            {block.language && (
              <span className="uppercase tracking-[0.2em] text-[10px] text-cyan-300">
                {block.language}
              </span>
            )}
            <code className="block mt-3 whitespace-pre-wrap">
              {block.code}
            </code>
          </pre>
        );
      case "link":
        {
          const isExternal = /^https?:\/\//.test(block.href);
          const LinkTag = isExternal ? "a" : Link;
          const linkProps = isExternal
            ? {
                href: block.href,
                target: "_blank",
                rel: "noreferrer",
              }
            : { to: block.href };
          return (
            <LinkTag
              key={`${block.type}-${index}`}
              {...linkProps}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors"
            >
              {block.label}
              <span aria-hidden="true">→</span>
            </LinkTag>
          );
        }
      case "callout":
        return (
          <aside
            key={`${block.type}-${index}`}
            className="border border-white/10 bg-[#0b1226] rounded-2xl p-5"
          >
            {block.title && (
              <p className="text-sm font-semibold text-slate-100">
                {block.title}
              </p>
            )}
            <p className="mt-2 text-slate-300">{block.body}</p>
          </aside>
        );
      case "workflow":
        return (
          <div
            key={`${block.type}-${index}`}
            className="border border-white/10 bg-[#0b1226] rounded-2xl p-5"
          >
            {block.title && (
              <p className="text-sm font-semibold text-slate-100">
                {block.title}
              </p>
            )}
            <div className="mt-4 space-y-4">
              {block.steps.map((step, stepIndex) => (
                <div key={`${block.type}-${index}-${stepIndex}`} className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 text-xs font-bold text-cyan-200">
                    {stepIndex + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">
                      {step.title}
                    </p>
                    <p className="text-sm text-slate-300">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const relatedPosts = blogPosts
    .filter((entry) => entry.category === post.category && entry.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-6 sm:px-16">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-28 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Topics
              </p>
              <div className="mt-4 space-y-3">
                {blogTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={topic.id === "all" ? "/blog" : `/blog?topic=${topic.id}`}
                    className={`block px-4 py-3 rounded-xl border transition-all ${
                      post.category === topic.id
                        ? "bg-cyan-400/20 text-slate-100 border-cyan-400/60 shadow-lg"
                        : "bg-[#0b1226] text-slate-100 border-white/10 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    <p className="font-semibold">{topic.label}</p>
                    <p
                      className={`mt-1 text-xs ${
                        post.category === topic.id
                          ? "text-cyan-100/80"
                          : "text-slate-400"
                      }`}
                    >
                      {topic.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-[#0b1226] border border-white/10 rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                In this article
              </p>
              <div className="mt-4 space-y-2">
                {headingBlocks.map((heading) => {
                  const anchor = toSlug(heading.text);
                  return (
                    <a
                      key={anchor}
                      href={`#${anchor}`}
                      className="block text-sm text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {heading.text}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <article>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300"
            >
              ← Back to blog
            </Link>
            <header className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {post.date} · {post.readTime}
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-black text-slate-100">
                {post.title}
              </h1>
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                {post.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-cyan-200 bg-cyan-400/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
                {blogTopicMap[post.category]?.label}
              </p>
            </header>

            <section className="mt-10 space-y-8">
              {post.content.map((block, index) => renderBlock(block, index))}
            </section>

            {relatedPosts.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-bold text-slate-100">
                  Related articles
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {relatedPosts.map((entry, index) => (
                    <article
                      key={entry.id}
                      className="blog-fade-up bg-[#0b1226] border border-white/10 rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        {entry.date} · {entry.readTime}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-slate-100">
                        <Link
                          to={`/blog/${entry.slug}`}
                          className="hover:text-cyan-300 transition-colors"
                        >
                          {entry.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-slate-300">{entry.excerpt}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
