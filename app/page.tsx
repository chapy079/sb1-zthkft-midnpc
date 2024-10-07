import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Mid NPC</h1>
      <p className="text-xl mb-8">Your personal life improvement assistant</p>
      <Link href="/dashboard">
        <Button size="lg">Open App</Button>
      </Link>
    </div>
  )
}