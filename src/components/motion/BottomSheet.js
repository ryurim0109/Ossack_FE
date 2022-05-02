import React, { Component } from "react";
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

class BottomSheet extends Component {
  state = {
    opacity: 0,
    translate: 100,
    display: "hidden",
  };

  componentWillMount() {
    if (this.props.startHidden === false) {
      this.setState({
        opacity: 0.5,
        translate: 0,
        display: "visible",
      });
    }
  }

  animate = () => {
    this.setState(
      {
        opacity: this.state.opacity === 0.5 ? 0 : 0.5,
        translate: this.state.opacity === 0 ? 0 : 100,
      },
      () => {
        if (this.state.opacity === 0) {
          setTimeout(() => {
            this.setState({
              display: "hidden",
            });
          }, 200);
        } else {
          this.setState({
            display: "visible",
          });
        }
      }
    );
  };

  render() {
    return (
      <div>
        {React.cloneElement(this.props.buttonElement, {
          onClick: this.animate,
        })}
        <Motion
          style={{
            opacity: spring(this.state.opacity),
            translate: spring(this.state.translate),
          }}
        >
          {({ opacity, translate }) => (
            <div
              style={Object.assign({}, styles.container, {
                visibility: this.state.display,
              })}
              onClick={this.animate}
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
                          item.onClick.call(this, this.animate.bind(this));
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
  }
}

export default BottomSheet;
