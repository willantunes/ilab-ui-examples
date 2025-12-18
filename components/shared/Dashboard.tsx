import { type ComponentChildren } from "preact";

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ComponentChildren;
  trend?: { value: number; isPositive: boolean };
  color?: string;
}

export function DashboardCard({ title, value, subtitle, icon, trend, color = "blue" }: DashboardCardProps) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    green: "bg-green-50 border-green-200 text-green-600",
    purple: "bg-purple-50 border-purple-200 text-purple-600",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-600",
    red: "bg-red-50 border-red-200 text-red-600",
    orange: "bg-orange-50 border-orange-200 text-orange-600",
  };

  return (
    <div class={`${colorClasses[color]} border-2 rounded-xl p-6 hover:shadow-lg transition-all`}>
      <div class="flex items-start justify-between mb-2">
        <div class="flex-1">
          <div class="text-sm font-medium opacity-80 mb-1">{title}</div>
          <div class="text-3xl font-bold">{value}</div>
          {subtitle && <div class="text-xs opacity-70 mt-1">{subtitle}</div>}
        </div>
        {icon && <div class="flex-shrink-0 ml-4">{icon}</div>}
      </div>
      {trend && (
        <div class={`text-xs mt-2 flex items-center ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
          <span>{trend.isPositive ? "↑" : "↓"}</span>
          <span class="ml-1">{Math.abs(trend.value)}%</span>
        </div>
      )}
    </div>
  );
}

interface PieChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  title: string;
  size?: number;
}

export function PieChart({ data, title, size = 120 }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  const paths = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startX = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
    const startY = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
    const endX = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
    const endY = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);
    const largeArc = angle > 180 ? 1 : 0;

    return {
      path: `M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArc} 1 ${endX} ${endY} Z`,
      color: item.color,
      label: item.label,
      value: item.value,
      percentage: percentage.toFixed(1),
    };
  });

  return (
    <div class="flex items-center gap-6">
      <div class="flex-shrink-0">
        <svg width={size} height={size} viewBox="0 0 100 100" class="transform -rotate-90">
          {paths.map((path, index) => (
            <path
              key={index}
              d={path.path}
              fill={path.color}
              stroke="white"
              stroke-width="2"
              class="transition-all hover:opacity-80"
            />
          ))}
        </svg>
      </div>
      <div class="flex-1 space-y-2">
        {paths.map((path, index) => (
          <div key={index} class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full" style={`background-color: ${path.color}`}></div>
              <span class="text-sm text-gray-700 dark:text-gray-300">{path.label}</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {path.value} ({path.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample dashboard data
export const dashboardData = {
  examesColetadosHoje: 127,
  examesEmTransporte: 43,
  examesLiberadosMes: 2847,
  ocorrenciasAberto: 12,
  ocorrenciasAguardandoRetorno: 5,
  statusExames: [
    { label: "Pendentes", value: 45, color: "#fbbf24" },
    { label: "Em Análise", value: 32, color: "#3b82f6" },
    { label: "Liberados", value: 127, color: "#10b981" },
    { label: "Rejeitados", value: 8, color: "#ef4444" },
  ],
  tiposExames: [
    { label: "Hematologia", value: 85, color: "#8b5cf6" },
    { label: "Bioquímica", value: 67, color: "#06b6d4" },
    { label: "Imunologia", value: 42, color: "#f59e0b" },
    { label: "Microbiologia", value: 18, color: "#ec4899" },
  ],
};

