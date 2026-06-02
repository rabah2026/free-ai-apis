/* Free AI APIs — directory, guided access, and live API tester.
 *
 * Privacy: API keys you enter never touch our servers. The tester calls the
 * provider's API directly from your browser. We host no backend.
 */
'use strict';

const CATEGORIES = ['all', 'LLM', 'Image', 'Audio', 'Search', 'Embedding', 'Code'];
const CATEGORY_LABELS = { all: 'All', LLM: 'LLM / Chat', Image: 'Image', Audio: 'Audio', Search: 'Search', Embedding: 'Embedding', Code: 'Code' };

/* Each provider's `test` config drives the live tester. `kind` selects how the
 * request is built and how the response is parsed. `curl` is the copy-paste CLI
 * command (with $API_KEY placeholder). Tag pills are generated from `tags` +
 * `chips`, so the filter set and the visible badges can never drift apart. */
const PROVIDERS = [
  {
    id: 'gemini', name: 'Google Gemini', emoji: '🟡', badge: 'always', badgeLabel: 'Always Free',
    desc: 'Gemini 2.0 Flash — up to 1M tokens/day free via Google AI Studio. No credit card required.',
    tags: ['LLM', 'Embedding'], chips: ['1M tokens/day'],
    keyUrl: 'https://aistudio.google.com/app/apikey', docsUrl: 'https://ai.google.dev/gemini-api/docs',
    test: { kind: 'gemini', model: 'gemini-2.0-flash' },
    curl: `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$API_KEY" \\
  -H 'Content-Type: application/json' \\
  -d '{"contents":[{"parts":[{"text":"Say hello in one sentence."}]}]}'`
  },
  {
    id: 'groq', name: 'Groq', emoji: '⚡', badge: 'always', badgeLabel: 'Always Free',
    desc: 'Ultra-fast inference. Free tier includes Llama 3.3, Mixtral, DeepSeek R1, Gemma 2. Rate-limited but no cost.',
    tags: ['LLM', 'Code'], chips: ['Fast inference'],
    keyUrl: 'https://console.groq.com/keys', docsUrl: 'https://console.groq.com/docs/quickstart',
    test: { kind: 'chat', endpoint: 'https://api.groq.com/openai/v1/chat/completions', model: 'llama-3.3-70b-versatile' },
    curl: `curl https://api.groq.com/openai/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'openrouter', name: 'OpenRouter', emoji: '🔀', badge: 'always', badgeLabel: 'Always Free',
    desc: 'Unified API with dozens of free models: DeepSeek, Mistral, Llama, Gemma. OpenAI-compatible — one key, every model.',
    tags: ['LLM'], chips: ['30+ free models', 'OpenAI-compat'],
    keyUrl: 'https://openrouter.ai/keys', docsUrl: 'https://openrouter.ai/docs/quickstart',
    test: { kind: 'chat', endpoint: 'https://openrouter.ai/api/v1/chat/completions', model: 'deepseek/deepseek-chat-v3-0324:free' },
    curl: `curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"deepseek/deepseek-chat-v3-0324:free","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'cloudflare', name: 'Cloudflare Workers AI', emoji: '☁️', badge: 'always', badgeLabel: 'Always Free',
    desc: '10,000 free neurons/day on the free plan. Llama, Mistral, Stable Diffusion, embeddings — on Cloudflare\'s global edge.',
    tags: ['LLM', 'Image', 'Embedding'], chips: ['Edge', '10k neurons/day'],
    keyUrl: 'https://dash.cloudflare.com/profile/api-tokens', docsUrl: 'https://developers.cloudflare.com/workers-ai/',
    test: { kind: 'cloudflare', extraField: { key: 'accountId', label: 'Cloudflare Account ID', placeholder: 'your-account-id' } },
    curl: `curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/ai/run/@cf/meta/llama-3.1-8b-instruct \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{"prompt":"Say hello in one sentence."}'`
  },
  {
    id: 'cohere', name: 'Cohere', emoji: '🧲', badge: 'always', badgeLabel: 'Always Free',
    desc: 'Trial key works indefinitely at low rate limits. Command (chat), Embed, Rerank, and Search — no expiry.',
    tags: ['LLM', 'Embedding', 'Search'], chips: ['Rerank'],
    keyUrl: 'https://dashboard.cohere.com/api-keys', docsUrl: 'https://docs.cohere.com/docs/chat-api',
    test: { kind: 'cohere', model: 'command-r-plus-08-2024' },
    curl: `curl https://api.cohere.com/v2/chat \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"command-r-plus-08-2024","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'huggingface', name: 'Hugging Face', emoji: '🤗', badge: 'always', badgeLabel: 'Always Free',
    desc: 'Serverless Inference API for thousands of open models — LLM, image, audio, embeddings. Free with any HF account.',
    tags: ['LLM', 'Image', 'Audio', 'Embedding'], chips: ['1000s of models'],
    keyUrl: 'https://huggingface.co/settings/tokens', docsUrl: 'https://huggingface.co/docs/inference-providers',
    test: { kind: 'chat', endpoint: 'https://router.huggingface.co/v1/chat/completions', model: 'meta-llama/Llama-3.1-8B-Instruct' },
    curl: `curl https://router.huggingface.co/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"meta-llama/Llama-3.1-8B-Instruct","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'tavily', name: 'Tavily', emoji: '🌐', badge: 'always', badgeLabel: 'Always Free',
    desc: '1,000 free searches/month. AI-optimised search returning clean, structured results — ideal for RAG and agents.',
    tags: ['Search'], chips: ['RAG', '1000 searches/mo'],
    keyUrl: 'https://app.tavily.com/home', docsUrl: 'https://docs.tavily.com/',
    test: { kind: 'tavily', defaultPrompt: 'What is the capital of France?' },
    curl: `curl https://api.tavily.com/search \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"query":"What is the capital of France?"}'`
  },
  {
    id: 'elevenlabs', name: 'ElevenLabs', emoji: '🔊', badge: 'always', badgeLabel: 'Always Free',
    desc: '10,000 characters/month free, forever. Industry-leading text-to-speech with voice cloning. No card required.',
    tags: ['Audio'], chips: ['TTS', 'Voice clone'],
    keyUrl: 'https://elevenlabs.io/app/settings/api-keys', docsUrl: 'https://elevenlabs.io/docs/api-reference/text-to-speech',
    test: { kind: 'tts', defaultPrompt: 'Hello! This is a live test of the text to speech API.' },
    curl: `curl https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb \\
  -H "xi-api-key: $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text":"Hello world","model_id":"eleven_multilingual_v2"}' \\
  --output hello.mp3`
  },
  {
    id: 'mistral', name: 'Mistral AI', emoji: '🌪', badge: 'trial', badgeLabel: 'Free Tier',
    desc: 'Mistral, Mixtral, and Codestral free on the experimental plan. Generous limits for personal and side-project use.',
    tags: ['LLM', 'Embedding', 'Code'], chips: ['Codestral'],
    keyUrl: 'https://console.mistral.ai/api-keys', docsUrl: 'https://docs.mistral.ai/getting-started/quickstart/',
    test: { kind: 'chat', endpoint: 'https://api.mistral.ai/v1/chat/completions', model: 'mistral-small-latest' },
    curl: `curl https://api.mistral.ai/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"mistral-small-latest","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'xai', name: 'xAI Grok', emoji: '𝕏', badge: 'trial', badgeLabel: 'Free credits',
    desc: 'Free monthly API credits. Covers Grok models including vision. OpenAI-compatible endpoint.',
    tags: ['LLM', 'Image'], chips: ['OpenAI-compat'],
    keyUrl: 'https://console.x.ai/', docsUrl: 'https://docs.x.ai/docs/overview',
    test: { kind: 'chat', endpoint: 'https://api.x.ai/v1/chat/completions', model: 'grok-2-latest' },
    curl: `curl https://api.x.ai/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"grok-2-latest","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'openai', name: 'OpenAI', emoji: '🟢', badge: 'trial', badgeLabel: 'Trial credits',
    desc: 'Free credits on new accounts. GPT-4o, DALL·E 3, Whisper, TTS, Embeddings. Pay-as-you-go after credits run out.',
    tags: ['LLM', 'Image', 'Audio', 'Embedding', 'Code'], chips: ['GPT-4o'],
    keyUrl: 'https://platform.openai.com/api-keys', docsUrl: 'https://platform.openai.com/docs/quickstart',
    test: { kind: 'chat', endpoint: 'https://api.openai.com/v1/chat/completions', model: 'gpt-4o-mini' },
    curl: `curl https://api.openai.com/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"gpt-4o-mini","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'anthropic', name: 'Anthropic Claude', emoji: '🔶', badge: 'trial', badgeLabel: 'Trial credits',
    desc: 'Free credits on new API accounts. Claude Haiku is the cheapest and remarkably capable. Also free via Claude.ai.',
    tags: ['LLM'], chips: ['Haiku · Sonnet · Opus'],
    keyUrl: 'https://console.anthropic.com/settings/keys', docsUrl: 'https://docs.anthropic.com/en/api/getting-started',
    test: { kind: 'anthropic', model: 'claude-3-5-haiku-latest' },
    curl: `curl https://api.anthropic.com/v1/messages \\
  -H "x-api-key: $API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"claude-3-5-haiku-latest","max_tokens":256,"messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'deepseek', name: 'DeepSeek', emoji: '🐋', badge: 'trial', badgeLabel: 'Free credits',
    desc: 'Free credit on signup. DeepSeek-V3 and R1 are among the most cost-effective models available anywhere.',
    tags: ['LLM', 'Code'], chips: ['Reasoning'],
    keyUrl: 'https://platform.deepseek.com/api_keys', docsUrl: 'https://api-docs.deepseek.com/',
    test: { kind: 'chat', endpoint: 'https://api.deepseek.com/chat/completions', model: 'deepseek-chat' },
    curl: `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"deepseek-chat","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'together', name: 'Together AI', emoji: '🤝', badge: 'trial', badgeLabel: '$1 free credit',
    desc: '$1 free credit on signup, plus free endpoints. Runs Llama 3, FLUX, Qwen, DeepSeek and dozens more.',
    tags: ['LLM', 'Image'], chips: ['OpenAI-compat'],
    keyUrl: 'https://api.together.xyz/settings/api-keys', docsUrl: 'https://docs.together.ai/docs/quickstart',
    test: { kind: 'chat', endpoint: 'https://api.together.xyz/v1/chat/completions', model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free' },
    curl: `curl https://api.together.xyz/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"meta-llama/Llama-3.3-70B-Instruct-Turbo-Free","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'perplexity', name: 'Perplexity', emoji: '🔍', badge: 'trial', badgeLabel: '$5 free credit',
    desc: '$5 free credit on signup. Sonar models with real-time web-search grounding — perfect for up-to-date answers.',
    tags: ['LLM', 'Search'], chips: ['Web-grounded'],
    keyUrl: 'https://www.perplexity.ai/settings/api', docsUrl: 'https://docs.perplexity.ai/getting-started/quickstart',
    test: { kind: 'chat', endpoint: 'https://api.perplexity.ai/chat/completions', model: 'sonar' },
    curl: `curl https://api.perplexity.ai/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"sonar","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'assemblyai', name: 'AssemblyAI', emoji: '🎤', badge: 'trial', badgeLabel: 'Free credit',
    desc: 'Free transcription credit on signup. Speech-to-text, speaker diarisation, summarisation, and LeMUR (LLM on audio).',
    tags: ['Audio'], chips: ['Transcription', 'Speaker ID'],
    keyUrl: 'https://www.assemblyai.com/dashboard/signup', docsUrl: 'https://www.assemblyai.com/docs',
    test: { kind: 'transcript', noPrompt: true },
    curl: `curl https://api.assemblyai.com/v2/transcript \\
  -H "Authorization: $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"audio_url":"https://assembly.ai/wildfires.mp3"}'`
  },
  {
    id: 'stability', name: 'Stability AI', emoji: '🎨', badge: 'trial', badgeLabel: '25 free credits',
    desc: '25 free credits on signup. Stable Diffusion 3, SDXL, and image editing via a simple REST API.',
    tags: ['Image'], chips: ['Stable Diffusion', 'Editing'],
    keyUrl: 'https://platform.stability.ai/account/keys', docsUrl: 'https://platform.stability.ai/docs/getting-started',
    test: { kind: 'image', defaultPrompt: 'A cute robot reading a book, digital art' },
    curl: `curl -f -X POST https://api.stability.ai/v2beta/stable-image/generate/core \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Accept: image/*" \\
  -F prompt="A cute robot reading a book" \\
  -F output_format="png" \\
  -o image.png`
  },

  /* ── Hidden / newly-added providers ─────────────────────────────────────
   * These appear in every filter (including "All") but carry a "New ✦"
   * marker so returning visitors can spot additions at a glance.          */
  {
    id: 'cerebras', name: 'Cerebras', emoji: '🧠', badge: 'always', badgeLabel: 'Always Free',
    hidden: true,
    desc: 'World\'s fastest inference — up to 2,000+ tokens/sec on Llama 3.3 70B. Generous free tier, no card required.',
    tags: ['LLM', 'Code'], chips: ['Llama 3.3', 'Ultra-fast'],
    keyUrl: 'https://cloud.cerebras.ai/', docsUrl: 'https://inference-docs.cerebras.ai/introduction',
    test: { kind: 'chat', endpoint: 'https://api.cerebras.ai/v1/chat/completions', model: 'llama-3.3-70b' },
    curl: `curl https://api.cerebras.ai/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"llama-3.3-70b","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'fireworks', name: 'Fireworks AI', emoji: '🎆', badge: 'trial', badgeLabel: 'Free credits',
    hidden: true,
    desc: 'Free API credits on signup. Llama, Qwen, Mixtral, DeepSeek, and FLUX models. OpenAI-compatible endpoint.',
    tags: ['LLM', 'Image', 'Code'], chips: ['OpenAI-compat', 'FLUX'],
    keyUrl: 'https://fireworks.ai/api-keys', docsUrl: 'https://readme.fireworks.ai/docs/quickstart',
    test: { kind: 'chat', endpoint: 'https://api.fireworks.ai/inference/v1/chat/completions', model: 'accounts/fireworks/models/llama-v3p1-8b-instruct' },
    curl: `curl https://api.fireworks.ai/inference/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"accounts/fireworks/models/llama-v3p1-8b-instruct","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'fal', name: 'Fal.ai', emoji: '🌅', badge: 'trial', badgeLabel: 'Free credits',
    hidden: true,
    desc: 'Free credits on signup. FLUX, Stable Diffusion, and video generation via a fast serverless GPU platform.',
    tags: ['Image'], chips: ['FLUX', 'Video', 'Serverless'],
    keyUrl: 'https://fal.ai/dashboard/keys', docsUrl: 'https://fal.ai/docs',
    test: { kind: 'chat', endpoint: 'https://fal.run/fal-ai/any-llm', model: 'google/gemini-flash-1-5' },
    curl: `curl https://fal.run/fal-ai/flux/schnell \\
  -H "Authorization: Key $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt":"A cute robot reading a book, digital art, vibrant colors"}'`
  },
  {
    id: 'nvidia', name: 'NVIDIA NIM', emoji: '🟩', badge: 'trial', badgeLabel: 'Free credits',
    hidden: true,
    desc: 'Free API credits via NVIDIA\'s inference cloud. Llama, Mistral, Phi, Gemma, and multimodal models, all OpenAI-compatible.',
    tags: ['LLM', 'Embedding', 'Image'], chips: ['OpenAI-compat', 'Multimodal'],
    keyUrl: 'https://build.nvidia.com/explore/discover', docsUrl: 'https://docs.api.nvidia.com/',
    test: { kind: 'chat', endpoint: 'https://integrate.api.nvidia.com/v1/chat/completions', model: 'meta/llama-3.1-8b-instruct' },
    curl: `curl https://integrate.api.nvidia.com/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"meta/llama-3.1-8b-instruct","messages":[{"role":"user","content":"Say hello in one sentence."}],"max_tokens":256}'`
  },
  {
    id: 'ai21', name: 'AI21 Labs', emoji: '🔵', badge: 'trial', badgeLabel: 'Free credits',
    hidden: true,
    desc: 'Free credits on signup. Jamba — a long-context (256K) hybrid SSM/Transformer model. Also offers text segmentation utilities.',
    tags: ['LLM', 'Embedding'], chips: ['256K context', 'Jamba'],
    keyUrl: 'https://studio.ai21.com/account/api-key', docsUrl: 'https://docs.ai21.com/docs/overview',
    test: { kind: 'chat', endpoint: 'https://api.ai21.com/studio/v1/chat/completions', model: 'jamba-1.6-mini' },
    curl: `curl https://api.ai21.com/studio/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"jamba-1.6-mini","messages":[{"role":"user","content":"Say hello in one sentence."}]}'`
  },
  {
    id: 'replicate', name: 'Replicate', emoji: '♻️', badge: 'trial', badgeLabel: 'Free credits',
    hidden: true,
    desc: 'Free credits on signup. Run open-source models including FLUX, Stable Diffusion, Llama, Whisper, and thousands more via API.',
    tags: ['LLM', 'Image', 'Audio'], chips: ['Open-source', 'FLUX', 'Whisper'],
    keyUrl: 'https://replicate.com/account/api-tokens', docsUrl: 'https://replicate.com/docs/get-started/overview',
    test: { kind: 'chat', endpoint: 'https://api.replicate.com/v1/models/meta/meta-llama-3-8b-instruct/predictions', model: '' },
    curl: `# Run FLUX image generation
curl https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"input":{"prompt":"A cute robot reading a book, digital art"}}'`
  }
];

const DEFAULT_PROMPT = 'Say hello in one sentence.';

/* ---------- small DOM helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  }
  for (const c of children) if (c != null) node.append(c);
  return node;
}

/* ---------- rendering ---------- */
let activeCategory = 'all';
let searchTerm = '';

function renderFilters() {
  const host = $('#filters');
  CATEGORIES.forEach(cat => {
    const btn = el('button', {
      class: 'filter-btn' + (cat === 'all' ? ' active' : ''),
      role: 'tab', 'data-cat': cat, 'aria-selected': cat === 'all' ? 'true' : 'false',
      text: CATEGORY_LABELS[cat],
      onclick: () => setCategory(cat)
    });
    host.append(btn);
  });
}

function providerCard(p) {
  const tagPills = el('div', { class: 'tags' });
  // Filterable category tags first (exactly what the filter token-matches),
  // then descriptive chips — both generated from data so they never drift.
  p.tags.forEach(t => tagPills.append(el('span', { class: 'tag cat', text: t })));
  (p.chips || []).forEach(c => tagPills.append(el('span', { class: 'tag', text: c })));

  // Hidden providers get a dashed border + "New ✦" pill so visitors can
  // spot recently-added entries at a glance.
  const cardClass = 'card' + (p.hidden ? ' is-hidden-provider' : '');
  const topRight = el('div', { style: 'display:flex;align-items:center;gap:.35rem;flex-shrink:0' },
    p.hidden ? el('span', { class: 'badge new-provider', title: 'Newly added' }, '✦ New') : null,
    el('span', { class: 'badge ' + p.badge, text: p.badgeLabel })
  );

  return el('article', { class: cardClass, 'data-id': p.id, 'data-hidden': p.hidden ? 'true' : 'false' },
    el('div', { class: 'card-top' },
      el('span', { class: 'card-name' }, el('span', { 'aria-hidden': 'true' }, p.emoji + ' '), p.name),
      topRight
    ),
    el('p', { class: 'card-desc', text: p.desc }),
    tagPills,
    el('div', { class: 'card-actions' },
      el('a', { class: 'btn btn-primary', href: p.keyUrl, target: '_blank', rel: 'noopener noreferrer', text: 'Get API Key →' }),
      el('button', { class: 'btn btn-ghost', text: 'Test it ▸', onclick: () => openModal(p) })
    ),
    el('div', { class: 'card-links' },
      el('a', { href: p.docsUrl, target: '_blank', rel: 'noopener noreferrer', text: 'Docs ↗' }),
      el('a', { href: '#', text: 'CLI & setup', onclick: (e) => { e.preventDefault(); openModal(p); } })
    )
  );
}

function renderGrid() {
  const host = $('#grid');
  host.textContent = '';
  const term = searchTerm.trim().toLowerCase();

  // All providers — hidden or not — participate in every filter.
  // "All" shows every entry; category buttons show every provider whose
  // tags array contains that exact token (no substring false-positives).
  const matches = PROVIDERS.filter(p => {
    const catOk = activeCategory === 'all' || p.tags.includes(activeCategory);
    if (!catOk) return false;
    if (!term) return true;
    const hay = [p.name, p.desc, ...p.tags, ...(p.chips || [])].join(' ').toLowerCase();
    return hay.includes(term);
  });

  if (matches.length === 0) {
    host.append(el('div', { class: 'empty', text: 'No providers match your search. Try a different term or category.' }));
    return;
  }

  // Render main providers first, hidden providers after — both always visible.
  const main   = matches.filter(p => !p.hidden);
  const hidden = matches.filter(p =>  p.hidden);

  main.forEach(p => host.append(providerCard(p)));

  if (hidden.length > 0) {
    // Divider banner that explains what the dashed cards are.
    const noun = hidden.length === 1 ? 'provider' : 'providers';
    host.append(el('div', { class: 'hidden-banner', role: 'note' },
      el('div', {},
        el('strong', { text: `✦ ${hidden.length} newly-added ${noun}` }),
        el('br'),
        el('span', { text: 'These appear in all category filters — dashed border marks them as recently added.' })
      )
    ));
    hidden.forEach(p => host.append(providerCard(p)));
  }
}

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    const on = b.dataset.cat === cat;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  renderGrid();
}

/* ---------- request building & response parsing ---------- */
function buildRequest(p, key, prompt, extra) {
  const t = p.test;
  let url, options = { method: 'POST', headers: {} };
  switch (t.kind) {
    case 'chat':
      url = t.endpoint;
      options.headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key };
      options.body = JSON.stringify({ model: t.model, messages: [{ role: 'user', content: prompt }], max_tokens: 512 });
      break;
    case 'gemini':
      url = `https://generativelanguage.googleapis.com/v1beta/models/${t.model}:generateContent?key=${encodeURIComponent(key)}`;
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] });
      break;
    case 'anthropic':
      url = 'https://api.anthropic.com/v1/messages';
      options.headers = {
        'Content-Type': 'application/json', 'x-api-key': key,
        'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true'
      };
      options.body = JSON.stringify({ model: t.model, max_tokens: 256, messages: [{ role: 'user', content: prompt }] });
      break;
    case 'cohere':
      url = 'https://api.cohere.com/v2/chat';
      options.headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key };
      options.body = JSON.stringify({ model: t.model, messages: [{ role: 'user', content: prompt }] });
      break;
    case 'tavily':
      url = 'https://api.tavily.com/search';
      options.headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key };
      options.body = JSON.stringify({ query: prompt });
      break;
    case 'cloudflare':
      url = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(extra || '')}/ai/run/@cf/meta/llama-3.1-8b-instruct`;
      options.headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key };
      options.body = JSON.stringify({ prompt });
      break;
    case 'tts':
      url = 'https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb';
      options.headers = { 'Content-Type': 'application/json', 'xi-api-key': key };
      options.body = JSON.stringify({ text: prompt, model_id: 'eleven_multilingual_v2' });
      break;
    case 'image': {
      url = 'https://api.stability.ai/v2beta/stable-image/generate/core';
      const fd = new FormData();
      fd.append('prompt', prompt);
      fd.append('output_format', 'png');
      options.headers = { 'Authorization': 'Bearer ' + key, 'Accept': 'image/*' };
      options.body = fd;
      break;
    }
    case 'transcript':
      url = 'https://api.assemblyai.com/v2/transcript';
      options.headers = { 'Content-Type': 'application/json', 'Authorization': key };
      options.body = JSON.stringify({ audio_url: 'https://assembly.ai/wildfires.mp3' });
      break;
  }
  return { url, options };
}

function parseReply(kind, data) {
  switch (kind) {
    case 'chat': return data?.choices?.[0]?.message?.content;
    case 'gemini': return data?.candidates?.[0]?.content?.parts?.[0]?.text;
    case 'anthropic': return data?.content?.[0]?.text;
    case 'cohere': return data?.message?.content?.[0]?.text;
    case 'cloudflare': return data?.result?.response;
    case 'tavily': return data?.answer || (data?.results ? data.results.slice(0, 3).map(r => `• ${r.title}\n  ${r.url}`).join('\n') : null);
    case 'transcript': return `Transcript job created.\nID: ${data?.id}\nStatus: ${data?.status}\n\nTranscription runs asynchronously — use the CLI command below and poll GET /v2/transcript/${data?.id} for the finished text.`;
    default: return null;
  }
}

/* ---------- modal & tester ---------- */
const modal = $('#modal');
let lastFocused = null;

function openModal(p) {
  lastFocused = document.activeElement;
  $('#modal-title').replaceChildren(
    el('span', { 'aria-hidden': 'true' }, p.emoji + ' '), p.name,
    el('span', { class: 'badge ' + p.badge, text: p.badgeLabel, style: 'margin-left:.5rem' })
  );
  $('#modal-body').replaceChildren(buildModalBody(p));
  modal.hidden = false;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  const keyInput = $('#test-key');
  if (keyInput) keyInput.focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

function codeBlock(text) {
  const wrap = el('div', { class: 'code-wrap' });
  const pre = el('pre', { class: 'code' });
  pre.textContent = text;
  const btn = el('button', {
    class: 'copy-btn', text: 'Copy',
    onclick: async () => {
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied ✓'; btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1600);
      } catch { btn.textContent = 'Copy failed'; }
    }
  });
  wrap.append(pre, btn);
  return wrap;
}

function buildModalBody(p) {
  const body = el('div');
  const t = p.test;

  // Guided access
  body.append(el('div', { class: 'section-label', text: 'Guided setup' }));
  const steps = el('ol', { class: 'steps' });
  steps.append(el('li', {}, 'Open the key page: ', el('a', { href: p.keyUrl, target: '_blank', rel: 'noopener noreferrer', text: 'Get your ' + p.name + ' API key ↗' })));
  steps.append(el('li', { text: 'Sign in (or create a free account) and generate a new API key.' }));
  steps.append(el('li', { text: 'Copy the key and paste it into the tester below — it stays in your browser.' }));
  steps.append(el('li', {}, 'Or run the CLI command in your terminal. Full docs: ', el('a', { href: p.docsUrl, target: '_blank', rel: 'noopener noreferrer', text: 'documentation ↗' })));
  body.append(steps);

  // Live tester
  body.append(el('div', { class: 'section-label', text: 'Live tester' }));
  body.append(el('div', { class: 'privacy' }, '🔒', el('span', { text: 'Your key is sent directly to ' + p.name + ' from your browser. It never touches our servers.' })));

  const keyField = el('div', { class: 'field' },
    el('label', { for: 'test-key', text: 'API key' }),
    el('input', { id: 'test-key', type: 'password', placeholder: 'Paste your API key', autocomplete: 'off', spellcheck: 'false' })
  );
  body.append(keyField);

  let extraInput = null;
  if (t.extraField) {
    const ef = el('div', { class: 'field' },
      el('label', { for: 'test-extra', text: t.extraField.label }),
      el('input', { id: 'test-extra', type: 'text', placeholder: t.extraField.placeholder, autocomplete: 'off', spellcheck: 'false' })
    );
    body.append(ef);
    extraInput = ef.querySelector('input');
  }

  let promptInput = null;
  if (!t.noPrompt) {
    const pf = el('div', { class: 'field' },
      el('label', { for: 'test-prompt', text: t.kind === 'tavily' ? 'Search query' : t.kind === 'image' ? 'Image prompt' : t.kind === 'tts' ? 'Text to speak' : 'Prompt' }),
      el('textarea', { id: 'test-prompt', text: t.defaultPrompt || DEFAULT_PROMPT })
    );
    body.append(pf);
    promptInput = pf.querySelector('textarea');
  } else {
    body.append(el('div', { class: 'privacy' }, 'ℹ️', el('span', { text: 'This test transcribes a sample hosted audio clip.' })));
  }

  const status = el('span', { class: 'status' });
  const runBtn = el('button', { class: 'btn btn-primary', text: 'Send test request ▸' });
  const result = el('div', { class: 'result' });

  runBtn.addEventListener('click', () => runTest(p, {
    key: keyField.querySelector('input').value.trim(),
    extra: extraInput ? extraInput.value.trim() : '',
    prompt: promptInput ? promptInput.value : '',
    status, runBtn, result
  }));

  body.append(el('div', { class: 'run-row' }, runBtn, status));
  body.append(result);

  // CLI command
  body.append(el('div', { class: 'section-label', text: 'CLI command (curl)' }));
  body.append(codeBlock(p.curl));

  return body;
}

async function runTest(p, ctx) {
  const { key, extra, prompt, status, runBtn, result } = ctx;
  const t = p.test;

  if (!key) { status.className = 'status err'; status.textContent = 'Enter your API key first.'; return; }
  if (t.extraField && !extra) { status.className = 'status err'; status.textContent = 'Enter your ' + t.extraField.label + '.'; return; }

  runBtn.disabled = true;
  status.className = 'status run'; status.textContent = 'Sending…';
  result.className = 'result';
  result.textContent = '';

  const { url, options } = buildRequest(p, key, prompt || DEFAULT_PROMPT, extra);
  const started = performance.now();

  try {
    const res = await fetch(url, options);
    const ms = Math.round(performance.now() - started);

    // Binary responses: audio / image
    if (t.kind === 'tts' || t.kind === 'image') {
      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        showError(result, status, `HTTP ${res.status} (${ms} ms)`, errText || res.statusText);
        return;
      }
      const blob = await res.blob();
      const objUrl = URL.createObjectURL(blob);
      status.className = 'status ok'; status.textContent = `✓ ${res.status} · ${ms} ms`;
      result.className = 'result show';
      result.append(el('div', { class: 'reply-box', text: t.kind === 'tts' ? '🔊 Audio generated — press play:' : '🎨 Image generated:' }));
      result.append(t.kind === 'tts'
        ? el('audio', { controls: '', src: objUrl })
        : el('img', { src: objUrl, alt: 'Generated image' }));
      return;
    }

    const text = await res.text();
    let data = null;
    try { data = JSON.parse(text); } catch { /* non-JSON */ }

    if (!res.ok) {
      const msg = data ? JSON.stringify(data, null, 2) : text;
      showError(result, status, `HTTP ${res.status} (${ms} ms)`, msg);
      return;
    }

    const reply = data ? parseReply(t.kind, data) : null;
    status.className = 'status ok'; status.textContent = `✓ ${res.status} · ${ms} ms`;
    result.className = 'result show';
    result.append(el('div', { class: 'reply-box', text: reply || '(Request succeeded — see raw response below.)' }));
    if (data) {
      const raw = el('details', { class: 'raw' }, el('summary', { text: 'Raw JSON response' }));
      const pre = el('pre'); pre.textContent = JSON.stringify(data, null, 2);
      raw.append(pre);
      result.append(raw);
    }
  } catch (err) {
    // Almost always a CORS / network restriction: the provider blocks direct
    // browser calls. Guide the user to the CLI path, which always works.
    status.className = 'status err'; status.textContent = '✗ Browser request blocked';
    result.className = 'result show';
    result.append(el('div', { class: 'reply-box error' },
      `${p.name} blocked the direct browser request (likely CORS) — this is a provider security setting, not a problem with your key.\n\n` +
      `Run the CLI command below in your terminal instead (it always works). Error: ${err.message}`));
  } finally {
    runBtn.disabled = false;
  }
}

function showError(result, status, statusText, detail) {
  status.className = 'status err'; status.textContent = '✗ ' + statusText;
  result.className = 'result show';
  const box = el('div', { class: 'reply-box error' });
  box.textContent = detail || 'Request failed.';
  result.append(box);
}

/* ---------- wire up ---------- */
function init() {
  renderFilters();
  renderGrid();

  $('#search').addEventListener('input', (e) => { searchTerm = e.target.value; renderGrid(); });
  $('#modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
