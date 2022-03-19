import {observable, action} from 'mobx';
import base64 from 'react-native-base64';
import axios from 'axios';

class Api {
    @observable userName = '';
    @observable password = '';
    @observable BASE_URL = 'https://api.akilliticaretim.com';
    @observable BASE_URL_Image = 'https://test.akilliticaretim.com';
    _apiEndPoint = '/api/v1';
    @action
    SetUrl = async (userName, password, baseUrl) => {
        this.userName = userName;
        this.password = password;
        this.BASE_URL = baseUrl;
        return;
    };
    getUrl = () => {
        return this.BASE_URL;
    };
    @action
    SetRegister = async (userName, password) => {
        this.userName = userName;
        this.password = password;
        return await this.get('App/user');
    };
    @action get = async (endpoint, params
?) => {
    const
    headers = this.getHeaders();
    try {
    const {
    data
}

= await axios.get(`${this.BASE_URL}/api/v1/${endpoint}`, {
    headers: headers,
    params: params,
});
return data;
} catch
(e)
{
    console.log('eee', e, endpoint);
    return undefined;
}
}
;
@action
post = async (endpoint, postdata
    ?
) =>
{
    const headers = this.getHeaders();
    try {
        const {data} = await axios.post(
            `${this.BASE_URL}/api/v1/${endpoint}`,
            postdata,
            {
                headers: headers,
            },
        );
        return data;
    } catch (e) {
        //Alert.alert('',"Kaydınız oluşturulamadı.Lütfen firmanız ile iletişime geçiniz",[{text: 'Tamam'}])
    }
}
;

@action
patch = async (endpoint, patchdata
    ?
) =>
{
    const headers = this.getHeaders();
    try {
        const data = await axios.patch(
            `${this.BASE_URL}/api/v1/${endpoint}`,
            patchdata,
            {
                headers: headers,
            },
        );
        return data;
    } catch (e) {
    }
}
;
@action
put = async (endpoint, patchdata
    ?
) =>
{
    const headers = this.getHeaders();
    try {
        const data = await axios.put(
            `${this.BASE_URL}/api/v1/${endpoint}`,
            patchdata,
            {
                headers: headers,
            },
        );
        return data;
    } catch (e) {
    }
}
;
@action
delete = async (endpoint, patchdata
    ?
) =>
{
    const headers = this.getHeaders();
    try {
        const data = await axios.delete(`${this.BASE_URL}/api/v1/${endpoint}`, {
            headers: headers,
        });
        return data;
    } catch (e) {
    }
}
;

@action
register = async (registerData) => {
    //let authData = window.btoa("default.user:1P9A11vZDP")
    const header = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + "ZGVmYXVsdC51c2VyOjFQOUExMXZaRFA="
    }
    try {
        const data = await axios.post(`${this.BASE_URL}/api/v1/User`,
            registerData,
            {
            headers: header,
        });
        return data;
    } catch (e) {
        console.log("error:",e)
    }
}

getHeaders = () => {
    var header = {
        "accept":"application/json",
        "GUID":"71FF-ADB9-600F-82D9"
    };
    return header;
};
}

export default new Api();
