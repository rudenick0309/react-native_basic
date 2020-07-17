import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Container from './components/Container'
import Row from './components/Row'
import moment from 'moment';
import styled from 'styled-components/native';

const Label = styled.Text`
  font-size:24px;
  font-weight : bold;
`

export default function App() {
  const [now, setNow] = React.useState( moment() );

  // 1. 이 컴포넌트가 처음으로 화면에 표시될 때, useEffect가 실행 됨 (무조건 실행된)
  // 2. 주시하는 대상에 변화가 일어났을 때, useEffect가 실행 됨
  React.useEffect(() => {
    // 동작에 대한 부분이 선언된다.
    setInterval( () => {
      setNow( moment() );
    }, 1000 )
  }, [/* 주시 대상 */now])

  return (
    <Container>

      <Row>

        <Text>{now.format('ddd /MMM Do/ YYYY')}</Text>
      </Row>


      <Row>
        <Label>{now.format('HH')}</Label>
        <Label>{ parseInt( now.format('s'), 10) % 2 === 1
          ? ' :'
          : ' '} </Label>
        <Label>{now.format('mm')}</Label>
        <Label>{ parseInt( now.format('s'), 10) % 2 === 1
          ? ' :'
          : ' '} </Label>
        <Label>{now.format('ss')}</Label>
      </Row>

    </Container>
  );
}

