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
        <section className="mx-auto max-w-3xl px-6 sm:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-700">
            Not found
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            That article is not here.
          </h1>
          <p className="mt-4 text-stone-600">
            The link may be outdated. Head back to the blog index to choose a
            post.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-amber-700"
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
            className="scroll-mt-28 text-2xl font-semibold text-stone-900 sm:text-3xl"
          >
            {block.text}
          </HeadingTag>
        );
      }
      case "paragraph":
        return (
          <p
            key={`${block.type}-${index}`}
            className="leading-relaxed text-stone-600"
          >
            {block.text}
          </p>
        );
      case "list": {
        const ListTag = block.style === "ordered" ? "ol" : "ul";
        return (
          <ListTag
            key={`${block.type}-${index}`}
            className={`space-y-2 pl-6 text-stone-600 ${
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
            className="paper-panel overflow-hidden rounded-2xl shadow-sm"
          >
            <img src={block.src} alt={block.alt} className="h-auto w-full" />
            {block.caption && (
              <figcaption className="px-4 py-3 text-xs text-stone-500">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      case "video":
        return (
          <div
            key={`${block.type}-${index}`}
            className="paper-panel rounded-2xl p-4 shadow-sm"
          >
            {block.title && (
              <p className="text-sm font-semibold text-stone-900">
                {block.title}
              </p>
            )}
            <div className="mt-3 aspect-video w-full">
              <iframe
                className="h-full w-full rounded-xl"
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
            className="theme-code-block overflow-x-auto rounded-2xl border border-stone-900/10 p-5 text-sm text-stone-50"
          >
            {block.language && (
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300">
                {block.language}
              </span>
            )}
            <code className="mt-3 block whitespace-pre-wrap">{block.code}</code>
          </pre>
        );
      case "link": {
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-amber-700"
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
            className="paper-panel rounded-2xl p-5"
          >
            {block.title && (
              <p className="text-sm font-semibold text-stone-900">
                {block.title}
              </p>
            )}
            <p className="mt-2 text-stone-600">{block.body}</p>
          </aside>
        );
      case "workflow":
        return (
          <div
            key={`${block.type}-${index}`}
            className="paper-panel rounded-2xl p-5"
          >
            {block.title && (
              <p className="text-sm font-semibold text-stone-900">
                {block.title}
              </p>
            )}
            <div className="mt-4 space-y-4">
              {block.steps.map((step, stepIndex) => (
                <div key={`${block.type}-${index}-${stepIndex}`} className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-700/50 text-xs font-bold text-amber-800">
                    {stepIndex + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">
                      {step.title}
                    </p>
                    <p className="text-sm text-stone-600">{step.detail}</p>
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
      <section className="mx-auto max-w-6xl px-6 sm:px-16">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Topics
              </p>
              <div className="mt-4 space-y-3">
                {blogTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={topic.id === "all" ? "/blog" : `/blog?topic=${topic.id}`}
                    className={`block rounded-xl border px-4 py-3 transition-all ${
                      post.category === topic.id
                        ? "border-amber-400/40 bg-amber-100 text-stone-900 shadow-lg"
                        : "paper-panel border-stone-900/10 text-stone-900 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    <p className="font-semibold">{topic.label}</p>
                    <p
                      className={`mt-1 text-xs ${
                        post.category === topic.id
                          ? "text-amber-800/80"
                          : "text-stone-500"
                      }`}
                    >
                      {topic.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="paper-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                In this article
              </p>
              <div className="mt-4 space-y-2">
                {headingBlocks.map((heading) => {
                  const anchor = toSlug(heading.text);
                  return (
                    <a
                      key={anchor}
                      href={`#${anchor}`}
                      className="block text-sm text-stone-700 transition-colors hover:text-amber-700"
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
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-700"
            >
              ← Back to blog
            </Link>
            <header className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                {post.date} · {post.readTime}
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-stone-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-base text-stone-600 sm:text-lg">
                {post.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-amber-700/80">
                {blogTopicMap[post.category]?.label}
              </p>
            </header>

            <section className="mt-10 space-y-8">
              {post.content.map((block, index) => renderBlock(block, index))}
            </section>

            {relatedPosts.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-semibold text-stone-900">
                  Related articles
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {relatedPosts.map((entry, index) => (
                    <article
                      key={entry.id}
                      className="blog-fade-up paper-panel rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                        {entry.date} · {entry.readTime}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-stone-900">
                        <Link
                          to={`/blog/${entry.slug}`}
                          className="transition-colors hover:text-amber-700"
                        >
                          {entry.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-stone-600">{entry.excerpt}</p>
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
