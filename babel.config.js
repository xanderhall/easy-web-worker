const presets = [
  [
    "@babel/env",
    {
      targets: {
        android: "2.1",
        and_chr: "75",
        and_ff: "67",
        and_qq: "1.2",
        and_uc: "11.8",
        baidu: "7.12",
        blackberry: "7",
        chrome: "4",
        edge: "12",
        firefox: "3.5",
        ie: "10",
        ie_mob: "10",
        ios_saf: "5",
        kaios: "2.5",
        safari: "4",
        opera: "11.5",
        op_mob: "12"
      },
      useBuiltIns: "usage",
      corejs: 3
    }
  ]
];

module.exports = { presets };
