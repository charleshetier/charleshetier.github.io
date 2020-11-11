import context from 'context';
import React from 'react';

export function show() {
    return new Promise((resolve, reject) => {
        let menuHost = document.getElementById('menu');

        var LevelMenuItem = React.createClass({
            select: function () {
                resolve(this.props.context);
                close();
            },
            render: function () {
                return <li onClick={this.select}>{this.props.name}</li>;
            }
        });

        var LevelMenu = React.createClass({
            render: function () {
                var createItem = level => <LevelMenuItem context={level} name={level.name} />;
                return <ul className="missions">{context.levels.map(createItem)}</ul>;
            }
        });

        React.render(<div><h2>Select a mission:</h2><LevelMenu/></div>, menuHost);
    });
}

export function close() {
    let menu = document.getElementById('menu');
    let menuContainer = menu.getElementsByTagName('ul')[0];
    menuContainer.innerHTML = '';
    menu.style.display = 'none';
}