import Mensaje from './Mensaje';

const Counter = ({ initial, message }) => {
  return (
    <>
      <Mensaje color="blue" message={ message } />
      <p>{ initial }</p>
    </>
  )
};

export default Counter;
