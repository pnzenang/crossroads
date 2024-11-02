import ScrollToTop from 'react-scroll-to-top';
import {
  Cards,
  List,
  Calendar1,
  Calendar2,
  Calendar3,
  TypeOfServices,
  WayToBeginShipment,
} from '../components';

const Services = () => {
  return (
    <section>
      <ScrollToTop smooth color='#0891b2' width='40' />

      <TypeOfServices />
      <List />
      <WayToBeginShipment />

      <Cards />
    </section>
  );
};
export default Services;
