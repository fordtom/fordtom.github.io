# AGENTS.md

This is a simple svelte(kit) project that aims to modernise my static personal site. The previous iterations can be found in the `OLD` directory.

## Commands

- **Dev**: `bun run dev` (or `npm run dev`)
- **Build**: `bun run build`
- **Typecheck**: `bun run check`
- **Lint**: `bun run lint`
- **Format**: `bun run format`
- **Tests**: No test framework configured yet

## Architecture

- **Framework**: SvelteKit 2 with Svelte 5, static adapter
- **Package Manager**: Uses bun (bun.lock present), but npm/pnpm also work
- **Routes**: File-based routing in `src/routes/` (SvelteKit convention)
- **Components**: Reusable components in `src/lib/`
- **Styles**: Tailwind CSS v4
- **Aliases**: `$lib` maps to `src/lib/`

## Code Style

- **Formatting**: Prettier with tabs, single quotes, no trailing commas, 100 char width
- **Types**: Strict TypeScript enabled, prefer explicit types
- **Imports**: ES modules only, use `$lib` alias for library imports
- **Conventions**: Follow SvelteKit file-based routing (+page.svelte, +layout.svelte, +server.ts, etc.)

## Tools and MCP

- **Svelte**: Use this to find the correct syntax and documentation for modern svelte.
- **Linear**: Useful for retrieving information specific to the projects I'm working on.
