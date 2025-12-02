import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Database, BarChart3, Zap, Globe, Shield, Users, TrendingUp, Settings } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect ke berbagai sumber data",
      details: [
        "PostgreSQL, MySQL, MongoDB",
        "REST API & GraphQL",
        "CSV, Excel Import",
        "Google Sheets",
        "Salesforce, HubSpot",
        "Custom connectors"
      ]
    },
    {
      icon: BarChart3,
      title: "Visualisasi Powerful",
      description: "20+ jenis chart & visualization",
      details: [
        "Line, Bar, Pie Charts",
        "Heatmaps & Treemaps",
        "Funnel & Sankey",
        "Geospatial maps",
        "Custom widgets",
        "Real-time updates"
      ]
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Data processing dalam hitungan detik",
      details: [
        "Live data streaming",
        "Sub-second queries",
        "Automatic refresh",
        "Event triggers",
        "Push notifications",
        "WebSocket support"
      ]
    },
    {
      icon: Globe,
      title: "Multi-platform",
      description: "Akses dari mana saja",
      details: [
        "Web responsive",
        "Mobile apps (iOS/Android)",
        "Desktop apps",
        "REST API",
        "Webhooks",
        "Embed options"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Keamanan tingkat enterprise",
      details: [
        "AES-256 encryption",
        "SOC 2 Type II",
        "GDPR compliant",
        "SSO/SAML",
        "Role-based access",
        "Audit logs"
      ]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Kolaborasi tim yang seamless",
      details: [
        "Unlimited team members",
        "Role & permissions",
        "Comments & annotations",
        "Share dashboards",
        "Version control",
        "Activity tracking"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered insights",
      details: [
        "Trend forecasting",
        "Anomaly detection",
        "Smart alerts",
        "AutoML models",
        "Natural language queries",
        "Recommendation engine"
      ]
    },
    {
      icon: Settings,
      title: "Customizable",
      description: "Sesuaikan dengan kebutuhan Anda",
      details: [
        "Custom branding",
        "White-label options",
        "API integrations",
        "Webhook triggers",
        "Custom functions",
        "Plugin system"
      ]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Platform BI Paling Powerful untuk Bisnis Modern
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Semua tools yang Anda butuhkan untuk mengubah data menjadi actionable insights
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base"
            >
              Coba Gratis 14 Hari
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Siap Mulai dengan OASIS BI PRO?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Bergabunglah dengan ribuan perusahaan yang sudah menggunakan platform kami
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background text-foreground hover:bg-background/90 h-12 px-8 text-base"
            >
              Mulai Gratis Sekarang →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
