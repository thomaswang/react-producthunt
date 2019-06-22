import React from 'react'
import PropTypes from 'prop-types'

class ShipWidget extends React.PureComponent {
  static propTypes = {
    appId: PropTypes.string,
    position: PropTypes.string
  }

  scriptContents(appId, position) {
    window.productHuntUpcoming = {
      appId: appId,
      position: position || 'bottomLeft'
    }
    ;(function(doc, scr, src, a, b) {
      a = doc.createElement(scr)
      b = doc.getElementsByTagName(scr)[0]
      a.async = true
      a.src = src
      b.parentNode.insertBefore(a, b)
    })(
      document,
      'script',
      'https://assets.producthunt.com/assets/upwigloader.js'
    )
  }

  render() {
    const { appId, position } = this.props

    return (
      <script>
        {this.scriptContents(appId, position)}
      </script>
    )
  }
}

export default ShipWidget
