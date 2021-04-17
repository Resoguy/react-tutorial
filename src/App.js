import React from 'react';
import Toolbar from './components/Toolbar';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Counter from './components/Counter';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    title: 'App Title',
    links: [
      {url: '#link1', title: 'Link 1'},
      {url: '#link2', title: 'Link 2'},
      {url: '#link3', title: 'Link 3'}
    ],
    linkTitle: '',
    linkUrl: ''
  }

  changeTitle = () => {
    this.setState({title: 'Changed Title'});
  }

  addLink = () => {
    const newLink = {
      title: this.state.linkTitle,
      url: this.state.linkUrl
    }

    this.setState({
      links: [...this.state.links, newLink],
      linkTitle: '',
      linkUrl: ''
    });
  }

  removeLink = () => {
    const removedLinks = this.state.links.filter((link, index) => {
      return index !== this.state.links.length - 1;
    });

    this.setState({links: removedLinks});
  }

  setTitle = (event) => {
    this.setState({title: event.target.value});
  }

  setLinkTitle = (event) => {
    this.setState({linkTitle: event.target.value});
  }

  setLinkUrl = (event) => {
    this.setState({linkUrl: event.target.value});
  }

  render() {
    const {links, title, linkTitle, linkUrl} = this.state;

    return (
      <div>
        <Toolbar links={links} />
  
        <div className="container">
          <h1>{title}</h1>
          <Input
              onChangeHandler={this.setTitle}
              value={title} />
  
          <Card>
            <h3>Link Widget</h3>

            <Input 
              value={linkTitle}
              placeholder="Enter link title..."
              name="link-title"
              onChangeHandler={this.setLinkTitle} />

            <Input
              value={linkUrl}
              placeholder="Enter link url..."
              name="link-url"
              onChangeHandler={this.setLinkUrl} />

            <Button onClickHandler={this.addLink}>
              Add Link
            </Button>


          </Card>

          <Counter />
        </div>
      </div>
    );
  }
}


export default App;
