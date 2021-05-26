import React from 'react';
import Form from './components/Forms/Form.js'
import Posts from './components/Posts/Posts.js'


const App = () => {
    return (
        <div className="container mx-auto px-4 flex flex-row">
            <Posts />
            <Form/>
        </div>
    )
}

export default App;