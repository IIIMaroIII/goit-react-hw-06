import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
  //   blacklist: ["contacts", "isError", "isLoading", "productData"],
};

export default contactsPersistConfig;
