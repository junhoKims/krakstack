/**
 * 파일경로(filePath)를 받아 제외경로(exclude)에 포함 여부 리턴
 *
 * @param {string} filePath
 * @param {string[] | undefined} exclude
 */
export const isFileExcluded = (filePath, exclude) => {
  const EXCLUDED_PATTERNS = [
    /\.stories\.[t|j]sx?$/,
    /\.test\.[t|j]sx?$/,
    /\.spec\.[t|j]sx?$/,
    /__storybook__\/?$/,
    /\.md$/,
    ...exclude,
  ];
  return EXCLUDED_PATTERNS.some((pattern) => pattern.test(filePath));
};
