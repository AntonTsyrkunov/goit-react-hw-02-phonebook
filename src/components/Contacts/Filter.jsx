import css from '../styles/Field-form.module.css'

const Filter = ({filter, onType}) => {
    return (
        <>
        <input
             type="text"
             name="filter"
             value={filter}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
             onChange={onType}
             className={css.input}
             />
        </> 
      )
}
     

export default Filter;