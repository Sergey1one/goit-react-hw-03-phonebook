import { Component } from "react";
import { GlobalStyle } from "./Global Styles";


import Section from "./Section";
import Contacts from "./Contacts";

import { Box } from "./Box";
import Filter from "./Filter";
import ContactForm from './ContactForm'
export class App extends Component  {
  state = {
    contacts: [
     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:''
  
  }
  
 
  
  formSubmitHandler = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };
  changeFilter=(e)=>{this.setState({filter:e.currentTarget.value})}
  
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id!==idContact)
    }))
  }
 
  render() {

    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      
      <Box width='400px' pl='16px'>
        <Section title={'Phonebook'}>
        
          <ContactForm onSubmit={this.formSubmitHandler} contacts={ contacts} />
        </Section>
        <Section title="Contacts">

          <Filter value={filter} onChange={this.changeFilter} />
          
          <Contacts contacts={visibleContacts} onDeleteContact={ this.deleteContact} />
          
        </Section>
        <GlobalStyle/>
      </Box>
     )
 }
};

