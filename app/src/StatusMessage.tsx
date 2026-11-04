
import type { StatusMessageProps } from './types';

function StatusMessage({ message, status }: StatusMessageProps) {
  return (
    <p className={status}>
      {message}
    </p>
  );
}

export default StatusMessage;
