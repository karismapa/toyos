import React from 'react';

import ShopData from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

interface IProps {}

interface IState {
  collections: {
    id: number,
    title: string,
    routeName: string,
    items: {
      id: number,
      name: string,
      imageUrl: string,
      price: number,
    }[],
  }[]
}

class ShopPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(collection => (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
