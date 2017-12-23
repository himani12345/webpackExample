const path = require('path')//from nodejs ..not commonJS module
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const config = {
    entry:'./src/index.js',
    output: {
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
        publicPath:'../build/'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/
            },
            /* {
                //spits everythig into bundle.js --not good we want separate css files
                //-- faster bcoz of parallel download requests by browser 
                use:['style-loader','css-loader'],
                test:/\.css$/
            }, */
            {//loader is same as use but bcoz extract-text-plugin is written with loader
                loader:ExtractTextWebpackPlugin.extract({
                    loader:'css-loader'
                }),
                test:/\.css$/
            },
             {
                test:/\.(jpe?g|png|svg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 25000
                        }
                    },
                    'image-webpack-loader'
                ]
                
            } 

        ]

    },
    plugins:[
        new ExtractTextWebpackPlugin('style.css')//all the files loader by extract css-loader outputs in style.css
    ]
}

module.exports = config;