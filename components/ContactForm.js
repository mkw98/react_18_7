var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className = { 'contactForm' } >
        <input className = { 'contactLabel' } 
          type = { 'text' } 
          placeholder = { 'Imię' } 
          value = { this.props.contact.firstName } >
        </input>
        <input className = { 'contactLabel' }
          type = { 'text' } 
          placeholder = { 'Nazwisko' }
          value = { this.props.contact.lastName } >
        </input>
        <input className = { 'contactLabel' } 
          type = { 'email' } 
          placeholder = { 'email' } 
          value = { this.props.contact.email } >  
        </input>
         <button className = { 'button' } type = { 'submit' } >Dodaj kontakt</button>
        </form>
      
    )
  },
});


    
