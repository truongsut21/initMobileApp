import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'truong',
    },
    reducers: {
        // Thêm các reducers của bạn ở đây nếu cần
        setName: (state, action) => {
            state.name = action.payload; // Ví dụ về reducer để cập nhật tên
        },
    },
    extraReducers: (builder) => {
        // Sử dụng builder để xử lý các action từ async thunks (nếu có)
        // Ví dụ:
        // builder
        //   .addCase(fetchData.pending, (state) => {
        //       state.loading = true;
        //   })
        //   .addCase(fetchData.fulfilled, (state, action) => {
        //       state.loading = false;
        //       state.data = action.payload;
        //   })
        //   .addCase(fetchData.rejected, (state, action) => {
        //       state.loading = false;
        //       state.error = action.error.message;
        //   });
    },
});

// Xuất actions (nếu có)
export const { setName } = taskSlice.actions;

// Xuất reducer
export default taskSlice.reducer;