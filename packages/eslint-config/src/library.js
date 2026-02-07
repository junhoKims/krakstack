import { defineConfig, globalIgnores } from 'eslint/config';
import { config as baseConfig } from './base.js';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export const config = defineConfig([globalIgnores(['dist/**/*', 'build/**/*']), ...baseConfig]);
