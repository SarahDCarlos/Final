import React from 'react';
import { Figure, Button } from 'react-bootstrap';

const names = [
    {
      name: 'Josiah',
      image: 'https://i.pinimg.com/474x/a1/9d/fd/a19dfd0cd5b84390c983b372c91b7f22.jpg'
    },
    {
    
        name: 'Hailey',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i99dx1n3nGQH1Wuui-1E0-t5pVzzH-922E4uqIAtkcSoi-3_XHfjushsQ9oAQ15yihU&usqp=CAU'
    },
    {
        name: 'Amaris',
        image: 'https://i.pinimg.com/236x/f8/3e/26/f83e26d56b2700bcd71a504cc80dc9b2.jpg'
    },
    {
        name: 'Isaac',
        image: 'https://i.pinimg.com/736x/f6/1c/3e/f61c3e9e4d284acfae76c6736fbb3d17.jpg'
    },
    {
        name: 'Santos',
        image: 'https://i.pinimg.com/236x/d4/76/45/d476452aa36c2c5195a9d0369851af4d.jpg'
    },
    {
        name: 'Elijah',
        image: 'https://i.pinimg.com/originals/24/3f/e4/243fe4fa4293f1cb878d9dce142785a0.jpg'
    },
    {
        name: 'Aubrey',
        image: 'https://i.pinimg.com/236x/76/fa/b0/76fab09d146a27a188d21c4cde477b4d.jpg'
    }
  ];


class Fig extends React.Component {

    render() {
        
        return (
            <div>
                  <ul>
      {names.map((friend,index) => (
        <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={friend.image}
  />
  <Figure.Caption>
  {friend.name } 
  </Figure.Caption>
  <Button variant="primary">Message</Button>{' '}
</Figure>
      ))}
    </ul>
            </div>
        );
    }
}

export default Fig;