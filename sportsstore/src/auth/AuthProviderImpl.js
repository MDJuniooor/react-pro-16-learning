import React, { Component } from "react";
import Axios from "axios";
import { AuthContext } from "./AuthContext";
import { authUrl } from "../data/Urls";

export class AuthProdiverImpl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            webToken: null
        }
    }

    authenticate = (credentials) => {
        return Axios.post(authUrl, credentials).then(response => {
            if
        })
    }
}