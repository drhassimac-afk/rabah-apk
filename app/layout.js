export const metadata = {
  title: 'رباح',
  description: 'واجهة رباح التفاعلية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: '#0a0e17' }}>
        {children}
      </body>
    </html>
  )
}
