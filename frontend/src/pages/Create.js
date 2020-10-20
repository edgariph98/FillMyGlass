import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import { Formik } from "formik";
import { Input, Button, Tag } from "antd";
import { addGame } from "../utils/routes";
import "../css/App.css";

const { TextArea } = Input;

const theme = {
  margin: "0 auto",
  textAlign: "center",
};

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  generateContent = () => {
    const tagStyle = { backgroundColor: "red", color: "black" };
    const divStyle = { marginTop: "2%", marginBottom: "0%" };
    return (
      <div style={{ ...theme }}>
        <Formik
          initialValues={{
            "game-name": "",
            description: "",
            "media-name": "",
            "media-type": "",
            players: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values["game-name"]) {
              errors["game-name"] = "Game Name Required";
            }

            if (!values["description"]) {
              errors["description"] = "Description Required";
            }

            if (!values["media-name"]) {
              errors["media-name"] = "Media Name Required";
            }

            if (!values["media-type"]) {
              errors["media-type"] = "Media Type Required";
            }

            if (!values["players"]) {
              errors["players"] = "Number of Players Required";
            }

            return errors;
          }}
          onSubmit={(game, { resetForm, setSubmitting }) => {
            console.log(game);
            addGame(game);
            // .then((res) =>
            // res.json().then((response) => {
            //   if (response === -1) {
            //     alert("Error creating game");
            //   }
            //   })
            // );
            resetForm();
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm,
            isValid,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={divStyle}>
                <Input
                  type='game-name'
                  name='game-name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values["game-name"]}
                  placeholder='Game Name'
                  size='large'
                />
              </div>
              {errors["game-name"] && touched["game-name"] && (
                <Tag style={tagStyle}>{errors["game-name"]}</Tag>
              )}
              <div style={divStyle}>
                <TextArea
                  type='description'
                  name='description'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values["description"]}
                  placeholder='Game Description'
                  autoSize={{ minRows: 3 }}
                />
              </div>
              {errors["description"] && touched["description"] && (
                <Tag style={tagStyle}>{errors["description"]}</Tag>
              )}
              <div style={divStyle}>
                <Input
                  type='media-name'
                  name='media-name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values["media-name"]}
                  placeholder='Media Name'
                />
              </div>
              {errors["media-name"] && touched["media-name"] && (
                <Tag style={tagStyle}>{errors["media-name"]}</Tag>
              )}
              <div style={divStyle}>
                <Input
                  type='media-type'
                  name='media-type'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values["media-type"]}
                  placeholder='Media Type'
                />
              </div>
              {errors["media-type"] && touched["media-type"] && (
                <Tag style={tagStyle}>{errors["media-type"]}</Tag>
              )}
              <div style={divStyle}>
                <Input
                  type='players'
                  name='players'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values["players"]}
                  placeholder='Number of Players'
                />
              </div>
              {errors["players"] && touched["players"] && (
                <Tag style={tagStyle}>{errors["players"]}</Tag>
              )}
              <div style={divStyle}>
                <Button
                  onClick={() => {
                    submitForm();
                  }}
                  type='primary'
                  block
                  disabled={isSubmitting || (touched && !isValid)}>
                  Submit Game
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  };

  render() {
    const content = this.generateContent();
    return (
      <div>
        <PageContainer content={content} />
      </div>
    );
  }
}

export default Create;
