import { useQuery } from '@tanstack/react-query';

export function MediaDevices() {
  const { data, status } = useQuery({
    queryKey: ['mediaDevices'],
    queryFn: () => {
      return navigator.mediaDevices.enumerateDevices();
    },
  });

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>error...</div>;
  }

  return (
    <ul>
      {data.map((device) => (
        <li key={device.deviceId}>{device.label}</li>
      ))}
    </ul>
  );
}
