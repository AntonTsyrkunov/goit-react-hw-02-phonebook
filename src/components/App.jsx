import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contactlist from './Contacts/Contactlist';
import Filter from './Contacts/Filter';
import css from './styles/Phonebook.module.css'


import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  phonebookSubmitHandler = (name, number) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };  
    if (this.isThisContactExist(name)) {
      alert(`${name} is already exist!`)
    } else {
      this.setState({ contacts: [...contacts, newContact] });    
    }   
  }
  

  isThisContactExist = (data) => {
    return this.state.contacts.find((contact) => (contact.name.toLowerCase() === data.toLowerCase()))
  }

  filterChange = (evt) => {
    this.setState({filter: evt.target.value});
  }

  getFilteredValue = () => {
    const { contacts, filter } = this.state;
    if (!filter) return contacts;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    }
  
  removeContact = (evt) => {
    this.setState({contacts: this.state.contacts.filter((contact) => contact.id !== evt.target.name)})
  }

  render() {
    const getFilteredValue = this.getFilteredValue();
    console.log(getFilteredValue);
    return (
      <div className={css.form_field}>     
      <h1 className={css.heading}>Phonebook</h1>
      <Phonebook onSubmit={this.phonebookSubmitHandler}>
      </Phonebook>
      <h2 сlassName={css.sub_heading}>Contacts</h2>
      <Filter onType={this.filterChange} filter={this.state.filter}></Filter>
      <Contactlist contacts={getFilteredValue} onDelete={this.removeContact}>
      </Contactlist>
      </div>      
    );
  }
}

