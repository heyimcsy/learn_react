import React, { use, Suspense} from 'react';

const getText = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
};

// TextItem을 lazy-load로 감싸기
const TextItem = () => {
  let trueOrNot = true;
  let text = 'default text';

  if(trueOrNot){
    text = use(getText());
  }

  return (
    <h2>{text}</h2>
  )
};
//Use hook 비동기 방식으로 데이터를 가져오는 것
const Use = () => {
  //Use 를 사용할 때는 꼭 Suspense로 감싸주어야 한다. 비동기 요청을 하고 끝날 때 까지 fallback부분을 보여줄 수 있게 해야한다.
  return (
    <Suspense fallback="Loading...">
      <TextItem />
    </Suspense>
  )
}

export default Use;