import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user', // 사용할 변수 이름 등록
  initialState: {
    // 외부 자료를 가져와도 되며 현재는 임시로 작성
    // 변수 리스트 등록
    username: '설예지',
    age: 0,
  },

  reducers: {
    changeName: (state, action) => {
      state.username = action.payload;
    },
    changeAge: (state, action) => {
      state.age += action.payload;
    },
  },
});

export const { changeName, changeAge } = user.actions;
export default user;
