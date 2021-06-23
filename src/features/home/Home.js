import './Home.css';

import React, { Component } from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import List from '../../components/list'
import Input from '../../components/input'
import api from '../../_config/api';
import Button from '../../components/button';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { sectionData: props.sectionData, query: '' }
    this.onChangeQuery = this.onChangeQuery.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  onChangeQuery(value) {
    console.log(value);
    this.setState({ query: value });

  }

  async fetchData() {

    const { query } = this.state;
    const response = await api.get('v1/search?query=' + query)

    this.setState({ sectionData: response?.data.hits })

  }

  async componentDidMount() {
    this.fetchData('');
  }

  render() {

    const { title, footer_desc } = this.props;

    const { sectionData } = this.state;

    const sectionClassSearch = 'SectionSearch';

    const sectionClassData = 'SectionData';

    const inputLabel = 'Barra de pesquisa:';

    return (
      <div className="Home">
        <Header title={title}></Header>
        <Section className={sectionClassSearch}>
          <Input label={inputLabel} callback={this.onChangeQuery} />
          <Button callback={this.fetchData} />
        </Section>
        <Section className={sectionClassData}> <List data={sectionData} /> </Section>
        <Footer description={footer_desc}></Footer>
      </div>
    );

  }
};

export default Home;
