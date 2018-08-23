import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DeckListStateless from './DeckList'
// import { deckListOperations } from '../../duck/deckList'

class DeckList extends Component {
  state = {
    deckList: [],
  }

  static getDerivedStateFromProps(nextProps) {
    const { deckList, cardList } = nextProps

    const newDeck = deckList.reduce((prev, item) => ([...prev, {
      ...item,
      key: item.id,
      cardsCount: (cardList[item.id] || []).length,
    }]), [])

    return {
      deckList: newDeck,
    }
  }

  render() {
    // const { navigation, list, cardList } = this.props
    const { deckList } = this.state

    console.log(deckList[0].key, 'mydeck')

    return (
      <DeckListStateless
        {...this.props}
        deckList={deckList}
      />
    )
  }
}

const mapStateToProps = ({ deckList, cardList }) => ({
  deckList: deckList.list,
  cardList: cardList.questions,
})

DeckList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  deckList: PropTypes.arrayOf(PropTypes.any).isRequired,
  cardList: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, null)(DeckList)
