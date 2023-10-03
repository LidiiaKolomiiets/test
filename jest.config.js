module.exports ={
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.css$": "identity-obj-proxy"
       
    },
    "transform": {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest",
    },  
    "transformIgnorePatterns": [
        "/node_modules/",
    ]
  }