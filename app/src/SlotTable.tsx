
import SlotRow from './SlotRow';

interface Slot {
  id: number;
  time: string;
  booked: boolean;
}

interface SlotTableProps {
  slots: Slot[];
  onToggle: (id: number) => void;
}

function SlotTable({ slots, onToggle }: SlotTableProps) {
  return (
    <div>
      <h2>Available Booking Slots</h2>

      {slots.map((slot) => (
        <SlotRow
          key={slot.id}
          time={slot.time}
          booked={slot.booked}
          onToggle={() => onToggle(slot.id)}
        />
      ))}
    </div>
  );
}

export default SlotTable;
