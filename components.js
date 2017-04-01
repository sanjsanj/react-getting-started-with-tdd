import React, { Component } from 'react';

export class BeerListContainer extends Component {
    render() {
        return (
            <div>
                <InputArea/>
                <BeerList/>
            </div>
        )
    }
}

export class InputArea extends Component {
    render() {
        return <Input/>
    }
}

export class BeerList extends Component {
    render() {
        return <ul/>
    }
}
