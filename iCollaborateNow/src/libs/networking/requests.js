import {create} from 'apisauce'
import * as Config from './config'

const api = create({
    baseURL: Config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',        
    },
    timeout: 60000
  })


  export default class AuthRequestMiddleware {

    generateHeaders() {
        const token = this.store.getState().auth.AccessToken;
        if (!token) {
          return {};
        }
        const headers = {};
        headers.Authorization = `Bearer ${token}`;
        headers.chanel = 'mobile';
        return headers;
      }

    getMostRead(callback) {           
      const url = Config.BASE_URL + Config.MOST_READ
      var date = new Date();
      api.get(url, null, config).then(response => {
        console.log(
          'MOST_READ: returned in ' +
            ((new Date() - date) / 1000).toString() +
            ' seconds',
        );
        try {
          callback(response.feeds);
        } catch (e) {
          callback({ status: 2, msg: e });
        }          
      });
    }    
      
    // post(url, data, callback, addHeaders = false) {
    //     let config = {};
    //     if (addHeaders) {
    //       config = { headers: this.generateHeaders() };
    //     }
    //     api.post(url, data, config).then(response => callback(response));
    // }

    //   get(url, callback, addHeaders = false) {
    //     let config = {};        
    
    //     var date = new Date();
    //     api.get(url, null, config).then(response => {
    //       console.log(
    //         'ANONYMOUS: get returned in ' +
    //           ((new Date() - date) / 1000).toString() +
    //           ' seconds',
    //       );
    //       try {
    //         callback(response.feeds);
    //       } catch (e) {
    //         callback({ status: 2, msg: e });
    //       }          
    //     });
    //   }

  }
