import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogPosts } from "../constants/blogPosts";
import { blogTopics, blogTopicMap } from "../constants/blogTopics";

const BlogIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTopic, setActiveTopic] = useState("all");

  useEffect(() => {
    const nextTopic = searchParams.get("topic");
    const resolvedTopic =
      nextTopic && blogTopicMap[nextTopic] ? nextTopic : "all";
    setActiveTopic(resolvedTopic);
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    if (activeTopic === "all") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === activeTopic);
  }, [activeTopic]);

  const handleTopicSelect = (topicId) => {
    setSearchParams(topicId === "all" ? {} : { topic: topicId });
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-6 sm:px-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-700">
            Writing
          </p>
          <h1 className="text-4xl font-semibold text-stone-900 sm:text-5xl">
            Notes, guides, and project stories
          </h1>
          <p className="max-w-2xl text-base text-stone-600 sm:text-lg">
            Notes on building applied AI systems: LLM features, RAG pipelines,
            and production reliability.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Interest topics
              </p>
              <div className="mt-4 space-y-3">
                {blogTopics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleTopicSelect(topic.id)}
                    className={`w-full rounded-xl border px-4 py-3 text-left transition-all ${
                      activeTopic === topic.id
                        ? "border-amber-400/40 bg-amber-100 text-stone-900 shadow-lg"
                        : "paper-panel border-stone-900/10 text-stone-900 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    <p className="font-semibold">{topic.label}</p>
                    <p
                      className={`mt-1 text-xs ${
                        activeTopic === topic.id
                          ? "text-amber-800/80"
                          : "text-stone-500"
                      }`}
                    >
                      {topic.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="paper-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Current focus
              </p>
              <p className="mt-3 text-sm text-stone-600">
                Focused on AI engineering and LLM systems that ship cleanly:
                reliable, testable, and safe for real users.
              </p>
            </div>
          </aside>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-stone-900">
                {blogTopicMap[activeTopic]?.label || "Articles"}
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                {filteredPosts.length} posts
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="paper-panel mt-6 rounded-2xl p-6 text-stone-600">
                New posts are coming soon for this topic. Pick another area or
                check back later.
              </div>
            ) : (
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="blog-fade-up paper-panel rounded-[26px] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-stone-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-amber-700/80">
                      {blogTopicMap[post.category]?.label || "General"}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="transition-colors hover:text-amber-700"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-stone-600">{post.excerpt}</p>
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
                    <div className="mt-6">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-amber-700"
                      >
                        Read article
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogIndex;
