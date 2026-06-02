type Vibe = 'focus' | 'calm' | 'creative'
type Filter = 'all' | 'active' | 'done'

interface Task {
  id: number
  text: string
  done: boolean
}

export function setupVibePlanner(root: HTMLElement) {
  const form = root.querySelector<HTMLFormElement>('#task-form')
  const input = root.querySelector<HTMLInputElement>('#task-input')
  const taskList = root.querySelector<HTMLUListElement>('#task-list')
  const stats = root.querySelector<HTMLParagraphElement>('#stats')
  const currentVibeLabel = root.querySelector<HTMLElement>('#current-vibe')
  const vibeButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('.vibe-btn'))
  const filterButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('.filter-btn'))

  if (!form || !input || !taskList || !stats || !currentVibeLabel) {
    return
  }

  let tasks: Task[] = [
    { id: 1, text: 'Set one clear goal for today', done: false },
    { id: 2, text: 'Ship a small TypeScript improvement', done: true },
  ]
  let nextId = 3
  let currentVibe: Vibe = 'focus'
  let currentFilter: Filter = 'all'

  const vibeText: Record<Vibe, string> = {
    focus: 'Focus',
    calm: 'Calm',
    creative: 'Creative',
  }

  const applyVibe = (vibe: Vibe) => {
    currentVibe = vibe
    root.dataset.vibe = vibe
    currentVibeLabel.textContent = vibeText[vibe]

    vibeButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.vibe === vibe)
    })
  }

  const getFilteredTasks = (): Task[] => {
    if (currentFilter === 'active') {
      return tasks.filter((task) => !task.done)
    }

    if (currentFilter === 'done') {
      return tasks.filter((task) => task.done)
    }

    return tasks
  }

  const renderStats = () => {
    const doneCount = tasks.filter((task) => task.done).length
    const activeCount = tasks.length - doneCount
    stats.textContent = `${activeCount} active · ${doneCount} done · ${tasks.length} total`
  }

  const renderTasks = () => {
    const filtered = getFilteredTasks()

    taskList.replaceChildren()

    if (filtered.length === 0) {
      const emptyItem = document.createElement('li')
      emptyItem.className = 'empty'
      emptyItem.textContent = 'No tasks in this filter yet.'
      taskList.append(emptyItem)
      renderStats()
      return
    }

    filtered.forEach((task) => {
      const item = document.createElement('li')
      item.className = `task-item ${task.done ? 'done' : ''}`
      item.dataset.id = String(task.id)

      const label = document.createElement('label')
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.checked = task.done
      checkbox.setAttribute('aria-label', `Mark ${task.text} done`)

      const text = document.createElement('span')
      text.textContent = task.text

      const deleteButton = document.createElement('button')
      deleteButton.type = 'button'
      deleteButton.className = 'delete-btn'
      deleteButton.setAttribute('aria-label', `Delete ${task.text}`)
      deleteButton.textContent = '✕'

      label.append(checkbox, text)
      item.append(label, deleteButton)
      taskList.append(item)
    })

    renderStats()
  }

  vibeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const vibe = button.dataset.vibe as Vibe | undefined
      if (!vibe) {
        return
      }

      applyVibe(vibe)
    })
  })

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter as Filter | undefined
      if (!filter) {
        return
      }

      currentFilter = filter
      filterButtons.forEach((item) => {
        item.classList.toggle('active', item === button)
      })
      renderTasks()
    })
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = input.value.trim()
    if (!text) {
      return
    }

    tasks = [{ id: nextId, text, done: false }, ...tasks]
    nextId += 1
    input.value = ''
    renderTasks()
  })

  taskList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const taskItem = target.closest<HTMLLIElement>('.task-item')
    if (!taskItem) {
      return
    }

    const id = Number(taskItem.dataset.id)

    if (target.matches('input[type="checkbox"]')) {
      tasks = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
      renderTasks()
      return
    }

    if (target.matches('.delete-btn')) {
      tasks = tasks.filter((task) => task.id !== id)
      renderTasks()
    }
  })

  applyVibe(currentVibe)
  renderTasks()
}
