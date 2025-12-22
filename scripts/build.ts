#!/usr/bin/env tsx

import { build } from 'esbuild'
import { execSync } from 'child_process'
import { glob } from 'glob'
import path from 'path'
import fs from 'fs'

async function buildLibrary() {
  console.log('🚀 Building library...')

  // Copy stoop dist to a non-symlinked location to avoid circular resolution
  const stoopDistSource = '../../dolmios/stoop/dist'
  const stoopDistLocal = 'node_modules/stoop/dist-local'
  if (fs.existsSync(stoopDistSource)) {
    if (fs.existsSync(stoopDistLocal)) {
      fs.rmSync(stoopDistLocal, { recursive: true, force: true })
    }
    fs.cpSync(stoopDistSource, stoopDistLocal, { recursive: true })
    console.log('✅ Copied stoop dist for TypeScript resolution')
  }

  // Get all TypeScript entry points
  const entryPoints = await glob('src/**/*.{ts,tsx}', {
    ignore: ['src/**/*.test.{ts,tsx}', 'src/**/*.stories.{ts,tsx}']
  })

  // Build JavaScript with esbuild
  console.log('📦 Building JavaScript files...')
  await build({
    entryPoints,
    outdir: 'dist',
    format: 'esm',
    target: 'es2022',
    platform: 'browser',
    bundle: false, // Keep individual files for treeshaking
    minify: true,
    sourcemap: false,
    jsx: 'automatic',
    tsconfig: 'tsconfig.build.json',
    outExtension: {
      '.js': '.js'
    },
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx'
    }
  })

  // Generate TypeScript declaration files
  console.log('📝 Generating TypeScript declarations...')
  execSync('tsc -p tsconfig.build.json', {
    stdio: 'inherit'
  })

  console.log('✅ Build completed successfully!')
}

// Run the build
buildLibrary().catch((error) => {
  console.error('❌ Build failed:', error)
  process.exit(1)
})
