import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import showResults from './showResults';
import isValidEmail from 'sane-email-validation';
import salaryOptions from '../../dropdownData/salaryOptions';
import datepicker from 'js-datepicker'


// function Jobs(state) {
//     console.log(state)
//     return(
//         <div></div>
//     ) 
// }


let validate = values => {
    const errors = {}
    if(!values.date) {
        errors.date = 'Required'
    }
    if(!values.title) {
        errors.title = 'Required'
    }
    if(!values.info) {
        errors.info = 'Required'
    }
    if(!values.salary_starting_range) {
        errors.salary_starting_range = 'Required'
    }
    if(!values.salary_highest_range) {
        errors.salary_highest_range = 'Required'
    }
    if(!values.contact_person) {
        errors.contact_person = 'Required'
    }
    if(!values.email) {
        errors.email = 'Required'
    }else if (!isValidEmail(values.email)) {
        errors.email = 'Invalid Email'
    }
    
    if(!values.phone) {
        errors.phone = 'Required'
    }
    return errors
}

let createRenderer = render => ({ input, meta, label, ...rest }) => {
    return (
        // <div className='jobs-form'>
        <div
        className={[
          meta.error && meta.touched ? 'error' : '',
          meta.active ? 'active' : ''
        ].join(' ')}
      >
                {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}
                <label>{label}</label>
                <br />
                {render(input, label, rest)}
                { meta.error && meta.touched && <span>{ meta.error }</span>} 
            </div>
        // </div>
    )
}

let RenderInput = createRenderer((input, label) =>
    <input { ...input } placeholder={label} />
)

let RenderSelect = createRenderer((input, label, { children }) =>
    <select { ...input }>{ children }</select>
)

// const picker = datepicker(selector, options)

let JobsForm = ({ handleSubmit, submitting }) => {
    return (
    <div>
        <h3>Add New Job Posting:</h3>
        <form onSubmit={ handleSubmit(showResults) } >

        <Field name="date" type="date" label="Date Posted:" component={ RenderInput } />

        <Field name="title" label="Job Title:" component={ RenderInput } />
        <Field name="info" label="Info:" component={ RenderInput } />
        <Field name="salary_starting_range" label="Starting Salary: $" component={ RenderSelect } >
            <option />
            {salaryOptions.map(salary => <option key={salary} value={salary}>{salary}</option>)}
        </Field>
        <Field name="salary_highest_range" label="Salary Top: $" component={ RenderSelect } >
            <option />
            {salaryOptions.map(salary => <option key={salary} value={salary}>{salary}</option>)}
        </Field>
        <Field name="contact_person" label="Contact:" component={ RenderInput } />
        <Field name="email" label="Email:" component={ RenderInput } />
        <Field name="phone" label="Phone:" component={ RenderInput } />
            
        <button type="submit" disabled={ submitting }>Submit</button>
        </form>
    </div>
    )
}

// 'decorator' below injects useful info into our form
JobsForm = reduxForm({
    form: 'jobs',
    // destroyOnMount: false,
    validate
})(JobsForm)

// const mSTP = (state) => {
//     // console.log(state)
//     return {
//     state
//     }
// }

export default connect()(JobsForm);


// check out wizard fields