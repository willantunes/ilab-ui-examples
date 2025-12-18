# Gralab Diagnósticos - Modern UI Prototypes

This project contains 4 modern UI design options for the Gralab Diagnósticos LIS system, built with Deno Fresh.

## Features

- **4 Distinct UI Designs**: Each with unique styling approach while maintaining the same functionality
- **Modern Framework**: Built with Deno Fresh and Preact
- **Responsive Design**: Works on all screen sizes
- **Brand Consistency**: Maintains Gralab branding and color scheme
- **Deploy Ready**: Configured for Deno Deploy

## Getting Started

```bash
# Start the development server
deno task start

# Build for production
deno task build

# Preview production build
deno task preview
```

## UI Options

Navigate to:
- `/option1` - **Minimalist Glassmorphism Design**: Clean, modern interface with glassmorphism effects and backdrop blur
- `/option2` - **Card-based with Shadows**: Traditional card-based design with depth and shadows
- `/option3` - **Gradient-based Modern**: Vibrant gradients and modern styling
- `/option4` - **Dark Mode with Neon Accents**: Dark theme with cyan/neon accents for a futuristic look

Each option includes:
- Home page (Fluxo Geral)
- Estoque de kits (Etiquetas page)
- Cadastro de Exames
- Histórico da Amostra
- Cadastro de Protocolo

## Pages Available

For each option (1-4):
- `/option{N}/` - Home/Fluxo Geral
- `/option{N}/estoque` - Estoque de kits (Etiquetas)
- `/option{N}/cadastro` - Cadastro de Exames
- `/option{N}/historico` - Histórico da Amostra
- `/option{N}/protocolo` - Cadastro de Protocolo

## Deployment to Deno Deploy

1. Push your code to GitHub/GitLab
2. Connect your repository to [Deno Deploy](https://deno.com/deploy)
3. Set the entry point to `main.ts`
4. Deploy!

The project is fully configured for Deno Deploy and will work out of the box.

## Technology Stack

- **Framework**: Deno Fresh
- **UI Library**: Preact
- **Styling**: Twind (Tailwind CSS)
- **Icons**: Custom SVG components
- **Runtime**: Deno

## Branding

- Logo: Integrated from AWS CDN
- Colors: Blue theme maintained across all options
- Typography: Inter font family

