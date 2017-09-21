import React from 'react';

import { FormGroup, FormControl, Button, InputGroup, Glyphicon  } from 'react-bootstrap'

export class SearchBar extends React.Component {
    state = {  }

    render() {
        return (                
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" placeholder="Search" />
                    <InputGroup.Button>
                        <Button><Glyphicon glyph="search" /></Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default SearchBar;