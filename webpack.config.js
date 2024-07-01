const path = require("path");
const HtmlWebPackPluguin = require("html-webpack-plugin");
const { resolve } = require("dns");
const { DEFAULT_EXTENSIONS } = require("@babel/core");
const { plugins } = require("@babel/preset-env/lib/plugins-compat-data");

module.exports = {
    entry: './src/index.js', //punto de entrada pricipal de la aplicacion
    output:{
        path: path.resolve(__dirmane, 'dist'), //directorio de salida
        filename: 'bundle.js' // nombre del archivo de salida
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, //regex para identificar .js y .jsx
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loder', //Compatibilidad con exploradores antiguos
                },      
            },
        ],
    },
    resolve:{
        extensions:['.js','.jsx'], //extensiones de archivo que webpack debe procesar
    },
    plugins:[
        new HtmlWebPackPluguin({
            template: './public/index.html' //plantilla del html que usara el html final
        }),
    ],
    devServer:{
        static:{
            directory: path.join(__dirname,'public') //carpeta que servira en el servidor de desarrollo
        },
        compress: true, //gzip para mejorar el rendimiento
        port: 8081, //puerto de app
    },
};