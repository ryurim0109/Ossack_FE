import React, { Component, useState } from "react";
/**
 * Animations
 */
import { Motion, spring } from "react-motion";

/**
 * Material-ui
 */
import { grey600 } from "material-ui/styles/colors";

/**
 * Local styles
 */
import styles from "./style";
import { useEffect } from "react";

const BottomSheet = (props) => {
  console.log("props : ", props);

  const [state, setState] = useState({
    //기본 설정값
    opacity: 0,
    translate: 100,
    display: "hidden",
  });

  useEffect(() => {
    if (props.startHidden === false) {
      setState({
        opacity: 0.5,
        translate: 0,
        display: "visible",
      });
    }
  }, []);

  const animate = () => {
    setState(
      {
        opacity: state.opacity === 0.5 ? 0 : 0.5,
        translate: state.opacity === 0 ? 0 : 100,
      },
      () => {
        if (state.opacity === 0) {
          setTimeout(() => {
            setState({
              display: "hidden",
            });
          }, 200);
        } else {
          setState({
            display: "visible",
          });
        }
      }
    );
  };

  return (
    <div>
      {React.cloneElement(props.buttonElement, {
        onClick: animate,
      })}
      <Motion
        style={{
          opacity: spring(state.opacity),
          translate: spring(state.translate),
        }}
      >
        {({ opacity, translate }) => (
          <div
            style={Object.assign({}, styles.container, {
              visibility: state.display,
            })}
            onClick={animate}
          >
            <div
              style={Object.assign({}, styles.backgroundContainer, {
                opacity: opacity,
              })}
            />
            <ul
              style={Object.assign({}, styles.list, {
                transform: `translateY(${translate}%)`,
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "0.5rem",
                  paddingBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    height: "3px",
                    width: "28px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    margin: "auto",
                  }}
                ></span>
              </div>
              {this.props.items.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        item.onClick.call(this, animate.bind(this));
                      }}
                      style={styles.button}
                    >
                      {React.cloneElement(item.icon, {
                        style: {
                          marginRight: "36px",
                          color: grey600,
                        },
                      })}
                      <span style={styles.text}>{item.text}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Motion>
    </div>
  );
};

// class BottomSheet extends Component {
//   state = {

//   };

//   componentWillMount() {

//   }

//   render() {

//   }
// }

export default BottomSheet;
