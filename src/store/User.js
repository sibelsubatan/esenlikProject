import React, {Component} from 'react';
import {observable, action} from 'mobx';

class User {
    userInfo = '';

    get = (key:string) => {
        return this.userInfo[key];
    }
}

export default new User()


