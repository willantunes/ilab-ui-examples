import { FilterIcon, BroomIcon, PlusIcon } from "../shared/Icons.tsx";

interface EtiquetasPageProps {
  variant?: "option1" | "option2" | "option3" | "option4" | "option5" | "option6" | "option7" | "option8" | "option9" | "option10" | "option11" | "option12";
}

export default function EtiquetasPage({ variant = "option1" }: EtiquetasPageProps) {
  const styles = {
    option1: {
      container: "bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50",
      header: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      table: "bg-white/40 backdrop-blur-sm",
    },
    option2: {
      container: "bg-white rounded-xl shadow-xl border-2 border-blue-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
      table: "bg-white",
    },
    option3: {
      container: "bg-white rounded-2xl shadow-2xl border-4 border-blue-300",
      header: "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
      button: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl",
      table: "bg-white",
    },
    option4: {
      container: "bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30",
      header: "bg-gray-700 border-b-2 border-cyan-500 text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-500/50",
      table: "bg-gray-800",
    },
    option5: {
      container: "bg-white rounded-xl shadow-sm border border-slate-200",
      header: "bg-slate-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      table: "bg-white",
    },
    option6: {
      container: "bg-white rounded-2xl shadow-lg border-2 border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
      table: "bg-white",
    },
    option7: {
      container: "bg-white rounded-2xl shadow-sm border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      table: "bg-white",
    },
    option8: {
      container: "bg-white rounded-2xl shadow-md border border-slate-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
      table: "bg-white",
    },
    option9: {
      container: "bg-[#1e1e1e] border border-[#3e3e42]",
      header: "bg-[#094771] text-white",
      button: "bg-[#0e639c] hover:bg-[#1177bb] text-white",
      table: "bg-[#1e1e1e]",
    },
    option10: {
      container: "bg-white rounded-lg shadow-sm border border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      table: "bg-white",
    },
    option11: {
      container: "bg-white rounded-lg border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-gray-900 hover:bg-gray-800 text-white",
      table: "bg-white",
    },
    option12: {
      container: "bg-[#1a1a1a] border border-[#2a2a2a]",
      header: "bg-[#2a2a2a] text-white",
      button: "bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white",
      table: "bg-[#0d0d0d]",
    },
  };

  const style = styles[variant];

  const tableData = [
    { ref: "... 269233", remessa: "37953", etiqueta: "TOX437306", pcl: "22.409.542/0001-55, GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA", tipo: "Cabelo/Pêlos", data: "14/10/2025 12:12" },
    { ref: "... 262113", remessa: "37881", etiqueta: "TOX430386", pcl: "22.409.542/0001-55, GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA", tipo: "Cabelo/Pêlos", data: "06/10/2025 12:50" },
    { ref: "... 241841", remessa: "37663", etiqueta: "TOX424055", pcl: "22.409.542/0001-55, GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA", tipo: "Cabelo/Pêlos", data: "09/09/2025 20:45" },
    { ref: "... 241840", remessa: "37663", etiqueta: "TOX424054", pcl: "22.409.542/0001-55, GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA", tipo: "Cabelo/Pêlos", data: "09/09/2025 20:45" },
    { ref: "... 241839", remessa: "37663", etiqueta: "TOX424053", pcl: "22.409.542/0001-55, GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA", tipo: "Cabelo/Pêlos", data: "09/09/2025 20:45" },
    { ref: "... 227118", remessa: "37505", etiqueta: "TOX177886", pcl: "22.409.542/0001-55, GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA", tipo: "Cabelo/Pêlos", data: "28/08/2025 13:50" },
  ];

  const isDark = variant === "option4" || variant === "option9" || variant === "option12";
  const textColor = isDark ? "text-gray-100" : "text-slate-900";
  const textColorSecondary = isDark ? "text-gray-300" : "text-slate-600";
  const borderColor = isDark ? (variant === "option9" ? "border-[#3e3e42]" : variant === "option12" ? "border-[#2a2a2a]" : "border-gray-700") : "border-slate-200";

  return (
    <div class={style.container}>
      {/* Header */}
      <div class={`${style.header} px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl`}>
        <h1 class="text-xl sm:text-2xl font-bold">Etiquetas</h1>
        <div class="text-xs sm:text-sm mt-1 opacity-90">
          Início &gt; Estoque de kits [Pesquisa]
        </div>
      </div>

      {/* Actions Bar */}
      <div class={`px-4 sm:px-6 py-3 sm:py-4 border-b ${borderColor} flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3`}>
        <div class="font-semibold text-xs sm:text-sm">Ações do Formulário:</div>
        <button class={`${style.button} px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all`}>
          <BroomIcon />
          Limpar Filtros
        </button>
      </div>

      {/* Table - Mobile responsive */}
      <div class="overflow-x-auto -mx-4 sm:mx-0">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table class={`min-w-full divide-y divide-gray-200 ${style.table}`}>
          <thead class="hidden sm:table-header-group">
            <tr class={`${isDark ? (variant === "option9" ? "bg-[#252526]" : variant === "option12" ? "bg-[#1a1a1a]" : "bg-gray-700") : "bg-slate-50"} ${textColor}`}>
              <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                <div class="flex items-center gap-1 sm:gap-2">
                  Referência
                  <FilterIcon />
                </div>
              </th>
              <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">
                <div class="flex items-center gap-1 sm:gap-2">
                  Número da Remessa
                  <FilterIcon />
                </div>
              </th>
              <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                <div class="flex items-center gap-1 sm:gap-2">
                  Etiqueta
                  <FilterIcon />
                </div>
              </th>
              <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden lg:table-cell">
                <div class="flex items-center gap-1 sm:gap-2">
                  PCL(Posto de Coleta Laboratorial)
                  <FilterIcon />
                </div>
              </th>
              <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden sm:table-cell">
                <div class="flex items-center gap-1 sm:gap-2">
                  Tipo do Kit
                  <FilterIcon />
                </div>
              </th>
              <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">
                <div class="flex items-center gap-1 sm:gap-2">
                  Data de Cadastro
                  <FilterIcon />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => {
              const rowBg = idx % 2 === 0 
                ? (isDark ? (variant === "option9" ? "bg-[#252526]" : variant === "option12" ? "bg-[#0d0d0d]" : "bg-gray-800/50") : "bg-white") 
                : (isDark ? (variant === "option9" ? "bg-[#1e1e1e]" : variant === "option12" ? "bg-[#1a1a1a]" : "bg-gray-800") : "bg-slate-50");
              return (
                <>
                  {/* Mobile Card View */}
                  <div class={`sm:hidden ${rowBg} ${textColorSecondary} border-b ${borderColor} p-4 space-y-2`}>
                    <div class="flex items-center justify-between">
                      <span class="font-semibold">{row.etiqueta}</span>
                      <span class="text-xs">{row.ref}</span>
                    </div>
                    <div class="text-xs space-y-1">
                      <div><span class="font-medium">Remessa:</span> {row.remessa}</div>
                      <div><span class="font-medium">Tipo:</span> {row.tipo}</div>
                      <div><span class="font-medium">Data:</span> {row.data}</div>
                    </div>
                    <div class="text-xs truncate">{row.pcl}</div>
                  </div>
                  {/* Desktop Table Row */}
                  <tr class={`hidden sm:table-row ${rowBg} ${textColorSecondary} border-b ${borderColor}`}>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{row.ref}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden md:table-cell">{row.remessa}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium">{row.etiqueta}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden lg:table-cell">{row.pcl}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden sm:table-cell">{row.tipo}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden md:table-cell">{row.data}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div class={`px-4 sm:px-6 py-3 sm:py-4 border-t ${borderColor} flex flex-col sm:flex-row items-center justify-between gap-3`}>
        <div class={`${textColorSecondary} text-xs sm:text-sm text-center sm:text-left`}>Mostrando 50 de 65</div>
        <button class={`${style.button} w-full sm:w-auto px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all`}>
          <PlusIcon />
          Carregar
        </button>
      </div>
    </div>
  );
}

