import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

export default class QuizTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>Quiz</h1>
      </div>
    )
  }
}
