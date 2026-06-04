## Rationale

Using TypeScript made the code in this project feel much safer and easier to reason about. By defining types like `Vibe`, `Filter`, and `Task`, it became clearer what values were allowed and what each[...] 

The project structure was kept intentionally simple. `main.ts` handles app startup and basic UI setup, while `counter.ts` contains most of the interactive logic and state updates. Splitting responsibi[...] 

Vite also made development faster and smoother. Its dev server gave immediate feedback while building features, and hot reload made UI adjustments quick to test. The production build process was also [...]

A few core JavaScript patterns were especially helpful throughout the app. Array methods like `map`, `filter`, and `forEach` made it easy to render tasks and update them cleanly. Spread syntax helped [...]
