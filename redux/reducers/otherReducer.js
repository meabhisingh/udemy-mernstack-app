import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder
    .addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProfileRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePicRequest", (state) => {
      state.loading = true;
    })
    .addCase("placeOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("processOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("addCategoryRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteCategoryRequest", (state) => {
      state.loading = true;
    })
    .addCase("addProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProductImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteProductImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("forgetPasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("resetPasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePicSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("placeOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("processOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addCategorySuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteCategorySuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProductImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("forgetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("resetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProfileFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePicFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("placeOrderFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("processOrderFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addCategoryFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteCategoryFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addProductFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProductFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProductImageFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteProductImageFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteProductFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("forgetPasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("resetPasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
