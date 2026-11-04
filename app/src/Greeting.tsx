
import type { GreetingProps } from './types';

function Greeting({ name }: GreetingProps) {
  return (
    <h2>Hello, {name}!</h2>
  );
}

export default Greeting;
