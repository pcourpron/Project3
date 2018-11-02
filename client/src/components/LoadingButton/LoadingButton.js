import React from "react";
import { LoadingButton, Glyphicon } from "react-bootstrap";
import "./LoadingButton.css";
import axios from "axios"

// export default ({
//     isLoading,
//     text,
//     loadingText,
//     className = "",
//     disabled = false,
//     ...props
//   }) =>
//     <Button
//       className={`Loaderutton ${className}`}
//       disabled={disabled || isLoading}
//       {...props}
//     >
//       {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
//       {!isLoading ? text : loadingText}
//     </Button>;
// class LoadingButton extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleClick = this.handleClick.bind(this);

//     this.state = {
//       isLoading: false
//     };
//   }

//   handleClick() {
//     this.setState({ isLoading: true });

//     axios.post("/submit", body ).then(res => {
//     // This probably where you would have an `ajax` call
//     setTimeout(() => {
//       // Completed of async action, set loading state back
//       this.setState({ isLoading: false });
//     }, 2000);
//   });
// }

//   render() {
//     const { isLoading } = this.state;

//     return (
//       <LoadingButton
//         bsStyle="primary"
//         disabled={isLoading}
//         onClick={!isLoading ? this.handleClick : null}
//       >
//         {isLoading ? 'Loading...' : 'Loading state'}
//       </LoadingButton>
      
//     );
//   }
// }
// export default LoadingButton;
// render(<LoadingButton />);