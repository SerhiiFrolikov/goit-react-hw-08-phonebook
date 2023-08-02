import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/ContactsFilter/ContactsFilter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactsForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactsList />
    </>
  );
}
