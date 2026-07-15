export function chooseNextTrack(
  queue: string[],
  activeId: string,
  options: { shuffle: boolean; repeatQueue: boolean; random?: () => number },
) {
  if (queue.length === 0) return undefined;
  const index = queue.indexOf(activeId);

  if (options.shuffle && queue.length > 1) {
    const candidates = queue.filter((id) => id !== activeId);
    const random = options.random ?? Math.random;
    return candidates[Math.floor(random() * candidates.length)];
  }

  if (index >= 0 && index + 1 < queue.length) return queue[index + 1];
  if (options.repeatQueue) return queue[0];
  return undefined;
}
