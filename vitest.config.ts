import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['{frontend,backend}/tests/**/*.test.ts'],
    maxWorkers: 2,
    coverage: {
      provider: 'v8',
      include: ['frontend/src/**/*.{ts,tsx}', 'backend/src/**/*.ts'],
      reporter: ['text-summary', 'html', 'lcovonly'],
    },
  },
});
