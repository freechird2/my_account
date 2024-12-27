import './globals.css'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'My Account',
  description: '내 자산 관리를 보다 쉽게 !',
  image: '',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
