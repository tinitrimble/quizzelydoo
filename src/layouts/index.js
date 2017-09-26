import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './header.js';
import Footer from './footer.js';
import './index.css'

export default class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      this.loadHeapAnalytics();
    }
  }

  loadHeapAnalytics() {
    window.heap = window.heap || [], heap.load = function(e, t) {
      window.heap.appid = e, window.heap.config = t = t || {};
      var r = t.forceSSL || "https:" === document.location.protocol,
        a = document.createElement("script");
      a.type = "text/javascript", a.async = !0, a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(a, n);
      for (var o = function(e) {
          return function() {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++) heap[p[c]] = o(p[c])
    };
    heap.load("1851049274");
  }

  render() {
    return (
      <div>
        <Helmet
          title="Quizzelydoo"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}
