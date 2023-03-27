import css from "../styles/Contactlist.module.css";

const Contactlist = ({contacts, onDelete}) => {
  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contact_list_item}>
            <p>
              {name}: {number}              
            </p>
            <button type='button'onClick={onDelete} name={id} className={css.remove_button}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contactlist;
