import React from "react";

export class NotFound extends React.Component {
    render() {
        return (
            React.createElement('h3', { style: { color: 'darcred' } }, 'Page not found')
        );
    }
}