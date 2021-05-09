import React from 'react';
import { shallow } from 'enzyme';
import { Detail } from '../item/detail';
import { createShallow } from '@material-ui/core/test-utils';
import { Avatar, Chip, Typography } from '@material-ui/core';

const item =  {
  "id": 1,
  "name": "Fizkin Voidbuster",
  "thumbnail": "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
  "age": 288,
  "weight": 35.279167,
  "height": 110.43628,
  "hair_color": "Green",
  "professions": [
    "Brewer",
    "Medic",
    "Prospector",
    "Gemcutter",
    "Mason",
    "Tailor"
  ],
  "friends": [
    "Fizwood Voidtossle"
  ]
}

describe('detail component', () => {
  let wrapper = shallow(<Detail item={item} />);
    it('should find title', () => {
      let title = wrapper.find(Typography).first()
      expect(title.text() === 'Fizkin Voidbuster').toBeTruthy();

    });

    it('should find 6 chips', () => {
      let chips = wrapper.find(Chip)
      expect(chips).toHaveLength(6);

    });


    it('should find 1 avatar', () => {
      let avatars = wrapper.find(Avatar)
      expect(avatars).toHaveLength(1);

    });
  
  });