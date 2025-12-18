import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - UI Options</title>
      </Head>
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-3 sm:p-4">
        <div class="max-w-6xl w-full">
          <div class="text-center mb-6 sm:mb-8 md:mb-12">
            <img 
              src="https://cdn.awsli.com.br/400x300/2702/2702264/logo/gralab-rbuogsxve7.png" 
              alt="Gralab Logo" 
              class="h-12 sm:h-16 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-6"
            />
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2 sm:mb-3 md:mb-4">
              Gralab Diagnósticos
            </h1>
            <p class="text-base sm:text-lg md:text-xl text-blue-700">
              Escolha uma opção de UI para visualizar
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            <h2 class="col-span-full text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Original Options</h2>
            <a 
              href="/option1" 
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-2xl sm:text-3xl mb-2 sm:mb-3 md:mb-4">✨</div>
              <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">Opção 1</h2>
              <p class="text-sm sm:text-base text-blue-700">Design Minimalista com Glassmorphism</p>
            </a>
            
            <a 
              href="/option2" 
              class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-3xl mb-4">🎴</div>
              <h2 class="text-2xl font-bold text-blue-900 mb-2">Opção 2</h2>
              <p class="text-blue-700">Design com Cards e Sombras</p>
            </a>
            
            <a 
              href="/option3" 
              class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-3xl mb-4">🌈</div>
              <h2 class="text-2xl font-bold text-blue-900 mb-2">Opção 3</h2>
              <p class="text-blue-700">Design com Gradientes Modernos</p>
            </a>
            
            <a 
              href="/option5" 
              class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-3xl mb-4">💼</div>
              <h2 class="text-2xl font-bold text-blue-900 mb-2">Opção 5</h2>
              <p class="text-blue-700">Modern SaaS Design (Linear/Vercel style)</p>
            </a>
            
            <a 
              href="/option6" 
              class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-3xl mb-4">🎨</div>
              <h2 class="text-2xl font-bold text-blue-900 mb-2">Opção 6</h2>
              <p class="text-blue-700">Material Design 3 Inspired</p>
            </a>
            
            <a 
              href="/option7" 
              class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-3xl mb-4">📐</div>
              <h2 class="text-2xl font-bold text-blue-900 mb-2">Opção 7</h2>
              <p class="text-blue-700">Minimalist com Espaçamento Aprimorado</p>
            </a>
            
            <a 
              href="/option8" 
              class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-3xl mb-4">📊</div>
              <h2 class="text-2xl font-bold text-blue-900 mb-2">Opção 8</h2>
              <p class="text-blue-700">Modern Dashboard Design</p>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <h2 class="col-span-full text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Unique UI/UX Patterns</h2>
            
            <a 
              href="/option9" 
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-2xl sm:text-3xl mb-2 sm:mb-3 md:mb-4">💻</div>
              <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">Opção 9</h2>
              <p class="text-sm sm:text-base text-blue-700">VS Code-style IDE Layout</p>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Dark theme, collapsible sidebar</p>
            </a>
            
            <a 
              href="/option10" 
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-2xl sm:text-3xl mb-2 sm:mb-3 md:mb-4">🌐</div>
              <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">Opção 10</h2>
              <p class="text-sm sm:text-base text-blue-700">Browser Tabs Navigation</p>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Tab-based interface like Chrome</p>
            </a>
            
            <a 
              href="/option11" 
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-2xl sm:text-3xl mb-2 sm:mb-3 md:mb-4">📝</div>
              <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">Opção 11</h2>
              <p class="text-sm sm:text-base text-blue-700">Notion-style Card Grid</p>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Minimal, card-based layout</p>
            </a>
            
            <a 
              href="/option12" 
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <div class="text-2xl sm:text-3xl mb-2 sm:mb-3 md:mb-4">⚡</div>
              <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">Opção 12</h2>
              <p class="text-sm sm:text-base text-blue-700">Linear-style Dark Mode</p>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Command palette, split layout</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

