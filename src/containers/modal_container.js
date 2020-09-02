import React from 'react';
import Modal from '../components/jobs/modal.editJob';
import TriggerButton from './triggerButton';

export class Container extends React.Component {
    state = { isShown: false };
    showModal = () => {
      this.setState({ isShown: true }, () => {
        this.closeButton.focus();
      });
      this.toggleScrollLock();
    };
    closeModal = () => {
      this.setState({ isShown: false });
      this.TriggerButton.focus();
      this.toggleScrollLock();
    };
    onKeyDown = (event) => {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    };
    onClickOutside = (event) => {
      if (this.modal && this.modal.contains(event.target)) return;
      this.closeModal();
    };
  
    toggleScrollLock = () => {
      document.querySelector('html').classList.toggle('scroll-lock');
    };
    render() {
      return (
        <React.Fragment>
          <TriggerButton
            showModal={this.showModal}
            buttonRef={(n) => (this.TriggerButton = n)}
            triggerText={this.props.triggerText}
          />
          {this.state.isShown ? (
            <Modal
              onSubmit={this.props.onSubmit}
              modalRef={(n) => (this.modal = n)}
              buttonRef={(n) => (this.closeButton = n)}
              closeModal={this.closeModal}
              onKeyDown={this.onKeyDown}
              onClickOutside={this.onClickOutside}
            />
          ) : null}
        </React.Fragment>
      );
    }
  }
  
  export default Container;
  

// React.Fragment: wrap the return in this, bc Two components can't be rendered from JSX
// it's just like a div except it doesn't render itself on the DOM, only renders it's children
// modal blog: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571