import './style.css'
import { setupVibePlanner } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main class="app-shell">
  <header>
    <p class="eyebrow">Vite + TypeScript Interactive Project</p>
    <h1>Vibe Planner</h1>
    <p class="subtitle">Pick your vibe, build your task list, and track momentum in real time.</p>
  </header>

  <section class="panel">
    <h2>Today’s vibe</h2>
    <div class="vibe-buttons" role="group" aria-label="Choose your vibe">
      <button type="button" class="vibe-btn" data-vibe="focus">🎯 Focus</button>
      <button type="button" class="vibe-btn" data-vibe="calm">🌊 Calm</button>
      <button type="button" class="vibe-btn" data-vibe="creative">✨ Creative</button>
    </div>
    <p class="current-vibe">Current vibe: <strong id="current-vibe">Focus</strong></p>
  </section>

  <section class="panel">
    <h2>Task board</h2>
    <form id="task-form" class="task-form">
      <input id="task-input" name="task" type="text" placeholder="Add a task..." maxlength="70" required />
      <button type="submit">Add</button>
    </form>

    <div class="filters" role="group" aria-label="Filter tasks">
      <button type="button" class="filter-btn active" data-filter="all">All</button>
      <button type="button" class="filter-btn" data-filter="active">Active</button>
      <button type="button" class="filter-btn" data-filter="done">Done</button>
    </div>

    <ul id="task-list" class="task-list" aria-live="polite"></ul>
    <p id="stats" class="stats"></p>
  </section>
</main>
`

setupVibePlanner(document.querySelector<HTMLElement>('#app')!)
