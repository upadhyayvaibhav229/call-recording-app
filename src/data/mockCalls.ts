export type CallRecord = {
  id: string;
  name: string;
  time: string; // ISO string
  durationSec?: number;
  incoming?: boolean;
};

const mockCalls: CallRecord[] = [
  { id: '1', name: 'Alice', time: new Date().toISOString(), durationSec: 120, incoming: true },
  { id: '2', name: 'Bob', time: new Date().toISOString(), durationSec: 35, incoming: false },
];

export default mockCalls;
