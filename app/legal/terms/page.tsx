import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl prose prose-slate">
          <h1>Syarat & Ketentuan</h1>
          <p className="text-muted-foreground">Terakhir diupdate: Desember 2025</p>
          
          <h2>1. Penerimaan Ketentuan</h2>
          <p>Dengan mengakses dan menggunakan layanan OASIS BI PRO, Anda setuju untuk terikat dengan syarat dan ketentuan ini.</p>
          
          <h2>2. Penggunaan Layanan</h2>
          <p>Anda bertanggung jawab untuk menjaga kerahasiaan akun dan password Anda.</p>
          
          <h2>3. Privasi & Keamanan Data</h2>
          <p>Kami menghormati privasi Anda dan melindungi data Anda sesuai dengan kebijakan privasi kami.</p>
          
          <h2>4. Hak Kekayaan Intelektual</h2>
          <p>Semua konten dan fitur platform adalah milik OASIS BI PRO.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
