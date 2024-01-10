interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-muted text-muted-foreground rounded border px-2 py-0.5 text-sm font-medium">
      {children}
    </span>
  );
}
