import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl">OASIS BI PRO</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Pure Business Intelligence SaaS Platform
            </p>
            <p className="text-xs text-muted-foreground">
              Kami menyediakan <strong>analytics software</strong>, bukan payment processing services.
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-semibold">
              Pure Business Intelligence Platform - NOT a payment processor.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Fitur</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Harga</Link></li>
              <li><Link href="/tutorial" className="hover:text-primary transition-colors">Tutorial</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Kontak</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/legal/terms" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} OASIS BI PRO. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>📧 elfaress2425@gmail.com</span>
              <span>📱 +62 857-1265-8316</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
