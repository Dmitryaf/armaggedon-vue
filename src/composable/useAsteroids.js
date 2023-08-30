import { ref } from 'vue';

import { getAsteroids } from '@/api/api';

export function useAsteroids() {
  const asteroidsList = ref(null);

  async function fetchAsteroids() {
    const asteroidsData = await getAsteroids();
    if (asteroidsData) {
      updateList(asteroidsData);
    }
  }

  function updateList(asteroidsData) {
    asteroidsList.value = asteroidsData;
  }

  return { asteroidsList, fetchAsteroids };
}
