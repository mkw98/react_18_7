var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
      <img className={'contactImage'} src={'http://icons.veryicon.com/png/System/100%20Flat%20Vol.%202/contacts.png'}/>
        <p className={'contactLabel'}>
        Imię: {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
        Nazwisko: {this.props.item.firstName}
        </p>
       <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
        </a>
      </div>
      )
    )
  },
});



    
   
