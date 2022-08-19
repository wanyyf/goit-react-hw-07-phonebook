import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/action/FilterChange';
const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};

export default Filter;
