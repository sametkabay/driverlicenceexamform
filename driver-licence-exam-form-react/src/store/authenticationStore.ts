import LoginModel from "../model/loginModel";
import Services from "../services/services";
import LoginInputDto from "../services/dto/loginInputDto";

class AuthenticationStore {
    static login(input: LoginModel) {
        Services.login({ username: input.username, password: input.username } as LoginInputDto)
    }
    logout() {
        console.log('logout');
    }
}

export default AuthenticationStore;