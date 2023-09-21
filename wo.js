const axios = require('axios');

const authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo4MzMzMzE1MzAxMjI1NTEyOTYsInVzZXJfa2V5IjoiN2U2YjNlNzAtZWU5ZS00OWI2LWFhMTEtNDRmM2RjNTRkMWRmIiwidXNlcm5hbWUiOiJ4KumysiJ9.bnL4OwPM9DINV1VrQ8ayU7wYiwclhqFig6keYsH3PdvVk27MTPZbMUQA_KZwIpZ26mFDqGej1B-yU9a0maXwtw';

(async () => {
  const result1 = await resetQosSpeedUp(authorization);
  console.log(`重置加速时间：${result1}`);
  const result2 = await startQos(authorization);
  console.log(`开启加速：${result2}`);
})();

async function resetQosSpeedUp(authorization) {
  try {
    const response = await axios.post("https://game.wostore.cn/api/app/user/qosSpeedUp/add", {
      firstTime:'00:30-23:58',   
      secondTime: '23:58-23:59', 
    }, {
      headers: {
        Accept: "application/json",
        Authorization: authorization,
        Channelid: "LTCY360_90014",
        "Content-Type": "application/json;charset=utf-8",
        Device: "1",
        Rnversion: "0",
        "User-Agent": "okhttp/4.9.2",
        Versioncode: "4016"
      }
    });
    if (response.status === 200) {
      return "重置加速时间成功";
    } else {
      return response.data.msg;
    }
  } catch (error) {
    console.error( error);
    return "重置加速时间成功";
  }
}

async function startQos(authorization) {
    try {
      const response = await axios.post('https://game.wostore.cn/api/app/user/v3/qos/start', {
        channelId: 'LTCY360_90014',
        privateIp: '10.1.10.1'
      }, {
        headers: {
          Accept: 'application/json',
          Authorization: authorization,
          Channelid: 'LTCY360_90014',
          'Content-Type': 'application/json;charset=utf-8',
          Device: '1',
          Rnversion: '0',
          'User-Agent': 'okhttp/4.9.2',
          Versioncode: '4016'
        }
      });
      if (response.status === 200) {
        return "加速开启成功";
      } else {
        return response.data.msg;
      }
    } catch (error) {
      console.error("Error:", error);
      return "加速开启失败";
    }
  }
