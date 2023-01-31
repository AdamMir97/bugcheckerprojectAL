import React, { Component } from 'react';

alert("Hello World");

//https://www.youtube.com/watch?v=hzLDsxPGctY
//do this outside of visual studio, vs just provides the API

class Frontend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://localhost:44343/api/bugs')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return alert("Loading...");
        }
        else {
            return (
                //<div className="Frontend">
                //    Data has been loaded

                //</div>;
                alert("Data is loaded")
            )
        }

        
    }

}

export default Frontend