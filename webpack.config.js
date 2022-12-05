// path : NodeJs에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require('path')

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry:'./src/main.js',
  // 결과물(번들)을 변환하는 설정
  output: {
    // 주석은 기본값, `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
    filename:"bundle.js",
    path: path.resolve(__dirname,"dist")
    //clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}