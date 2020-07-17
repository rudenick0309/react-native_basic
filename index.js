import * as React from "react";
import {Button, SafeAreaView, Text, View, StyleSheet} from "react-native";
import Constants from "expo-constants"; // 상수들
import styled from "styled-components/native";
import _ from "lodash";

// 로대쉬로 진행할거임,
let numbers = [];
// 1부터 45의 숫자를 생성
_.times(45, n => numbers.push(n + 1));
// 섞는다
// numbers = _.shuffle(numbers);

//여기 위에 ajax를 할 수 있다. npm의 모든 라이브러리를 다 사용할 수 있다.

//원래 css 이름 그대로 사용할 수 있다.
// css툴에서 제공하는 것들을 수정할 필요없이 바로 사용할 수 있다.
// 스타일드컴포넌트는 props를 추가할 수 있다. 오오오??
// const h = 20; // 스타일드컴포넌트는 백틱을 지원한다.

const Container = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
  padding-top:${Constants.statusBarHeight}px;
`;

const Row = styled.View`   
  flex-direction:row;   
  margin-bottom:24px;
`;
const Ball = styled.View`
  width : 50px;
  height : 50px;
  border-radius : 25px;
  background : ${props => {
  if (props.value < 11) {
    return "#e5e251";
  } else if (props.value < 21) {
    return "#517FE5";
  } else if (props.value < 31) {
    return "#e54036";
  } else if (props.value < 41) {
    return "#e5e5e5";
  } else {
    return "#43bf74";
  }
}};
  justify-content : center;
  align-items : center;
`;
const Label = styled.Text`
  font-size : 20px;
  font-weight : bold;
  onft-color: #000000;
`;


export default function App() {
  //상태 변화 state
  const [displayNumbers, setNumbers] = React.useState(_.shuffle(numbers)); // hook
  //displayNumbers = 상태의 읽기 전용 값
  //setNumbers = 상태를 변경하기 위한 업데이트 함수 , 쓰기 전용 함수.
  // 읽기 전용 값과, 쓰기 전용 함수가 useState의 기본 구성이다.

  return (
    <Container>

      <Row>
        <Ball value={displayNumbers[0]}>
          <Label>{displayNumbers[0]}</Label>
        </Ball>
        <Ball value={displayNumbers[1]}>
          <Label>{displayNumbers[1]}</Label>
        </Ball>
        <Ball value={displayNumbers[2]}>
          <Label>{displayNumbers[2]}</Label>
        </Ball>
        <Ball value={displayNumbers[3]}>
          <Label>{displayNumbers[3]}</Label>
        </Ball>
        <Ball value={displayNumbers[4]}>
          <Label>{displayNumbers[4]}</Label>
        </Ball>
        <Ball value={displayNumbers[5]}>
          <Label>{displayNumbers[5]}</Label>
        </Ball>
      </Row>

      <Button
        title={"다시 뽑기"}
        onPress={() => setNumbers(_.shuffle(numbers))}/>

    </Container>
  );
}


// 웹의 스타일시트가 그대로 적용되는 건 아니다.
const styles = StyleSheet.create({
  container: {
    flex: 1, // flexDirection column이 기본값이다.
    paddingTop: Constants.statusBarHeight,
    // flexDirection:'row',
    justifyContent: "center", //  flex direction과 같은 방향으로 움직인다
    alignItems: "center", // 텍스트 컴포넌트를 가로 100% 크기가 아닌, 필요한 크기만 하겠다는 것.
  },
  ball: {
    width: 50,
    height: 50,
    backgroundColor: "#e5e5e5",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // borderColor : '#000000',
    // borderWidth:1,
    // textAlign:'center',
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 24,
  }
});

/**
 * 최소 1개의 컨테이너가 필요하다. 감싸는 역할을 하는 것.
 *
 * View - 컨테이너.  div 역할, 감싸는 역할을 한다.
 * SafeAreaView도 컨테이너다. 리액트 네이티브 공식문서 상에서 확인을 하자 .
 * SAV는 notches를 고려 해 준다.  (notches는 직접 확인 해 보니까, 최상단 헤더를 뜻하네);
 * 그럼 뷰보단 사브를 쓰는게 낫잖아??
 *
 * Text -  p h1 2 3 4 등 이런 역할을 한다.
 *
 * 단순 flex가 아니라, flex-grow 개념이다. mdn 참조하면 된다.
 * flex  : flex-grow flex-shrink flex basis
 * 유동적인 크기다. 나머지 크기 개념이 될 수가 있고.
 *  // 자기가 사용할 수 잇는 것들 중에 1만큼 가지겟다. 즉 위에서는 1대1대1로 나뉘어지는거.
 *
 * React.Fragment 실제 렌더링에 반영되지 않는 추상 컨테이너
 *
 * // height:'100%', //flext : 1 로 가능 / 둘 다 결과가 똑같다.
 *
 * paddingTop:Constants.statusBarHeight,  <<< 이게 기본 세팅이라고 보면 된다.
 *
 * Button 은 ㅜ조건 props 가 2개 들어가야 한다. title, onPress !!
 *
 */