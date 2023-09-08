import { nanoid } from 'nanoid';
import React,{ Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { Form2, SubmitBtn } from './ContactForm.styled';


class ContactForm extends Component{


    schema = yup.object().shape({
    name: yup.string().required(),
    number:yup.number().required()
})
    nameInputId = nanoid();

    onFormSubmit = ({ name, number }, { resetForm }) => {
         
         const checkNewContact = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
         if (checkNewContact) {
             alert(`${name} is already in Contacts`);
             return
         }
         const contact = { id: nanoid(), name, number }
         this.props.onSubmit(contact)
         resetForm();
   

}
    render() {
    return (
        <Formik initialValues={{name:'',number:''}}
            onSubmit={this.onFormSubmit}
        validationSchema={this.schema}>
             <Form2 component={Form}>
            <label htmlFor={this.nameInputId}>
                    Name </label>
                <ErrorMessage name="name" component='div'/>
            <Field
                        type="text"
                        id={this.nameInputId}
                name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                />
                 <label htmlFor={this.nameInputId}>
                    Number </label>
                <ErrorMessage name="number" component='div'/>
                <Field
  type="tel"
                    name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <SubmitBtn type="submit" >Add contact</SubmitBtn>
                </Form2>
                </Formik>
    )
}
}

export default ContactForm


