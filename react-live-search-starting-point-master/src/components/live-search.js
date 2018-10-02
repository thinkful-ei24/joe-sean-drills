import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value});
  }
  
  render() {
    const searchTerm = this.state.searchTerm;

    let filteredCharacters;
    if(searchTerm) {
      filteredCharacters = this.props.characters.filter(character => {
        return character.name.match(new RegExp(searchTerm, 'i'));
      });
    } else {
      filteredCharacters = this.props.characters;
    }

    return (
      <div className="live-search">
          <SearchForm handleSearch={this.handleSearch}/>
          <CharacterCount count={this.props.characters.length} />
          <CharacterList characters={filteredCharacters} />
      </div>
    );
  };
}
