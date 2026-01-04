export const blogTopics = [
  {
    id: "all",
    label: "All topics",
    description: "Notes from building AI systems end to end.",
  },
  {
    id: "applied-ai",
    label: "Applied AI + LLMs",
    description: "LLM features, agent workflows, and evaluation.",
  },
  {
    id: "data-engineering",
    label: "Data + RAG",
    description: "Retrieval pipelines, embeddings, and data quality.",
  },
  {
    id: "cloud-mlops",
    label: "MLOps + Platform",
    description: "Shipping, monitoring, and scaling AI services.",
  },
  {
    id: "analytics-consulting",
    label: "AI Delivery",
    description: "Impact-first systems for regulated industries.",
  },
];

export const blogTopicMap = blogTopics.reduce((acc, topic) => {
  acc[topic.id] = topic;
  return acc;
}, {});
