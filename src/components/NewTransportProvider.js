import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewTransportProvider.module.css';

function NewTransportProvider(props) {
  const ownerInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const driverInputRef = useRef();
  const licenceInputRef = useRef();
  const serviceInputRef = useRef();
  const vehicleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOwner = ownerInputRef.current.value;
    const enteredvehicle= vehicleInputRef.current.value;
    const entereddriver= driverInputRef.current.value;
    const enteredphone= phoneInputRef.current.value;
    const enteredlicence= licenceInputRef.current.value;
    const enteredservice= serviceInputRef.current.value;
    
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const TransportData = {
      owner_name: enteredOwner,
      vehicle_no: enteredvehicle,
      driver_name: entereddriver,
      phone_no: enteredphone,
      licence_no: enteredlicence,
      service_type: enteredservice,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddProvider(TransportData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='Owner'>Owner Name</label>
          <input type='text' required id='Owner' ref={ownerInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='vehicle'>Vehicle no</label>
          <input type='text' required id='vehicle' ref={vehicleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='driver'>Driver Name</label>
          <input type='text' required id='driver' ref={driverInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Phone'>Phone No</label>
          <input type='text' required id='Phone' ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='licence'>Licence No</label>
          <input type='text' required id='licence' ref={licenceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='service'>Service Type</label>
          <input type='text' required id='service' ref={serviceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>vehicle Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Transport Provider</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTransportProvider;
