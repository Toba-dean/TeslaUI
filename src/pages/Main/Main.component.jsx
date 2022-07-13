import { Container } from './Main.styles';

import { connect } from 'react-redux';

// Components
import Sections from '../../components/Sections/Sections.component'


const Main = ({ carCollection }) => {

  return (
    <Container>
      {
        // get all the cars from the redux state.
        carCollection.map(({ id, ...otherProps }) => (
          <Sections key={id} {...otherProps}
            leftButton='custom order'
            rightButton='existing inventory'
           />
        ))
      }
      <Sections 
        title='Low Cost Solar Panel.' 
        description='Money-back Gauranteed.'
        leftButton='order now'
        rightButton='learn more'
        image='solar-panel.jpg'
      />
      <Sections 
        title='Solar for New Roof' 
        description='Solar Roofs Costs Less Than a New Roof Plus Solar Panels'
        leftButton='custom order'
        rightButton='existing inventory'
        image='solar-roof.jpg'
      />
      <Sections 
        title='Accessories' 
        leftButton='shop now'
        image='accessories.jpg'
      />
    </Container> 
  )
}

const mapStateToPrps = ({ cars: { carlist } }) => ({
  carCollection: carlist
})

export default connect(mapStateToPrps)(Main)
