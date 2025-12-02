'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { 
  LayoutDashboard, 
  BarChart3, 
  CreditCard, 
  Settings, 
  LogOut,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign
} from 'lucide-react'

interface DashboardClientProps {
  user: User
  profile: any
  subscriptions: any[]
  transactions: any[]
  analyticsData: any[]
}

export default function DashboardClient({ 
  user, 
  profile, 
  subscriptions, 
  transactions, 
  analyticsData 
}: DashboardClientProps) {
  const router = useRouter()
  const supabase = createClient()
  const [activeTab, setActiveTab] = useState('overview')

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/signin')
    router.refresh()
  }

  // Calculate stats
  const activeSubscription = subscriptions.find(sub => sub.status === 'active')
  const totalSpent = transactions
    .filter(t => t.status === 'success')
    .reduce((sum, t) => sum + Number(t.amount), 0)
  const totalTransactions = transactions.length

  // Mock data for charts (nanti bisa diganti dengan real data dari Supabase)
  const revenueData = [
    { month: 'Jan', value: 4500000 },
    { month: 'Feb', value: 5200000 },
    { month: 'Mar', value: 4800000 },
    { month: 'Apr', value: 6100000 },
    { month: 'May', value: 7300000 },
    { month: 'Jun', value: 6900000 },
  ]

  const userData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1450 },
    { month: 'Mar', users: 1680 },
    { month: 'Apr', users: 1920 },
    { month: 'May', users: 2150 },
    { month: 'Jun', users: 2480 },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="font-bold text-xl">OASIS BI PRO</span>
          </Link>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <LayoutDashboard size={20} />
              <span>Overview</span>
            </button>
            
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'analytics' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <BarChart3 size={20} />
              <span>Analytics</span>
            </button>
            
            <button
              onClick={() => setActiveTab('transactions')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'transactions' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <CreditCard size={20} />
              <span>Transactions</span>
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6 border-t">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              {profile?.full_name?.[0] || user.email?.[0].toUpperCase()}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">
                {profile?.full_name || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'analytics' && 'Analytics & Reports'}
              {activeTab === 'transactions' && 'Transaction History'}
              {activeTab === 'settings' && 'Account Settings'}
            </h1>
            <p className="text-muted-foreground">
              Selamat datang kembali, {profile?.full_name || 'User'}!
            </p>
          </div>

          {/* Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Total Revenue</span>
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    Rp {(revenueData[revenueData.length - 1].value / 1000000).toFixed(1)}M
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+12.5% dari bulan lalu</span>
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Active Users</span>
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    {userData[userData.length - 1].users.toLocaleString()}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+15.2% dari bulan lalu</span>
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Transactions</span>
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    {totalTransactions}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    Total transaksi
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Subscription</span>
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    {activeSubscription ? 'Active' : 'Inactive'}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    {activeSubscription ? activeSubscription.plan_id : 'No active plan'}
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
                  <div className="h-64 flex items-end gap-2">
                    {revenueData.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
                          style={{ 
                            height: `${(item.value / Math.max(...revenueData.map(d => d.value))) * 100}%` 
                          }}
                        />
                        <span className="text-xs text-muted-foreground mt-2">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-lg font-semibold mb-4">User Growth</h3>
                  <div className="h-64 flex items-end gap-2">
                    {userData.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-green-500 rounded-t transition-all hover:bg-green-400"
                          style={{ 
                            height: `${(item.users / Math.max(...userData.map(d => d.users))) * 100}%` 
                          }}
                        />
                        <span className="text-xs text-muted-foreground mt-2">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="p-8 rounded-lg border bg-card text-center">
                <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Dapatkan insight mendalam tentang performa bisnis Anda dengan tools analytics yang powerful
                </p>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  Upgrade Plan
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="space-y-6">
              <div className="rounded-lg border bg-card">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recent Transactions</h3>
                </div>
                <div className="divide-y">
                  {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                      <div key={transaction.id} className="p-6 flex items-center justify-between">
                        <div>
                          <p className="font-medium">{transaction.payment_reference || 'Transaction'}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(transaction.created_at).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            Rp {Number(transaction.amount).toLocaleString('id-ID')}
                          </p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            transaction.status === 'success' 
                              ? 'bg-green-100 text-green-700'
                              : transaction.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-12 text-center text-muted-foreground">
                      <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Belum ada transaksi</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue={profile?.full_name || ''}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue={user.email}
                      disabled
                      className="w-full px-3 py-2 border rounded-md bg-muted"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input 
                      type="text" 
                      defaultValue={profile?.company || ''}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
