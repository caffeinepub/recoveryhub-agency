interface Props {
  title: string;
  value: string;
  sub: string;
  trend?: "up" | "down";
  icon: React.ReactNode;
  color?: string;
}

export default function StatCard({
  title,
  value,
  sub,
  trend,
  icon,
  color = "bg-primary/10 text-primary",
}: Props) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 flex items-start gap-4">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground font-medium">{title}</p>
        <p className="text-2xl font-bold text-foreground mt-0.5">{value}</p>
        <p
          className={`text-xs mt-1 font-medium ${trend === "up" ? "text-green-600" : trend === "down" ? "text-red-500" : "text-muted-foreground"}`}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}
