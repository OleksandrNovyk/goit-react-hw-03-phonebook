import PropTypes from 'prop-types';
import { MdPersonRemove } from 'react-icons/md';
import { ListItem, ListItemData } from './ContactItem.styled';
import { Btn } from '../Btn/Btn';

export const ContactItem = ({ id, name, number, onDeleteBtnClick }) => {
  return (
    <ListItem>
      <ListItemData>
        {name}: {number}
      </ListItemData>
      <Btn
        icon={MdPersonRemove}
        type="button"
        status="delete"
        text="Delete contact"
        onClick={() => onDeleteBtnClick(id, name)}
      />
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};
