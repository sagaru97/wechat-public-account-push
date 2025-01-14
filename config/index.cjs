/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'wechat-test',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdbffc711da83f210',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b80cbb0413d50f4c16dee4960ef444fd',
  
  PROVINCE: '江苏',
  CITY: '南京',
  
  USERS: [
    // 宝
    {
      // 想要发送的人的名字
      name: '宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEHGM6OnMYjdFBZJ-V1iS_98xnTc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FGdRD5h0CC2jaYuIpj33GF39bKJHMvytScXkKKY7sNE',
      
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-11',
      horoscopeDateType: '今日',

      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '媛宝', year: '1997', date: '08-10',
        },
        {
          type: '生日', name: '媛宝', year: '1997', date: '09-11',
        },
      ],
    },
    // 宝
    {
      // 想要发送的人的名字
      name: 'self',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEHGM6N5IbfpU_A1sYBgwS5531rY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FGdRD5h0CC2jaYuIpj33GF39bKJHMvytScXkKKY7sNE',
      
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-11',
      horoscopeDateType: '今日',

      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '媛宝', year: '1997', date: '08-10',
        },
        {
          type: '生日', name: '媛宝', year: '1997', date: '09-11',
        },
      ],
    },
 ],
  CUSTOMIZED_DATE_LIST: [
        // 在一起的日子
        { keyword: 'together_day', date: '2023-05-13' },
        // 阳历生日
        { keyword: 'wx_birthday_1', date: '1997-09-11'},
        // 阴历生日
        { keyword: 'wx_birthday_0', date: '1997-08-10'},
        // 初相识
        { keyword: 'meet_day', date: '2022-07-04'}
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'NoYisOmp6cBCyjsx7A4damnZZ6__K1DkmIZ3Xg7Cs14',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEHGM6N5IbfpU_A1sYBgwS5531rY',
    }
  ],

}

module.exports = USER_CONFIG

