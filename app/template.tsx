// Remounts per route: gives every page a fade entrance under the wipe.
// Opacity only — a transform here would break position:fixed children
// (loader, work preview) while animating.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
