export type FreeTierType =
  | "free-tier"
  | "free-trial"
  | "free-credits"
  | "local-free"
  | "paid-only"
  | "unknown";

export type Difficulty = "easy" | "medium" | "advanced";
export type Compatibility = "yes" | "no" | "partial" | "unknown";

export type ApiProvider = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  beginnerSummary: string;
  officialWebsite: string;
  docsUrl: string;
  pricingUrl?: string;
  apiKeyUrl?: string;
  freeTierType: FreeTierType;
  freeTierNotes: string;
  requiresCreditCard: "yes" | "no" | "unknown";
  beginnerDifficulty: Difficulty;
  bestFor: string[];
  supportedFeatures: string[];
  openAiCompatible: Compatibility;
  rateLimitNotes?: string;
  exampleUseCase: string;
  starterSteps: string[];
  pros: string[];
  limitations: string[];
  sourceUrls: string[];
  lastVerified: string;
};

export const apis: ApiProvider[] = [
  {
    id: "google-gemini",
    slug: "google-gemini",
    name: "Google Gemini API",
    shortDescription: "Google's multimodal AI API with a generous free tier via Google AI Studio.",
    shortDescriptionAr: "واجهة برمجية متعددة الوسائط من Google مع طبقة مجانية سخية عبر Google AI Studio.",
    beginnerSummary: "Google Gemini is one of the easiest AI APIs to start with. You can get an API key for free from Google AI Studio and start building chatbots, summarizers, and multimodal apps quickly. No credit card needed to start.",
    officialWebsite: "https://ai.google.dev/",
    docsUrl: "https://ai.google.dev/gemini-api/docs",
    pricingUrl: "https://ai.google.dev/gemini-api/docs/pricing",
    apiKeyUrl: "https://aistudio.google.com/app/apikey",
    freeTierType: "free-tier",
    freeTierNotes: "Google AI Studio usage is free with rate limits in available regions. The free tier includes access to Gemini models with daily and per-minute rate limits. Check the official pricing page for current limits.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Chatbots", "Summarization", "Multimodal apps", "Vision", "Embeddings"],
    supportedFeatures: ["Text generation", "Chat", "Embeddings", "Vision/image understanding", "Code generation", "Streaming", "Function calling"],
    openAiCompatible: "no",
    rateLimitNotes: "Rate limits apply on the free tier. See official pricing page for current RPM and TPM limits.",
    exampleUseCase: "Build a simple chatbot that answers questions about any uploaded document using Gemini's multimodal capabilities.",
    starterSteps: [
      "Go to https://aistudio.google.com/app/apikey and create a free API key",
      "Install the SDK: npm install @google/generative-ai",
      "Set GEMINI_API_KEY in your .env.local file",
      "Use the SDK to send your first chat message",
      "Check the official quickstart guide at https://ai.google.dev/gemini-api/docs/quickstart"
    ],
    pros: [
      "No credit card required for free tier",
      "Generous free rate limits for prototyping",
      "Supports text, images, video, and audio",
      "Official Google SDK available for many languages",
      "Google AI Studio lets you test prompts visually before coding"
    ],
    limitations: [
      "Free tier has rate limits that may not suit high-traffic apps",
      "Not OpenAI API-compatible — requires Google's own SDK or REST format",
      "Availability of the free tier depends on your region",
      "Free limits can change — always check official pricing"
    ],
    sourceUrls: [
      "https://ai.google.dev/gemini-api/docs",
      "https://ai.google.dev/gemini-api/docs/pricing",
      "https://aistudio.google.com/app/apikey"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "github-models",
    slug: "github-models",
    name: "GitHub Models",
    shortDescription: "Free rate-limited access to frontier AI models for GitHub users.",
    shortDescriptionAr: "وصول مجاني محدود المعدل إلى أحدث نماذج الذكاء الاصطناعي لمستخدمي GitHub.",
    beginnerSummary: "GitHub Models gives every GitHub account free access to many frontier AI models — including GPT-4o, Llama, Mistral, and more — for prototyping and experimentation. It uses an OpenAI-compatible API format, which makes it easy for beginners already familiar with OpenAI.",
    officialWebsite: "https://github.com/marketplace?type=models",
    docsUrl: "https://docs.github.com/en/github-models",
    pricingUrl: "https://docs.github.com/billing/managing-billing-for-your-products/about-billing-for-github-models",
    apiKeyUrl: "https://github.com/settings/tokens",
    freeTierType: "free-tier",
    freeTierNotes: "All GitHub accounts get rate-limited access to models at no cost for prototyping and experimentation. Production use and higher rate limits require a paid plan.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Model testing", "Prototyping", "Chatbots", "Code generation", "Comparing models"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Embeddings (select models)", "Streaming"],
    openAiCompatible: "yes",
    rateLimitNotes: "Rate limits apply for free users. Limits are per model and per account. Check billing docs for current limits.",
    exampleUseCase: "Try multiple models (GPT-4o, Llama 3, Mistral) with the same prompt to compare quality before committing to one provider.",
    starterSteps: [
      "Go to https://github.com/settings/tokens and create a personal access token",
      "Browse available models at https://github.com/marketplace?type=models",
      "Use the OpenAI SDK with the GitHub Models endpoint",
      "Set the base URL to https://models.inference.ai.azure.com",
      "Read the quickstart at https://docs.github.com/en/github-models/quickstart"
    ],
    pros: [
      "Free for GitHub users — no credit card needed",
      "OpenAI-compatible API — easy if you already know OpenAI",
      "Access to many top models from different providers",
      "Great for comparing models side by side",
      "Integrated with GitHub Codespaces and VS Code"
    ],
    limitations: [
      "Rate limits are strict on the free tier",
      "Not intended for production use at scale",
      "Requires a GitHub account",
      "Free tier scope and limits may change — check official docs"
    ],
    sourceUrls: [
      "https://docs.github.com/en/github-models",
      "https://github.com/marketplace?type=models",
      "https://docs.github.com/billing/managing-billing-for-your-products/about-billing-for-github-models"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "cloudflare-workers-ai",
    slug: "cloudflare-workers-ai",
    name: "Cloudflare Workers AI",
    shortDescription: "Run AI models at the edge for free within Cloudflare Workers, with usage-based pricing.",
    shortDescriptionAr: "شغّل نماذج الذكاء الاصطناعي على حافة الشبكة مجاناً ضمن Cloudflare Workers مع تسعير حسب الاستخدام.",
    beginnerSummary: "Cloudflare Workers AI lets you run AI models inside Cloudflare Workers — right at the network edge — without managing servers. The free tier of Cloudflare Workers includes a daily free allocation of AI inference units. It is beginner-friendly if you are already building on Cloudflare.",
    officialWebsite: "https://developers.cloudflare.com/workers-ai/",
    docsUrl: "https://developers.cloudflare.com/workers-ai/",
    pricingUrl: "https://developers.cloudflare.com/workers-ai/platform/pricing/",
    apiKeyUrl: "https://dash.cloudflare.com/",
    freeTierType: "free-tier",
    freeTierNotes: "Workers AI is included in both Free and Paid Cloudflare plans, with a free daily inference allocation. Beyond the free allocation, usage-based pricing applies. See official pricing page for current unit costs.",
    requiresCreditCard: "no",
    beginnerDifficulty: "medium",
    bestFor: ["Serverless AI", "Embeddings", "Text generation", "Image generation", "Speech-to-text", "Edge AI"],
    supportedFeatures: ["Text generation", "Embeddings", "Image generation", "Speech-to-text", "Image classification", "Translation"],
    openAiCompatible: "partial",
    rateLimitNotes: "Free daily allocation applies. Usage above the free tier incurs costs. Check the official pricing page for current allocations.",
    exampleUseCase: "Add AI-powered text summarization to a Cloudflare Worker that processes incoming webhooks — no server required.",
    starterSteps: [
      "Sign up at https://dash.cloudflare.com/ (free account available)",
      "Install Wrangler CLI: npm install -g wrangler",
      "Create a Worker project: npx wrangler init my-ai-worker",
      "Add the AI binding in your wrangler.toml",
      "Follow the Workers AI quickstart at https://developers.cloudflare.com/workers-ai/get-started/rest-api/"
    ],
    pros: [
      "Free daily allocation — good for prototyping",
      "Runs at the edge — low latency globally",
      "No server management required",
      "Supports a wide range of model types",
      "Tightly integrated with Cloudflare Workers ecosystem"
    ],
    limitations: [
      "Requires Cloudflare ecosystem knowledge — steeper learning curve",
      "Free daily allocation may be limited for high-volume use",
      "OpenAI-compatible only for select endpoints — check docs",
      "Model selection is limited to Cloudflare-supported models",
      "Usage above free allocation incurs costs"
    ],
    sourceUrls: [
      "https://developers.cloudflare.com/workers-ai/",
      "https://developers.cloudflare.com/workers-ai/platform/pricing/",
      "https://developers.cloudflare.com/workers-ai/models/"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "groq",
    slug: "groq",
    name: "Groq API",
    shortDescription: "Extremely fast LLM inference API with a free tier for prototyping.",
    shortDescriptionAr: "واجهة استنتاج سريعة جداً للنماذج اللغوية مع طبقة مجانية للتجربة والبناء.",
    beginnerSummary: "Groq is known for its speed — it can run large language models much faster than most providers. Groq offers an API with rate-limited free access for developers. It supports popular open-source models like Llama and Mixtral. The API format is OpenAI-compatible, making it a drop-in option for many projects.",
    officialWebsite: "https://console.groq.com/",
    docsUrl: "https://console.groq.com/docs/overview",
    pricingUrl: "https://console.groq.com/docs/rate-limits",
    apiKeyUrl: "https://console.groq.com/keys",
    freeTierType: "free-tier",
    freeTierNotes: "Groq provides API access with rate limits on a free tier. Exact limits are shown in your organization's limit page. Check https://console.groq.com/docs/rate-limits for current free-tier rate limits.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Fast inference", "Chatbots", "Text generation", "Low-latency apps"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Tool use / function calling", "JSON mode", "Streaming"],
    openAiCompatible: "yes",
    rateLimitNotes: "Rate limits are per model and reset daily. Free tier limits vary by model. Check official rate limits page for current values.",
    exampleUseCase: "Build a lightning-fast chatbot using Llama 3 that responds in under 500ms — a much better user experience than slower providers.",
    starterSteps: [
      "Sign up at https://console.groq.com/ (free)",
      "Create an API key at https://console.groq.com/keys",
      "Install the OpenAI SDK: npm install openai",
      "Set base URL to https://api.groq.com/openai/v1 and use your Groq API key",
      "Read the quickstart at https://console.groq.com/docs/quickstart"
    ],
    pros: [
      "Extremely fast inference — great for real-time apps",
      "OpenAI-compatible API — easy to migrate from OpenAI",
      "Free tier with no credit card required",
      "Supports popular open-source models (Llama, Mixtral, Gemma)",
      "Simple and well-documented API"
    ],
    limitations: [
      "Free tier rate limits may be restrictive for production",
      "Smaller model selection than OpenAI",
      "Groq specializes in inference — not model training or fine-tuning",
      "Free tier availability and limits may change"
    ],
    sourceUrls: [
      "https://console.groq.com/docs/overview",
      "https://console.groq.com/docs/rate-limits",
      "https://console.groq.com/docs/quickstart"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "hugging-face",
    slug: "hugging-face",
    name: "Hugging Face Inference Providers",
    shortDescription: "Access hundreds of open-source AI models through Hugging Face's inference infrastructure.",
    shortDescriptionAr: "الوصول إلى مئات النماذج مفتوحة المصدر عبر بنية Hugging Face التحتية للاستنتاج.",
    beginnerSummary: "Hugging Face is the largest open-source AI model hub. Their Inference Providers feature gives you API access to hundreds of models — including text, image, speech, and embedding models — with a free tier and pay-as-you-go pricing after that. It is a great place to explore what open-source AI can do.",
    officialWebsite: "https://huggingface.co/",
    docsUrl: "https://huggingface.co/docs/inference-providers/en/index",
    pricingUrl: "https://huggingface.co/docs/inference-providers/en/pricing",
    apiKeyUrl: "https://huggingface.co/settings/tokens",
    freeTierType: "free-tier",
    freeTierNotes: "Hugging Face Inference Providers include a free tier with access to many models and some free credits. Beyond that, usage is pay-as-you-go. Check the official pricing page for current free allowances.",
    requiresCreditCard: "no",
    beginnerDifficulty: "medium",
    bestFor: ["Open-source models", "Embeddings", "Image generation", "Speech-to-text", "Experimentation"],
    supportedFeatures: ["Text generation", "Embeddings", "Image generation", "Speech-to-text", "Text-to-image", "Translation", "Summarization"],
    openAiCompatible: "partial",
    rateLimitNotes: "Free tier has rate limits per model. Some models are only available on paid tiers. Check the model page for availability.",
    exampleUseCase: "Use the Inference API to test 5 different embedding models and pick the best one for a semantic search project — all for free.",
    starterSteps: [
      "Sign up at https://huggingface.co/ (free)",
      "Create an access token at https://huggingface.co/settings/tokens",
      "Browse models at https://huggingface.co/models",
      "Install the client: npm install @huggingface/inference",
      "Follow the Inference Providers guide at https://huggingface.co/docs/inference-providers/en/index"
    ],
    pros: [
      "Access to hundreds of open-source models",
      "Free tier available without a credit card",
      "Covers many modalities: text, image, audio, embeddings",
      "Huge model hub for exploring what is available",
      "Active open-source community and great docs"
    ],
    limitations: [
      "Free tier rate limits vary by model and can be slow",
      "OpenAI-compatible only for select providers — check docs",
      "Model quality varies — open-source models differ from GPT-4",
      "Some popular models require a paid tier",
      "API format differs between model types"
    ],
    sourceUrls: [
      "https://huggingface.co/docs/inference-providers/en/index",
      "https://huggingface.co/docs/inference-providers/en/pricing",
      "https://huggingface.co/settings/tokens"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "openrouter",
    slug: "openrouter",
    name: "OpenRouter",
    shortDescription: "One API to access hundreds of AI models — with free models available.",
    shortDescriptionAr: "واجهة برمجية واحدة للوصول إلى مئات النماذج — مع نماذج مجانية متاحة.",
    beginnerSummary: "OpenRouter is a routing layer that lets you access many AI models — including free ones — through a single OpenAI-compatible API. If you want to try multiple models without creating accounts everywhere, OpenRouter is a great starting point. Some models are listed as free with rate limits.",
    officialWebsite: "https://openrouter.ai/",
    docsUrl: "https://openrouter.ai/docs",
    pricingUrl: "https://openrouter.ai/pricing",
    apiKeyUrl: "https://openrouter.ai/keys",
    freeTierType: "free-tier",
    freeTierNotes: "OpenRouter offers free access to a selection of models with rate limits. Free models are listed at https://openrouter.ai/collections/free-models. Usage is rate-limited and free models may change over time.",
    requiresCreditCard: "no",
    beginnerDifficulty: "medium",
    bestFor: ["Testing many models", "Prototyping", "OpenAI-compatible API", "Model routing"],
    supportedFeatures: ["Text generation", "Chat", "Streaming", "Function calling", "JSON mode", "Image understanding (select models)"],
    openAiCompatible: "yes",
    rateLimitNotes: "Free models are rate-limited. Paid models are billed per token. Rate limits depend on the specific model chosen.",
    exampleUseCase: "Test 10 different AI models using the same system prompt through one OpenAI-compatible API, without creating 10 separate accounts.",
    starterSteps: [
      "Sign up at https://openrouter.ai/ (free account)",
      "Create an API key at https://openrouter.ai/keys",
      "Browse free models at https://openrouter.ai/collections/free-models",
      "Use the OpenAI SDK with base URL https://openrouter.ai/api/v1",
      "Read the quickstart at https://openrouter.ai/docs/quickstart"
    ],
    pros: [
      "Single API to access many different models",
      "OpenAI-compatible — easy drop-in for existing code",
      "Free models available with no credit card",
      "Good for model comparison and experimentation",
      "Access to frontier and open-source models in one place"
    ],
    limitations: [
      "Free models have rate limits and may change",
      "OpenRouter is a third-party router — requests pass through their infrastructure",
      "Paid models are billed per token — check pricing per model",
      "Model availability and free tier selection change frequently",
      "Not a direct provider — dependent on upstream model APIs"
    ],
    sourceUrls: [
      "https://openrouter.ai/docs",
      "https://openrouter.ai/pricing",
      "https://openrouter.ai/collections/free-models"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "deepgram",
    slug: "deepgram",
    name: "Deepgram",
    shortDescription: "Speech-to-text and text-to-speech API with free starting credits.",
    shortDescriptionAr: "واجهة تحويل الصوت إلى نص والنص إلى صوت مع أرصدة مجانية للبدء.",
    beginnerSummary: "Deepgram specializes in speech AI — converting audio to text and text to audio. They offer free starting credits to new accounts so you can build voice apps without paying upfront. Their docs are beginner-friendly and they have real-time streaming transcription support.",
    officialWebsite: "https://deepgram.com/",
    docsUrl: "https://developers.deepgram.com/home",
    pricingUrl: "https://deepgram.com/pricing",
    apiKeyUrl: "https://console.deepgram.com/",
    freeTierType: "free-credits",
    freeTierNotes: "Deepgram offers free starting credits for new accounts. Check the official pricing page at https://deepgram.com/pricing for the current credit amount, as it may change.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Speech-to-text", "Text-to-speech", "Voice agents", "Audio transcription", "Real-time streaming"],
    supportedFeatures: ["Batch transcription", "Real-time streaming transcription", "Text-to-speech", "Language detection", "Speaker diarization", "Smart formatting"],
    openAiCompatible: "no",
    rateLimitNotes: "Usage is billed after free credits are used. Check the pricing page for per-minute and per-character rates.",
    exampleUseCase: "Build a voice memo app that transcribes spoken notes to text in real time using Deepgram's streaming WebSocket API.",
    starterSteps: [
      "Sign up at https://console.deepgram.com/ (no credit card required initially)",
      "Create an API key in the Deepgram console",
      "Install the SDK: npm install @deepgram/sdk",
      "Send your first transcription request following the guide at https://developers.deepgram.com/guides/fundamentals/make-your-first-api-request",
      "Try real-time streaming from https://developers.deepgram.com/docs/getting-started-with-live-streaming-audio"
    ],
    pros: [
      "Free starting credits — no credit card required initially",
      "Best-in-class speech-to-text accuracy",
      "Supports real-time streaming transcription",
      "Clear beginner docs with step-by-step guides",
      "Supports text-to-speech as well as speech-to-text"
    ],
    limitations: [
      "Not a general-purpose LLM — focused on speech only",
      "Free credits will run out — billing required for sustained use",
      "Not OpenAI-compatible — uses Deepgram's own API format",
      "Credit amount for new accounts may change — check official pricing"
    ],
    sourceUrls: [
      "https://deepgram.com/pricing",
      "https://developers.deepgram.com/home",
      "https://developers.deepgram.com/guides/fundamentals/make-your-first-api-request"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "replicate",
    slug: "replicate",
    name: "Replicate",
    shortDescription: "Run open-source AI models in the cloud — pay per second of compute.",
    shortDescriptionAr: "شغّل نماذج الذكاء الاصطناعي مفتوحة المصدر في السحابة — الدفع بالثانية.",
    beginnerSummary: "Replicate lets you run thousands of open-source AI models through a simple API — image generation, video, speech, and more. It uses a pay-per-second billing model, so costs can add up. You may be able to try it with a small amount of starting credit, but it is primarily a paid service. Always check official billing docs before building.",
    officialWebsite: "https://replicate.com/",
    docsUrl: "https://replicate.com/docs",
    pricingUrl: "https://replicate.com/pricing",
    apiKeyUrl: "https://replicate.com/account/api-tokens",
    freeTierType: "unknown",
    freeTierNotes: "Replicate's free tier availability is not clearly documented as a permanent free tier. New accounts may receive a small amount of starting credit. Production use generally requires billing. Always check https://replicate.com/pricing and https://replicate.com/docs/topics/billing for current terms.",
    requiresCreditCard: "unknown",
    beginnerDifficulty: "medium",
    bestFor: ["Image generation", "Open-source model experiments", "Stable Diffusion", "Video generation"],
    supportedFeatures: ["Image generation", "Video generation", "Speech synthesis", "LLM inference", "Custom model deployment"],
    openAiCompatible: "no",
    rateLimitNotes: "Billed per second of compute time per model. Costs vary by model and hardware. Check the model page for hardware and cost details.",
    exampleUseCase: "Generate AI images using Stable Diffusion or FLUX models through a simple API call — no GPU required.",
    starterSteps: [
      "Sign up at https://replicate.com/ and check billing requirements",
      "Create an API token at https://replicate.com/account/api-tokens",
      "Install the client: npm install replicate",
      "Find a model at https://replicate.com/explore",
      "Run the model using the example code on the model's page"
    ],
    pros: [
      "Huge selection of open-source models",
      "No infrastructure management required",
      "Great for image generation and creative AI",
      "API is simple and consistent across models",
      "Good documentation and example code per model"
    ],
    limitations: [
      "Primarily pay-per-use — costs can add up quickly for image generation",
      "Free tier is not clearly documented — check official pricing",
      "Cold start latency can be high for less-used models",
      "Not OpenAI-compatible",
      "Billing required for reliable access"
    ],
    sourceUrls: [
      "https://replicate.com/pricing",
      "https://replicate.com/docs",
      "https://replicate.com/docs/topics/billing"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "together-ai",
    slug: "together-ai",
    name: "Together AI",
    shortDescription: "Fast inference API for open-source LLMs with OpenAI-compatible endpoints.",
    shortDescriptionAr: "واجهة استنتاج سريعة للنماذج اللغوية مفتوحة المصدر متوافقة مع OpenAI.",
    beginnerSummary: "Together AI provides fast inference for popular open-source models like Llama, Mistral, and Qwen through an OpenAI-compatible API. It is easy to use if you already know the OpenAI SDK. Check the official pricing page for current free trial or credit availability — the exact free tier is not permanently fixed.",
    officialWebsite: "https://www.together.ai/",
    docsUrl: "https://docs.together.ai/",
    pricingUrl: "https://www.together.ai/pricing",
    apiKeyUrl: "https://api.together.ai/settings/api-keys",
    freeTierType: "unknown",
    freeTierNotes: "The exact free tier for Together AI is not clearly documented as a permanent offering. New accounts may receive starting credits. Always verify at https://www.together.ai/pricing before building.",
    requiresCreditCard: "unknown",
    beginnerDifficulty: "medium",
    bestFor: ["Open-source LLM inference", "Text generation", "Embeddings", "OpenAI-compatible apps"],
    supportedFeatures: ["Text generation", "Chat", "Embeddings", "Code generation", "Streaming", "Function calling"],
    openAiCompatible: "yes",
    rateLimitNotes: "Rate limits and pricing are usage-based. Check the official pricing page for current rates.",
    exampleUseCase: "Replace OpenAI's GPT-4 with an open-source Llama model in an existing app — minimal code change needed thanks to OpenAI compatibility.",
    starterSteps: [
      "Sign up at https://api.together.ai/ and check current pricing",
      "Create an API key at https://api.together.ai/settings/api-keys",
      "Use the OpenAI SDK with base URL https://api.together.xyz/v1",
      "Browse available models at https://docs.together.ai/docs/inference-models",
      "Read the quickstart at https://docs.together.ai/docs/quickstart"
    ],
    pros: [
      "OpenAI-compatible API — easy to integrate",
      "Access to many open-source models",
      "Fast inference speeds",
      "Supports embeddings and chat in one API",
      "Good documentation"
    ],
    limitations: [
      "Free tier availability is not clearly verified — check official pricing",
      "Open-source models may not match frontier model quality for all tasks",
      "Pricing and model availability may change",
      "Not a free-forever service — expect to pay for production use"
    ],
    sourceUrls: [
      "https://docs.together.ai/",
      "https://www.together.ai/pricing",
      "https://docs.together.ai/docs/quickstart"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "fireworks-ai",
    slug: "fireworks-ai",
    name: "Fireworks AI",
    shortDescription: "High-speed inference API for open-source models with OpenAI-compatible endpoints.",
    shortDescriptionAr: "واجهة استنتاج فائقة السرعة للنماذج مفتوحة المصدر متوافقة مع OpenAI.",
    beginnerSummary: "Fireworks AI focuses on extremely fast inference for open-source models. It is OpenAI-compatible, making it easy to swap in as a provider. Check the official pricing page for current free credits or trial availability — this is not clearly documented as a permanent free tier.",
    officialWebsite: "https://fireworks.ai/",
    docsUrl: "https://docs.fireworks.ai/",
    pricingUrl: "https://fireworks.ai/pricing",
    apiKeyUrl: "https://fireworks.ai/account/api-keys",
    freeTierType: "unknown",
    freeTierNotes: "The exact free tier for Fireworks AI is not clearly documented as a permanent offering. New accounts may receive starting credits. Always verify at https://fireworks.ai/pricing before building.",
    requiresCreditCard: "unknown",
    beginnerDifficulty: "medium",
    bestFor: ["Fast LLM inference", "Open-source models", "Production inference", "Text generation"],
    supportedFeatures: ["Text generation", "Chat", "Embeddings", "Function calling", "JSON mode", "Streaming"],
    openAiCompatible: "yes",
    rateLimitNotes: "Usage-based pricing. Check the official pricing page for current rates and any free allocation.",
    exampleUseCase: "Build a production-grade chatbot using Llama 3 with fast response times, easily swapped in where you previously used OpenAI.",
    starterSteps: [
      "Sign up at https://fireworks.ai/ and check current pricing",
      "Create an API key at https://fireworks.ai/account/api-keys",
      "Use the OpenAI SDK with base URL https://api.fireworks.ai/inference/v1",
      "Browse available models at https://fireworks.ai/models",
      "Read the quickstart at https://docs.fireworks.ai/getting-started/quickstart"
    ],
    pros: [
      "Very fast inference speeds",
      "OpenAI-compatible API",
      "Access to many open-source models",
      "Structured output and JSON mode support",
      "Good developer documentation"
    ],
    limitations: [
      "Free tier availability is not clearly verified — check official pricing",
      "Primarily a paid inference service for production",
      "Open-source model quality may not match frontier models for all use cases",
      "Pricing and model availability may change"
    ],
    sourceUrls: [
      "https://docs.fireworks.ai/",
      "https://fireworks.ai/pricing",
      "https://docs.fireworks.ai/getting-started/quickstart"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "deepseek",
    slug: "deepseek",
    name: "DeepSeek API",
    shortDescription: "Powerful Chinese AI models (DeepSeek-V3, R1) via an OpenAI-compatible API with free starting credits.",
    shortDescriptionAr: "نماذج ذكاء اصطناعي صينية قوية (DeepSeek-V3, R1) عبر API متوافق مع OpenAI مع أرصدة مجانية للبدء.",
    beginnerSummary: "DeepSeek is a Chinese AI lab offering powerful language models — including DeepSeek-V3 for general chat and DeepSeek-R1 for step-by-step reasoning. Their API is OpenAI-compatible and new accounts receive free starting credits. DeepSeek-R1 is especially notable for math, coding, and logic tasks.",
    officialWebsite: "https://platform.deepseek.com/",
    docsUrl: "https://platform.deepseek.com/api-docs",
    pricingUrl: "https://platform.deepseek.com/api-docs/pricing",
    apiKeyUrl: "https://platform.deepseek.com/api-keys",
    freeTierType: "free-credits",
    freeTierNotes: "New accounts receive free starting credits. Check the official pricing page at https://platform.deepseek.com/api-docs/pricing for the current credit amount, as it may change.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Chatbots", "Reasoning tasks", "Code generation", "Cost-effective LLM inference"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Function calling", "JSON mode", "Streaming", "Reasoning (R1)"],
    openAiCompatible: "yes",
    rateLimitNotes: "Rate limits apply. Check the official docs for current limits per model.",
    exampleUseCase: "Build a reasoning-capable assistant using DeepSeek-R1 that solves math and logic problems step by step.",
    starterSteps: [
      "Sign up at https://platform.deepseek.com/",
      "Create an API key at https://platform.deepseek.com/api-keys",
      "Install the OpenAI SDK: npm install openai",
      "Set base URL to https://api.deepseek.com and use your DeepSeek API key",
      "Read the quickstart at https://platform.deepseek.com/api-docs/quickstart"
    ],
    pros: [
      "OpenAI-compatible — works with existing OpenAI SDK code",
      "Free starting credits for new accounts",
      "Competitive model quality, especially DeepSeek-R1 for reasoning",
      "Very affordable pricing after free credits",
      "Both general-purpose and reasoning-focused models available"
    ],
    limitations: [
      "Free credits will run out — billing required for sustained use",
      "Service may have availability issues during peak demand",
      "Based in China — review data privacy implications for your use case",
      "Free credit amount may change — check official pricing"
    ],
    sourceUrls: [
      "https://platform.deepseek.com/api-docs",
      "https://platform.deepseek.com/api-docs/pricing",
      "https://platform.deepseek.com/api-docs/quickstart"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "qwen",
    slug: "qwen",
    name: "Qwen API (Alibaba)",
    shortDescription: "Alibaba's Qwen language models via the DashScope API, with free quota for new users.",
    shortDescriptionAr: "نماذج Qwen اللغوية من Alibaba عبر DashScope API مع حصة مجانية للمستخدمين الجدد.",
    beginnerSummary: "Qwen is Alibaba's family of AI language models, ranging from lightweight to powerful frontier-class models. Accessed via the DashScope API (Alibaba Cloud Model Studio), new accounts receive a free usage quota. Qwen models are strong at multilingual tasks, long-context documents, and code generation.",
    officialWebsite: "https://www.alibabacloud.com/en/solutions/generative-ai/qwen",
    docsUrl: "https://www.alibabacloud.com/help/en/model-studio/getting-started/first-api-call-by-using-openai-compatible-apis",
    pricingUrl: "https://www.alibabacloud.com/help/en/model-studio/billing-overview",
    apiKeyUrl: "https://www.alibabacloud.com/help/en/model-studio/getting-started/get-api-key",
    freeTierType: "free-credits",
    freeTierNotes: "New Alibaba Cloud accounts receive a free token quota for Qwen models. Check the official pricing page for current free quota details, as they may vary by region and model.",
    requiresCreditCard: "unknown",
    beginnerDifficulty: "medium",
    bestFor: ["Text generation", "Multilingual tasks", "Code generation", "Long-context documents", "Vision"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Vision/image understanding", "Embeddings", "Function calling", "Streaming"],
    openAiCompatible: "yes",
    rateLimitNotes: "Free quota is limited. Usage above the free quota is billed per token. Check the official pricing page for rates.",
    exampleUseCase: "Build a multilingual document summarizer using Qwen's long-context capabilities to process large files in Arabic, Chinese, or English.",
    starterSteps: [
      "Sign up for Alibaba Cloud at https://www.alibabacloud.com/",
      "Get an API key at https://www.alibabacloud.com/help/en/model-studio/getting-started/get-api-key",
      "Install the OpenAI SDK: npm install openai",
      "Set base URL to https://dashscope.aliyuncs.com/compatible-mode/v1",
      "Follow the guide at https://www.alibabacloud.com/help/en/model-studio/getting-started/first-api-call-by-using-openai-compatible-apis"
    ],
    pros: [
      "OpenAI-compatible API — easy to integrate",
      "Free quota for new accounts",
      "Excellent multilingual support including Arabic and Chinese",
      "Wide model range: from fast small models to powerful ones",
      "Supports vision and long-context tasks"
    ],
    limitations: [
      "Registration may require phone verification and may vary by region",
      "Free quota may be limited — check official pricing before building",
      "Based in China — review data privacy implications for your use case",
      "Some features require paid tier"
    ],
    sourceUrls: [
      "https://www.alibabacloud.com/help/en/model-studio/getting-started/first-api-call-by-using-openai-compatible-apis",
      "https://www.alibabacloud.com/help/en/model-studio/billing-overview",
      "https://www.alibabacloud.com/help/en/model-studio/getting-started/get-api-key"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "zhipu-ai",
    slug: "zhipu-ai",
    name: "Zhipu AI (BigModel)",
    shortDescription: "Chinese AI lab offering GLM language and vision models via API with a free tier.",
    shortDescriptionAr: "مختبر ذكاء اصطناعي صيني يقدم نماذج GLM للغة والرؤية عبر API مع طبقة مجانية.",
    beginnerSummary: "Zhipu AI is a Chinese AI research company offering their GLM (General Language Model) series through the BigModel platform. GLM-4 and related models handle text, code, and image tasks. A free tier is available. The API is partially OpenAI-compatible, and documentation is available in both Chinese and English.",
    officialWebsite: "https://open.bigmodel.cn/",
    docsUrl: "https://open.bigmodel.cn/dev/howuse/introduction",
    pricingUrl: "https://open.bigmodel.cn/pricing",
    apiKeyUrl: "https://open.bigmodel.cn/usercenter/apikeys",
    freeTierType: "free-tier",
    freeTierNotes: "Zhipu AI provides a free tier with limited usage for developers. Check the official pricing page at https://open.bigmodel.cn/pricing for current free limits per model.",
    requiresCreditCard: "no",
    beginnerDifficulty: "medium",
    bestFor: ["Chinese language tasks", "Text generation", "Code generation", "Vision understanding"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Vision/image understanding", "Embeddings", "Function calling", "Streaming"],
    openAiCompatible: "partial",
    rateLimitNotes: "Free tier has rate limits per model. Check the official pricing page for current limits.",
    exampleUseCase: "Build a Chinese-English bilingual chatbot or assistant using GLM-4, which has strong Chinese language understanding.",
    starterSteps: [
      "Sign up at https://open.bigmodel.cn/",
      "Get an API key at https://open.bigmodel.cn/usercenter/apikeys",
      "Browse the API docs at https://open.bigmodel.cn/dev/api",
      "Use the BigModel SDK or call the REST API directly",
      "Check the SDK guide at https://open.bigmodel.cn/dev/howuse/bigmodel_sdk"
    ],
    pros: [
      "Free tier available without credit card",
      "Excellent Chinese language capabilities",
      "Capable vision and code-generation models",
      "GLM-4 is competitive with other frontier models",
      "Partial OpenAI-compatible API structure"
    ],
    limitations: [
      "Free tier has strict rate limits",
      "OpenAI compatibility is partial — some code adjustments may be needed",
      "Documentation is primarily in Chinese — English docs are available but less comprehensive",
      "Based in China — review data privacy implications for your use case"
    ],
    sourceUrls: [
      "https://open.bigmodel.cn/dev/howuse/introduction",
      "https://open.bigmodel.cn/pricing",
      "https://open.bigmodel.cn/dev/api"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "mistral-ai",
    slug: "mistral-ai",
    name: "Mistral AI API",
    shortDescription: "European AI lab with efficient open and commercial models and a free tier via La Plateforme.",
    shortDescriptionAr: "مختبر ذكاء اصطناعي أوروبي يقدم نماذج فعّالة مفتوحة وتجارية مع طبقة مجانية عبر La Plateforme.",
    beginnerSummary: "Mistral AI is a French AI lab offering strong language models — from small, efficient models to frontier ones. Their La Plateforme API provides rate-limited free access for experimentation. The API is fully OpenAI-compatible, making it easy to switch from OpenAI. Their open-weight models are also popular for self-hosting.",
    officialWebsite: "https://mistral.ai/",
    docsUrl: "https://docs.mistral.ai/",
    pricingUrl: "https://mistral.ai/technology/pricing",
    apiKeyUrl: "https://console.mistral.ai/api-keys",
    freeTierType: "free-tier",
    freeTierNotes: "Mistral AI offers rate-limited free access to select models via La Plateforme. Check the official pricing page at https://mistral.ai/technology/pricing for current free tier details and rate limits.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Text generation", "Code generation", "Chatbots", "Cost-efficient inference"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Embeddings", "Function calling", "JSON mode", "Streaming"],
    openAiCompatible: "yes",
    rateLimitNotes: "Free tier has rate limits. Paid tiers offer higher throughput. Check the pricing page for current free and paid limits.",
    exampleUseCase: "Build a coding assistant using Mistral's code-specialized model — efficient and cost-effective compared to frontier models.",
    starterSteps: [
      "Sign up at https://console.mistral.ai/ (free account available)",
      "Create an API key at https://console.mistral.ai/api-keys",
      "Install the OpenAI SDK: npm install openai",
      "Set base URL to https://api.mistral.ai/v1 and use your Mistral API key",
      "Follow the quickstart at https://docs.mistral.ai/getting-started/quickstart"
    ],
    pros: [
      "OpenAI-compatible — minimal code changes from existing OpenAI projects",
      "Free tier available without credit card",
      "Strong performance-to-cost ratio on paid tiers",
      "Open-weight models also available for self-hosting",
      "European provider — relevant for EU data residency considerations"
    ],
    limitations: [
      "Free tier rate limits are strict",
      "Frontier-tier models require a paid plan",
      "Smaller model ecosystem than OpenAI",
      "Free tier availability may change — check official pricing"
    ],
    sourceUrls: [
      "https://docs.mistral.ai/",
      "https://mistral.ai/technology/pricing",
      "https://docs.mistral.ai/getting-started/quickstart"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "cerebras",
    slug: "cerebras",
    name: "Cerebras Inference",
    shortDescription: "Extremely fast LLM inference on purpose-built AI chips, with a free rate-limited tier.",
    shortDescriptionAr: "استنتاج فائق السرعة للنماذج اللغوية على شرائح ذكاء اصطناعي متخصصة مع طبقة مجانية محدودة المعدل.",
    beginnerSummary: "Cerebras runs AI inference on custom-built wafer-scale chips, making it significantly faster than GPU-based providers — often 10–20x faster. They offer a free rate-limited tier for Llama models. The API is OpenAI-compatible, so if you already know the OpenAI SDK, switching to Cerebras requires only a base URL change.",
    officialWebsite: "https://cloud.cerebras.ai/",
    docsUrl: "https://inference-docs.cerebras.ai/",
    pricingUrl: "https://cloud.cerebras.ai/pricing",
    apiKeyUrl: "https://cloud.cerebras.ai/platform",
    freeTierType: "free-tier",
    freeTierNotes: "Cerebras offers a free tier with rate-limited access. Check the official pricing page at https://cloud.cerebras.ai/pricing for current free tier limits and rate limits.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Fast inference", "Real-time chatbots", "Low-latency apps", "Code generation"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Streaming", "Tool use"],
    openAiCompatible: "yes",
    rateLimitNotes: "Free tier has rate limits. See the official pricing page for current limits.",
    exampleUseCase: "Build a real-time coding assistant that responds nearly instantly — Cerebras can generate thousands of tokens per second.",
    starterSteps: [
      "Sign up at https://cloud.cerebras.ai/",
      "Get an API key from the platform dashboard",
      "Install the OpenAI SDK: npm install openai",
      "Set base URL to https://api.cerebras.ai/v1 and use your Cerebras API key",
      "Follow the docs at https://inference-docs.cerebras.ai/quickstart"
    ],
    pros: [
      "Extremely fast inference — best-in-class speed for Llama models",
      "OpenAI-compatible API — works with existing OpenAI SDK code",
      "Free tier available without credit card",
      "Ideal for latency-sensitive real-time apps",
      "Simple setup if you already know OpenAI SDK"
    ],
    limitations: [
      "Limited model selection — primarily Llama-family models",
      "Free tier has rate limits",
      "Not suitable for tasks requiring frontier closed models like GPT-4 or Claude",
      "Newer provider — ecosystem and model range still growing"
    ],
    sourceUrls: [
      "https://inference-docs.cerebras.ai/",
      "https://cloud.cerebras.ai/pricing",
      "https://inference-docs.cerebras.ai/quickstart"
    ],
    lastVerified: "2025-06-01"
  },
  {
    id: "xai-grok",
    slug: "xai-grok",
    name: "xAI Grok API",
    shortDescription: "xAI's Grok language models via an OpenAI-compatible API with free monthly developer credits.",
    shortDescriptionAr: "نماذج Grok اللغوية من xAI عبر API متوافق مع OpenAI مع أرصدة شهرية مجانية للمطورين.",
    beginnerSummary: "xAI is Elon Musk's AI company offering the Grok family of language models. Their API provides access to Grok models for chat, reasoning, and vision tasks. Developer accounts receive free monthly API credits. The API is OpenAI-compatible, making it straightforward to integrate into existing projects.",
    officialWebsite: "https://x.ai/",
    docsUrl: "https://docs.x.ai/docs",
    pricingUrl: "https://x.ai/api",
    apiKeyUrl: "https://console.x.ai/",
    freeTierType: "free-credits",
    freeTierNotes: "xAI provides free monthly API credits for developers. Check the official pricing page at https://x.ai/api for the current credit amount and model pricing, as they may change.",
    requiresCreditCard: "no",
    beginnerDifficulty: "easy",
    bestFor: ["Chatbots", "Text generation", "Reasoning", "Vision understanding"],
    supportedFeatures: ["Text generation", "Chat", "Code generation", "Function calling", "Vision (select models)", "Streaming"],
    openAiCompatible: "yes",
    rateLimitNotes: "Usage is billed against monthly free credits. After free credits are used, standard per-token pricing applies.",
    exampleUseCase: "Build a chatbot powered by Grok-2 — minimal code changes from an existing OpenAI project by just changing the base URL and API key.",
    starterSteps: [
      "Sign up at https://console.x.ai/",
      "Create an API key in the xAI console",
      "Install the OpenAI SDK: npm install openai",
      "Set base URL to https://api.x.ai/v1 and use your xAI API key",
      "Follow the quickstart at https://docs.x.ai/docs/quickstart"
    ],
    pros: [
      "Free monthly credits — no credit card initially required",
      "OpenAI-compatible — easy migration from existing OpenAI code",
      "Access to Grok-2 and other Grok models",
      "Vision capabilities on select models",
      "Simple setup if you know the OpenAI SDK"
    ],
    limitations: [
      "Free monthly credits are limited — production use requires payment",
      "Smaller model selection compared to OpenAI or Hugging Face",
      "Newer provider — API and model lineup still evolving",
      "Credit amount may change — check official pricing"
    ],
    sourceUrls: [
      "https://docs.x.ai/docs",
      "https://x.ai/api",
      "https://docs.x.ai/docs/quickstart"
    ],
    lastVerified: "2025-06-01"
  }
];
