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
  const colorClasses: Record<string, { bg: string; border: string; title: string; value: string; subtitle: string }> = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      title: "text-blue-800",
      value: "text-blue-900",
      subtitle: "text-blue-700",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      title: "text-green-800",
      value: "text-green-900",
      subtitle: "text-green-700",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      title: "text-purple-800",
      value: "text-purple-900",
      subtitle: "text-purple-700",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      title: "text-yellow-900",
      value: "text-yellow-900",
      subtitle: "text-yellow-800",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      title: "text-red-800",
      value: "text-red-900",
      subtitle: "text-red-700",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      title: "text-orange-800",
      value: "text-orange-900",
      subtitle: "text-orange-700",
    },
  };

  const colors = colorClasses[color];

  return (
    <div class={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 hover:shadow-lg transition-all`}>
      <div class="flex items-start justify-between mb-2">
        <div class="flex-1">
          <div class={`text-sm font-semibold ${colors.title} mb-1`}>{title}</div>
          <div class={`text-3xl font-bold ${colors.value}`}>{value}</div>
          {subtitle && <div class={`text-xs ${colors.subtitle} mt-1 font-semibold`}>{subtitle}</div>}
        </div>
        {icon && <div class="flex-shrink-0 ml-4">{icon}</div>}
      </div>
      {trend && (
        <div class={`text-xs mt-2 flex items-center font-bold ${trend.isPositive ? "text-green-700" : "text-red-700"}`}>
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
              <div class="w-3 h-3 rounded-full border-2 border-gray-200" style={`background-color: ${path.color}`}></div>
              <span class="text-sm font-bold text-gray-900">{path.label}</span>
            </div>
            <div class="text-sm font-bold text-gray-900">
              {path.value} ({path.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface BarChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  title: string;
  maxValue?: number;
}

export function BarChart({ data, title, maxValue }: BarChartProps) {
  const max = maxValue || Math.max(...data.map((item) => item.value));

  return (
    <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
      <h3 class="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div class="space-y-3">
        {data.map((item, index) => {
          const percentage = (item.value / max) * 100;
          return (
            <div key={index}>
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-semibold text-gray-900">{item.label}</span>
                <span class="text-sm font-bold text-gray-900">{item.value}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  class="h-4 rounded-full transition-all"
                  style={`width: ${percentage}%; background-color: ${item.color}`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface DonutChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  title: string;
  size?: number;
}

export function DonutChart({ data, title, size = 140 }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;

  const segments = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const strokeDasharray = (percentage / 100) * circumference;
    const strokeDashoffset = circumference - currentOffset;
    currentOffset += strokeDasharray;

    return {
      color: item.color,
      label: item.label,
      value: item.value,
      percentage: percentage.toFixed(1),
      strokeDasharray,
      strokeDashoffset,
    };
  });

  return (
    <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
      <h3 class="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div class="flex items-center gap-6">
        <div class="flex-shrink-0 relative">
          <svg width={size} height={size} viewBox="0 0 100 100" class="transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              stroke-width="8"
            />
            {segments.map((segment, index) => (
              <circle
                key={index}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={segment.color}
                stroke-width="8"
                stroke-dasharray={segment.strokeDasharray}
                stroke-dashoffset={segment.strokeDashoffset}
                stroke-linecap="round"
                class="transition-all"
              />
            ))}
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center transform rotate-90">
              <div class="text-2xl font-bold text-gray-900">{total}</div>
              <div class="text-xs font-semibold text-gray-600">Total</div>
            </div>
          </div>
        </div>
        <div class="flex-1 space-y-2">
          {segments.map((segment, index) => (
            <div key={index} class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full border border-gray-300" style={`background-color: ${segment.color}`}></div>
                <span class="text-sm font-semibold text-gray-900">{segment.label}</span>
              </div>
              <div class="text-sm font-bold text-gray-900">
                {segment.value} ({segment.percentage}%)
              </div>
            </div>
          ))}
        </div>
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
    { label: "Pendentes", value: 45, color: "#f59e0b" },
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

