import React from "react";

interface ILoginProps {

}

interface ILoginState {
    username: string,
    password: string,
}

class Login extends React.Component<ILoginProps, ILoginState>{
    constructor(props: ILoginProps) {
        super(props);
        this.state = { username: '', password: '' }
    }

    componentDidMount(){
        
    }

    render() {
        return ('Login');
    }
}

export default Login;