export type Guide = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readingTime: string;
  content: string;
  lastVerified: string;
  titleAr?: string;
  summaryAr?: string;
  contentAr?: string;
};

export const guides: Guide[] = [
  {
    id: "what-is-an-ai-api",
    slug: "what-is-an-ai-api",
    title: "What is an AI API?",
    summary: "A plain-English explanation of what AI APIs are and why beginners use them.",
    readingTime: "3 min",
    content: `An API (Application Programming Interface) is a way for your code to talk to another service over the internet.

An AI API is an API that gives you access to AI capabilities — like generating text, understanding images, or transcribing speech — without you having to build or run the AI model yourself.

For example:
- You write a few lines of code
- You send a request to Google Gemini's API
- Google runs the AI model on their servers
- The API sends back the result (a text response, an image, etc.)

This means you do not need a powerful GPU. You do not need to train a model. You just write code that makes a web request.

**Why beginners should care:**
AI APIs let you add AI features to your apps quickly. They are how most real-world AI products work — from chatbots to image generators to voice assistants.

**How to use one:**
1. Sign up for the API provider
2. Get an API key (a secret string that identifies you)
3. Make a web request to the API endpoint from your code
4. Handle the response

That is it. Most AI APIs work exactly like any other web API you may have used.`,
    lastVerified: "2025-06-01",
    titleAr: "ما هو الـ AI API؟",
    summaryAr: "شرح بسيط لما هي AI APIs ولماذا يستخدمها المبتدئون.",
    contentAr: `الـ API (واجهة برمجة التطبيقات) هو طريقة تتيح لكودك التواصل مع خدمة أخرى عبر الإنترنت.

الـ AI API هو API يمنحك إمكانية الوصول إلى قدرات الذكاء الاصطناعي — مثل توليد النصوص، وفهم الصور، أو تحويل الصوت إلى نص — دون الحاجة إلى بناء نموذج الذكاء الاصطناعي أو تشغيله بنفسك.

على سبيل المثال:
- تكتب بضعة أسطر من الكود
- ترسل طلبًا إلى Google Gemini API
- تشغّل Google النموذج على خوادمها
- يُرسل الـ API النتيجة (رد نصي، صورة، إلخ.)

هذا يعني أنك لا تحتاج إلى GPU قوية، ولا إلى تدريب نموذج. فقط اكتب كودًا يرسل طلب ويب.

**لماذا يهم هذا المبتدئين:**
AI APIs تتيح لك إضافة ميزات الذكاء الاصطناعي إلى تطبيقاتك بسرعة. هكذا تعمل معظم منتجات الذكاء الاصطناعي في العالم الحقيقي — من chatbots إلى مولدات الصور إلى المساعدات الصوتية.

**كيف تستخدم أحدها:**
1. سجّل في مزوّد الـ API
2. احصل على API key (سلسلة سرية تُعرّفك)
3. أرسل طلب ويب إلى endpoint الـ API من كودك
4. تعامل مع الاستجابة

هذا كل شيء. معظم AI APIs تعمل تمامًا مثل أي web API آخر ربما استخدمته من قبل.`
  },
  {
    id: "what-is-an-api-key",
    slug: "what-is-an-api-key",
    title: "What is an API key?",
    summary: "What an API key is, why it matters, and how to protect it.",
    readingTime: "3 min",
    content: `An API key is a secret string of characters that identifies you to an API provider.

Think of it like a password for your application. When your code makes a request to an AI API, it includes the API key so the provider knows who is making the request.

**Example API key format (fake):**
\`sk-abcdef1234567890abcdef1234567890\`

**Why it matters:**
- The provider uses your key to track your usage
- If someone else gets your key, they can use the API on your account — and you get charged
- Most providers let you revoke (delete) a compromised key and create a new one

**How to protect your API key:**
1. Never put your API key directly in your frontend code (HTML, client-side JavaScript) — it will be visible to everyone
2. Keep your API key in a .env file on your server or backend
3. Add .env to your .gitignore so it is never committed to GitHub
4. If you accidentally expose your key, revoke it immediately and create a new one

**In Next.js:**
Put your key in .env.local and access it in server-side code:
\`OPENAI_API_KEY=sk-your-key-here\`
Then use it: \`process.env.OPENAI_API_KEY\`

Never pass it to the browser. Use API routes to proxy your AI calls.`,
    lastVerified: "2025-06-01",
    titleAr: "ما هو الـ API key؟",
    summaryAr: "ما هو الـ API key، ولماذا يهم، وكيف تحميه.",
    contentAr: `الـ API key هو سلسلة سرية من الأحرف تُعرّفك لدى مزوّد الـ API.

فكّر فيه كلمة مرور لتطبيقك. عندما يرسل كودك طلبًا إلى AI API، يتضمّن الطلب الـ API key حتى يعرف المزوّد من يُرسل الطلب.

**مثال على شكل API key (وهمي):**
\`sk-abcdef1234567890abcdef1234567890\`

**لماذا يهم:**
- يستخدم المزوّد مفتاحك لتتبع استخدامك
- إذا حصل شخص آخر على مفتاحك، يمكنه استخدام الـ API على حسابك — وتدفع أنت الفاتورة
- معظم المزوّدين يتيحون إلغاء (حذف) المفتاح المكشوف وإنشاء مفتاح جديد

**كيف تحمي الـ API key:**
1. لا تضعه أبدًا مباشرةً في كود الواجهة الأمامية (HTML أو JavaScript) — سيكون مرئيًا للجميع
2. احتفظ بالمفتاح في ملف .env على الخادم أو الـ backend
3. أضف .env إلى .gitignore حتى لا يُرفع إلى GitHub
4. إذا كشفت مفتاحك بالخطأ، ألغه فورًا وأنشئ مفتاحًا جديدًا

**في Next.js:**
ضع المفتاح في .env.local واستخدمه في كود الخادم:
\`OPENAI_API_KEY=sk-your-key-here\`
ثم استخدمه: \`process.env.OPENAI_API_KEY\`

لا ترسله أبدًا إلى المتصفح. استخدم API routes لتوجيه طلبات الـ AI.`
  },
  {
    id: "what-is-a-free-tier",
    slug: "what-is-a-free-tier",
    title: "What is a free tier?",
    summary: "The difference between free tiers, free trials, and free credits — and what to watch out for.",
    readingTime: "4 min",
    content: `AI APIs have different types of free access. Understanding the difference will help you pick the right one.

**Free tier:**
A permanent part of the service that is always free, usually with limits. Example: "100 requests per day for free, forever." You do not need to pay to keep using it — as long as you stay within the limits.

**Free trial:**
Temporary free access, usually time-limited. Example: "Free for 14 days, then $20/month." After the trial, you need to pay.

**Free credits:**
A one-time amount of credit given to new accounts. Example: "$5 in free credits when you sign up." Once the credits run out, you pay for usage.

**Local free:**
Some AI tools can run locally on your own machine for free (like Ollama). No API key needed. The trade-off is that your computer does the work, so it can be slow without a GPU.

**What to watch out for:**
- Free tiers can change. A generous free tier today might become more restrictive tomorrow.
- Always check the official pricing page before building a production app that depends on the free tier.
- "Free to start" is not the same as "free forever."
- Some providers require a credit card even for free tiers — read the sign-up page carefully.`,
    lastVerified: "2025-06-01",
    titleAr: "ما هي الطبقة المجانية؟",
    summaryAr: "الفرق بين الطبقات المجانية والتجارب المجانية والأرصدة المجانية — وما يجب الانتباه إليه.",
    contentAr: `لـ AI APIs أنواع مختلفة من الوصول المجاني. فهم الفرق بينها سيساعدك على اختيار الأنسب.

**الطبقة المجانية (Free Tier):**
جزء دائم من الخدمة يكون مجانيًا دائمًا، عادةً مع حدود. مثال: "100 طلب يوميًا مجانًا للأبد." لا تحتاج للدفع طالما بقيت ضمن الحدود.

**التجربة المجانية (Free Trial):**
وصول مجاني مؤقت، عادةً محدود بوقت. مثال: "مجاناً لـ 14 يومًا، ثم 20 دولارًا شهريًا." بعد انتهاء التجربة، تحتاج للدفع.

**الأرصدة المجانية (Free Credits):**
رصيد يُمنح مرة واحدة للحسابات الجديدة. مثال: "5 دولارات عند التسجيل." بعد نفاد الرصيد، تدفع حسب الاستخدام.

**المجاني المحلي (Local Free):**
بعض أدوات الذكاء الاصطناعي تعمل محليًا على جهازك مجانًا (مثل Ollama). لا تحتاج لـ API key. الجانب السلبي أن جهازك هو من يؤدي العمل، مما قد يجعله بطيئًا بدون GPU.

**ما يجب الانتباه إليه:**
- الطبقات المجانية قد تتغير. ما هو سخي اليوم قد يصبح أكثر تقييدًا غدًا.
- تحقق دائمًا من صفحة التسعير الرسمية قبل بناء تطبيق إنتاجي يعتمد على الطبقة المجانية.
- "مجاني للبدء" ليس نفسه "مجاني للأبد."
- بعض المزوّدين يطلبون بطاقة ائتمانية حتى للطبقات المجانية — اقرأ صفحة التسجيل بعناية.`
  },
  {
    id: "what-are-rate-limits",
    slug: "what-are-rate-limits",
    title: "What are rate limits?",
    summary: "Why rate limits exist and how they affect your app.",
    readingTime: "3 min",
    content: `Rate limits are restrictions on how many API requests you can make in a given time period.

For example:
- "60 requests per minute"
- "1,000 requests per day"
- "100,000 tokens per minute"

**Why do they exist?**
AI APIs are expensive to run. Rate limits prevent any single user from using too many resources. They also protect against abuse.

**Types of rate limits:**
- **RPM** — Requests per minute
- **TPM** — Tokens per minute (how much text you can process)
- **RPD** — Requests per day
- **TPD** — Tokens per day

**What happens when you hit a rate limit?**
The API returns an error (usually a 429 status code). Your app should handle this gracefully — for example, by retrying after a short wait.

**For beginners:**
Free tiers almost always have lower rate limits than paid tiers. This is fine for small projects and learning. If you are building something that needs to handle many users, you will eventually need to upgrade or optimize your usage.

**Tips:**
- Cache responses when possible — do not make the same API call twice
- Batch requests if the API supports it
- Implement exponential backoff when retrying after a 429 error`,
    lastVerified: "2025-06-01",
    titleAr: "ما هي حدود المعدل (Rate Limits)؟",
    summaryAr: "لماذا توجد حدود المعدل وكيف تؤثر على تطبيقك.",
    contentAr: `حدود المعدل (Rate Limits) هي قيود على عدد طلبات الـ API التي يمكنك إرسالها في فترة زمنية محددة.

على سبيل المثال:
- "60 طلبًا في الدقيقة"
- "1,000 طلب في اليوم"
- "100,000 token في الدقيقة"

**لماذا توجد؟**
تكلفة تشغيل AI APIs مرتفعة. حدود المعدل تمنع أي مستخدم من استهلاك موارد كثيرة، وتحمي أيضًا من الإساءة.

**أنواع حدود المعدل:**
- **RPM** — طلبات في الدقيقة
- **TPM** — tokens في الدقيقة (كمية النص التي يمكنك معالجتها)
- **RPD** — طلبات في اليوم
- **TPD** — tokens في اليوم

**ماذا يحدث عند تجاوز الحد؟**
يُعيد الـ API خطأ (عادةً رمز الحالة 429). يجب على تطبيقك التعامل مع هذا بلطف — مثلًا بإعادة المحاولة بعد انتظار قصير.

**للمبتدئين:**
الطبقات المجانية دائمًا تقريبًا لها حدود معدل أدنى من الطبقات المدفوعة. هذا مقبول للمشاريع الصغيرة والتعلم. إذا كنت تبني شيئًا يحتاج إلى خدمة مستخدمين كثيرين، ستحتاج في النهاية إلى الترقية أو تحسين الاستخدام.

**نصائح:**
- احفظ (Cache) الاستجابات عند الإمكان — لا تُرسل نفس طلب الـ API مرتين
- استخدم الطلبات المجمّعة (Batch) إذا كان الـ API يدعمها
- طبّق Exponential Backoff عند إعادة المحاولة بعد خطأ 429`
  },
  {
    id: "what-are-tokens",
    slug: "what-are-tokens",
    title: "What are tokens?",
    summary: "How AI APIs measure and price text using tokens.",
    readingTime: "3 min",
    content: `Tokens are the unit of measurement AI language models use for text.

A token is roughly 3–4 characters or about ¾ of a word in English. The sentence "Hello, how are you?" is about 5 tokens.

**Why tokens matter:**
Most AI APIs charge per token — for both the text you send (input tokens) and the text the model generates (output tokens).

**Input tokens:**
Everything you send to the model — your system prompt, the conversation history, and your current message.

**Output tokens:**
Everything the model writes back.

**Example:**
If you send a 100-token message and the model responds with 200 tokens, you used 300 tokens total.

**Token limits:**
Every model has a context window — the maximum number of tokens it can process at once. For example, if a model has a 128,000 token context window, you can send and receive a total of 128,000 tokens in one conversation.

**For beginners:**
- Keep your prompts concise — shorter prompts cost less
- Do not include more conversation history than necessary
- Check the model's context window before planning a feature that needs to process long documents
- Most free tiers have token-per-minute limits — be aware of them`,
    lastVerified: "2025-06-01",
    titleAr: "ما هي الـ Tokens؟",
    summaryAr: "كيف تقيس AI APIs النصوص وتسعّرها باستخدام الـ tokens.",
    contentAr: `الـ Tokens هي وحدة القياس التي تستخدمها نماذج اللغة الاصطناعية للنصوص.

الـ Token يعادل تقريبًا 3-4 أحرف أو نحو ¾ كلمة بالإنجليزية. جملة "Hello, how are you?" تساوي نحو 5 tokens.

**لماذا تهم الـ Tokens:**
معظم AI APIs تفرض رسومًا لكل token — على النص الذي ترسله (input tokens) والنص الذي يولّده النموذج (output tokens).

**Input Tokens:**
كل ما ترسله إلى النموذج — system prompt، وسجل المحادثة، ورسالتك الحالية.

**Output Tokens:**
كل ما يكتبه النموذج ردًا.

**مثال:**
إذا أرسلت رسالة من 100 token وردّ النموذج بـ 200 token، فأنت استخدمت 300 token إجمالًا.

**حدود الـ Tokens:**
لكل نموذج "نافذة سياق" (Context Window) — وهي الحد الأقصى لعدد الـ tokens التي يمكنه معالجتها دفعةً واحدة. مثلًا، إذا كانت نافذة السياق 128,000 token، يمكنك إرسال واستقبال ما مجموعه 128,000 token في محادثة واحدة.

**للمبتدئين:**
- اجعل prompts موجزة — الـ prompts القصيرة تكلف أقل
- لا تُضمّن سجل المحادثة أكثر مما تحتاج
- تحقق من نافذة سياق النموذج قبل التخطيط لميزة تعالج مستندات طويلة
- معظم الطبقات المجانية لها حدود للـ tokens في الدقيقة — انتبه لها`
  },
  {
    id: "how-to-protect-your-api-key",
    slug: "how-to-protect-your-api-key",
    title: "How to protect your API key",
    summary: "The essential rules for keeping your API key safe.",
    readingTime: "4 min",
    content: `Exposing your API key is one of the most common beginner mistakes. Here is how to avoid it.

**Rule 1: Never put your key in frontend code**
If you put your API key in HTML, client-side JavaScript, or a React component that runs in the browser, anyone can open DevTools and read it. This includes most Vercel/Netlify deployments if you export the key to the client.

**Rule 2: Use environment variables**
Store your key in a .env.local file:
\`OPENAI_API_KEY=sk-your-key-here\`

In Next.js, environment variables without the NEXT_PUBLIC_ prefix are only available on the server — they will never be sent to the browser.

**Rule 3: Use API routes to proxy calls**
Instead of calling the AI API from the browser, call it from a Next.js API route (/app/api/chat/route.ts). Your frontend calls your own server, which then calls the AI API.

**Rule 4: Add .env files to .gitignore**
Your .gitignore should include:
\`.env\`
\`.env.local\`
\`.env*.local\`

Never commit .env files to GitHub. If you accidentally do, rotate your key immediately.

**Rule 5: Set spending limits**
Most AI providers let you set a monthly spending cap. Set a low one while developing.

**Rule 6: Monitor your usage**
Check your API dashboard regularly for unusual usage that might mean your key has been leaked.

**What to do if your key is compromised:**
1. Go to your provider's dashboard immediately
2. Revoke (delete) the exposed key
3. Create a new key
4. Update your environment variables`,
    lastVerified: "2025-06-01",
    titleAr: "كيف تحمي الـ API key الخاص بك",
    summaryAr: "القواعد الأساسية للحفاظ على أمان الـ API key.",
    contentAr: `كشف الـ API key من أكثر أخطاء المبتدئين شيوعًا. إليك كيفية تفاديه.

**القاعدة الأولى: لا تضع المفتاح في كود الواجهة الأمامية**
إذا وضعت API key في HTML أو JavaScript على المتصفح أو React component يعمل في المتصفح، فأي شخص يمكنه فتح DevTools وقراءته. هذا ينطبق على معظم نشرات Vercel/Netlify إذا أرسلت المفتاح للعميل.

**القاعدة الثانية: استخدم متغيرات البيئة**
احتفظ بالمفتاح في ملف .env.local:
\`OPENAI_API_KEY=sk-your-key-here\`

في Next.js، متغيرات البيئة التي لا تبدأ بـ NEXT_PUBLIC_ متاحة على الخادم فقط — لن تُرسل أبدًا للمتصفح.

**القاعدة الثالثة: استخدم API routes لتوجيه الطلبات**
بدلًا من استدعاء AI API من المتصفح، استدعه من Next.js API route (مثل /app/api/chat/route.ts). واجهتك الأمامية تستدعي خادمك، والخادم يستدعي AI API.

**القاعدة الرابعة: أضف ملفات .env إلى .gitignore**
يجب أن يحتوي .gitignore على:
\`.env\`
\`.env.local\`
\`.env*.local\`

لا ترفع ملفات .env إلى GitHub أبدًا. إذا فعلت ذلك بالخطأ، غيّر المفتاح فورًا.

**القاعدة الخامسة: ضع حدودًا للإنفاق**
معظم مزوّدي AI يتيحون لك تحديد سقف إنفاق شهري. ضع سقفًا منخفضًا أثناء التطوير.

**القاعدة السادسة: راقب استخدامك**
تفقّد لوحة تحكم الـ API بانتظام بحثًا عن استخدام غير مألوف قد يعني تسريب مفتاحك.

**ماذا تفعل إذا تعرّض مفتاحك للخطر:**
1. اذهب فورًا إلى لوحة تحكم المزوّد
2. ألغِ (احذف) المفتاح المكشوف
3. أنشئ مفتاحًا جديدًا
4. حدّث متغيرات البيئة`
  },
  {
    id: "what-is-openai-compatible",
    slug: "what-is-openai-compatible",
    title: "What is an OpenAI-compatible API?",
    summary: "What OpenAI compatibility means and why it matters for beginners.",
    readingTime: "3 min",
    content: `Many AI API providers say their API is "OpenAI-compatible." Here is what that means.

**The OpenAI API format:**
OpenAI defined an API format that became the de facto standard. The main endpoint is /v1/chat/completions, and requests look like this:

\`\`\`json
{
  "model": "gpt-4",
  "messages": [
    { "role": "user", "content": "Hello!" }
  ]
}
\`\`\`

**What OpenAI-compatible means:**
The provider's API accepts the same format as OpenAI. You can use the OpenAI SDK but change the base URL and API key to point to the different provider.

**Example (switching from OpenAI to Groq):**
\`\`\`javascript
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});
\`\`\`

**Why it matters for beginners:**
If you learn the OpenAI SDK once, you can use the same code with Groq, OpenRouter, Together AI, and other compatible providers — just change the API key and base URL.

**Important caveat:**
"Compatible" does not mean identical. Some features (like specific parameters or streaming options) may behave differently or not be supported. Always check the provider's specific docs.`,
    lastVerified: "2025-06-01",
    titleAr: "ما معنى API متوافق مع OpenAI؟",
    summaryAr: "ما يعنيه التوافق مع OpenAI ولماذا يهم المبتدئين.",
    contentAr: `كثير من مزوّدي AI APIs يقولون إن API الخاص بهم "متوافق مع OpenAI." إليك ما يعنيه ذلك.

**صيغة OpenAI API:**
OpenAI حدّدت صيغة API أصبحت المعيار الفعلي في المجال. الـ endpoint الرئيسي هو /v1/chat/completions، والطلبات تبدو كالتالي:

\`\`\`json
{
  "model": "gpt-4",
  "messages": [
    { "role": "user", "content": "مرحبا!" }
  ]
}
\`\`\`

**ما معنى "متوافق مع OpenAI":**
الـ API الخاص بالمزوّد يقبل نفس الصيغة التي يقبلها OpenAI. يمكنك استخدام OpenAI SDK لكن مع تغيير base URL والـ API key للإشارة إلى المزوّد المختلف.

**مثال (التبديل من OpenAI إلى Groq):**
\`\`\`javascript
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});
\`\`\`

**لماذا يهم المبتدئين:**
إذا تعلّمت OpenAI SDK مرة واحدة، يمكنك استخدام نفس الكود مع Groq وOpenRouter وTogether AI وغيرها من المزوّدين المتوافقين — فقط غيّر الـ API key والـ base URL.

**تحذير مهم:**
"متوافق" لا تعني "متطابق." بعض الميزات (مثل بارامترات معينة أو خيارات streaming) قد تعمل بشكل مختلف أو لا تكون مدعومة. تحقق دائمًا من توثيق المزوّد المحدد.`
  },
  {
    id: "how-to-choose-your-first-ai-api",
    slug: "how-to-choose-your-first-ai-api",
    title: "How to choose your first AI API",
    summary: "A practical guide to picking the right AI API for your first project.",
    readingTime: "5 min",
    content: `Picking your first AI API can feel overwhelming. Here is a simple framework.

**Step 1: Know what you want to build**
Different APIs do different things:
- Text/chat → Gemini, Groq, GitHub Models, OpenRouter
- Speech-to-text → Deepgram
- Text-to-speech → Deepgram
- Image generation → Replicate
- Embeddings → Gemini, Hugging Face

**Step 2: Prioritize free tiers**
For learning and building a prototype, use an API with a real free tier so you do not have to worry about costs. Good starting options:
- Google Gemini API (no credit card, generous free tier)
- Groq (fast, no credit card, OpenAI-compatible)
- GitHub Models (if you have a GitHub account, no credit card)

**Step 3: Consider beginner-friendliness**
Look for:
- Clear docs with beginner quickstart guides
- Official SDKs for JavaScript/TypeScript
- Good error messages
- A playground or visual testing tool

**Step 4: Check OpenAI compatibility**
If you plan to follow tutorials that use the OpenAI SDK, choosing an OpenAI-compatible API (Groq, OpenRouter, Together AI) makes it easier — you can follow the same tutorials.

**Step 5: Start simple**
Build the smallest possible thing first:
- One API call
- One use case
- One model

You can always switch providers later. Learning the pattern matters more than picking the "best" provider.

**Our recommendation for most beginners:**
Start with Google Gemini API (easiest free tier, no credit card) or Groq (fastest, OpenAI-compatible). Both have great docs and real free access.`,
    lastVerified: "2025-06-01",
    titleAr: "كيف تختار أول AI API لك",
    summaryAr: "دليل عملي لاختيار الـ AI API المناسب لمشروعك الأول.",
    contentAr: `اختيار أول AI API قد يبدو مربكًا. إليك إطار عمل بسيط.

**الخطوة الأولى: اعرف ما تريد بناءه**
كل API يخدم غرضًا مختلفًا:
- نص/دردشة ← Gemini أو Groq أو GitHub Models أو OpenRouter
- تحويل صوت إلى نص ← Deepgram
- تحويل نص إلى صوت ← Deepgram
- توليد صور ← Replicate
- Embeddings ← Gemini أو Hugging Face

**الخطوة الثانية: أعطِ الأولوية للطبقات المجانية**
للتعلم وبناء النماذج الأولية، استخدم API بطبقة مجانية حقيقية حتى لا تقلق بشأن التكاليف. خيارات جيدة للبداية:
- Google Gemini API (بدون بطاقة ائتمانية، طبقة مجانية سخية)
- Groq (سريع، بدون بطاقة ائتمانية، متوافق مع OpenAI)
- GitHub Models (إذا كان لديك حساب GitHub، بدون بطاقة ائتمانية)

**الخطوة الثالثة: فكّر في سهولة الاستخدام للمبتدئين**
ابحث عن:
- توثيق واضح مع دلائل quickstart للمبتدئين
- SDKs رسمية لـ JavaScript/TypeScript
- رسائل خطأ واضحة
- أداة تجربة أو playground مرئي

**الخطوة الرابعة: تحقق من التوافق مع OpenAI**
إذا كنت تخطط لاتباع دروس تعليمية تستخدم OpenAI SDK، فاختيار API متوافق مع OpenAI (مثل Groq أو OpenRouter أو Together AI) يسهّل الأمر — يمكنك اتباع نفس الدروس.

**الخطوة الخامسة: ابدأ بسيطًا**
ابنِ أصغر شيء ممكن أولًا:
- طلب API واحد
- حالة استخدام واحدة
- نموذج واحد

يمكنك دائمًا التبديل إلى مزوّد آخر لاحقًا. تعلّم النمط أهم من اختيار "أفضل" مزوّد.

**توصيتنا لمعظم المبتدئين:**
ابدأ بـ Google Gemini API (أسهل طبقة مجانية، بدون بطاقة ائتمانية) أو Groq (الأسرع، متوافق مع OpenAI). كلاهما لديه توثيق ممتاز ووصول مجاني حقيقي.`
  },
  {
    id: "best-first-ai-api-project",
    slug: "best-first-ai-api-project",
    title: "Best first AI API project for beginners",
    summary: "A practical beginner project idea that teaches all the core concepts.",
    readingTime: "4 min",
    content: `The best first AI API project is a simple chatbot — and here is why.

**Why a chatbot:**
Building a chatbot teaches you everything foundational:
- How to make API requests
- How to handle API keys safely (server-side)
- How to pass conversation history
- How to display streamed responses
- How to handle errors

And it produces something you can actually show to people.

**The project: Simple Q&A chatbot in Next.js**

1. User types a question into a text field
2. Your Next.js app calls an API route (server-side, so your API key is safe)
3. The API route calls the AI API (Gemini or Groq recommended)
4. The response streams back to the user

**Why this is the perfect first project:**
- Short (100–200 lines of code)
- Teaches API keys and environment variables
- Teaches server-side API calls (critical for security)
- Produces a real, working app
- Is the foundation for almost every more complex AI project

**What to build next:**
Once you have the chatbot working, extend it:
- Add a system prompt to give the bot a personality
- Add document upload so the bot can answer questions about a PDF
- Add memory by persisting the conversation to localStorage
- Build a voice version using Deepgram for speech-to-text

**Suggested stack for beginners:**
- Next.js (App Router)
- Google Gemini API (free, no credit card)
- Vercel (free hosting)

Total cost: $0 for prototyping.`,
    lastVerified: "2025-06-01",
    titleAr: "أفضل مشروع أول لمبتدئي AI APIs",
    summaryAr: "فكرة مشروع عملي للمبتدئين يعلّم جميع المفاهيم الأساسية.",
    contentAr: `أفضل مشروع أول لـ AI API هو chatbot بسيط — وإليك السبب.

**لماذا chatbot:**
بناء chatbot يعلّمك كل الأساسيات:
- كيفية إرسال طلبات API
- كيفية التعامل مع API keys بأمان (على الخادم)
- كيفية تمرير سجل المحادثة
- كيفية عرض الردود المتدفقة (streaming)
- كيفية معالجة الأخطاء

والنتيجة شيء يمكنك فعلًا إظهاره للناس.

**المشروع: chatbot بسيط للأسئلة والأجوبة في Next.js**

1. يكتب المستخدم سؤالًا في حقل نصي
2. يستدعي تطبيق Next.js الخاص بك API route (على الخادم، فيبقى API key آمنًا)
3. الـ API route يستدعي AI API (يُنصح بـ Gemini أو Groq)
4. يتدفق الرد إلى المستخدم

**لماذا هذا هو المشروع الأول المثالي:**
- قصير (100-200 سطر من الكود)
- يعلّمك API keys ومتغيرات البيئة
- يعلّمك استدعاءات الـ API على الخادم (ضرورية للأمان)
- ينتج تطبيقًا حقيقيًا يعمل فعلًا
- هو الأساس لتقريبًا كل مشروع ذكاء اصطناعي أكثر تعقيدًا

**ماذا تبني بعد ذلك:**
بعد أن يعمل الـ chatbot، طوّره:
- أضف system prompt لإعطاء البوت شخصية
- أضف رفع مستندات حتى يجيب البوت على أسئلة عن PDF
- أضف ذاكرة بحفظ المحادثة في localStorage
- ابنِ نسخة صوتية باستخدام Deepgram لتحويل الصوت إلى نص

**المكدّس المقترح للمبتدئين:**
- Next.js (App Router)
- Google Gemini API (مجاني، بدون بطاقة ائتمانية)
- Vercel (استضافة مجانية)

التكلفة الإجمالية: صفر دولار للنموذج الأولي.`
  },
  {
    id: "free-tier-vs-free-trial-vs-free-credits",
    slug: "free-tier-vs-free-trial-vs-free-credits",
    title: "Free tier vs free trial vs free credits",
    summary: "Understand the three types of free access so you are not surprised by a bill.",
    readingTime: "3 min",
    content: `Three terms that beginners often confuse — and getting them wrong can lead to unexpected costs.

**Free tier:**
A permanent, ongoing free offering. The provider gives you a certain amount of usage every day, month, or in total — forever, as long as you stay within the limits.

Example: "Up to 15 requests per minute and 1 million tokens per day — always free."

Best for: Long-term projects and learning apps where you do not need high volume.

**Free trial:**
Time-limited free access. You get full or near-full access for a fixed period (e.g., 7 days, 30 days), then you must pay.

Example: "Try the Pro plan free for 14 days."

Best for: Evaluating whether a paid product is right for you.

**Free credits:**
A one-time credit given to new accounts. You use them, and when they are gone, you pay per usage.

Example: "$10 in free credits when you sign up."

Best for: Getting started quickly without a credit card, but you will need to pay once credits run out.

**What to always do:**
1. Check the official pricing page before starting
2. Set spending limits in your account dashboard
3. Monitor your usage as you build
4. Do not build a production app that depends on free credits running forever

**The honest truth:**
Free tiers and free credit amounts change. What is generous today may be reduced tomorrow. Always check the official source, and never assume a free tier is permanent unless the official docs say so clearly.`,
    lastVerified: "2025-06-01",
    titleAr: "Free Tier مقابل Free Trial مقابل Free Credits",
    summaryAr: "افهم الفرق بين الأنواع الثلاثة للوصول المجاني حتى لا تُفاجأ بفاتورة.",
    contentAr: `ثلاثة مصطلحات يخلط بينها المبتدئون كثيرًا — والخلط بينها قد يؤدي إلى تكاليف غير متوقعة.

**Free Tier (الطبقة المجانية):**
عرض مجاني دائم ومستمر. يمنحك المزوّد كمية معينة من الاستخدام يوميًا أو شهريًا أو إجمالًا — للأبد، طالما بقيت ضمن الحدود.

مثال: "حتى 15 طلبًا في الدقيقة و1 مليون token يوميًا — مجاناً دائمًا."

الأنسب لـ: المشاريع طويلة الأمد وتطبيقات التعلم التي لا تحتاج حجمًا كبيرًا.

**Free Trial (التجربة المجانية):**
وصول مجاني محدود بوقت. تحصل على وصول كامل أو شبه كامل لفترة محددة (مثلًا 7 أو 30 يومًا)، ثم تدفع.

مثال: "جرّب خطة Pro مجانًا لـ 14 يومًا."

الأنسب لـ: تقييم ما إذا كان المنتج المدفوع يناسبك.

**Free Credits (الأرصدة المجانية):**
رصيد يُمنح مرة واحدة للحسابات الجديدة. تستخدمه، وحين ينفد تدفع حسب الاستخدام.

مثال: "10 دولارات عند التسجيل."

الأنسب لـ: البداية السريعة بدون بطاقة ائتمانية، لكن ستحتاج للدفع حين ينفد الرصيد.

**ما يجب فعله دائمًا:**
1. تحقق من صفحة التسعير الرسمية قبل البدء
2. ضع حدودًا للإنفاق في لوحة تحكم حسابك
3. راقب استخدامك أثناء البناء
4. لا تبنِ تطبيقًا إنتاجيًا يعتمد على أرصدة مجانية تدوم للأبد

**الحقيقة الصادقة:**
الطبقات المجانية وأقدار الأرصدة المجانية تتغير. ما هو سخي اليوم قد ينخفض غدًا. تحقق دائمًا من المصدر الرسمي، ولا تفترض أبدًا أن الطبقة المجانية دائمة ما لم تقل الوثائق الرسمية ذلك بوضوح.`
  }
];
