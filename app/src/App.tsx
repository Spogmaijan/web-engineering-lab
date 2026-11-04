
import { useState } from 'react';
import Greeting from './Greeting';
import StatusMessage from './StatusMessage';
import SlotTable from './SlotTable';

interface Slot {
  id: number;
  time: string;
  booked: boolean;
}

function App() {
  const [slots, setSlots] = useState<Slot[]>([
    { id: 1, time: '09:00 AM', booked: false },
    { id: 2, time: '10:00 AM', booked: false },
    { id: 3, time: '11:00 AM', booked: true },
    { id: 4, time: '12:00 PM', booked: false },
  ]);

  const [message, setMessage] = useState('Choose a slot to book.');

  function toggleSlot(id: number) {
    setSlots((previousSlots) =>
      previousSlots.map((slot) =>
        slot.id === id
          ? { ...slot, booked: !slot.booked }
          : slot
      )
    );

    setMessage('Booking status updated successfully!');
  }

  return (
    <main>
      <h1>Slot Booking App</h1>

      <Greeting name="Student" />

      <StatusMessage message={message} status="success" />

      <SlotTable slots={slots} onToggle={toggleSlot} />
    </main>
  );
}

export default App;
