import Dashboard from '@/components/Dashboard'
import Header from '@/components/Header'
import AuthCheck from '@/components/AuthCheck'

export default function DashboardPage() {
  return (
    <AuthCheck>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Dashboard />
        </main>
      </div>
    </AuthCheck>
  )
}