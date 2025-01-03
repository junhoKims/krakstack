import { reactInternalConfig, storybookConfig } from '@krakstack/eslint-config';

/**
 * @type {import("eslint").Linter.Config}
 */
export default [...reactInternalConfig, ...storybookConfig];
