import React, {Component} from 'react';
import {observable, action} from 'mobx';

class Role {
    @observable _data = '';

    @action
    get = (key:string) => {
        return this._data[key];
    }
}
export default new Role()


