import _ from 'lodash';
import React from 'react';
import {Text} from 'react-native';
import {Container, Popper} from './DropdownSearch.styled';

export default function DropdownSearch({dataSource, searched}) {
  const unique = [
    ...new Set(
      dataSource?.map(arr => {
        return Object.values(arr);
      }),
    ),
  ];
  let filter = _.union(...unique);
  const filtered = filter.filter(e => e.toString().includes(searched));
  return (
    <Container>
      {filtered.map((e, i) => {
        return (
          <Popper key={i}>
            <Text>{e}</Text>
          </Popper>
        );
      })}
      <Popper>
        {dataSource?.length === 0 && <Text>Nothing to Show</Text>}
      </Popper>
    </Container>
  );
}
