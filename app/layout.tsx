import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased max-w-6xl mx-auto px-6 py-10">
        {children}
      </body>
    </html>
  )
}