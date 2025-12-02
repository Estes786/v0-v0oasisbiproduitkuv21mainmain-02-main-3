import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BarChart3, LineChart, PieChart, TrendingUp, Users, Zap, Shield, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm mb-4">
              🚀 Pure Business Intelligence SaaS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transform Your Data Into
              <span className="text-primary"> Actionable Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Platform Business Intelligence terdepan untuk menganalisis, memvisualisasikan, 
              dan mengoptimalkan performa bisnis Anda dengan data real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3 text-base"
              >
                Mulai Gratis Sekarang
              </Link>
              <Link
                href="/tutorial"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-3 text-base"
              >
                Lihat Tutorial
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✨ Tidak perlu kartu kredit • Gratis 14 hari trial
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 border-y bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fitur Unggulan Platform Kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Semua yang Anda butuhkan untuk menganalisis dan mengoptimalkan bisnis Anda dalam satu platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: 'Real-time Analytics',
                  description: 'Monitor performa bisnis Anda secara real-time dengan dashboard interaktif'
                },
                {
                  icon: LineChart,
                  title: 'Custom Dashboards',
                  description: 'Buat dashboard sesuai kebutuhan bisnis Anda dengan drag & drop'
                },
                {
                  icon: PieChart,
                  title: 'Data Visualization',
                  description: 'Visualisasi data kompleks menjadi insight yang mudah dipahami'
                },
                {
                  icon: TrendingUp,
                  title: 'Predictive Analytics',
                  description: 'Prediksi tren bisnis dengan algoritma machine learning'
                },
                {
                  icon: Users,
                  title: 'Team Collaboration',
                  description: 'Kolaborasi tim dengan sharing dashboard dan reports'
                },
                {
                  icon: Zap,
                  title: 'Fast Performance',
                  description: 'Query data jutaan rows dalam hitungan detik'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Keamanan data tingkat enterprise dengan enkripsi end-to-end'
                },
                {
                  icon: Globe,
                  title: 'Multi-platform',
                  description: 'Akses dari browser, mobile app, atau via REST API'
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Mengubah Data Menjadi Keputusan Bisnis?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan perusahaan yang telah mempercayai OASIS BI PRO untuk analytics mereka
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground hover:bg-background/90 h-12 px-8 py-3 text-base"
            >
              Mulai Gratis Sekarang →
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Apa itu OASIS BI PRO?',
                  answer: 'OASIS BI PRO adalah platform Business Intelligence SaaS yang membantu perusahaan menganalisis data bisnis mereka dengan dashboard interaktif dan visualisasi data yang powerful. Kami BUKAN payment processor atau payment aggregator.'
                },
                {
                  question: 'Berapa biaya berlangganan?',
                  answer: 'Kami menawarkan berbagai paket mulai dari Starter (Rp 99.000/bulan), Professional (Rp 299.000/bulan), hingga Enterprise dengan harga khusus. Semua paket mendapatkan free trial 14 hari.'
                },
                {
                  question: 'Apakah data saya aman?',
                  answer: 'Ya, keamanan data adalah prioritas utama kami. Semua data dienkripsi dengan standar enterprise-grade encryption, dan kami comply dengan standar keamanan internasional.'
                },
                {
                  question: 'Bagaimana cara integrasi dengan sistem saya?',
                  answer: 'OASIS BI PRO mendukung integrasi dengan berbagai sumber data melalui API, connector ke database populer (PostgreSQL, MySQL, MongoDB), dan import file (CSV, Excel).'
                }
              ].map((faq, index) => (
                <details key={index} className="group border rounded-lg">
                  <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/50 transition-colors">
                    {faq.question}
                  </summary>
                  <p className="p-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
