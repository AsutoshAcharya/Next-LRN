export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>shared header</header>
        {children}
        <footer className="bg-gradient-to-b">shared footer</footer>
      </body>
    </html>
  );
}
