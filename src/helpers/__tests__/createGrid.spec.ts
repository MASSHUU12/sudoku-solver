import { createGrid } from '../createGrid';
import { describe, it, assert } from 'vitest';

describe('createGrid', () => {
  it('created grid with the correct dimensions and default value', () => {
    const rows = 3;
    const columns = 4;
    const grid = createGrid([rows, columns], 0);

    assert(grid.length === rows, `Grid should have ${rows} rows`);
    assert(grid[0].length === columns, `Grid should have ${columns} columns.`);
    assert(
      grid.every((row) => row.every((cell) => cell === 0)),
      'All cells should be initialized with the default value'
    );
  });
});
