import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactOperasions';
import { useSelector } from 'react-redux';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const state = { name, phone };
  const dispatch = useDispatch();
  const handlerInput = evt => {
    const targetName = evt.target.name;
    const targetValue = evt.target.value;
    switch (targetName) {
      case 'name':
        setName(targetValue);
        break;
      case 'phone':
        setphone(targetValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    contacts
      .map(el => {
        return el.name.toLowerCase();
      })
      .includes(name.toLowerCase())
      ? alert(`${name} is already there`)
      : dispatch(addContact(state));
    reset();
  };
  const reset = () => {
    setName('');
    setphone('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        value={name}
        onChange={handlerInput}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="phone"
        onChange={handlerInput}
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className="button-1" type="submit">
        Add contact
      </button>
    </form>
  );
}
