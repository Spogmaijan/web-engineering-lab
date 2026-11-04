
interface SlotRowProps {
  time: string;
  booked: boolean;
  onToggle: () => void;
}

function SlotRow({ time, booked, onToggle }: SlotRowProps) {
  return (
    <div className={booked ? 'slot booked' : 'slot available'}>
      <span>{time}</span>

      <span>{booked ? 'Booked' : 'Available'}</span>

      <button onClick={onToggle}>
        {booked ? 'Cancel Booking' : 'Book Now'}
      </button>
    </div>
  );
}

export default SlotRow;
