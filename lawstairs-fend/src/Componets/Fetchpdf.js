import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { inputPdfFile } from "../Redux/actions";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { storage } from "../firebse";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Fetchpdf = (props) => {
  const [imgUrl, setImgUrl] = useState("");
  const storage = getStorage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.inputPdf.file === "" || props.inputPdf.file === undefined) {
      alert("no file exists plese add file");
      return;
    }
    const pdfFileRef = ref(storage, `files/${props.inputPdf.fileName}`);
    await uploadBytes(pdfFileRef, props.inputPdf.file);
    let uploadfile = await getDownloadURL(pdfFileRef).then((Url) => Url);

    if (uploadfile !== "" && typeof uploadfile) {
      fetch("http://localhost:9000/v4", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          file: uploadfile,
          fileName: props.inputPdf.fileName,
          fileType: props.inputPdf.fileType,
          category: props.inputPdf.category,
          fileSize: props.inputPdf.fileSize,
        }),
      })
        .then((response) => response.json())
        .then((data) => alert(data.message));
    }
  };

  return (
    <Container>
      <Content>
        <div>
          <h1>Click To Add File </h1>
          <label htmlFor="pdfFile">
            <Wrap>
              <NoteAddIcon style={{ width: "100%", height: "100%" }} />
            </Wrap>
          </label>
        </div>
        <input
          type="file"
          id="pdfFile"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files[0] === "" || e.target.value === undefined) {
              alert("please add file");
            } else {
              props.inputPdfFile({
                ...props.inputPdf,
                file: e.target.files[0],
                fileName: e.target.files[0].name.slice(0, -4),
                fileType: e.target.files[0].type,
                fileSize: `${(e.target.files[0].size / 1000).toFixed(2)} kbs`,
              });
            }
          }}
        />
        <select
          name=""
          id=""
          onChange={(e) => {
            props.inputPdfFile({ ...props.inputPdf, category: e.target.value });
          }}
        >
          <option value="judgement">Judgement</option>
          <option value="elab">Elab</option>
          <option value="articles">Articles</option>{" "}
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background-color: rgba(249, 249, 249, 0.9);
  width: 50vw;
  height: 50vh;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;

  & > div > h1 {
    font-family: "Times New Roman", Times, serif !important;
    font-style: italic;
    color: blue;

    font-size: 40px;
    font-weight: 500;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.5);
  }
  & > div {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover h1 {
      color: rgba(0, 0, 0, 1);
    }
  }
  & > select {
    font-size: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    margin: 10px 0px;
    padding: 5px 10px;
    color: white;

    &:hover {
      background-color: rgba(249, 249, 249, 0.8);
      color: black;
      border: 2px solid white;
    }
    &:list-style-position {
      border-radius: 40px;
    }
  }

  & > button {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(249, 249, 249.5);
    border: none;
    padding: 8px 16px;
    width: 30vw;
    min-width: 100px;
    height: 40px;
    text-transform: uppercase;
    border-radius: 20px;
    margin-top: 30px;
    letter-spacing: 2.7px;
    font-weight: 600;
    transition: all 0.1s linear;
    &:hover {
      background-color: rgba(249, 249, 249, 0.9);
      border: 2px solid white;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 800;
      letter-spacing: 5.7px;
      box-shadow: 5px 10px 10px rgba(249, 249, 249, 0.8);
    }
    &:disabled {
    }
    &:focus {
      color: green;
      background-color: yellow;
    }
  }
`;
const Wrap = styled.div`
  width: 70px;
  height: 70px;
  color: rgba(249, 249, 249, 1);
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 10px;
  border: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 5px 10px 10px rgba(249, 249, 249, 1);
    border: 2px solid white;
    outline: none;
    transform: scale(1.1);
    color: rgba(0, 0, 0, 1);
    background-color: rgba(249, 249, 249, 1);
  }
`;
const mapStateToProps = (state) => {
  return {
    inputPdf: state.input.inputPdf,
  };
};
const mapDispatchToProps = (dispatch) => ({
  inputPdfFile: (payload) => dispatch(inputPdfFile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fetchpdf);
