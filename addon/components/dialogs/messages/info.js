import Ember from 'ember'
const {
  assign,
  getWithDefault
} = Ember
import FrostModalBinding from '../../frost-modal-binding'
import { message } from '../../../helpers/frost-modal-animation'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    confirm: PropTypes.shape({
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    details: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]),
    isVisible: PropTypes.bool.isRequired,
    links: PropTypes.array,
    summary: PropTypes.string,
    targetOutlet: PropTypes.string,
    title: PropTypes.string.isRequired,

    // Actions
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func

    // Constants TODO getConstants - like getDefaultProps, but assert if `this` has the prop defined
    // animation: PropTypes.func,
    // classModifier: PropTypes.string,
    // modalComponentName: PropTypes.string,
    // icon: PropTypes.string,
    // cancel: PropTypes.shape({
    //   isVisible: PropTypes.bool,
    //   text: PropTypes.string
    // }),
    // confirm: PropTypes.shape({
    //   isVisible: PropTypes.bool,
    //   text: PropTypes.string
    // }),
    // onCancel: PropTypes.func,
  },

  getDefaultProps () {
    let defaultProps = this._super()

    assign(defaultProps, {
      animation: message,
      classModifier: 'message',
      modal: 'frost-modal-dialog',
      params: {
        cancel: {
          isVisible: false
        },
        confirm: {
          text: getWithDefault(this, 'confirm.text', 'Ok')
        },
        content: this.details,
        icon: {
          name: 'info',
          pack: 'frost-modal'
        },
        links: this.links,
        summary: this.summary,
        title: this.title
      }
    })

    return defaultProps
  }

})
