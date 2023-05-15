import { defineStore } from 'pinia'

export const useGridStore = defineStore('grid', {
  state: () => {
    return {
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      selected: [0, 0]
    }
  },
  actions: {
    update(data: number[], val: number): void {
      const currentVal = this.grid[data[0]][data[1]]

      if (data[0] < 0 || data[0] > this.grid.length) return
      if (data[1] < 0 || data[1] > this.grid[0].length) return
      if (val < 0 || val > 9) return

      this.grid[data[0]][data[1]] = val === currentVal ? 0 : val
    }
  }
})
