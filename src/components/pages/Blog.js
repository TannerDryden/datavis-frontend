import React, { Component, useState } from 'react';
import "../../App.css";
import "./Blog.css";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '@mui/material/Button';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import draftToHtml from 'draftjs-to-html';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { EditorState, convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

class WriteUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
      , exportContent: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.writeToFile = this.writeToFile.bind(this);
  }

  writeToFile() {
    this.setState({exportContent: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))});
    const element = document.createElement("a");
    const file = new Blob([this.state.exportContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "yourPost.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  
  handleClick() {
    this.setState({ editorState: EditorState.push(this.state.editorState, ContentState.createFromText('')) });
    this.setState({msg: "pree"})
  }

  uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve({ data: { link: e.target.result } });
        reader.onerror = e => reject(e);
        reader.readAsDataURL(file);
      });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (     
      <div className="App">
        <header className="App-header">
          <Stack spacing={3}>
          <Typography variant="h2"> Blog Post System </Typography>
          <Stack spacing={1} direction="row" justifyContent="center">
            <Button variant="secondary" onClick={this.handleClick}>Cancel</Button>
            <Button variant="primary" >Export</Button>
            <Button variant="primary"onClick={this.writeToFile}>Save</Button>
          </Stack>
          </Stack>
          <Container>
          <Editor wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              image: {
                uploadEnabled: true,
                uploadCallback: this.uploadImageCallBack,
                previewImage: true
              },
            }}
          />
          </Container>
        </header>
      </div>
    );
  }
}
export default WriteUp;

