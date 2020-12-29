import React from 'react';

import ShopData from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

interface Props {}

interface State {
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

class ShopPage extends React.Component<Props, State> {
  constructor(props: Props) {
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
          collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} { ...otherProps } />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
