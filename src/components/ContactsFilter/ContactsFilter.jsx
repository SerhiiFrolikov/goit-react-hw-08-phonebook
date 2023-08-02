import { useDispatch, useSelector } from 'react-redux';
import { filter, getFilteredNames } from 'redux/filter/filterSlice';
import { FindInput, FindLabel, Form } from './ContactsFilter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const queryFilter = useSelector(getFilteredNames);
  return (
    <Form>
      <FindLabel>
        Find contacts by name
        <FindInput
          type="text"
          name="searchName"
          value={queryFilter ?? ''}
          onChange={e => dispatch(filter(e.target.value))}
        />
      </FindLabel>
    </Form>
  );
};
