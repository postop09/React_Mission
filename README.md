# React_Mission

## 1차 미션 스크린샷

### Basic
![image](https://user-images.githubusercontent.com/93017923/154948827-0b56a188-e84e-4543-8911-c4c2fb3639c3.png)

### Challenge
![image](https://user-images.githubusercontent.com/93017923/154948960-db1065d3-663b-4f13-b9bf-36a1b1439daa.png)
![image](https://user-images.githubusercontent.com/93017923/154949058-3eed574d-0f66-4515-a5a6-3ebb3764bec7.png)

## 2차 미션 스크린샷

### Basic
![basic-2](https://user-images.githubusercontent.com/93017923/157226033-bcd5ece7-3037-48c6-9d2a-43fb985ab426.gif)

**true/false값을 이용한 수정 상태 변경/저장**

```js
const [edit, setEdit] = useState(false);
const [editText, setEditText] = useState(title);
const editList = (id) => {
  setEdit(!edit);
  if (edit) {
    let editTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editText;
      }
      return data;
    })
    setTodoData(editTodoData);
  }
}
```

### Challenge
![challenge-2](https://user-images.githubusercontent.com/93017923/157226050-28b81f45-6d37-49c7-96fa-6a883e4f0fee.gif)

**useEffect 배열 속 값 지정(`[deps]`)**

지정한 값이 업데이트 될 때마다 useEffect가 실행된다.
```js
useEffect(() => {
...
}, [deps])
```

**todoData가 업데이트 될 때마다 localStorage에 저장**

```js
useEffect(() => {
  localStorage.setItem('saveLists', JSON.stringify(todoData));
},[todoData])
```


**useEffect 빈배열 반환 (`[]`)**

페이지가 랜더링 될 때, 처음 한 번만 useEffect가 실행된다.
```js
useEffect(() => {
...
}, [])
```

**localStorage.key값의 존재유무에 따른 true/false를 반환하는 조건문 활용**
- 값이 존재할 때, localStorage의 값을 가져와서 출력
- 값이 존재하지 않을 때, 기본 상태를 출력

```js
useEffect(() => {
  if (!localStorage.saveLists === false) {
    const saveData = JSON.parse(localStorage.saveLists);
    setTodoData(saveData);
  } else if (!localStorage.saveLists === true) {
    setTodoData([]);
  }
},[])
```

## 3차 미션 스크린샷

### Basic
- **화면 밖 클릭 시 모달창 닫기**

![모달 닫기](https://user-images.githubusercontent.com/93017923/159226584-cc4ee056-5084-4d22-9e10-290d90ac5b15.gif)


### Challenge
- **커서로 슬라이드**

![커서 슬라이드](https://user-images.githubusercontent.com/93017923/159226604-0b591a82-4abb-48ff-8e83-fefc5a1ef305.gif)

- **리액트 페이지 배포**
> https://postop09.github.io/react_netflix_clone/

![배포하기](https://user-images.githubusercontent.com/93017923/159226614-6fdf53cf-2618-4a8b-b47b-e29982e9a292.gif)

## 4차 미션 스크린샷

### Basic
**테스트 코드 작성**
![basic-1](https://user-images.githubusercontent.com/93017923/161440977-2ceb102a-e136-4772-82cc-8fe359aa6312.PNG)

![basic-2](https://user-images.githubusercontent.com/93017923/161440986-3160ba08-22cc-42c6-a262-8ae15c232bad.PNG)
