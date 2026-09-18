# AGENTS.md

## Project
<!-- TODO: replace with 1-2 sentences about what this app does and who uses it. -->
Front-end only React app. There is no backend yet: all data comes from mocks.
UI language is English, layout direction is LTR.

## Stack
- Vite + React + TypeScript (strict mode)
- Tailwind CSS. Check the installed version in `package.json` before writing any Tailwind config or version-specific syntax. v3 and v4 differ; never mix their patterns.
- Package manager: npm. Never use yarn/pnpm/bun and never create another lockfile.
- ESLint + Prettier are set up. Follow their config; do not change it.
- NOT installed (do not add without my approval): router, UI component library, data-fetching library, test runner, form library.

## Commands
Confirm the exact script names in `package.json` before relying on them.
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Type-check + production build: `npm run build`
- Format check on changed files: `npx prettier --check <files>` (fix with `--write`)

## After every change
1. Run lint, build, and the Prettier check on changed files. Fix problems you caused.
2. Report the real results. If you could not run something, say so.
3. Never say "done" or "it works" without having run these checks.
4. If you find unrelated pre-existing errors, mention them; do not fix them.

## Structure
Follow the existing folder structure. Look at neighboring files before creating new ones.
Do not create new top-level folders inside `src/` without asking.
<!-- TODO (optional): paste the output of `tree src -L 2` here so the structure is exact. -->

## Code conventions
- Function components and hooks only. Match the export style (named/default) used by existing files.
- TypeScript: no `any`, no `@ts-ignore`, no non-null assertions (`!`) unless unavoidable, and then add a one-line comment explaining why. Type component props explicitly.
- Reuse existing components, hooks, and utilities. Search the codebase before creating new ones.
- Keep components small and focused. If a component grows past roughly 150 lines, suggest splitting it instead of silently doing it.
- Use stable `key`s in lists (not array index for dynamic lists). Clean up effects (listeners, timers). Do not use `useEffect` for values that can be computed during render.
- Do not add memoization (`useMemo`, `useCallback`, `React.memo`) unless there is a real, explained performance reason.
- Comments explain "why", never restate the code.

## State management
- Start with local state (`useState` / `useReducer`), then lift state up, then Context for rarely-changing values.
- Zustand is allowed only when state must be shared across distant components. Propose it and wait for my approval before installing.
- If Zustand is approved: one small store per domain, typed, and consumed with selectors (`useStore(s => s.value)`), never the whole store.

## Styling (Tailwind)
- Use utility classes in `className`. No inline `style` except for truly dynamic values.
- Do not create new CSS files or use `@apply` unless asked. Extract repeated markup into a component instead.
- Mobile-first responsive design (base styles first, then `sm:`/`md:`/`lg:`).
- Avoid repeating arbitrary values like `w-[347px]` or one-off hex colors. Prefer Tailwind's scale and the theme.
- Do not add `clsx`, `tailwind-merge`, or similar helpers without asking.
- Accessibility: semantic HTML (`button` for actions, `a` for navigation), labels for inputs, `alt` for images, visible keyboard focus.

## Data and mocks
- Components must not import mock data directly or hardcode fake API responses.
- Keep mock data and the functions that read it in one dedicated place. Reuse the existing folder if there is one; otherwise ask before creating it.
- Data-access functions are async and typed with TypeScript types that describe the future API response shape. That way replacing mocks with real `fetch` calls later only changes that layer.
- Simulate loading and error states where the UI needs them.
- Do not add MSW, json-server, axios, or similar tools without approval.

## Hard rules
- Make the smallest change that solves the task. No drive-by refactors, renames, or reformatting of unrelated code.
- Only touch files that the task requires. If you need to go beyond that, stop and ask.
- Do NOT install, remove, or upgrade dependencies without asking first.
- Do NOT edit config files (`vite.config.*`, `tsconfig*`, ESLint/Prettier config, `package.json`) unless the task explicitly says so.
- Do NOT run `git commit`, `git push`, `git reset`, or any destructive command. I handle git.
- Do NOT invent APIs. If you are unsure about a library's API or a React/Tailwind feature, say so instead of guessing.
- If the task is ambiguous, ask ONE clarifying question before writing code.

## Working style
- Plan mode: investigate and describe the plan (files to change, steps, risks). Do not modify source files.
- Agent mode: execute ONLY the steps I name in the prompt. Do one step, run checks, report, then stop.
- If you need to deviate from the plan (extra file, new dependency, different approach), stop and explain instead of proceeding.
- If I introduce a pattern I may not know well, explain it in 1-2 sentences in your reply (not in code comments).


## When you finish a task, report
1. Files changed, and what changed in each.
2. Why you chose this approach (and one alternative if relevant).
3. Assumptions you made.
4. Results of lint / build / Prettier.
5. What I should check manually in the browser.