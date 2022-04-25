import axios from 'axios';
import { screen, waitFor } from '@testing-library/react';

import { renderWithRouter } from 'tests/utils';
import FollowersList from 'components/FollowersList';

describe('<FollowersList />', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        results:[
          {
            "gender":"male",
            "name":{
              "title":"Mr",
              "first":"Anthony",
              "last":"Ennis"
            },
            "location":{
              "street":{
                "number":4465,
                "name":"36th Ave"
              },
              "city":"Hampton",
              "state":"British Columbia",
              "country":"Canada",
              "postcode":"U7A 0Q5",
              "coordinates":{
                "latitude":"-65.7573",
                "longitude":"-88.3348"
              },
              "timezone":{
                "offset":"+2:00",
                "description":"Kaliningrad, South Africa"
              }
            },
            "email":"anthony.ennis@example.com",
            "login":{
              "uuid":"14871616-04e1-4e41-ba76-d877508df5c4",
              "username":"heavykoala855",
              "password":"natalie",
              "salt":"dq3e7qgo",
              "md5":"267a317022c5a9755adfa327c1bd6f44",
              "sha1":"aea3ebf53c75f1abc7234d5c3d1a98fc9cc8c9e7",
              "sha256":"8b40c7a70bf23b0c85be4606a081d857cf575447ccaaf4e1c1169f66f5bc8b57"
            },
            "dob":{
              "date":"1974-09-17T14:34:52.927Z",
              "age":48
            },
            "registered":{
              "date":"2010-11-05T17:48:03.380Z",
              "age":12
            },
            "phone":"305-893-8230",
            "cell":"811-372-8020",
            "id":{
              "name":"",
              "value":null
            },
            "picture":{
              "large":"https://randomuser.me/api/portraits/men/45.jpg",
              "medium":"https://randomuser.me/api/portraits/med/men/45.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/men/45.jpg"
            },
            "nat":"CA"
          },
        ],
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders successfully', () => {
    renderWithRouter(<FollowersList />);

    const target = screen.queryByTestId('followers-list');

    expect(target).toBeInTheDocument();
  });

  test('renders multiple follower items', async () => {
    renderWithRouter(<FollowersList />);

    const target = await screen.findAllByTestId(/follower-item-/i);

    expect(target).not.toBe(0);
  });
});