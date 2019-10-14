// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';


// class EditNotesextends Component {
//     state = {
//       formData: this.props.location.state.notes
//     };
  
//     formRef = React.createRef();
  
//     handleSubmit = e => {
//       e.preventDefault();
//       this.props.notesUpdate(this.state.formData);
//     };
  
//     handleChange = e => {
//       const formData = {...this.state.formData, [e.target.name]: e.target.value};
//       this.setState({
//         formData,
//         invalidForm: !this.formRef.current.checkValidity()
//       });
//     };
  
//     render() {
//       return (
//         <>
//           <h1>Edit Note</h1>
//           <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label>Note (required)</label>
//               <input
//                 className="form-control"
//                 name="name"
//                 value={this.state.formData.notes}
//                 onChange={this.handleChange}
//                 required
//               />
//             </div>
           
//             <button
//               type="submit"
//               className="btn btn-xs"
//               disabled={this.state.invalidForm}
//             >
//               SAVE NOTE
//             </button>&nbsp;&nbsp;
//             <Link to='/'>CANCEL</Link>
//           </form>
//         </>
//       );
//     }
//   }







// export default EditNotes;