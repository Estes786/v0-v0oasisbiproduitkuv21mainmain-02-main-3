import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl prose prose-slate">
          <h1>Kebijakan Privasi</h1>
          <p className="text-muted-foreground">Terakhir diupdate: Desember 2025</p>
          
          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan informasi yang Anda berikan saat mendaftar dan menggunakan layanan kami.</p>
          
          <h2>2. Bagaimana Kami Menggunakan Informasi</h2>
          <p>Informasi digunakan untuk menyediakan dan meningkatkan layanan kami.</p>
          
          <h2>3. Keamanan Data</h2>
          <p>Kami menggunakan enkripsi enterprise-grade untuk melindungi data Anda.</p>
          
          <h2>4. Hak Anda</h2>
          <p>Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus data pribadi Anda.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
