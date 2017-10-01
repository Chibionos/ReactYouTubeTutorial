import React from 'react';

import { FormGroup, FormControl, Button, InputGroup, Glyphicon  } from 'react-bootstrap'

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        // only this place can initialize the state
        this.state = { searchText: "" };
    }

    onInputChange(searchText) {
        this.setState({ searchText: searchText });

        // we can access a call back on a property easily by directly call it.
        this.props.onSearchTextChange(searchText);
    }

    render() {
        // we can only manipulate the state by using this.setState
        return (                
            <FormGroup>
                <InputGroup>
                    
                    <FormControl
                        type="text"
                        value={this.state.searchText}
                        onChange={e => this.onInputChange(e.target.value)}
                        placeholder="Search" />

                    <InputGroup.Button>
                        <Button><Glyphicon glyph="search" /></Button>
                    </InputGroup.Button>

                </InputGroup>
            </FormGroup>
        );
    }
}

export default SearchBar;