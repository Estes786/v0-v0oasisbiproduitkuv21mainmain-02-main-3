import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "99.000",
      period: "/bulan",
      description: "Untuk individu dan tim kecil yang baru memulai",
      features: [
        { text: "5 Dashboards aktif", included: true },
        { text: "3 Sumber data", included: true },
        { text: "Semua jenis visualisasi", included: true },
        { text: "30 hari histori data", included: true },
        { text: "Email support", included: true },
        { text: "Export PDF/PNG", included: true },
        { text: "Basic analytics", included: true },
        { text: "Predictive analytics", included: false },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
      ],
      cta: "Pilih Starter",
      popular: false
    },
    {
      name: "Professional",
      price: "299.000",
      period: "/bulan",
      description: "Untuk bisnis yang ingin scale up",
      features: [
        { text: "Unlimited dashboards", included: true },
        { text: "10 Sumber data", included: true },
        { text: "Advanced visualizations", included: true },
        { text: "1 tahun histori data", included: true },
        { text: "Priority support (Email + Chat)", included: true },
        { text: "Export Excel/CSV", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Predictive analytics", included: true },
        { text: "Team collaboration", included: true },
        { text: "API access", included: true },
        { text: "Custom branding", included: false },
      ],
      cta: "Pilih Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Untuk perusahaan besar dengan kebutuhan khusus",
      features: [
        { text: "Unlimited everything", included: true },
        { text: "Custom integrations", included: true },
        { text: "Unlimited histori data", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "24/7 Phone support", included: true },
        { text: "On-premise deployment", included: true },
        { text: "Custom development", included: true },
        { text: "SLA guarantee", included: true },
        { text: "White-label options", included: true },
        { text: "Training & onboarding", included: true },
        { text: "Custom security", included: true },
      ],
      cta: "Hubungi Sales",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "Apakah ada free trial?",
      answer: "Ya, semua plan mendapatkan free trial 14 hari tanpa perlu kartu kredit. Anda bisa mencoba semua fitur terlebih dahulu sebelum memutuskan untuk berlangganan."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Kami menerima pembayaran via transfer bank, virtual account, e-wallet (OVO, GoPay, DANA), dan kartu kredit melalui payment gateway resmi."
    },
    {
      question: "Apakah bisa upgrade/downgrade plan?",
      answer: "Ya, Anda bisa upgrade atau downgrade plan kapan saja. Selisih biaya akan otomatis dihitung secara pro-rata."
    },
    {
      question: "Bagaimana jika saya cancel subscription?",
      answer: "Anda bisa cancel subscription kapan saja tanpa penalty. Data Anda akan tetap tersimpan selama 30 hari setelah cancel untuk jaga-jaga Anda ingin reactivate."
    },
    {
      question: "Apakah ada biaya setup?",
      answer: "Tidak ada biaya setup untuk Starter dan Professional plan. Untuk Enterprise, biaya setup akan didiskusikan berdasarkan kompleksitas kebutuhan Anda."
    },
    {
      question: "Bagaimana dengan keamanan data?",
      answer: "Semua data dienkripsi dengan standar enterprise-grade (AES-256). Kami comply dengan GDPR dan SOC 2 Type II. Data Anda tersimpan di server yang highly secured dan regularly backed up."
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
              Harga yang Transparan dan Fleksibel
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Pilih plan yang sesuai dengan kebutuhan bisnis Anda
            </p>
            <p className="text-sm text-muted-foreground">
              ✨ Free trial 14 hari • Tidak perlu kartu kredit • Cancel kapan saja
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg border bg-card p-8 ${
                    plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                      <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        PALING POPULER
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline gap-2">
                      {plan.price === "Custom" ? (
                        <div className="text-4xl font-bold">Custom</div>
                      ) : (
                        <>
                          <span className="text-sm">Rp</span>
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-sm text-muted-foreground">{plan.period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                        ) : (
                          <X className="flex-shrink-0 w-5 h-5 text-muted-foreground mt-0.5" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? '' : 'text-muted-foreground'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.price === "Custom" ? "/#contact" : "/auth/signup"}
                    className={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-8 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Semua Plan Termasuk
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    ✓
                  </div>
                  Keamanan Enterprise
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AES-256 encryption</li>
                  <li>• SOC 2 Type II compliant</li>
                  <li>• Regular security audits</li>
                  <li>• Automated backups</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    ⚡
                  </div>
                  Performance Tinggi
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• Global CDN</li>
                  <li>• Real-time data processing</li>
                  <li>• Fast query optimization</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    🎯
                  </div>
                  Support Terbaik
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Responsive support team</li>
                  <li>• Comprehensive documentation</li>
                  <li>• Video tutorials</li>
                  <li>• Regular webinars</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border rounded-lg">
                  <summary className="cursor-pointer p-6 font-semibold hover:bg-muted/50 transition-colors">
                    {faq.question}
                  </summary>
                  <p className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tim kami siap membantu Anda memilih plan yang tepat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:elfaress2425@gmail.com"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background text-foreground hover:bg-background/90 h-11 px-8"
              >
                Email Sales
              </a>
              <a
                href="https://wa.me/6285712658316"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-11 px-8"
              >
                WhatsApp Kami
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
