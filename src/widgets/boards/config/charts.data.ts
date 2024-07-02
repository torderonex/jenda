import type { Chart } from '@/entities/chart/model';
import { ActivityBoardChart, ActivityTaskChart } from '@/features/boards';
import { ref } from 'vue';

export const chartsData = ref<Chart[]>([
  {
    id: '0',
    title: 'Сreated boards',
    description: 'Create, share, work, and then analyze your activity on Dizzo',
    chart: ActivityBoardChart
  },
  {
    id: '1',
    title: 'Your tasks',
    description: 'Solve and complete the tasks you started',
    chart: ActivityTaskChart
  }
]);