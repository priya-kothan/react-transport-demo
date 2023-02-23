import { useLoaderData } from 'react-router-dom';

import TransportProviderList from '../components/TransportProviderList';
import transports from '../utils/transport-provider';

function TransPortsPage() {
  const transports = useLoaderData();
  return <TransportProviderList transports={transports} />;
}

export default TransPortsPage;

export function loader() {
  return transports
}
