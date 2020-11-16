import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { firestore } from '../../firebase/firebase.utils';

const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   console.log('subscribing');
  //   const unsubscribeFromCollections = firestore
  //     .collection('collections')
  //     .onSnapshot((snapshot) => console.log(snapshot));

  //   return () => {
  //     console.log('unsubscribed');
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
