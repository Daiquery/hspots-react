import React from 'react';
import $ from 'jquery';

export default class BeachesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { person: [] };
    }

  

    componentDidMount() {
        this.UserList();
    }

    UserList() {
        // $.ajaxSetup({
        //     headers : {
        //       'Authorization' : 'Bearer W5Hpq-Fm2Z7bAzWA5e9g3S4hRQDMuD5HcP6v58qH4uaeLIzNC620irU1kc84DvgHyF45MbNEH4r9LbkWQPwi3KAolL9z_FG9UYNLNW7UbePUhaBDi9GkOWju90BXYnYx',
        //       'X-PartnerKey' : '3252352-sdgds-sdgd-dsgs-sgs332fs3f'
        //     }
        //   });
        $.getJSON('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=beaches&location=honolulu')
      .then(({ results }) => this.setState({ person: results }));
      
    }

    render() {
        const persons = this.state.person.map((item, i) => (
            <div>
                <h1>{item.name.first}</h1>
                <span>{item.cell}, {item.email}</span>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{persons}</div>
            </div>
        );
    }
}