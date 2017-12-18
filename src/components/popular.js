var React = require('react');

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this)
    /* OK, this bit of code above seems...wierd. Here's what it is doing.
    The state belongs to the component. We need this state to belong to the
    component so that we can keep track of what state the component is in,
    and make changes to the UI accordingly. When we call updateLanguage from
    the onClickListener in our li, this will refer to that onClickListener (which
    is invalid because setState has to apply to an object, not an function),
    when in reality we want to change the state of this entire React Component,
    not just some tiny piece of UI in the component. So, we use the above code.
    In english, it says: Hey, the updateLanguage method inside of this component
    - take that, and make it (equals) to running itself the exact same way, but
    every time it is going to be bound to running in this context, the context of
    the React Component. That way, when this.setState is called in updateLanguage,
    this referes to the Popular component so we will be changing the state for the
    whole componenet, and we can use that information to change how the UI looks
    by accessing the state variables. (if selectedLanguage = Ruby, highlight Ruby
    in red, etc.) */

  }

  updateLanguage(lang) {
    this.setState(function() {
      return {selectedLanguage: lang}
    });
  }
  render() {
    var languages = ['All', 'JavaScript','Ruby','Java','CSS','Python'];

    return (
      <ul className='languages'>
        {languages.map(function (lang){
          return (
            <li
              style= { lang === this.state.selectedLanguage ? { color:'#d0021b' }: null}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        },this)}
      </ul>
    )
  }
}

export default Popular;
