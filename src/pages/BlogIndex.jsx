// src/pages/BlogIndex.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogPosts } from "../constants/blogPosts";
import { blogTopics, blogTopicMap } from "../constants/blogTopics";

const BlogIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTopic, setActiveTopic] = useState("all");

  useEffect(() => {
    const nextTopic = searchParams.get("topic");
    const resolvedTopic = nextTopic && blogTopicMap[nextTopic] ? nextTopic : "all";
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
      <section className="max-w-6xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col gap-4">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs">
            Writing
          </p>
          <h1 className="text-slate-100 text-4xl sm:text-5xl font-black">
            Notes, guides, and project stories
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Notes on building applied AI systems: LLM features, RAG pipelines,
            and production reliability.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-28 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Interest topics
              </p>
              <div className="mt-4 space-y-3">
                {blogTopics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleTopicSelect(topic.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                      activeTopic === topic.id
                        ? "bg-cyan-400/20 text-slate-100 border-cyan-400/60 shadow-lg"
                        : "bg-[#0b1226] text-slate-100 border-white/10 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    <p className="font-semibold">{topic.label}</p>
                    <p
                      className={`mt-1 text-xs ${
                        activeTopic === topic.id
                          ? "text-cyan-100/80"
                          : "text-slate-400"
                      }`}
                    >
                      {topic.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-[#0b1226] border border-white/10 rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Current focus
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Focused on AI engineering and LLM systems that ship cleanly:
                reliable, testable, and safe for real users.
              </p>
            </div>
          </aside>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-100">
                {blogTopicMap[activeTopic]?.label || "Articles"}
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {filteredPosts.length} posts
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="mt-6 bg-[#0b1226] border border-white/10 rounded-2xl p-6 text-slate-300">
                New posts are coming soon for this topic. Pick another area or
                check back later.
              </div>
            ) : (
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="blog-fade-up bg-[#0b1226] border border-white/10 rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-[0.18em]">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cyan-300/80">
                      {blogTopicMap[post.category]?.label || "General"}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-100">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-cyan-300 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-slate-300">{post.excerpt}</p>
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
                    <div className="mt-6">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors"
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
