"use client"

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

interface Task {
  id: string
  title: string
  completed: boolean
}

interface TaskListProps {
  area: string
}

export default function TaskList({ area }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Complete daily budget review', completed: false },
    { id: '2', title: 'Go for a 30-minute walk', completed: true },
    { id: '3', title: 'Call a friend', completed: false },
  ])

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="flex items-center space-x-2">
          <Checkbox
            id={task.id}
            checked={task.completed}
            onCheckedChange={() => toggleTask(task.id)}
          />
          <label
            htmlFor={task.id}
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              task.completed ? 'line-through text-muted-foreground' : ''
            }`}
          >
            {task.title}
          </label>
        </div>
      ))}
    </div>
  )
}