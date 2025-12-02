/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['augohrpoogldvdvdaxxy.supabase.co'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
}

export default nextConfig
