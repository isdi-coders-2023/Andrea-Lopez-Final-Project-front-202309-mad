/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    'main.tsx',
    'src / main.tsx',
    'src / vite - env.d.ts',
    'src / services / local.storage.ts',
    'src / config.ts',
    'src / store / store.ts',
    'src / components / app / app.tsx',
    'src / services / images.ts',
    'src/ slice/ film /films.thunk.ts',
    'src/ services / api.repo.films.ts',
    'src/ pages/ home.page.tsx',
    'src / pages / edit.film.tsx',
    'src/components/list/list.tsx',
    'src/components/list/list.test.tsx',
    'src/pages/home.page.test.tsx',
    'src/components/create/add.button.test.tsx',
    'src/services/api.repo.films.test.tsx',
    'src/services/api.repo.users.test.ts',
    'src/components/card/card.test.tsx',
    'src/components/card/card.tsx',
  ],
};
