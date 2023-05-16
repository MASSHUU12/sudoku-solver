export function measureExecutionTime(fn: () => unknown): number {
  const start = performance.now();

  fn();

  const end = performance.now();

  return end - start;
}
