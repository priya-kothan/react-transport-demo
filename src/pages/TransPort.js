import { useLoaderData } from 'react-router-dom';

import TransportProviderDetail from '../components/TransportProviderDetail';
import transports from '../utils/transport-provider';
function TransPortPage() {
  const data = useLoaderData();
  return <TransportProviderDetail data={data} />;
}

export default TransPortPage;

export function loader({ params }) {
  const transport =
  transports.filter(element => element.id == params.id);
  return transport

}
