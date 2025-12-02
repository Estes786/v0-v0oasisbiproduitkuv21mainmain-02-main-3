import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Circle } from 'lucide-react'
import Link from 'next/link'

export default function TutorialPage() {
  const steps = [
    {
      title: "1. Buat Akun & Login",
      description: "Daftar gratis dan verifikasi email Anda",
      completed: false,
      actions: [
        "Klik 'Mulai Gratis' di homepage",
        "Isi form registrasi dengan data valid",
        "Verifikasi email yang dikirim ke inbox Anda",
        "Login dengan kredensial yang sudah dibuat"
      ]
    },
    {
      title: "2. Setup Profile & Workspace",
      description: "Lengkapi profile dan buat workspace pertama Anda",
      completed: false,
      actions: [
        "Masuk ke Dashboard",
        "Lengkapi informasi profile di Settings",
        "Tambahkan informasi perusahaan (opsional)",
        "Setup preferensi dashboard Anda"
      ]
    },
    {
      title: "3. Connect Data Sources",
      description: "Hubungkan sumber data bisnis Anda",
      completed: false,
      actions: [
        "Pilih 'Data Integrations' di menu dashboard",
        "Pilih sumber data (Database, API, CSV, dll)",
        "Masukkan kredensial koneksi",
        "Test koneksi dan verify data"
      ]
    },
    {
      title: "4. Buat Dashboard Pertama",
      description: "Visualisasikan data Anda dengan drag & drop",
      completed: false,
      actions: [
        "Klik 'Create Dashboard' di menu",
        "Pilih template atau mulai dari blank",
        "Drag & drop widget (charts, tables, KPIs)",
        "Configure data binding untuk setiap widget"
      ]
    },
    {
      title: "5. Customize & Share",
      description: "Kustomisasi tampilan dan bagikan ke tim",
      completed: false,
      actions: [
        "Atur layout dan styling dashboard",
        "Set filters dan date ranges",
        "Invite team members (jika ada)",
        "Share dashboard link atau export PDF"
      ]
    },
    {
      title: "6. Explore Advanced Features",
      description: "Manfaatkan fitur lanjutan untuk insight lebih dalam",
      completed: false,
      actions: [
        "Setup alerts & notifications",
        "Create automated reports",
        "Use predictive analytics (Pro plan)",
        "Integrate dengan tools lain via API"
      ]
    }
  ]

  const plans = [
    {
      name: "Free Trial",
      features: [
        "1 Dashboard",
        "1 Data Source",
        "Basic Visualizations",
        "7 Days History",
        "Email Support"
      ]
    },
    {
      name: "Starter (Rp 99.000/bln)",
      features: [
        "5 Dashboards",
        "3 Data Sources",
        "All Visualizations",
        "30 Days History",
        "Email + Chat Support"
      ]
    },
    {
      name: "Professional (Rp 299.000/bln)",
      features: [
        "Unlimited Dashboards",
        "10 Data Sources",
        "Advanced Analytics",
        "1 Year History",
        "Priority Support + Phone"
      ]
    },
    {
      name: "Enterprise (Custom)",
      features: [
        "Unlimited Everything",
        "Custom Integrations",
        "White-label Options",
        "Unlimited History",
        "Dedicated Account Manager"
      ]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Panduan Lengkap Memulai dengan OASIS BI PRO
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ikuti langkah-langkah berikut untuk memaksimalkan penggunaan platform kami
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Mulai Sekarang
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Lihat Harga
              </Link>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Roadmap Sukses Anda
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  <div className="flex gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.completed ? (
                        <CheckCircle size={24} />
                      ) : (
                        <Circle size={24} />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <div className="bg-card border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <div className="space-y-2">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-start gap-2">
                              <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                              <span className="text-sm">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Comparison */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Pilih Plan yang Sesuai dengan Kebutuhan Anda
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Mulai gratis, upgrade kapan saja sesuai pertumbuhan bisnis
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-card border rounded-lg p-6 ${
                    index === 2 ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {index === 2 && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Siap Memulai Perjalanan Analytics Anda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dapatkan insight mendalam dari data bisnis Anda dalam hitungan menit, bukan hari
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base"
            >
              Coba Gratis 14 Hari →
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Tidak perlu kartu kredit • Cancel kapan saja
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
