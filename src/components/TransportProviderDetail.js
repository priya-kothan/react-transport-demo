import classes from './TransportProviderDetail.module.css';

function TransportProviderDetail(props) {
  return (
    <article className={classes.item}>
      <h1>Owner Name</h1>
      <div>{props.data[0].owner_name}</div>
      <h1> Vehicle No </h1>
      <div>{props.data[0].vehicle_no}</div>
      <h1> Driver Name:</h1>
          <div>{props.data[0].driver_name}</div>
          <h1> Phone </h1>
          <div>{props.data[0].phone_no}</div>
          <h1> Licence No</h1>
          <div>{props.data[0].licence_no}</div>
          <h1> Service Type </h1>
          <div>{props.data[0].service_type}</div>
          <h1> Description </h1>
          <div>{props.data[0].description}</div>
          <h1> Address </h1>
          <address>{props.data[0].address}</address>
    </article>
  );

}


export default TransportProviderDetail;


