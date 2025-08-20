<!DOCTYPE html><html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>NexusYC · Powered by JoyceGPT‑5</title>
  <meta name="description" content="NexusYC is a YC‑grade, multimodal, multi‑agent OS powered by JoyceGPT‑5. Foundry · Forge · Crucible tiers with investor tooling, Bookface/HN integrations, and zero‑trust security." />
  <meta property="og:title" content="NexusYC · Powered by JoyceGPT‑5" />
  <meta property="og:description" content="YC’s internal‑style AI OS for founders, staff, and alumni. Foundry · Forge · Crucible." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.png" />
  <meta name="theme-color" content="#0ea5e9" />  <!-- Tailwind CSS -->  <script src="https://cdn.tailwindcss.com"></script>  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
          },
          colors: {
            joyce: { orange: '#f97316', blue: '#38bdf8', purple: '#8b5cf6', green: '#10b981' },
          },
          boxShadow: {
            glow: '0 0 30px rgba(56, 189, 248, 0.35)',
          },
          animation: {
            float: 'float 6s ease-in-out infinite',
          },
          keyframes: {
            float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
          }
        }
      }
    }
  </script>  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    .glass { backdrop-filter: blur(10px); background: linear-gradient(180deg, rgba(17,24,39,.65), rgba(17,24,39,.35)); }
    .grid-bg { background-image: radial-gradient(circle at 1px 1px, rgba(56,189,248,.22) 1px, transparent 0); background-size: 26px 26px; }
  </style>
</head>
<body class="bg-gray-950 text-gray-100 font-sans antialiased">
  <!-- Top bar -->
  <header class="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <a href="#home" class="flex items-center space-x-3 group">
          <div class="h-8 w-8 rounded-xl bg-gradient-to-tr from-joyce.blue via-joyce.purple to-joyce.green shadow-glow animate-float"></div>
          <div class="text-xl font-extrabold tracking-tight">
            <span class="text-joyce.blue">Nexus</span><span class="text-joyce.orange">YC</span>
            <span class="sr-only">Powered by</span>
            <span class="ml-1 text-joyce.green">Joyce</span><span class="text-joyce.purple">GPT‑5</span>
          </div>
        </a><!-- Nav -->
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <a href="#tiers" class="text-gray-300 hover:text-white">Tiers</a>
      <a href="#features" class="text-gray-300 hover:text-white">Features</a>
      <a href="#integrations" class="text-gray-300 hover:text-white">Integrations</a>
      <a href="#security" class="text-gray-300 hover:text-white">Security</a>
      <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer" class="text-gray-300 hover:text-white">Hacker News</a>
    </nav>

    <div class="flex items-center gap-3">
      <button id="themeToggle" class="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-white/5" aria-label="Toggle theme">Theme</button>
      <a href="#get-started" class="rounded-lg bg-joyce.blue px-4 py-2 text-sm font-bold text-gray-900 hover:bg-sky-300 shadow-glow">Get started</a>
      <button id="menuBtn" class="md:hidden rounded-lg border border-white/10 p-2" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </div>
  </div>
</div>
<!-- Mobile menu -->
<div id="mobileMenu" class="md:hidden hidden border-t border-white/10 bg-gray-950/95">
  <div class="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-sm">
    <a href="#tiers" class="py-2">Tiers</a>
    <a href="#features" class="py-2">Features</a>
    <a href="#integrations" class="py-2">Integrations</a>
    <a href="#security" class="py-2">Security</a>
    <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer" class="py-2">Hacker News</a>
  </div>
</div>

  </header>  <!-- Hero -->  <section id="home" class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40"></div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-950 to-black"></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            YC‑grade founder OS
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-joyce.blue via-joyce.purple to-joyce.green">powered by JoyceGPT‑5</span>
          </h1>
          <p class="mt-5 text-lg text-gray-300 max-w-xl">Run the startup journey end‑to‑end: apply, build, fundraise, and ship with a modular, multi‑agent, multimodal superapp. Foundry for access, Forge for execution, Crucible for scale.</p>
          <div class="mt-7 flex gap-3">
            <a href="#tiers" class="rounded-xl bg-joyce.orange px-5 py-3 font-bold text-gray-900 hover:bg-orange-400">See tiers</a>
            <a href="#features" class="rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">Explore features</a>
          </div>
          <div class="mt-6 text-sm text-gray-400">Zero‑setup. Serverless‑friendly. Deploy to Vercel, IONOS, or your cloud in minutes.</div>
        </div>
        <div class="relative">
          <div class="aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-tr from-gray-900 to-gray-800 shadow-glow grid place-items-center overflow-hidden">
            <svg viewBox="0 0 500 300" class="w-full h-full">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#38bdf8"/>
                  <stop offset="50%" stop-color="#8b5cf6"/>
                  <stop offset="100%" stop-color="#10b981"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="500" height="300" fill="#0b1220"/>
              <g opacity="0.9">
                <circle cx="120" cy="150" r="70" fill="url(#g1)" opacity="0.25"/>
                <rect x="200" y="70" width="220" height="160" rx="16" fill="none" stroke="url(#g1)" stroke-width="3"/>
                <text x="210" y="120" fill="#cbd5e1" font-size="16">Multi‑agent Orchestrator</text>
                <text x="210" y="150" fill="#94a3b8" font-size="13">Routing • Tools • Memory • Eval</text>
                <text x="210" y="178" fill="#38bdf8" font-weight="700" font-size="18">JoyceGPT‑5</text>
                <text x="210" y="202" fill="#8b5cf6" font-size="14">Gemini 2.5 • Cerebras • APIs</text>
              </g>
            </svg>
          </div>
          <p class="mt-3 text-xs text-gray-400">Illustrative mock panel. Replace with product shot or Loom later.</p>
        </div>
      </div>
    </div>
  </section>  <!-- Tiers -->  <section id="tiers" class="py-16 lg:py-24 border-t border-white/10 bg-gray-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold">Three tiers, one OS</h2>
      <p class="mt-2 text-gray-400">Choose your altitude. Upgrade any time.</p>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <!-- Foundry -->
        <div class="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/20">
          <div class="text-sm font-bold text-joyce.blue">Foundry</div>
          <h3 class="mt-1 text-xl font-extrabold">Freemium onboarding</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li>YC‑style playbooks & templates</li>
            <li>Startup health check & roadmap</li>
            <li>Weekly AI Office Hours</li>
            <li>Cohort benchmarks & insights</li>
          </ul>
          <a href="#get-started" class="mt-5 inline-block rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/5">Start free</a>
        </div>
        <!-- Forge -->
        <div class="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/20">
          <div class="text-sm font-bold text-joyce.orange">Forge</div>
          <h3 class="mt-1 text-xl font-extrabold">Pro execution</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li>AI pitch review & fundraising prep</li>
            <li>Investor CRM & outreach automations</li>
            <li>Co‑founder & advisor matching</li>
            <li>Auto content & posting workflow</li>
          </ul>
          <a href="#get-started" class="mt-5 inline-block rounded-lg bg-joyce.orange px-4 py-2 text-sm font-bold text-gray-900 hover:bg-orange-400">Go Pro</a>
        </div>
        <!-- Crucible -->
        <div class="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/20">
          <div class="text-sm font-bold text-joyce.purple">Crucible</div>
          <h3 class="mt-1 text-xl font-extrabold">Enterprise & white‑label</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li>Private cloud or on‑prem</li>
            <li>RBAC, SSO/SAML, audit trails</li>
            <li>Custom agents & data pipelines</li>
            <li>Dedicated support & SLAs</li>
          </ul>
          <a href="#contact" class="mt-5 inline-block rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/5">Talk to sales</a>
        </div>
      </div>
    </div>
  </section>  <!-- Features -->  <section id="features" class="py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold">What you get</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Multi‑agent brain</h3>
          <p class="mt-2 text-sm text-gray-300">Router, tools, evals, and memory orchestrating JoyceGPT‑5 with Gemini 2.5, Cerebras, and domain models.</p>
        </div>
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Founder workflow</h3>
          <p class="mt-2 text-sm text-gray-300">From application to Demo Day: tasks, docs, metrics, investor pipeline, and comms in one pane.</p>
        </div>
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Auto content</h3>
          <p class="mt-2 text-sm text-gray-300">News‑to‑post, scheduling, and export to email memos for instant distribution.</p>
        </div>
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Data room ready</h3>
          <p class="mt-2 text-sm text-gray-300">Investor profiles, intros, and tracking with permissioned sharing.</p>
        </div>
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Observability</h3>
          <p class="mt-2 text-sm text-gray-300">Usage, cost, throughput, and eval dashboards. Alerting out of the box.</p>
        </div>
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Deploy anywhere</h3>
          <p class="mt-2 text-sm text-gray-300">Vercel, IONOS Deploy Now, or your cloud. Docker‑first, serverless‑friendly.</p>
        </div>
      </div>
    </div>
  </section>  <!-- Integrations -->  <section id="integrations" class="py-16 lg:py-24 border-y border-white/10 bg-gray-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold">Integrations</h2>
      <p class="mt-2 text-gray-400">YC resources, founder tools, and the broader stack.</p>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-xl border border-white/10 p-5"><p class="text-sm text-gray-300">YC directories, Bookface‑style knowledge, and alumni graphs</p></div>
        <div class="rounded-xl border border-white/10 p-5"><p class="text-sm text-gray-300">Hacker News feed and topic monitoring</p></div>
        <div class="rounded-xl border border-white/10 p-5"><p class="text-sm text-gray-300">GitHub, Zapier/n8n, HubSpot, Salesforce</p></div>
        <div class="rounded-xl border border-white/10 p-5"><p class="text-sm text-gray-300">Vercel, IONOS Deploy Now, GCP, Azure</p></div>
        <div class="rounded-xl border border-white/10 p-5"><p class="text-sm text-gray-300">Auth (SSO/SAML), RBAC, audit logs</p></div>
        <div class="rounded-xl border border-white/10 p-5"><p class="text-sm text-gray-300">Postgres, BigQuery, vector DBs</p></div>
      </div>
    </div>
  </section>  <!-- Security -->  <section id="security" class="py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold">Security by default</h2>
      <div class="mt-6 grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Zero‑trust posture</h3>
          <p class="mt-2 text-sm text-gray-300">Least privilege, short‑lived tokens, policy‑as‑code, and per‑tenant isolation.</p>
        </div>
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="font-bold">Compliance‑ready</h3>
          <p class="mt-2 text-sm text-gray-300">SOC 2 workflows, data residency controls, encryption in transit and at rest.</p>
        </div>
      </div>
    </div>
  </section>  <!-- CTA -->  <section id="get-started" class="py-16 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-white/10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-extrabold">Spin up NexusYC in minutes</h2>
      <p class="mt-3 text-gray-300">Create a workspace, invite your team, connect your stack.</p>
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="#" class="rounded-xl bg-joyce.blue px-6 py-3 font-bold text-gray-900 hover:bg-sky-300 shadow-glow">Start free</a>
        <a href="#" class="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/5">Book a demo</a>
      </div>
      <p class="mt-3 text-xs text-gray-400">No credit card. Cancel anytime.</p>
    </div>
  </section>  <footer class="border-t border-white/10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
      <p>© <span id="year"></span> NexusYC · Powered by JoyceGPT‑5</p>
      <div class="flex items-center gap-4">
        <a href="#" class="hover:text-white">Privacy</a>
        <a href="#" class="hover:text-white">Terms</a>
        <a href="#contact" class="hover:text-white">Contact</a>
      </div>
    </div>
  </footer>  <!-- Minimal JS: theme + mobile menu + year -->  <script>
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const year = document.getElementById('year');

    const stored = localStorage.getItem('theme');
    if (stored === 'dark') html.classList.add('dark');
    if (stored === 'light') html.classList.remove('dark');

    themeBtn?.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    year.textContent = new Date().getFullYear();
  </script></body>
</html>