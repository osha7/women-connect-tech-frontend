import React from 'react'

export default class AvatarUploads extends React.Component {

    state = {
        image: {},
        // video: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            console.log(e.target.files)
            return {
                
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
    
        const form = new FormData()
        const newForm = form.append("image", this.state.image)
        console.log(newForm)
        // form.append("video", this.state.video)
        fetch(`http://localhost:3000/avatars`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
              },
            body: newForm
        })
        // .catch(errors => ("avatar error", errors))
        .catch(error => {
            console.log("avatar upload error", error)
        })
    }

    render(){
        return (
            <div className="form">
                <h3>New Upload</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    {/* <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/> */}
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}