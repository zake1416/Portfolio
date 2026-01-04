export const blogPosts = [
  {
    id: "llm-systems-production",
    slug: "llm-systems-production",
    title: "LLM Systems That Survive Production",
    date: "2024-09-12",
    readTime: "6 min read",
    category: "cloud-mlops",
    tags: ["LLMOps", "Observability", "Reliability"],
    excerpt:
      "A short checklist for shipping LLM features that stay reliable after launch.",
    summary:
      "I focus on reliability before scale: strict contracts, traceable outputs, and guardrails that keep AI usable in real workflows.",
    content: [
      { type: "heading", level: 2, text: "Define a production contract" },
      {
        type: "paragraph",
        text:
          "Every LLM feature needs a clear input schema, output format, and a measurable success metric. This keeps teams aligned when prompts or models change.",
      },
      {
        type: "callout",
        title: "What I track",
        body: "Latency, cost per request, output quality score, and fallback rate.",
      },
      { type: "heading", level: 2, text: "Add guardrails early" },
      {
        type: "paragraph",
        text:
          "I use structured prompts, tool boundaries, and deterministic fallbacks. A small rules layer prevents most production surprises.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Schema validation for outputs",
          "Safety filters for sensitive data",
          "Golden test set for every release",
        ],
      },
      { type: "heading", level: 2, text: "Instrument everything" },
      {
        type: "paragraph",
        text:
          "Every response should be traceable to its prompt, model version, retrieval context, and user intent.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        alt: "Dashboard tiles on a screen",
        caption: "Observability turns LLM behavior into debuggable signals.",
      },
      {
        type: "code",
        language: "json",
        code:
          "{\n  \"request_id\": \"req_124\",\n  \"model\": \"gpt-4.1\",\n  \"latency_ms\": 820,\n  \"tokens\": 1423,\n  \"quality_score\": 0.91\n}",
      },
      {
        type: "link",
        label: "LLM release checklist",
        href: "https://example.com/llm-release-checklist",
      },
    ],
  },
  {
    id: "rag-pipeline-blueprint",
    slug: "rag-pipeline-blueprint",
    title: "RAG Pipeline Blueprint for Real Products",
    date: "2024-10-03",
    readTime: "7 min read",
    category: "data-engineering",
    tags: ["RAG", "Vector Search", "Data Quality"],
    excerpt:
      "A clean, repeatable pipeline for retrieval that does not drift over time.",
    summary:
      "Good RAG is mostly data engineering: clean inputs, stable chunking, and evaluation that proves relevance.",
    content: [
      { type: "heading", level: 2, text: "Start with sources" },
      {
        type: "paragraph",
        text:
          "Choose the documents that truly answer user questions, then document their refresh cadence and owners.",
      },
      {
        type: "code",
        language: "python",
        code:
          "from pydantic import BaseModel\n\nclass DocChunk(BaseModel):\n    source_id: str\n    section: str\n    text: str\n",
      },
      { type: "heading", level: 2, text: "Chunk with intent" },
      {
        type: "paragraph",
        text:
          "I prefer semantic chunking over fixed sizes so retrieval returns meaningful, self-contained answers.",
      },
      {
        type: "workflow",
        title: "RAG workflow",
        steps: [
          {
            title: "Ingest",
            detail: "Collect docs, normalize metadata, and store raw text.",
          },
          {
            title: "Index",
            detail: "Chunk content and build embeddings with versioning.",
          },
          {
            title: "Evaluate",
            detail: "Score retrieval with a gold set before release.",
          },
        ],
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Curate sources with owners",
          "Freeze chunking rules",
          "Track embedding model versions",
        ],
      },
      { type: "heading", level: 2, text: "Measure relevance" },
      {
        type: "paragraph",
        text:
          "A simple eval set with expected passages keeps retrieval honest and reveals drift fast.",
      },
      {
        type: "video",
        title: "Retrieval pipeline overview",
        embedUrl: "https://www.youtube.com/embed/2Xc9gXyf2G4",
      },
      {
        type: "link",
        label: "RAG pipeline template",
        href: "https://example.com/rag-template",
      },
    ],
  },
  {
    id: "prompting-for-agents",
    slug: "prompting-for-agents",
    title: "Prompting for Reliable Agent Decisions",
    date: "2024-11-18",
    readTime: "5 min read",
    category: "applied-ai",
    tags: ["Agents", "Prompting", "Safety"],
    excerpt:
      "How I structure prompts so agent outputs are stable, testable, and safe.",
    summary:
      "Agent workflows succeed when prompts act like contracts. I design them with roles, tools, and verification steps.",
    content: [
      { type: "heading", level: 2, text: "Start with role clarity" },
      {
        type: "paragraph",
        text:
          "Each agent gets a role, tools, and a strict output schema. That removes ambiguity and improves reliability.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
        alt: "Cars on a city road at sunset",
        caption: "Clear roles keep agent coordination stable.",
      },
      { type: "heading", level: 2, text: "Constrain tools" },
      {
        type: "paragraph",
        text:
          "Only expose the tools required for the task. Fewer tools means fewer failure modes.",
      },
      {
        type: "list",
        style: "unordered",
        items: ["Tool allowlists", "Rate limits", "Human approval gates"],
      },
      { type: "heading", level: 2, text: "Verify the output" },
      {
        type: "paragraph",
        text:
          "Run a lightweight checker or secondary model to validate key facts before responding.",
      },
      {
        type: "link",
        label: "Agent prompt checklist",
        href: "https://example.com/agent-checklist",
      },
    ],
  },
  {
    id: "llm-prototype-to-api",
    slug: "llm-prototype-to-api",
    title: "From Prototype to API: Shipping LLM Features",
    date: "2024-12-02",
    readTime: "8 min read",
    category: "cloud-mlops",
    tags: ["Deployment", "FastAPI", "LLMs"],
    excerpt:
      "How I turn an LLM experiment into a stable, monitored endpoint.",
    summary:
      "Reliability is the feature. I ship with tests, telemetry, and rollback paths.",
    content: [
      { type: "heading", level: 2, text: "Package the model" },
      {
        type: "paragraph",
        text:
          "Freeze dependencies, version prompts, and expose a single inference surface for the UI or downstream services.",
      },
      {
        type: "code",
        language: "python",
        code:
          "def run_llm(request):\n    prompt = build_prompt(request)\n    return llm.invoke(prompt)",
      },
      { type: "heading", level: 2, text: "Expose a clean API" },
      {
        type: "paragraph",
        text:
          "Use a thin FastAPI layer with input validation and strict response schemas.",
      },
      {
        type: "workflow",
        title: "Release workflow",
        steps: [
          { title: "Build", detail: "Containerize and run unit + prompt tests." },
          {
            title: "Deploy",
            detail: "Ship to staging with golden set evaluation.",
          },
          {
            title: "Promote",
            detail: "Canary release with alerts and rollback ready.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Monitor what matters" },
      {
        type: "paragraph",
        text:
          "Track latency, cost, and quality. Tie metrics to a business outcome, not just tokens.",
      },
      {
        type: "link",
        label: "LLM observability guide",
        href: "https://example.com/llm-observability",
      },
    ],
  },
];
