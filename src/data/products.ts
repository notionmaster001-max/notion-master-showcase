import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'agentforge-n8n-v2',
    num: '23',
    name: 'AgentForge n8n v2™',
    tagline: '10 Production Claude + Supabase AI Automation Workflows for n8n',
    category: 'automation',
    categoryLabel: 'AI Workflows',
    price: 0,
    formattedPrice: '$0 FREE',
    originalValue: '$89',
    discountPrice: '$0 (Limited Promo)',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/agentforge-n8n-v2-pack',
    gumroadId: '9KCyqwL7QTCHuMM0d8s35w==',
    image: '/products/23-agentforge-n8n.jpg',
    version: 'v2.0 Production Pack',
    folder: '17-agentforge-n8n-v2',
    badge: '10 Ready Workflows',
    rating: 4.9,
    reviewsCount: 48,
    techStack: ['n8n v1.0+', 'Claude 3.5 Sonnet API', 'OpenAI Embeddings', 'Supabase pgvector', 'Slack & Gmail Webhooks', 'GitHub API'],
    deliverables: [
      '10 Production-grade JSON workflows (RAG pipeline, lead scoring, support triage, etc.)',
      'Pre-connected node graphs with error handling and fallback routing',
      'Supabase pgvector SQL schema init script',
      '00-USER-QUICKSTART-GUIDE.md with step-by-step import instructions',
      'Perpetual Commercial License'
    ],
    description: 'Supercharge your business with 10 production AI agent workflows ready to import directly into n8n. Features RAG document pipelines, automated lead enrichment, support triage, and executive summaries using Claude 3.5 Sonnet and Supabase.',
    highlights: [
      '100% import-tested in n8n v1.0+ with verified node graph topology',
      'Integrates Claude API, OpenAI text-embedding-3-small, and Supabase pgvector',
      'Includes autonomous data cleansing and multi-platform content repurposing',
      'Transparent disclosure: requires your own Anthropic and OpenAI API keys'
    ],
    metaTitle: 'AgentForge n8n v2™ — 10 Production Claude & Supabase AI Automation Workflows',
    metaDescription: 'Import 10 battle-tested n8n AI agent workflows: RAG vector pipelines, lead qualification, support triage, and PR review using Claude 3.5 and Supabase.',
    seoKeywords: ['n8n ai workflows', 'n8n rag pipeline', 'n8n claude api integration', 'n8n supabase pgvector', 'n8n automation blueprints'],
    faqs: [
      {
        question: 'Are these workflows compatible with self-hosted n8n?',
        answer: 'Yes! Works on both n8n Cloud and self-hosted Docker n8n instances (v1.0+).'
      },
      {
        question: 'Do I need my own API keys?',
        answer: 'Yes, you will add your Anthropic and OpenAI API keys to the respective credential nodes in n8n.'
      }
    ],
    systemRequirements: ['n8n version 1.0 or higher (cloud or self-hosted)', 'Anthropic API key and OpenAI API key']
  },
  {
    id: 'remotemcp-pro-cloudflare',
    num: '22',
    name: 'RemoteMCP Pro™',
    tagline: 'TypeScript Remote MCP Server on Cloudflare Workers with OAuth2 PKCE',
    category: 'saas',
    categoryLabel: 'Cloud & Edge AI',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$95',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/remotemcp-pro-cloudflare/LAUNCH20',
    gumroadId: 'ZDhBD5Yb1j1kSIasyFtAyA==',
    image: '/products/22-remotemcp-pro.jpg',
    version: 'v2.0 Edge Native',
    folder: '16-remotemcp-pro-cloudflare',
    badge: 'Sub-50ms Edge',
    rating: 4.7,
    reviewsCount: 19,
    techStack: ['TypeScript 5.6', 'Cloudflare Workers (Wrangler)', 'OAuth2 PKCE Flow', 'JSON-RPC 2.0 (MCP Spec)', 'Cloudflare D1 & KV Storage'],
    deliverables: [
      'Complete TypeScript source code in src/ (auth, middleware, tools, types)',
      'OAuth2 PKCE authorization flow & sliding-window rate limiting',
      'Wrangler.toml edge deployment configuration',
      'Claude Desktop & Cursor remote MCP configuration templates',
      '00-USER-QUICKSTART-GUIDE.md',
      'Perpetual Commercial License'
    ],
    description: 'Local stdio MCP servers only work on one machine. RemoteMCP Pro gives you a production-grade TypeScript MCP server engineered for Cloudflare Workers with OAuth2 PKCE authentication and zero cold starts.',
    highlights: [
      'Runs globally on Cloudflare Workers edge network with sub-50ms latency',
      'OAuth2 PKCE user authentication and scoped token verification',
      'Built-in sliding-window rate limiting to prevent abuse',
      'Pre-configured JSON-RPC 2.0 endpoint compatible with Claude & Cursor'
    ],
    metaTitle: 'RemoteMCP Pro™ — Cloudflare Workers Remote MCP Server with OAuth2',
    metaDescription: 'Deploy globally distributed remote Model Context Protocol servers on Cloudflare Workers with OAuth2 PKCE and rate limiting.',
    seoKeywords: ['remote mcp server', 'cloudflare workers mcp', 'typescript mcp oauth', 'mcp sse server cloudflare', 'remote model context protocol'],
    faqs: [
      {
        question: 'Why run MCP on Cloudflare Workers?',
        answer: 'Cloudflare Workers provide sub-50ms latency globally, zero cold starts, and eliminate the need to run local stdio processes on every developer machine.'
      },
      {
        question: 'Does it support OAuth2 PKCE?',
        answer: 'Yes! It includes a full OAuth2 PKCE authorization flow for secure token-based agent access.'
      }
    ],
    systemRequirements: ['Node.js 18+ and npm', 'Free Cloudflare account and Wrangler CLI']
  },
  {
    id: 'openapi-to-mcp-forge',
    num: '21',
    name: 'OpenAPI-to-MCP Forge Pro™',
    tagline: 'Production Compiler Engine: Convert Any REST API into FastMCP Python Servers',
    category: 'saas',
    categoryLabel: 'Developer Tools',
    price: 0,
    formattedPrice: '$0 FREE',
    originalValue: '$99',
    discountPrice: '$0 (Limited Promo)',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/openapi-to-mcp-forge',
    gumroadId: 'r2snDUbboAjiBTT8GgoTiQ==',
    image: '/products/21-openapi-to-mcp.jpg',
    version: 'v2.0 Hardened Engine',
    folder: '15-openapi-to-mcp-forge',
    badge: 'Verified Test Suite',
    rating: 4.9,
    reviewsCount: 31,
    techStack: ['Python 3.10+', 'Model Context Protocol (FastMCP)', 'OpenAPI 3.0 / 3.1 / Swagger', 'Docker & Docker Compose', 'Claude Desktop', 'Cursor IDE'],
    deliverables: [
      'openapi_to_mcp.py CLI compiler engine with path URL quoting & arg deduplication',
      'Production FastMCP server.py runtime with connection pooling',
      'Full test suite (test_converter.py, test_edge_cases.py, test_live_mock_execution.py)',
      'Multi-stage Dockerfile & docker-compose.yml',
      'Sample specs (Petstore & E-commerce)',
      '00-USER-QUICKSTART-GUIDE.md'
    ],
    description: 'Stop writing hundreds of lines of boilerplate MCP tool functions by hand. OpenAPI-to-MCP Forge automatically parses OpenAPI 3.0/3.1 specs and generates a fully typed, production-ready Python FastMCP server in seconds.',
    highlights: [
      'Fully typed @mcp.tool() generation with docstrings and type annotations',
      'Handles path params, query parameters, header auth, and JSON request bodies',
      'Includes live mock HTTP server test suite for 100% verified execution',
      'Pre-configured Claude Desktop and Cursor MCP configs'
    ],
    metaTitle: 'OpenAPI-to-MCP Forge Pro™ — REST API to FastMCP Server Compiler',
    metaDescription: 'Automatically convert any OpenAPI 3.0/3.1 Swagger spec into a fully typed Python FastMCP Server for Claude Desktop and Cursor.',
    seoKeywords: ['openapi to mcp', 'fastmcp generator', 'convert swagger to mcp', 'python mcp server generator', 'claude desktop mcp tools'],
    faqs: [
      {
        question: 'Does it support OpenAPI 3.0 and 3.1?',
        answer: 'Yes! Both JSON and YAML OpenAPI 3.0 and 3.1 specifications are fully supported.'
      },
      {
        question: 'How do I connect the generated server to Claude Desktop?',
        answer: 'Copy the generated claude_desktop_config.json snippet into your Claude Desktop config file and restart Claude.'
      }
    ],
    systemRequirements: ['Python 3.10+ or Docker', 'mcp[cli] package']
  },
  {
    id: 'claude-md-master-kit',
    num: '20',
    name: 'CLAUDE.md Master Kit™',
    tagline: '20 Production Architecture Blueprints for Anthropic Claude Code Agent',
    category: 'agency',
    categoryLabel: 'AI & Terminal',
    price: 0,
    formattedPrice: '$0 FREE',
    originalValue: '$59',
    discountPrice: '$0 (Limited Promo)',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/claude-md-master-kit',
    gumroadId: 'lrQgE0eEN6D0d2ck9F37dA==',
    image: '/products/20-claude-md-kit.jpg',
    version: 'v2.0 Claude 3.7 Ready',
    folder: '14-claude-md-master-kit',
    badge: 'Saves 80% Tokens',
    rating: 4.8,
    reviewsCount: 29,
    techStack: ['Claude Code (Anthropic CLI)', 'Claude 3.5 Sonnet / 3.7', 'Next.js 15 App Router', 'FastAPI Python', 'Docker Compose', 'n8n AI Blueprints', 'Chrome Extension MV3', 'Turborepo Fullstack'],
    deliverables: [
      '20 specialized CLAUDE.md templates for modern production stacks',
      'Pre-configured build, lint, test, and run commands',
      'Directory structure mappings to prevent expensive token exploration',
      'Code style guidelines and strict prohibited patterns',
      '00-USER-QUICKSTART-GUIDE.md with 30-second instructions',
      'Perpetual Commercial License for unlimited repos'
    ],
    description: 'Claude Code is incredible, but without CLAUDE.md in your project root, the agent wastes expensive API tokens guessing your build commands and architecture. CLAUDE.md Master Kit gives you 20 battle-tested stack blueprints.',
    highlights: [
      'Saves up to 80% of exploratory API tokens on first session run',
      'Includes Next.js 15, FastAPI, Docker, Chrome MV3, n8n, Expo, and MCP stacks',
      'One-click setup: drop into project root, rename to CLAUDE.md, and launch',
      'Pre-configured verification commands (lint, test, build)'
    ],
    metaTitle: 'CLAUDE.md Master Kit™ — 20 Production Templates for Claude Code CLI',
    metaDescription: 'Stop burning API tokens in Claude Code. 20 production-grade CLAUDE.md templates for Next.js 15, FastAPI, Docker Compose, n8n, and Supabase.',
    seoKeywords: ['claude code claude.md templates', 'claude.md best practices', 'anthropic claude code cli setup', 'claude code nextjs template'],
    faqs: [
      {
        question: 'What is CLAUDE.md?',
        answer: 'CLAUDE.md is the official configuration file read by Anthropic Claude Code terminal agent upon startup to understand your project architecture and commands.'
      },
      {
        question: 'Which stacks are included?',
        answer: '20 stacks including Next.js 15, FastAPI, Docker Compose, n8n, Supabase, Turborepo, Stripe SaaS, Chrome MV3, and React Native.'
      }
    ],
    systemRequirements: ['Claude Code CLI (claude in terminal)', 'Anthropic API Key or Claude Pro/Team subscription']
  },
  {
    id: 'cursorforge-pro-rules',
    num: '19',
    name: 'CursorForge Pro™',
    tagline: '50+ Production AI Coding Rules for Next.js 15, Supabase, Tailwind v4 & Cursor IDE',
    category: 'agency',
    categoryLabel: 'Developer Tools',
    price: 0,
    formattedPrice: '$0 FREE',
    originalValue: '$79',
    discountPrice: '$0 (Limited Promo)',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/cursorforge-pro-rules',
    gumroadId: '_PjLvz1bswRODie7hVuwOw==',
    image: '/products/19-cursorforge-pro.jpg',
    version: '2026 Production Edition',
    folder: '13-cursorforge-pro-rules',
    badge: 'Zero Hallucinations',
    rating: 4.9,
    reviewsCount: 42,
    techStack: ['Cursor IDE 0.40+', '.mdc Modular Rules', 'Next.js 15 (App Router)', 'React 19 Server Actions', 'Supabase SSR & RLS', 'Tailwind CSS v4', 'Stripe Billing', 'Drizzle & Prisma ORM', 'TypeScript 5.6'],
    deliverables: [
      '50+ modular .mdc rules scoped by globs to prevent context bloat',
      'Next.js 15 async Request APIs and Server Actions rules with Zod validation',
      'Supabase SSR cookie authentication & Row Level Security (RLS) enforcement',
      'Stripe webhook signature verification with raw body handling',
      'Tailwind CSS v4 utility composition & theme variables',
      '00-USER-QUICKSTART-GUIDE.md for 30-second installation',
      'Perpetual Commercial License for unlimited projects'
    ],
    description: 'Stop letting Cursor AI hallucinate on Next.js 15 breaking changes and broken Supabase session cookies. CursorForge Pro gives you 50+ modular, battle-tested .mdc rules that enforce production engineering standards automatically.',
    highlights: [
      'Modular scoped rules with globs so they only load when editing matching files',
      'Covers Next.js 15, React 19, Supabase SSR, Stripe, Tailwind v4, and Docker',
      'Zero-setup: drop .cursor folder into project root and open Cursor IDE',
      'Strict TypeScript and security guardrails against SQL injection and insecure CORS'
    ],
    metaTitle: 'CursorForge Pro™ — 50+ Production Cursor Rules for Next.js 15 & Supabase',
    metaDescription: 'Eliminate AI hallucinations in Cursor IDE with 50+ battle-tested .mdc rules for Next.js 15, React 19 Server Actions, Supabase SSR, and Tailwind v4.',
    seoKeywords: ['cursor rules nextjs 15', 'cursor mdc rules', 'cursor ai hallucinations fix', 'supabase ssr cursor rules', 'tailwind v4 cursor rules'],
    faqs: [
      {
        question: 'How do I install CursorForge Pro?',
        answer: 'Extract the zip and copy the .cursor folder into your project root. Cursor IDE automatically detects and activates all 50+ rules.'
      },
      {
        question: 'Does it work with Cursor 0.40+ and .mdc format?',
        answer: 'Yes! Every rule is written in Cursor native .mdc format with YAML frontmatter and glob filters.'
      }
    ],
    systemRequirements: ['Cursor IDE 0.40+ (Mac, Windows, or Linux)', 'Any modern web codebase (Next.js, React, Node, Python, etc.)']
  },
  {
    id: 'vice-city-master-vault',
    liveDemoUrl: 'https://notionmaster001-max.github.io/vice-city-creator-starter-kit/',
    num: '18',
    name: 'Vice City Master Vault™ (5-in-1 Suite)',
    tagline: 'The Complete Day-1 Launch Arsenal for Gamers & Streamers',
    category: 'gaming',
    categoryLabel: 'Flagship Bundle',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$149',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/vice-city-master-vault/LAUNCH20',
    gumroadId: 'WQCagygfrX9uWG9dhMhukg==',
    image: '/products/18-vice-city-master-vault.jpg',
    version: '2026 Master VIP Edition',
    folder: '06-vice-city-master-vault',
    badge: '5-in-1 Complete Suite',
    rating: 4.5,
    reviewsCount: 42,
    techStack: ['All 5 Vice City Software Engines', 'VIP Streamer Launch Handbook', 'OBS Studio Full Suite', 'Twitch IRC WebSocket Engine', 'Web Audio Procedural Soundboard', 'Capture Card Calibration Tools'],
    deliverables: [
      'Module 01: Vice City 100% Master Companion™ (Interactive Dual-Screen Tracker & Notion Blueprint)',
      'Module 02: StreamShield Vice™ (Procedural DMCA-Safe Soundboard & Twitch VOD Track 2 Setup)',
      'Module 03: ViceStream Neon Studio™ (1080p Starting Soon, BRB, Webcam Border & Twitch Chat Box)',
      'Module 04: ConsoleStream Pro™ (Capture Card Audio Latency Metronome & HDR Color Restoration)',
      'Module 05: ChatHeist Live™ (Interactive Twitch Chat Bank Heist Minigame Overlay Engine)',
      'VIP Streamer Launch Handbook (VIP-STREAMER-CREATOR-LAUNCH-HANDBOOK.html / .md)',
      '3 High-Retention Short-Form Scripts (TikTok / Reels / Shorts) + 2 Brand Sponsor Cold Email Scripts',
      '7-Day Content Roadmap & Broadcast Schedule (Day 1 Launch through Week 1)',
      'All-in-One Master Quickstart Blueprint (00-USER-QUICKSTART-GUIDE.html)',
      'Master Commercial Studio License for unlimited personal, stream, and agency production'
    ],
    description: 'The ultimate, all-inclusive broadcasting and completion suite for the November 19, 2026 release. Includes all 5 commercial software engines plus the exclusive VIP Streamer Launch Handbook containing proven viral short scripts and sponsor email templates.',
    highlights: [
      'Complete 5-in-1 suite saves over $80 compared to purchasing individual modules',
      'The definitive Day-1 Launch Order of Operations: from overlay install to viral short publishing',
      'Zero monthly subscriptions, zero third-party dependencies, and 100% offline-ready engines',
      'Exclusive VIP Creator Handbook with plug-and-play sponsor outreach emails for gaming hardware brands'
    ],
    metaTitle: 'Vice City Master Vault™ (5-in-1 Suite) — Complete Day-1 Launch Arsenal for Creators',
    metaDescription: 'The definitive 5-in-1 creator toolkit for GTA 6 launch. Includes 100% companion, DMCA soundboard, 1080p OBS overlays, capture sync fix, chat heists, and VIP handbook.',
    seoKeywords: ['gta 6 streamer bundle', 'vice city creator toolkit', 'obs stream pack 2026', 'gta 6 launch guide', 'gaming creator master suite'],
    faqs: [
      {
        question: 'Are all 5 standalone products included in this master download?',
        answer: 'Yes! You receive the full, standalone source code, documentation, and assets for all 5 products inside the all_suite_engines/ directory.'
      },
      {
        question: 'What is inside the VIP Creator Launch Handbook?',
        answer: 'It includes 3 viral short-form video scripts (TikTok/Reels/Shorts), 2 cold outreach email templates for gaming sponsors, and a 7-day launch streaming roadmap.'
      }
    ],
    systemRequirements: ['Any modern browser (Chrome, Safari, Edge, Firefox)', 'OBS Studio 28+ for streaming modules', 'Console or PC gaming setup']
  },
  {
    id: 'master-suite',
    num: '05',
    name: 'The Founder & Developer Master Suite (4-in-1)',
    tagline: 'The Definitive 4-in-1 Institutional Stack to Build, Sign, Operate & Scale',
    category: 'bundle',
    categoryLabel: 'Flagship Bundle',
    price: 99,
    formattedPrice: '$99',
    originalValue: '$192',
    discountPrice: '$79.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/founder-developer-suite/LAUNCH20',
    gumroadId: 'EEC1tknNTiloXEp-LmnIkw==',
    image: '/products/05-master-suite.jpg',
    version: '2026 Enterprise Edition',
    folder: '05-founder-developer-master-bundle',
    badge: 'Best Value (Save 50%)',
    rating: 4.5,
    reviewsCount: 47,
    techStack: ['Next.js 15', 'React 19', 'Supabase', 'Stripe', 'Notion OS', 'Word Contracts (.docx)', '525 Prompts Vault'],
    deliverables: [
      'NextLaunch AI™ Full SaaS Starter ($49 standalone value)',
      'ClientForge™ High-Ticket Agency Acquisition & Legal Kit ($47 standalone value)',
      'Notion Business OS™ Executive Headquarters & 5 Relational CSVs ($49 standalone value)',
      'PromptForge AI™ 500+ Master Prompts Vault & Offline App ($47 standalone value)',
      'Institutional 4-Phase Founder Execution Roadmap (00-USER-QUICKSTART-GUIDE.html)',
      'Master Commercial Operating License for unlimited ventures'
    ],
    description: 'Own the entire software, legal, operational, and growth infrastructure in one single download. Combines full source code, attorney-grade client agreements, turnkey executive Notion databases, and production prompt vaults.',
    highlights: [
      'Immediate access to 4 distinct production archives',
      'Saves $93 compared to purchasing packages individually',
      'Complete lifecycle coverage: From finding clients to shipping software',
      'Tested with CRC checksum algorithms for zero corruption'
    ],
        metaTitle: "The Founder & Developer Master Suite (4-in-1) \u2014 Complete Software, Legal & Ops Stack",
    metaDescription: "The ultimate 4-in-1 institutional developer arsenal: NextLaunch AI SaaS starter, ClientForge legal agreements, Notion Business OS, and PromptForge 525 Prompts vault.",
    seoKeywords: ["developer master bundle", "indie hacker starter pack", "nextjs saas notion bundle", "software founder arsenal"],
    faqs: [
      {
            "question": "What is included in the 4-in-1 Master Suite?",
            "answer": "You get immediate access to 4 full products: NextLaunch AI ($49), ClientForge ($47), Notion Business OS ($49), and PromptForge AI ($47) for a flat $99 one-time fee."
      },
      {
            "question": "Are updates included?",
            "answer": "Yes, all future minor version releases and template improvements for all 4 systems are included with your single purchase."
      }
],
    systemRequirements: ['Modern Web Browser', 'Node.js 18+ (for NextLaunch)', 'Microsoft Word / Google Docs (for ClientForge)', 'Free Notion account (for Business OS)']
  },
  {
    id: 'nextlaunch-ai',
    num: '04',
    name: 'NextLaunch AI™',
    tagline: 'Production Next.js 15 + Supabase + Stripe AI SaaS Starter Boilerplate',
    category: 'saas',
    categoryLabel: 'Full-Stack SaaS',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$100',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/nextlaunch-ai/LAUNCH20',
    gumroadId: 'tu2KRUy6ib64C1ZsjPti5A==',
    image: '/products/04-nextlaunch.jpg',
    version: 'v2.0 (Next.js 15.1.7)',
    folder: '04-nextjs-supabase-ai-saas',
    badge: 'Flagship SaaS Starter',
    rating: 4.3,
    reviewsCount: 29,
    techStack: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Supabase Auth & RLS', 'Stripe Subscriptions', 'Google Gemini 2.0 Flash', 'Tailwind CSS'],
    deliverables: [
      'Complete production repository (npm run build verified, exit code 0)',
      'Supabase PostgreSQL init migration with user profiles, credits trigger & RLS',
      'Stripe subscription checkout & webhook event engine (active/canceled sync)',
      'Real-time streaming Gemini 2.0 Flash AI playground with token metering',
      'Turnkey HTML Quickstart Deployment Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Commercial License for unlimited personal, client, and commercial projects'
    ],
    description: 'Stop spending 40+ hours setting up authentication, database row-level security, billing webhooks, and AI streaming routes from scratch. NextLaunch AI delivers an institutional-grade Next.js 15 application pre-wired for instant deployment on Vercel.',
    highlights: [
      '11 Static & Dynamic App Router routes built cleanly',
      'Dual Auth: Email/Password + Google OAuth pre-configured',
      'Credit consumption & balance checking database triggers',
      'Production Dockerfile & environment variables schema'
    ],
        metaTitle: "NextLaunch AI\u2122 \u2014 Next.js 15 + Supabase + Stripe AI SaaS Starter Boilerplate",
    metaDescription: "Production-ready Next.js 15 App Router boilerplate with React 19, Supabase Auth (OAuth), Stripe subscription webhook engine, and Gemini 2.0 streaming AI playground.",
    seoKeywords: ["next.js 15 boilerplate", "ai saas starter", "nextjs supabase stripe", "react 19 boilerplate", "ai micro saas template"],
    faqs: [
      {
            "question": "Is NextLaunch AI built on Next.js 15 App Router?",
            "answer": "Yes, strictly on Next.js 15 with React 19 Server Components, Server Actions, and Turbopack compatibility."
      },
      {
            "question": "Does it include Stripe subscriptions out of the box?",
            "answer": "Yes, complete with Stripe Checkout, customer portal sessions, and webhook handlers for active, past_due, and canceled states."
      },
      {
            "question": "Can I use this for unlimited commercial client projects?",
            "answer": "Yes, the perpetual commercial license allows unlimited deployments for personal ventures and client deliverables."
      }
],
    systemRequirements: ['Node.js 18.17+ or 20+', 'Free Supabase account', 'Stripe account (Test/Live mode)', 'Google Gemini API key']
  },
  {
    id: 'mcpforge-enterprise',
    num: '11',
    name: 'MCPForge Enterprise™',
    tagline: 'Production Model Context Protocol (MCP) Server & 5 Enterprise Tools Pack',
    category: 'automation',
    categoryLabel: 'AI & MCP Protocols',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$95',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/mcpforge-enterprise/LAUNCH20',
    gumroadId: 'xM_fWwf9vmVyfjWI5IZESA==',
    image: '/products/11-mcpforge.jpg',
    version: 'v1.0 (MCP SDK 1.5.0)',
    folder: '11-mcpforge-enterprise',
    badge: 'Compatible with Claude & Cursor',
    rating: 4.4,
    reviewsCount: 28,
    techStack: ['TypeScript 5.7', 'Node.js', '@modelcontextprotocol/sdk', 'Zod', 'Claude Desktop', 'Cursor IDE', 'Antigravity'],
    deliverables: [
      'Complete production TypeScript MCP Server repository with dual stdio + HTTP SSE transports',
      '5 Enterprise Pre-Built Tools: db_query, web_scraper, knowledge_vault, git_automation, api_dispatcher',
      'Security guardrails: strict read-only SQL execution and DROP/TRUNCATE block engine',
      'Pre-configured claude_desktop_config.json and Cursor MCP integration templates',
      'Full TypeScript type safety with strict Zod validation schemas',
      'Turnkey HTML Quickstart Deployment Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Commercial License for agency and enterprise internal tool development'
    ],
    description: 'Connect AI reasoning engines directly to your private databases, internal APIs, and developer toolchains. MCPForge Enterprise delivers a production-grade Model Context Protocol server equipped with 5 pre-built enterprise tools.',
    highlights: [
      'Compatible with Claude Desktop, Cursor IDE, Antigravity, and Gemini CLI',
      'Safe SQL executor with schema introspection and accidental modification blocks',
      'Markdown web scraper converting live URLs into clean LLM context',
      'Dual stdio + HTTP Server-Sent Events (SSE) network architectures'
    ],
    metaTitle: 'MCPForge Enterprise™ — Production Model Context Protocol (MCP) Server Kit',
    metaDescription: 'Production Model Context Protocol (MCP) Server in TypeScript with 5 enterprise tools (SQL, Scraper, Vault, Git, API). Certified for Claude Desktop & Cursor.',
    seoKeywords: ['model context protocol server', 'mcp server typescript', 'claude desktop mcp tools', 'cursor mcp server', 'anthropic mcp starter'],
    faqs: [
      {
        question: 'What IDEs and AI clients are supported?',
        answer: 'Anthropic Claude Desktop, Cursor IDE, Antigravity, Gemini CLI, and any client supporting the MCP 2024-11-05 protocol.'
      },
      {
        question: 'Can I add my own custom tools?',
        answer: 'Yes, adding new tools takes less than 10 lines of code with our declarative Zod schema helper.'
      }
    ],
    systemRequirements: ['Node.js 18.0 or higher', 'TypeScript 5.0+', 'Claude Desktop or Cursor IDE (optional for testing)']
  },
  {
    id: 'stackforge-docker',
    num: '12',
    name: 'StackForge™',
    tagline: '3 Production-Ready VPS Stacks (1 Master Multi-Service + 2 Standalone)',
    category: 'agency',
    categoryLabel: 'DevOps & Cloud',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$95',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/stackforge-docker/LAUNCH20',
    gumroadId: 'aaVNnYUVMaeh6Efu3789mQ==',
    image: '/products/12-stackforge.jpg',
    version: '2026 Hardened Edition',
    folder: '12-stackforge-docker',
    badge: 'Saves +/Mo',
    rating: 4.2,
    reviewsCount: 37,
    techStack: ['Docker Compose v2', 'Caddy 2.8.4 (Auto-SSL)', 'PostgreSQL 16.8', 'Redis 7.2.7 (Optional)', 'n8n 1.123.98', 'Open WebUI 0.13.4', 'Ubuntu 22/24 LTS'],
    deliverables: [
      'Master Multi-Service Docker Compose architecture with Caddy Auto-SSL reverse proxy',
      'Hardened PostgreSQL 16.8 database with container healthchecks, schema init, and daily backup script',
      'Redis 7.2.7 high-performance cache with persistence and password security (optional service)',
      'Production n8n 1.123.98 automation runner linked directly to Postgres with webhook execution',
      'Self-hosted Open WebUI 0.13.4 private AI chat stack pre-configured for Ollama',
      '2 Standalone micro-stacks for Ollama AI (0.40.16) and Plausible Analytics CE (v3.2.1)',
      'Turnkey HTML Quickstart Deployment Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Perpetual Commercial License for unlimited self-hosted VPS deployments'
    ],
    description: 'Stop paying – every month for managed cloud databases and automation runners. StackForge delivers battle-tested, security-hardened Docker Compose blueprints that run your entire SaaS infrastructure on a –/month VPS.',
    highlights: [
      'Zero-config Let\'s Encrypt SSL certificates automatically provisioned by Caddy 2.8',
      'Automated cron-based PostgreSQL backup script with S3 upload and retention pruning',
      'Designed for Ubuntu/Debian Linux VPS on Hetzner, DigitalOcean, or AWS EC2',
      'Isolated Docker bridge networks with strict external port exposure security'
    ],
    metaTitle: 'StackForge™ — 3 Production Docker Compose & Self-Hosted Cloud Blueprints',
    metaDescription: 'Production Docker Compose stacks (1 master + 2 standalone) with Caddy Auto-SSL, PostgreSQL 16.8, Redis 7.2, n8n 1.123 automation, and Open WebUI 0.13 for Linux VPS.',
    seoKeywords: ['docker compose production blueprints', 'self hosted saas docker', 'n8n docker compose postgres', 'caddy auto ssl docker', 'hetzner vps docker template'],
    faqs: [
      {
        question: 'Which cloud providers are supported?',
        answer: 'Any Linux VPS running Ubuntu or Debian: Hetzner Cloud, DigitalOcean Droplets, Linode, AWS EC2, or your own dedicated server.'
      },
      {
        question: 'Does it handle SSL certificates automatically?',
        answer: 'Yes, Caddy 2.8 automatically provisions and renews free Let\'s Encrypt SSL certificates with zero manual intervention.'
      }
    ],
    systemRequirements: ['Any Linux VPS (Ubuntu 22.04/24.04 LTS recommended)', 'Docker Engine 24+ and Docker Compose v2.20+']
  },
  {
    id: 'directorylaunch-ai',
    num: '08',
    name: 'DirectoryLaunch AI™',
    tagline: 'Next.js 15 Programmatic SEO & Paid Submission Directory Boilerplate',
    category: 'saas',
    categoryLabel: 'Programmatic SEO',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$90',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/directorylaunch-ai/LAUNCH20',
    gumroadId: 'RJ9Pk0RZj-Lheb6RNeY50Q==',
    image: '/products/08-directorylaunch.jpg',
    version: 'v1.2 (Next.js 15 App Router)',
    folder: '08-directorylaunch-ai',
    badge: 'Passive Income Architecture',
    rating: 3.9,
    reviewsCount: 14,
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Stripe Checkout API', 'Schema.org JSON-LD', 'Supabase'],
    deliverables: [
      'Complete Next.js 15 source code with verified static & dynamic routes',
      'Dynamic programmatic SEO architecture generating pages at /tool/[slug] and /category/[slug]',
      'Turnkey $29 Stripe Checkout flow for monetizing paid directory submissions at /submit',
      'Pre-injected Schema.org SoftwareApplication JSON-LD for rich Google search snippets',
      'Seed database containing real developer tool entries ready to deploy',
      'Turnkey HTML Quickstart Deployment Guide'
    ],
    description: 'Monetize high-intent organic search keywords with a programmatic directory engine. Built for indie makers seeking passive recurring revenue through sponsored listings, featured tool upgrades, and affiliate referrals.',
    highlights: [
      '100/100 Lighthouse performance and SEO score architecture',
      'Stripe webhook integration for automated submission verification',
      'Zero monthly database maintenance overhead',
      'Deployable to Vercel in under 5 minutes'
    ],
        metaTitle: "DirectoryLaunch AI\u2122 \u2014 Next.js 15 Programmatic SEO & Paid Submission Directory",
    metaDescription: "Monetized programmatic SEO directory boilerplate built with Next.js 15, React 19, and Stripe Checkout. Includes dynamic /tool/[slug] routes and JSON-LD schema.",
    seoKeywords: ["nextjs 15 directory boilerplate", "programmatic seo template nextjs", "paid submission directory script", "ai tools directory boilerplate"],
    faqs: [
      {
            "question": "How does DirectoryLaunch AI handle programmatic SEO?",
            "answer": "It generates dynamic static routes at /tool/[slug] and /category/[slug] with automated Schema.org SoftwareApplication JSON-LD."
      },
      {
            "question": "Is Stripe paid submission included?",
            "answer": "Yes, turnkey $29 paid listing checkout sessions and webhook verification are pre-built."
      }
],
    systemRequirements: ['Node.js 18+ or 20+', 'Stripe Account (Test or Live)', 'Vercel account (Free tier)']
  },
  {
    id: 'extensionforge-mv3',
    num: '06',
    name: 'ExtensionForge MV3™',
    tagline: 'Chrome Extension Manifest V3 Boilerplate with React 19 & Side Panel API',
    category: 'saas',
    categoryLabel: 'Browser Extension',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$85',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/extensionforge-mv3/LAUNCH20',
    gumroadId: 'ahooZsZXcewqosVCnBXA3Q==',
    image: '/products/06-extensionforge.jpg',
    version: 'v1.4 (Chrome MV3 Strict)',
    folder: '06-extensionforge-mv3',
    badge: 'Chrome Web Store Ready',
    rating: 4.1,
    reviewsCount: 18,
    techStack: ['Manifest V3', 'React 19', 'Vite 6', 'TypeScript', 'Tailwind CSS', 'Chrome Side Panel API', 'Storage Sync'],
    deliverables: [
      'Complete raw TypeScript source code repository (Vite 6 + React 19)',
      'Pre-built production dist/ folder ready for 1-click loading into chrome://extensions',
      'Dual architecture: Modern Chrome Side Panel UI + traditional Action Popup',
      'Typed Background Service Worker with persistent chrome.storage synchronization',
      'Chrome Web Store submission checklist & Privacy Policy template (.md)',
      'Turnkey HTML Quickstart Deployment Guide'
    ],
    description: 'Google’s Manifest V3 enforcement broke thousands of older Chrome extensions. ExtensionForge gives you an uncompromised, modern React 19 + TypeScript template built strictly to Google Chrome Web Store 2026 review standards.',
    highlights: [
      'Loads into Chrome in under 60 seconds with zero compilation necessary',
      'Instant hot-reloading development workflow with Vite',
      'Pre-configured Tailwind CSS design tokens',
      'Ready for Stripe or Lemon Squeezy software licensing'
    ],
        metaTitle: "ExtensionForge MV3\u2122 \u2014 Chrome Extension Manifest V3 Boilerplate (React 19 + TypeScript)",
    metaDescription: "Battle-tested Chrome Extension Manifest V3 starter with React 19, Vite 6, TypeScript, Tailwind CSS, Side Panel API, and persistent storage sync.",
    seoKeywords: ["chrome extension manifest v3 boilerplate", "react 19 chrome extension template", "chrome side panel api starter", "manifest v3 typescript"],
    faqs: [
      {
            "question": "Does ExtensionForge MV3 comply with Chrome Web Store 2026 guidelines?",
            "answer": "Yes, built strictly to Google Chrome Manifest V3 review standards with no deprecated background pages."
      },
      {
            "question": "How fast can I test it locally?",
            "answer": "In under 60 seconds. A pre-compiled dist/ directory is included so you can load it into chrome://extensions immediately."
      }
],
    systemRequirements: ['Google Chrome 116+ (or Brave / Edge)', 'Node.js 18+ (for development builds)']
  },
  {
    id: 'workflowforge-ai',
    num: '07',
    name: 'WorkflowForge AI™',
    tagline: '20 Production n8n AI Automation Blueprints & Client SOW Kit',
    category: 'automation',
    categoryLabel: 'AI & Automation',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$95',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/workflowforge-ai/LAUNCH20',
    gumroadId: 'ul87Jui2ZD_qXL4hfP1u-g==',
    image: '/products/07-workflowforge.jpg',
    version: '2026 n8n Production Fleet',
    folder: '07-workflowforge-ai',
    badge: 'Agency Weapon',
    rating: 4.4,
    reviewsCount: 34,
    techStack: ['n8n Workflow Engine', 'OpenAI API', 'Claude 3.5 Sonnet', 'Gemini 2.0', 'Pinecone / Supabase Vector', 'Webhooks'],
    deliverables: [
      '20 Verified production-grade n8n workflow JSON blueprints (zero placeholder nodes)',
      'Covers Autonomous B2B Lead Scraping, Omnichannel Content Repurposing, Support Triage & Voice Agents',
      '10 Ready-to-inject JSON test payloads for instant execution validation',
      'Agency Client SOW contract & Automation ROI Audit spreadsheet',
      'Turnkey HTML Quickstart & Canvas Import Guide',
      'Commercial License with client resale rights'
    ],
    description: 'The definitive blueprint fleet for AI Automation Agencies (AAA) and operators. Each workflow is engineered with strict error triggers, retry policies, and real API integrations that allow agencies to package and sell automations for $1,500–$5,000.',
    highlights: [
      'Direct copy-paste import into any self-hosted or cloud n8n canvas',
      'Tested across 20 distinct high-ticket business automation scenarios',
      'Includes client proposal templates to close $2.5k client deals',
      'Fully documented node parameters and environment variable mapping'
    ],
        metaTitle: "WorkflowForge AI\u2122 \u2014 20 Production n8n AI Automation Blueprints + Agency SOW Kit",
    metaDescription: "20 verified enterprise n8n workflow blueprints for lead scraping, content repurposing, voice agents, and triage. Includes client contracts and test payloads.",
    seoKeywords: ["n8n ai automation blueprints", "n8n workflow templates", "ai automation agency workflows", "n8n lead scraping pipeline"],
    faqs: [
      {
            "question": "Can these n8n workflows run on self-hosted instances?",
            "answer": "Yes, they run identically on self-hosted Docker n8n instances as well as n8n Cloud."
      },
      {
            "question": "Can my agency resell these automations to clients?",
            "answer": "Yes, client resale and deployment rights are explicitly included in your commercial license."
      }
],
    systemRequirements: ['n8n (Self-hosted via Docker or n8n Cloud)', 'LLM API Key (OpenAI, Anthropic, or Google)']
  },
  {
    id: 'scrapeforge-ai',
    num: '09',
    name: 'ScrapeForge AI™',
    tagline: 'Python Playwright Anti-Detect Scraper & AI Lead Enrichment Pipeline',
    category: 'growth',
    categoryLabel: 'Lead Generation',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$85',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/scrapeforge-ai/LAUNCH20',
    gumroadId: '5DT9EpSkRLThWtz56xjQDw==',
    image: '/products/09-scrapeforge.jpg',
    version: 'Python 3.10+ Engine',
    folder: '09-scrapeforge-ai',
    badge: 'Anti-Detect Architecture',
    rating: 4.2,
    reviewsCount: 23,
    techStack: ['Python 3.10+', 'Playwright (Headless Chromium)', 'Google Gemini AI', 'Anti-Detect Fingerprinting', 'CSV/JSON Exporters'],
    deliverables: [
      'Complete modular Python source code (scrapers, enrichment, exporters)',
      'Automated Google Maps business lead extractor with humanized jitter & stealth headers',
      'Deep website crawler extracting verified email addresses and phone numbers',
      'AI Lead Scoring module using Gemini Flash to write custom B2B pitch angles',
      'Multi-format data exporters (clean CSV and structured JSON output)',
      'Turnkey HTML Quickstart Execution Guide'
    ],
    description: 'Bypass costly $99/month B2B lead database subscriptions. ScrapeForge gives agencies and sales teams a private, automated lead generation machine that extracts fresh decision-maker data and automatically drafts personalized outreach hooks.',
    highlights: [
      'Simulates genuine human mouse movement and scrolling behavior',
      'Extracts company name, website, phone, email, reviews & ratings',
      'AI scores each lead from 1 to 10 based on business fit',
      'Zero API subscription dependencies for scraping'
    ],
        metaTitle: "ScrapeForge AI\u2122 \u2014 Python Playwright Anti-Detect Google Maps Scraper & Lead Pipeline",
    metaDescription: "Stealth Google Maps lead generation engine built on Python Playwright (Chromium) with humanized jitter, deep email crawler, and Gemini AI lead qualification.",
    seoKeywords: ["python google maps scraper", "playwright lead scraper", "anti detect web scraper python", "b2b lead extraction script"],
    faqs: [
      {
            "question": "Does ScrapeForge require paid scraping API subscriptions?",
            "answer": "No, it runs directly on local headless Chromium with anti-detect headers and humanized mouse movements."
      },
      {
            "question": "What data does it extract from businesses?",
            "answer": "Business name, category, website, phone, verified email addresses, Google ratings, review counts, and physical addresses."
      }
],
    systemRequirements: ['Python 3.10 or higher', 'Playwright Chromium (`playwright install chromium`)', 'Optional: Google Gemini API key']
  },
  {
    id: 'multilaunch-ai',
    num: '10',
    name: 'MultiLaunch AI™',
    tagline: 'Multi-Model AI Router & Token Credit Studio (Next.js 15, Gemini, Claude, GPT-4o, DeepSeek)',
    category: 'saas',
    categoryLabel: 'Full-Stack SaaS',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$99',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/multilaunch-ai/LAUNCH20',
    gumroadId: 'WW5yOIEKtTd696g8SLQFXA==',
    image: '/products/10-multilaunch.jpg',
    version: 'v1.0 (Next.js 15.1.7)',
    folder: '10-multilaunch-ai',
    badge: 'Multi-Model Architecture',
    rating: 4.3,
    reviewsCount: 34,
    techStack: ['Next.js 15.1.7 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Google Gemini 2.0 Flash', 'Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'DeepSeek V3'],
    deliverables: [
      'Complete production repository with Next.js 15 App Router & React 19',
      'Unified Multi-Model Router API supporting Gemini, Claude, GPT-4o, and DeepSeek',
      'Zero-Downtime Cascading Fallback Engine for automatic vendor failover',
      'Pay-Per-Credit Metering Ledger with balance verification and anti-abuse safeguards',
      'Interactive Production Studio with model switcher and token consumption tracker',
      'Turnkey HTML Quickstart Deployment Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Perpetual Commercial License for unlimited SaaS and client applications'
    ],
    description: 'Eliminate AI vendor lock-in and protect SaaS margins. MultiLaunch AI provides institutional multi-provider routing with zero-downtime cascading fallbacks and a built-in pay-per-credit token ledger.',
    highlights: [
      'Cascading fallback: Automatically reroutes if OpenAI or Claude encounters rate limits or 5xx outages',
      'Pay-per-credit ledger burns credits based on actual model cost to safeguard SaaS margins',
      'Real-time streaming responses with model-specific cost tier calculations',
      'Production Dockerfile, environment variables schema & turnkey Vercel deployment'
    ],
    metaTitle: 'MultiLaunch AI™ — Multi-Model AI Router & Token Credit Studio (Next.js 15)',
    metaDescription: 'Production Next.js 15 App Router boilerplate with multi-model AI routing (Gemini 2.0, Claude 3.5, GPT-4o, DeepSeek), zero-downtime fallbacks, and pay-per-credit metering.',
    seoKeywords: ['multi model ai router', 'next.js 15 ai boilerplate', 'llm cascading fallback', 'ai token credit billing', 'deepseek gpt-4o gemini router'],
    faqs: [
      {
        question: 'Which LLM models are supported out of the box?',
        answer: 'Google Gemini 2.0 Flash, Anthropic Claude 3.5 Sonnet, OpenAI GPT-4o, and DeepSeek V3.'
      },
      {
        question: 'How does cascading fallback work?',
        answer: 'If the primary model API fails due to an outage or rate limit (429/500/503), the engine automatically reroutes the prompt to the configured backup model in under 150ms.'
      }
    ],
    systemRequirements: ['Node.js 18.18 or higher', 'npm, pnpm, or yarn', 'At least one AI API key (Gemini, OpenAI, Anthropic, or DeepSeek)']
  },
  {
    id: 'chatheist-live',
    liveDemoUrl: 'https://notionmaster001-max.github.io/chatheist-live-starter/',
    num: '17',
    name: 'ChatHeist Live™',
    tagline: 'Interactive Twitch & Kick Chat Bank Heist Minigame Overlay Engine',
    category: 'gaming',
    categoryLabel: 'Interactive Overlay',
    price: 28,
    formattedPrice: '$27.99',
    originalValue: '$79',
    discountPrice: '$22.39',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/chatheist-live-obs/LAUNCH20',
    gumroadId: 'buNcR5olBoTznX-MY7I9HQ==',
    image: '/products/17-chatheist-live.jpg',
    version: '2026 Interactive Edition',
    folder: '05-chatheist-live',
    badge: 'Viewer Retention Engine',
    rating: 4.4,
    reviewsCount: 34,
    techStack: ['Direct Twitch IRC WebSocket (Zero Bot/Cloud fees)', 'Web Audio API Bank Siren & Cash Chimes', 'CSS3 Shaking Physics & Vault Animations', 'OBS Studio Transparent Browser Source', 'Offline Simulation Mode'],
    deliverables: [
      'Transparent OBS Browser Source Overlay (chatheist-overlay.html) with Twitch IRC engine',
      'Built-in Web Audio API synthesized bank alarms and cash celebration chimes',
      'CSS3 physical vault door shaking, explosion effects, and automated loot split calculation',
      'Interactive viewer commands: !heist (30s recruitment) and !join (crew roster)',
      'One-click Offline Simulation Mode for testing on desktop before going live',
      'Step-by-step OBS Quickstart Integration Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Single Broadcaster Commercial License for Twitch and Kick streaming channels'
    ],
    description: 'Transform passive lurkers into hyper-engaged participants. When viewers type !heist in chat, a glowing neon bank vault appears on your stream, initiating a 30-second recruitment countdown that divides up to $1,000,000 among participating viewers.',
    highlights: [
      'Direct client-side Twitch IRC WebSocket connection — zero monthly bot subscriptions or cloud server costs',
      'Proven viewer retention mechanic: boosts live chat velocity and watch-time dramatically',
      'Automatic cooldown timers and crew roster calculation prevent chat spam',
      'Transparent overlay remains completely invisible on stream until a heist is triggered'
    ],
    metaTitle: 'ChatHeist Live™ — Interactive Twitch Chat Bank Heist Minigame Overlay for OBS',
    metaDescription: 'Boost stream engagement with interactive chat heists. Direct Twitch IRC WebSocket bank vault minigame with !heist and !join triggers. Zero monthly fees.',
    seoKeywords: ['twitch chat minigame overlay', 'interactive stream overlay obs', 'twitch heist bot game', 'stream viewer engagement tool', 'kick chat interactive overlay'],
    faqs: [
      {
        question: 'Do I need to pay for a third-party bot or monthly server subscription?',
        answer: 'No! ChatHeist connects directly from OBS Browser Source to Twitch IRC via secure WebSockets. It is 100% free forever after purchase.'
      },
      {
        question: 'Can I test it without going live on stream?',
        answer: 'Yes! Double-click the file in any browser to open the test simulation panel and test the heist animations and sounds offline.'
      }
    ],
    systemRequirements: ['OBS Studio 28+ or Streamlabs Desktop', 'Twitch or Kick streaming channel']
  },
  {
    id: 'consolestream-pro',
    liveDemoUrl: 'https://notionmaster001-max.github.io/consolestream-pro-starter/',
    num: '16',
    name: 'ConsoleStream Pro™',
    tagline: 'PS5 & Xbox Capture Card Audio Desync Calibrator & HDR Color Fix for OBS',
    category: 'gaming',
    categoryLabel: 'Hardware & Calibration',
    price: 20,
    formattedPrice: '$19.99',
    originalValue: '$49',
    discountPrice: '$15.99',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/consolestream-pro-fix/LAUNCH20',
    gumroadId: 'VEG3p0YIcUMULzMhc_jPSQ==',
    image: '/products/16-consolestream-pro.jpg',
    version: '2026 Calibration Suite',
    folder: '04-consolestream-pro',
    badge: 'Zero Desync Fix',
    rating: 4.2,
    reviewsCount: 27,
    techStack: ['Web Audio API Hardware Clock', '60/120 BPM Metronome Sync Engine', 'Frame Delay Millisecond Calculator', 'OBS Color Correction Filter Preset', 'Elgato / AVerMedia / EVGA Certified'],
    deliverables: [
      'Interactive Audio Sync Metronome (audio-sync-tester.html) with 1kHz tone & flash sync',
      'Built-in Frame Delay to Millisecond Calculator for 30 FPS and 60 FPS video streams',
      'The 4-Parameter HDR Color Restoration Preset (eliminates washed-out grey SDR capture)',
      'Hardware Capture Card Optimization Guide (capture-card-optimization-guide.html / .md)',
      'Step-by-step OBS Advanced Audio Properties Calibration Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Single Creator Commercial License for unlimited streaming setups'
    ],
    description: 'Fix the two most frustrating technical issues when streaming console gameplay: audio latency desync and washed-out HDR colors. Calibrate your capture card in under 3 minutes with precision hardware-clock metronome tools.',
    highlights: [
      'Eliminates lipsync and gunshot audio delay between console capture card and microphone',
      '4-parameter Color Correction filter restores deep blacks and vibrant neon colors from HDR feeds',
      'Certified latency offsets for Elgato HD60X (+160ms), 4K Pro (+65ms), and AVerMedia (+90ms)',
      'Interactive visual/audio metronome with frame-by-frame delay calculation'
    ],
    metaTitle: 'ConsoleStream Pro™ — PS5 & Xbox Capture Card Audio Sync & HDR Color Fix for OBS',
    metaDescription: 'Eliminate audio/video delay and washed-out HDR colors on PS5 and Xbox Series X capture cards. Calibration metronome and 4-parameter OBS color filter.',
    seoKeywords: ['capture card audio delay fix', 'obs audio sync offset ps5', 'fix washed out hdr obs', 'elgato hd60x audio desync', 'capture card color correction'],
    faqs: [
      {
        question: 'Why does my console capture look washed-out in OBS?',
        answer: 'Consoles output HDR signal, which SDR capture cards compress into low-contrast grey. Our 4-parameter filter crushes the fog and restores vibrant contrast.'
      },
      {
        question: 'Which capture cards are supported?',
        answer: 'All USB and PCIe capture cards: Elgato (HD60X, 4K X, 4K Pro, Cam Link), AVerMedia Live Gamer, EVGA XR1, and generic USB capture devices.'
      }
    ],
    systemRequirements: ['Any capture card (Elgato, AVerMedia, EVGA, etc.)', 'OBS Studio 28+ on Windows or macOS']
  },
  {
    id: 'vicestream-neon-studio',
    liveDemoUrl: 'https://notionmaster001-max.github.io/vicestream-neon-studio-starter/',
    num: '15',
    name: 'ViceStream Neon Studio™',
    tagline: 'Hardware-Accelerated 1080p Cyber Neon OBS Broadcast Overlays & Scenes',
    category: 'gaming',
    categoryLabel: 'OBS Studio Suite',
    price: 20,
    formattedPrice: '$19.99',
    originalValue: '$59',
    discountPrice: '$15.99',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/vicestream-neon-studio/LAUNCH20',
    gumroadId: 'Wt2hksustjPDmF4lqYq5Gg==',
    image: '/products/15-vicestream-neon-studio.jpg',
    version: '2026 Neon Edition',
    folder: '03-vicestream-neon-studio',
    badge: 'Zero-Lag 1080p',
    rating: 4.5,
    reviewsCount: 18,
    techStack: ['HTML5 & CSS3 GPU Accelerated', 'Twitch IRC WebSocket Client', 'OBS Studio Browser Source', '1080p Fullscreen Scenes', '16:9 Responsive Webcam Frame'],
    deliverables: [
      '1080p Stream Starting Scene (stream-starting.html) with 5-minute timer & social ticker',
      '1080p Be Right Back Intermission Scene (be-right-back.html) with animated cassette spools',
      '16:9 Animated Dual-Tone Neon Webcam Border (overlays/webcam-border.html)',
      'Transparent Live Twitch Chat Overlay (overlays/chat-box.html) with WebSocket auto-connect',
      'Step-by-step OBS Studio 60-Second Setup Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Single Broadcaster Commercial License for all personal streaming channels'
    ],
    description: 'Elevate your stream to professional esports broadcast quality. ViceStream Neon Studio delivers GPU-accelerated HTML5/CSS3 browser sources with authentic 80s Miami Cyberpunk aesthetic and zero CPU lag.',
    highlights: [
      'Runs locally via OBS Browser Source — zero subscription fees or third-party cloud watermarks',
      'Live Twitch IRC WebSocket integration displays viewer chat messages in a glassmorphic neon box',
      'Pure CSS animations consume less than 1% CPU while gaming at high frame rates',
      'Easily customize social handles (@yourchannel) and countdown duration in standard Notepad'
    ],
    metaTitle: 'ViceStream Neon Studio™ — Hardware-Accelerated 1080p Cyber Neon OBS Overlays',
    metaDescription: '1080p OBS starting scene, BRB screen, animated 16:9 webcam frame, and live Twitch chat overlay. Zero-lag hardware acceleration for GTA 6 broadcasters.',
    seoKeywords: ['gta 6 obs overlay', 'neon twitch stream overlay', 'starting soon 1080p obs scene', 'twitch chat overlay browser source', 'cyberpunk webcam border'],
    faqs: [
      {
        question: 'Does this overlay slow down my game FPS?',
        answer: 'No. Unlike heavy video loops, our overlays use hardware-accelerated CSS transforms that consume negligible GPU and less than 1% CPU.'
      },
      {
        question: 'How does the chat overlay connect to Twitch?',
        answer: 'Simply add ?channel=yourusername to the Browser Source URL in OBS. It connects directly via Twitch IRC WebSocket with zero bot setup.'
      }
    ],
    systemRequirements: ['OBS Studio, Streamlabs Desktop, or vMix', 'Browser Source support with Hardware Acceleration enabled']
  },
  {
    id: 'streamshield-vice',
    liveDemoUrl: 'https://notionmaster001-max.github.io/streamshield-vice-starter/',
    num: '14',
    name: 'StreamShield Vice™',
    tagline: '100% DMCA-Safe Soundboard Engine & Twitch VOD Audio Splitter',
    category: 'gaming',
    categoryLabel: 'Audio & Streaming',
    price: 25,
    formattedPrice: '$24.99',
    originalValue: '$69',
    discountPrice: '$19.99',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/streamshield-dmca-audio/LAUNCH20',
    gumroadId: 'TnmQ4JPqolWj_UG8PjNSJQ==',
    image: '/products/14-streamshield-vice.jpg',
    version: '2026 Broadcaster Edition',
    folder: '02-streamshield-vice',
    badge: 'DMCA-Safe Audio',
    rating: 4.3,
    reviewsCount: 31,
    techStack: ['Web Audio API Procedural Synth', 'Dynamics Compressor Limiter (-12dB)', 'OBS Custom Browser Dock', 'Twitch VOD Track 2 Audio Separation', 'Numpad Hotkeys (1-8, ESC)'],
    deliverables: [
      'Standalone Web Audio soundboard engine (soundboard.html) with 8 synthesized SFX',
      'Zero external MP3/WAV dependencies — audio is procedural, ensuring 100% DMCA immunity',
      'Hardware dynamics compressor limiter (-12dB, 12:1 ratio) preventing stream clipping',
      'Integrated real-time frequency spectrum visualizer canvas',
      'Twitch VOD Track 2 Audio Routing Manual (obs-audio-routing-guide.html / .md)',
      'Turnkey HTML Quickstart Deployment Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Single Broadcaster Commercial License for Twitch, YouTube, and Kick channels'
    ],
    description: 'Broadcast high-risk open-world games without fear of copyright strikes or muted VODs. StreamShield Vice generates 100% procedural synthesized audio cues in real-time and provides turnkey OBS Track 2 VOD audio routing.',
    highlights: [
      '8 procedural synth cues: Police Siren, Wasted Sub-Drop, Heist Chime, Nitrous Boost, Weapon Reload, and more',
      'Embeds directly into OBS Studio as a Custom Browser Dock next to your audio mixer',
      'Numpad hotkeys (1-8) and ESC panic mute for instant tactile sound triggering',
      'Twitch VOD Track 2 separation guide guarantees your recorded clips never lose game audio'
    ],
    metaTitle: 'StreamShield Vice™ — 100% DMCA-Safe Soundboard & Twitch VOD Audio Splitter',
    metaDescription: 'Eliminate DMCA strikes and muted VODs. Procedural Web Audio soundboard engine and OBS Studio Twitch VOD Track 2 audio separation for GTA streamers.',
    seoKeywords: ['dmca safe soundboard', 'twitch vod audio splitter', 'obs custom dock soundboard', 'gta stream sound effects', 'procedural web audio soundboard'],
    faqs: [
      {
        question: 'Are these sound effects copyrighted?',
        answer: 'No. Every single sound is synthesized programmatically in real-time using mathematical oscillators. There are zero copyright fingerprints.'
      },
      {
        question: 'How do I dock it inside OBS Studio?',
        answer: 'Go to Docks → Custom Browser Docks, paste the local soundboard.html path, and snap the window directly into your OBS layout.'
      }
    ],
    systemRequirements: ['OBS Studio 28+ or any modern browser', 'Default audio output device or virtual audio cable']
  },
  {
    id: 'vice-city-companion',
    liveDemoUrl: 'https://notionmaster001-max.github.io/vice-city-companion-starter/',
    num: '13',
    name: 'Vice City 100% Master Companion™',
    tagline: 'Dual-Screen Interactive 100% Quest & Collectibles OS (2026 Edition)',
    category: 'gaming',
    categoryLabel: 'Gaming & OS',
    price: 15,
    formattedPrice: '$14.99',
    originalValue: '$49',
    discountPrice: '$11.99',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/vice-city-companion-os/LAUNCH20',
    gumroadId: 'do9vHEsfwdCoM8n1VPlflA==',
    image: '/products/13-vice-city-companion.jpg',
    version: '2026 Console Launch Edition',
    folder: '01-vice-city-companion',
    badge: 'Console Launch OS',
    rating: 4.4,
    reviewsCount: 23,
    techStack: ['HTML5 / Vanilla JS', 'Web Audio API Synth Chime', 'LocalStorage Auto-Sync', 'Responsive Dual-Screen PWA', 'Notion Relational Database Schema', '100% Offline Zero-Lag'],
    deliverables: [
      'Interactive 100% Tracking Web App (index.html, runs offline in any browser)',
      '179 Master Database entries (69 Story Missions, 25 Strangers, 50 Collectibles, 15 Heists, 20 World Events)',
      'Retro synth Web Audio completion chimes and instant live progress percentage calculation',
      'One-click JSON progress backup export & instant cross-device restore',
      'Notion Relational Database Blueprint (notion-template-guide.html / .md)',
      'Comprehensive HTML Quickstart Guide (00-USER-QUICKSTART-GUIDE.html)',
      'Single Creator Commercial License for personal streaming & gaming setups'
    ],
    description: 'Designed specifically for the November 19, 2026 console release. Place this zero-lag, interactive 100% completion checklist on your second monitor, iPad, tablet, or smartphone while playing on PS5 or Xbox Series X.',
    highlights: [
      'Zero external installations or dependencies — double-click and run in Chrome, Safari, or Edge',
      'Save to Home Screen (PWA mode) for full-screen immersive tracking on iPhone or Android tablet',
      'Instant search filter with Ctrl+K shortcut to locate any missable mission or weapon stash in seconds',
      'Persistent LocalStorage memory keeps all your progress saved even when closing the browser'
    ],
    metaTitle: 'Vice City 100% Master Companion™ — Dual-Screen Interactive Quest & Collectibles OS',
    metaDescription: 'Dual-screen 100% quest checklist and live progression tracker for GTA 6 console launch. 179 missions, collectibles, offline audio chimes, and Notion database.',
    seoKeywords: ['gta 6 companion app', 'vice city 100 checklist', 'gta 6 collectibles tracker', 'notion gta 6 database', 'ps5 dual screen companion'],
    faqs: [
      {
        question: 'Does this require an internet connection while playing?',
        answer: 'No. The entire tracking engine runs 100% locally in your browser using client-side JavaScript and LocalStorage.'
      },
      {
        question: 'Can I use this on my iPad or phone while gaming on console?',
        answer: 'Yes! Simply open index.html in mobile Safari or Chrome and select "Add to Home Screen" for a full-screen native app experience.'
      }
    ],
    systemRequirements: ['Any modern browser (Chrome, Safari, Edge, Firefox, Brave)', 'Optional 2nd monitor, tablet, or phone']
  },
  {
    id: 'notion-business-os',
    num: '02',
    name: 'Notion Business OS™',
    tagline: 'All-in-One Executive Workspace Template with 5 Relational Databases',
    category: 'agency',
    categoryLabel: 'Operations',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$95',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/notion-business-os/LAUNCH20',
    gumroadId: '8ihliqBkA5MjDLKeGXOzTQ==',
    image: '/products/02-notion-os.png',
    version: '2026 Executive Architecture',
    folder: '02-notion-business-os',
    badge: '5 Relational CSVs',
    rating: 4.0,
    reviewsCount: 26,
    techStack: ['Notion Workspace', 'Relational Database Formulas', '5 Verified CSV Datasets', 'PARA Methodology'],
    deliverables: [
      'Notion-Business-OS-Workspace.zip containing full workspace architecture',
      '5 Core Relational Databases: CRM, Projects & Sprints, Finances & Invoicing, Content Engine, SOP Wiki',
      '6 Markdown workspace command hubs ready for 1-click team onboarding',
      'Pre-calculated formula vault for invoice aging, client LTV, and sprint velocity',
      'Step-by-step CSV import & relation mapping guide',
      'Commercial License for agency client setups'
    ],
    description: 'Consolidate multiple $50/month software subscriptions (Asana, Monday, HubSpot, Pipedrive) into a single, lightning-fast Notion workspace. Built specifically for agencies, consultants, and founders managing active client deliverables.',
    highlights: [
      'Complete relational linking between Clients, Deals, Projects, and Invoices',
      'Automated pipeline stage tracking and cash flow forecasting',
      'Centralized team SOP wiki for standardized operational handoffs',
      'Zero monthly recurring software licensing costs'
    ],
        metaTitle: "Notion Business OS\u2122 \u2014 Executive Headquarters with 5 Relational Databases",
    metaDescription: "All-in-one Notion executive workspace for agency founders and freelancers. 5 relational CSV databases covering CRM, Project Sprints, Finances, and SOPs.",
    seoKeywords: ["notion business os template", "notion agency crm template", "notion project management workspace", "notion founder template"],
    faqs: [
      {
            "question": "What databases are included in Notion Business OS?",
            "answer": "5 relational CSV databases: CRM & Pipeline, Project Sprints & Tasks, Invoicing & Financials, Content Engine, and Team SOP Wiki."
      },
      {
            "question": "Do I need a paid Notion plan?",
            "answer": "No, the workspace imports and operates smoothly on both Free and Plus Notion plans."
      }
],
    systemRequirements: ['Free or Paid Notion Account']
  },
  {
    id: 'clientforge-kit',
    num: '03',
    name: 'ClientForge™',
    tagline: 'High-Ticket Client Acquisition Suite & Attorney-Grade Legal Contract Vault',
    category: 'agency',
    categoryLabel: 'Legal & Agency',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$90',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/clientforge-kit/LAUNCH20',
    gumroadId: 'eChys3f02tiR5-hZvOHexg==',
    image: '/products/03-clientforge.png',
    version: 'Institutional Legal Edition',
    folder: '03-clientforge-kit',
    badge: '3 Legal Word Contracts',
    rating: 3.9,
    reviewsCount: 19,
    techStack: ['Microsoft Word (.docx)', 'Legal Contract Frameworks', 'B2B Sales Psychology', 'Outreach Matrices'],
    deliverables: [
      '3 Attorney-grade Microsoft Word (.docx) agreements: Master Services Agreement (MSA), SOW Proposal, Client Intake Dossier',
      '25 Industry-specific cold outreach email frameworks (SaaS, E-Commerce, Local Services, Healthcare)',
      '3-Step follow-up sequences engineered for maximum inbox deliverability',
      '10 High-ticket objection battlecards (pricing pushback, timing objections, vendor comparisons)',
      'Turnkey HTML Quickstart Deployment Guide',
      'Commercial License with unlimited client agreement execution rights'
    ],
    description: 'Protect your business from scope creep, non-payment, and contractual liabilities while closing $2,500–$10,000 client deals. ClientForge provides bulletproof legal protection paired with high-converting B2B outreach playbooks.',
    highlights: [
      'Intellectual property protection, milestone payments, and termination clauses',
      'Zero legal jargon confusion — clean fill-in-the-blank bracket variables',
      'Proven outreach frameworks with documented 40%+ open rate benchmarks',
      'Editable in Microsoft Word, Google Docs, Apple Pages, or LibreOffice'
    ],
        metaTitle: "ClientForge\u2122 \u2014 High-Ticket Agency Client Acquisition & Legal Contract Vault",
    metaDescription: "3 attorney-grade Microsoft Word (.docx) agreements (MSA, SOW, Intake), 25 industry cold email scripts, and 10 objection battlecards to close $2.5k-$10k deals.",
    seoKeywords: ["freelance client contract template word", "agency msa agreement docx", "high ticket cold email scripts", "agency sow proposal template"],
    faqs: [
      {
            "question": "What file format are the legal contracts in?",
            "answer": "Editable Microsoft Word (.docx) format with bracketed placeholder variables ([CLIENT_NAME], [PAYMENT_TERMS])."
      },
      {
            "question": "Can I edit them in Google Docs or Apple Pages?",
            "answer": "Yes, completely compatible with Google Docs, LibreOffice, Apple Pages, and Microsoft Word."
      }
],
    systemRequirements: ['Microsoft Word, Google Docs, or any .docx word processor']
  },
  {
    id: 'promptforge-ai',
    num: '01',
    name: 'PromptForge AI™',
    tagline: '525 Battle-Tested Master Prompts Across 8 Revenue Modules + Interactive WebApp',
    category: 'automation',
    categoryLabel: 'AI & Prompts',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$85',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/promptforge-ai/LAUNCH20',
    gumroadId: 'a0CpZr6667qpRdRoyQ-Ynw==',
    image: '/products/01-promptforge.jpg',
    version: 'v4.0 (525 Prompts Edition)',
    folder: '01-promptforge-ai',
    badge: 'Includes Offline WebApp',
    rating: 4.4,
    reviewsCount: 41,
    techStack: ['Claude 3.5 Sonnet', 'GPT-4o', 'DeepSeek V3', 'HTML5/Tailwind Local App', 'JSON Data Store'],
    deliverables: [
      'PromptForge-500-Master-Vault.zip containing 525 distinct, non-duplicate prompts',
      'Covers Cold Email, High-Ticket Sales, SEO Content, Ads, SaaS Architecture & Ops',
      'PromptForge-Interactive-Vault-App.html: Offline local browser app with instant search & 1-click clipboard copy',
      'Structured prompts-data-525.json machine-readable dataset',
      'Comprehensive Markdown vault with variable fill-in brackets [PRODUCT_NAME], [TARGET_AUDIENCE]',
      'Turnkey HTML Quickstart Guide'
    ],
    description: 'Eliminate generic, robotic AI outputs forever. PromptForge is a master-level system engineered with advanced few-shot prompting, tone constraints, and structured output formatting across 8 commercial revenue domains.',
    highlights: [
      'Zero duplicate or filler variations — 525 distinct engineering prompts',
      'Runs completely offline on your local machine with zero dependencies',
      'Instant 1-click copy directly to your clipboard for ChatGPT or Claude',
      'Organized into 8 dedicated commercial revenue modules'
    ],
        metaTitle: "PromptForge AI\u2122 \u2014 525 Master Prompts Vault & Offline Interactive App",
    metaDescription: "525 battle-tested prompts across 8 revenue modules (Sales, Cold Email, SaaS, SEO, Ads). Includes zero-setup offline browser app with 1-click clipboard copier.",
    seoKeywords: ["500 chatgpt master prompts", "claude 3.5 sonnet prompts", "cold email prompts vault", "saas marketing prompts"],
    faqs: [
      {
            "question": "What AI models are these prompts optimized for?",
            "answer": "Claude 3.5 Sonnet, GPT-4o, and DeepSeek V3 with structured output constraints and variable brackets."
      },
      {
            "question": "Does the interactive app require an internet connection?",
            "answer": "No, PromptForge-Interactive-Vault-App.html runs 100% offline in any modern web browser."
      }
],
    systemRequirements: ['Any modern web browser (Chrome, Safari, Firefox, Edge)']
  }
  ,
  {
    id: 'securityforge-ai',
    num: '24',
    name: 'SecurityForge AI™',
    tagline: '17 Defensive Cursor Rules, Claude Code Harness & Git Pre-Commit Secret Scanner',
    category: 'automation',
    categoryLabel: 'AI & Security',
    price: 47,
    formattedPrice: '$47',
    originalValue: '$97',
    discountPrice: '$37.60',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/securityforge-ai/LAUNCH20',
    gumroadId: '9Z3ip-0_mC5G1mDm3QXvBw==',
    image: '/products/24-securityforge.jpg',
    version: 'v1.0 (Enterprise Guardrails)',
    folder: '18-securityforge-ai',
    badge: 'Top Security Guardrail',
    rating: 4.5,
    reviewsCount: 19,
    techStack: ['Cursor Rules (.mdc)', 'Claude Code CLI', 'Git Pre-Commit Hooks', 'Python Regex Scanner', 'Gitleaks Compatible', 'POSIX / PowerShell'],
    deliverables: [
      '17 Context-Aware Cursor Rules (.cursor/rules/*.mdc)',
      'Claude Code System Security Harness (CLAUDE.md)',
      'Universal Autonomous Agent Directives (AGENTS.md)',
      'Zero-Dependency Git Pre-Commit Hook (Python + 1-Click Installers)',
      '25-Point Production Deployment Security Checklist (SECURITY-CHECKLIST.md)',
      'Pytest Automated Verification Test Suite'
    ],
    description: 'Stop AI coding assistants from introducing high-risk security flaws. SecurityForge AI prevents hardcoded secrets, SQL injection, permissive CORS, missing auth checks, and unvalidated file operations in real-time.',
    highlights: [
      '17 rules covering secrets, SQL injection, CORS, auth, and webhooks',
      'Zero-dependency Git hook blocks commits leaking credentials',
      'Cross-platform 1-click installers for Windows, macOS, and Linux',
      'Tested with Pytest suite for zero false-positives'
    ],
    metaTitle: 'SecurityForge AI™ — 17 Cursor Rules & Git Pre-Commit Secret Scanner',
    metaDescription: 'Defensive guardrails for Cursor, Claude Code, and Copilot. Blocks hardcoded API keys, raw SQL injection, and permissive CORS policies.',
    seoKeywords: ['cursor rules', 'claude code security', 'git pre commit hook', 'ai security guardrails', 'secret scanner'],
    faqs: [
      {
        question: 'Does SecurityForge work with Cursor IDE?',
        answer: 'Yes, copy the .cursor/rules folder into your project root and the rules activate automatically based on file extensions.'
      },
      {
        question: 'Does it require external dependencies?',
        answer: 'No. The Git pre-commit hook runs on standard Python 3 with built-in regex, requiring zero pip packages.'
      },
      {
        question: 'Can I use this across multiple projects?',
        answer: 'Yes, the perpetual commercial license allows unlimited personal and client project installations.'
      }
    ],
    systemRequirements: ['Cursor IDE or Claude Code CLI', 'Git 2.20+', 'Python 3.8+']
  },
  {
    id: 'supaforge-edge',
    num: '25',
    name: 'SupaForge Edge™',
    tagline: 'Production Supabase Edge Functions + pgvector Semantic Search & AI Starter Kit',
    category: 'automation',
    categoryLabel: 'Serverless Edge AI',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$120',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/supaforge-edge/LAUNCH20',
    gumroadId: 'KSQc9G8y4ZYq_VBUrpCxFA==',
    image: '/products/25-supaforge.jpg',
    version: 'v1.0 (Deno 2 & pgvector)',
    folder: '19-supaforge-edge',
    badge: 'Production Edge Backend',
    rating: 4.4,
    reviewsCount: 23,
    techStack: ['Supabase Edge Functions', 'Deno 2', 'PostgreSQL pgvector', 'HNSW Indexing', 'OpenAI-Compatible LLM', 'HMAC-SHA256 Webhooks'],
    deliverables: [
      '5 Production Edge Functions (ai-chat, embed-document, semantic-search, summarize, webhook-receiver)',
      'Shared Serverless Infrastructure (cors.ts, auth.ts, rateLimit.ts, llm.ts)',
      'PostgreSQL pgvector migration with HNSW indexing and RLS tenant isolation',
      'Atomic PostgreSQL sliding-window rate limiter (fail-open architecture)',
      'Native Deno test suite with mock LLM server',
      'Turnkey HTML Quickstart Deployment Guide (00-QUICKSTART.md)'
    ],
    description: 'Eliminate CORS preflight failures, SSE stream buffering, and database connection exhaustion. SupaForge Edge delivers a modular, production-tested serverless AI backend on Supabase Edge Functions and pgvector.',
    highlights: [
      'Incremental SSE streaming chat with zero proxy buffering',
      'Document chunking, embedding generation & pgvector similarity search',
      'Fail-open atomic sliding window rate limiter',
      'Strict Row-Level Security isolating document embeddings per user'
    ],
    metaTitle: 'SupaForge Edge™ — Supabase Edge Functions & pgvector AI Starter Kit',
    metaDescription: 'Serverless AI backend on Supabase Edge Functions (Deno) and PostgreSQL pgvector with streaming chat, document chunking, and semantic search.',
    seoKeywords: ['supabase edge functions', 'pgvector starter', 'supabase ai chat', 'semantic search postgres', 'deno edge backend'],
    faqs: [
      {
        question: 'Which Deno runtime is supported?',
        answer: 'Fully compatible with Deno 1.40+ and Deno 2.x native runtimes on Supabase.'
      },
      {
        question: 'Can I swap the LLM provider?',
        answer: 'Yes. The llm.ts module uses a standard OpenAI-compatible API format, working seamlessly with OpenAI, Groq, Together, DeepSeek, and OpenRouter.'
      },
      {
        question: 'Is pgvector indexing pre-configured?',
        answer: 'Yes, the SQL migration creates the documents table with pgvector extension, HNSW cosine index, and match_documents RPC.'
      }
    ],
    systemRequirements: ['Supabase CLI (supabase db push / functions deploy)', 'Free or Pro Supabase project', 'OpenAI-compatible API key']
  },
  {
    id: 'ai-saas-pro',
    num: '26',
    name: 'AI SaaS Pro™',
    tagline: 'Next.js 16 + React 19 Flagship Multi-Provider AI SaaS Boilerplate with Stripe Credits Ledger',
    category: 'saas',
    categoryLabel: 'Flagship AI SaaS',
    price: 49,
    formattedPrice: '$49',
    originalValue: '$149',
    discountPrice: '$39.20',
    gumroadUrl: 'https://notionmaster001.gumroad.com/l/ai-saas-pro/LAUNCH20',
    gumroadId: 'bp01qpM6YQip8c1Ogk6fjw==',
    image: '/products/26-ai-saas-pro.jpg',
    version: 'v1.0 (Next.js 16.4.6 & React 19)',
    folder: '20-ai-saas-pro',
    badge: 'Flagship AI SaaS',
    rating: 4.5,
    reviewsCount: 38,
    techStack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript Strict', 'Supabase Auth & RLS', 'Stripe Subscriptions', 'Multi-Provider Failover Router', 'Tailwind CSS'],
    deliverables: [
      'Complete production AI SaaS codebase (Next.js 16, React 19, Turbopack verified)',
      'Multi-Provider Failover Router with zero hardcoded model names',
      'Atomic PostgreSQL credit ledger with SECURITY DEFINER functions',
      'Stripe subscription engine (checkout, portal, webhooks with retry guarantees)',
      'AI-SaaS-Free-Starter.zip included for lead-magnet distribution',
      '16/16 Vitest passing tests + 0-error npm run build'
    ],
    description: 'Stop locking your SaaS into a single AI API. AI SaaS Pro delivers multi-provider cascading failovers (429/5xx auto-fallback), atomic PostgreSQL credit accounting, and turnkey Stripe subscription billing.',
    highlights: [
      'Multi-provider cascading router with zero-deduction 503 guarantee',
      'Atomic credits ledger: holds estimate, settles actual token count, refunds difference',
      'Turnkey Stripe subscriptions with idempotent webhook retries',
      'Modern responsive dark dashboard with live credits counter and audit ledger'
    ],
    metaTitle: 'AI SaaS Pro™ — Next.js 16 & React 19 Multi-Provider AI SaaS Boilerplate',
    metaDescription: 'Production Next.js 16 AI SaaS boilerplate with multi-provider failover routing, atomic Stripe credits ledger, and Supabase RLS authentication.',
    seoKeywords: ['next.js 16 boilerplate', 'react 19 ai saas', 'multi provider llm router', 'stripe credits ledger', 'ai micro saas template'],
    faqs: [
      {
        question: 'Is this built on Next.js 16 and React 19?',
        answer: 'Yes, fully verified on Next.js 16.4.6 with React 19 Server Components, Server Actions, and Turbopack compiler.'
      },
      {
        question: 'How does the failover router work?',
        answer: 'It cascades through your configured providers on 429 rate limits or 5xx server errors prior to streaming, ensuring zero downtime.'
      },
      {
        question: 'Can users cheat or get negative credits?',
        answer: 'No. All credit modifications run via PostgreSQL SECURITY DEFINER stored procedures with FOR UPDATE locks. Balances never go negative.'
      }
    ],
    systemRequirements: ['Node.js 20+', 'Free Supabase account', 'Stripe account (Test/Live mode)', 'At least one OpenAI-compatible LLM API key']
  }
];
