import TransportProviderItem from './TransportProviderItem';
import classes from './TransportProviderList.module.css';

function TransportProviderList(props) {
  return (
    <ul className={classes.list}>
      {props.transports.map((trans) => (
        <TransportProviderItem
          key={trans.id}
          id={trans.id}
          owner_name={trans.owner_name}
          phone_no={trans.phone_no} 
          service_type={trans.service_type}
        />
      ))}
    </ul>
  );
}

export default TransportProviderList;