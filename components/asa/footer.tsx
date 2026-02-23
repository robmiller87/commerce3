export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Agent Store Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
