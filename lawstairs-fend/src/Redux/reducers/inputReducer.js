const initialState = {
  inputPdf: { file: "", fileName: "", fileType: "", category: "judgement" },
  // data: fetch("http://localhost:9000/v4")
  //   .then((respnose) => respnose.json())
  //   .then((data) => data),
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_PDF":
      return {
        ...state,
        inputPdf: action.payload,
      };

    default:
      return state;
  }
};

export default inputReducer;
