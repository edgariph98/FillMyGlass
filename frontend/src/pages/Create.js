import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import { Formik } from "formik";
import { Input, Button, Tag, Select } from "antd";
import { addGame, getMediaTypes } from "../utils/routes";
import "../css/App.css";

const { TextArea } = Input;
const { Option } = Select;

const theme = {
  margin: "0 auto",
  textAlign: "center",
};

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaTypes: [],
    };
  }

  componentDidMount = () => {
    this.getAllMediaTypes();
  };

  getAllMediaTypes = () => {
    getMediaTypes()
      .then((res) => res.json())
      .then((resp) => {
        if (resp.Response === 200) {
          this.setState({ mediaTypes: resp["media-types"] });
        } else {
          alert("Unable to create game currently");
        }
      });
  }

  generateContent = () => {
    const { mediaTypes } = this.state;
    const tagStyle = { backgroundColor: "red", color: "black" };
    const divStyle = { margin: "0 auto", width: "60%" };

    return (
      <div style={{ ...theme }}>
        <Formik
          initialValues={{
            "game-name": "",
            description: "",
            "media-name": "",
            "media-type": "",
            players: "",
            URL: "",
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

            if (!/^\d*[1-9]\d*$/.test(values["players"])) {
              errors["players"] = "Please enter a number greater than zero";
            }

            return errors;
          }}
          onSubmit={(game, { resetForm, setSubmitting }) => {
            addGame(game).then((res) =>
              res.json().then((response) => {
                if (response.Response !== 200) {
                  alert("Error creating game");
                } else {
                  alert("Game created successfully!");
                }
              })
            );
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
                  style={{ margin: "3% 0%" }}
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
                <Select
                  type='media-type'
                  name='media-type'
                  style={{ width: "100%", textAlign: "left", margin: "3% 0%" }}
                  onChange={(value) => {
                    values["media-type"] = value;
                  }}
                  placeholder='Media Type'>
                  {mediaTypes.map((mediaType, index) => (
                    <Option value={mediaType} key={index}>
                      {mediaType}
                    </Option>
                  ))}
                </Select>
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
                <Input
                  type='URL'
                  name='URL'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values["URL"]}
                  placeholder='Game URL'
                  style={{ margin: "3% 0%" }}
                />
              </div>
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
