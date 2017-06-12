import Service from '../assets/plugins/service';
import Config from '../config/config';

class storage{
  constructor() {
    super()
  }
  // 获取tokey
  get_tokey(){
    try {
      let value = Service.getStorageSync(Config.tokeyKey);
      if (value) {
        return value;
      }
    } catch (e) {

    }
    return false;
  }
  // 设置tokey
  set_tokey(value){
    try {
      Service.setStorageSync(Config.tokeyKey, value);
    } catch (e) {
    }
  }
}
export default storage