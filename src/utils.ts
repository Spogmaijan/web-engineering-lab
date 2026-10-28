
export interface Slot {
  day: string;
  time: string;
  booked: boolean;
}

export function delay(ms: number): Promise<void> {
  return new Promise<void>(function (resolve) {
    setTimeout(resolve, ms);
  });
}

export function makeCounter(): () => number {
  let count = 0;

  return function (): number {
    count++;
    return count;
  };
}

export function getRequired<T extends Element>(
  selector: string
): T {
  const element = document.querySelector<T>(selector);

  if (element === null) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element;
}

export function describeSlot(slot: Slot): string {
  const availability = slot.booked ? "Booked" : "Available";
  return `${slot.day} at ${slot.time} - ${availability}`;
}
