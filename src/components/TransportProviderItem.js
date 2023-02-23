
import Card from '../ui/Card';
import classes from './TransportProviderItem.module.css';
import { Link } from 'react-router-dom';
function TransportProviderItem(props) {

  return (
    <li className={classes.item}>
      <Card>
       
        <div className={classes.content}>
          <div>Owner Name   : {props.owner_name}</div>
          <div>Phone No     : {props.phone_no}</div>
          <div>Service Type :{props.service_type}</div>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* <button onClick={showDetailsHandler}>Show Details</button> */}
          <Link to={props.id.toString()}>Show Details</Link>
        </div>
      </Card>
    </li>
  );
}

export default TransportProviderItem;
