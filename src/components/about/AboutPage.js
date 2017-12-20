import React from 'react';

// it could be a stateless component, by it's useful to have a class component at the top 
// so the hot reloading can work at this version
class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router, 
                    and a variety of other helpful libraries</p>
            </div>
        );
    }
}

export default AboutPage;